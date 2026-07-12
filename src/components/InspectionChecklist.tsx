'use client';

import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';

export default function InspectionChecklist({ groupedAnswers, inspectionId, projectId }: { groupedAnswers: any[], inspectionId: string, projectId?: string }) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(groupedAnswers[0]?.category.id || null);
  const [updating, setUpdating] = useState<string | null>(null);
  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleUpdateStatus = async (answerId: string | undefined, itemId: string, newStatus: string) => {
    setUpdating(itemId);
    try {
      if (answerId) {
        const { error } = await supabase.from('inspection_answers').update({ 
          status: newStatus,
          updated_at: Date.now()
        }).eq('id', answerId);
        if (error) { alert("Güncelleme hatası: " + error.message); return; }
      } else {
        // Create new answer if doesn't exist
        const { error } = await supabase.from('inspection_answers').insert([{
          inspection_id: inspectionId,
          item_id: itemId,
          status: newStatus,
          created_at: Date.now(),
          updated_at: Date.now()
        }]);
        if (error) { alert("Ekleme hatası: " + error.message); return; }
      }

      // Update inspection completion percentage
      const { data: allAnswers } = await supabase.from('inspection_answers').select('status').eq('inspection_id', inspectionId);
      if (allAnswers) {
        const answered = allAnswers.filter(a => a.status).length;
        const total = 105; // We have 105 items in seed
        const percentage = (answered / total) * 100;
        await supabase.from('inspections').update({ completion_percentage: percentage }).eq('id', inspectionId);
        
        // Update project completion percentage
        if (projectId) {
          const { data: projectInspections } = await supabase.from('inspections').select('completion_percentage').eq('project_id', projectId);
          if (projectInspections && projectInspections.length > 0) {
            const totalProjectPercentage = projectInspections.reduce((sum, insp) => sum + (insp.completion_percentage || 0), 0);
            const projectAvgPercentage = totalProjectPercentage / projectInspections.length;
            await supabase.from('projects').update({ completion_percentage: projectAvgPercentage }).eq('id', projectId);
          }
        }
      }

      router.refresh();
    } catch (err: any) {
      alert("Sistem hatası: " + err.message);
      console.error(err);
    } finally {
      setUpdating(null);
    }
  };

  const handleUpdateNote = async (answerId: string | undefined, itemId: string, note: string) => {
    try {
      if (answerId) {
        await supabase.from('inspection_answers').update({ 
          note: note,
          updated_at: Date.now()
        }).eq('id', answerId);
      } else {
        const { error } = await supabase.from('inspection_answers').insert([{
          inspection_id: inspectionId,
          item_id: itemId,
          note: note,
          created_at: Date.now(),
          updated_at: Date.now()
        }]);
        if (error) { alert("Ekleme hatası (Not): " + error.message); return; }
      }
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-4">
      {groupedAnswers.map(group => {
        const isExpanded = expandedCategory === group.category.id;
        const totalItems = group.items.length;
        const answeredItems = group.answers.filter((a: any) => a.status).length;
        
        return (
          <div key={group.category.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <button 
              onClick={() => setExpandedCategory(isExpanded ? null : group.category.id)}
              className="w-full flex items-center justify-between p-4 bg-gray-50/50 hover:bg-gray-50 transition-colors text-left"
            >
              <div>
                <h3 className="font-bold text-gray-900">{group.category.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{group.category.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                  {answeredItems} / {totalItems}
                </span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {isExpanded && (
              <div className="divide-y divide-gray-100 p-2">
                {group.items.map((item: any) => {
                  const answer = group.answers.find((a: any) => a.item_id === item.id);
                  const status = answer?.status;
                  
                  return (
                    <div key={item.id} className="p-4 hover:bg-gray-50/50 rounded-lg transition-colors flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                            item.riskLevel === 'CRITICAL' ? 'bg-red-100 text-red-700' :
                            item.riskLevel === 'HIGH' ? 'bg-orange-100 text-orange-700' :
                            item.riskLevel === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {item.riskLevel}
                          </span>
                        </div>
                        <h4 className="text-gray-900 font-medium mb-1">{item.text}</h4>
                        <p className="text-sm text-gray-500">{item.description}</p>
                        
                        {/* Note Input */}
                        <div className="mt-3">
                          <input 
                            type="text" 
                            placeholder="Not ekle..." 
                            defaultValue={answer?.note || ''}
                            onBlur={(e) => handleUpdateNote(answer?.id, item.id, e.target.value)}
                            className="w-full text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0">
                        <button 
                          disabled={updating === item.id}
                          onClick={() => handleUpdateStatus(answer?.id, item.id, 'PASS')}
                          className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all ${
                            status === 'PASS' 
                              ? 'bg-green-500 text-white border-green-500 shadow-md shadow-green-200' 
                              : 'bg-white text-gray-600 border-gray-200 hover:border-green-500 hover:text-green-600'
                          } ${updating === item.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {updating === item.id ? '...' : 'UYGUN'}
                        </button>
                        <button 
                          disabled={updating === item.id}
                          onClick={() => handleUpdateStatus(answer?.id, item.id, 'FAIL')}
                          className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all ${
                            status === 'FAIL' 
                              ? 'bg-red-500 text-white border-red-500 shadow-md shadow-red-200' 
                              : 'bg-white text-gray-600 border-gray-200 hover:border-red-500 hover:text-red-600'
                          } ${updating === item.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {updating === item.id ? '...' : 'UYGUN DEĞİL'}
                        </button>
                        <button 
                          disabled={updating === item.id}
                          onClick={() => handleUpdateStatus(answer?.id, item.id, 'NOT_APPLICABLE')}
                          className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all ${
                            status === 'NOT_APPLICABLE' 
                              ? 'bg-gray-500 text-white border-gray-500 shadow-md shadow-gray-200' 
                              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-500 hover:text-gray-600'
                          } ${updating === item.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {updating === item.id ? '...' : 'İLGİSİZ'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
