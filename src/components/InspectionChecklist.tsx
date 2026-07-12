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

  const handleUploadPhoto = async (answerId: string | undefined, itemId: string, file: File) => {
    setUpdating(itemId + '_photo');
    try {
      let currentAnswerId = answerId;
      
      if (!currentAnswerId) {
        const { data, error } = await supabase.from('inspection_answers').insert([{
          inspection_id: inspectionId,
          item_id: itemId,
          created_at: Date.now(),
          updated_at: Date.now()
        }]).select().single();
        if (error) throw error;
        currentAnswerId = data.id;
      }

      const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_').toLowerCase();
      const photoPath = `${inspectionId}/${Date.now()}_${sanitizedFileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from('photos')
        .upload(photoPath, file, { cacheControl: '3600', upsert: false });
        
      if (uploadError) throw uploadError;

      const { error: dbError } = await supabase.from('inspection_photos').insert([{
        answer_id: currentAnswerId,
        photo_path: photoPath,
        created_at: Date.now()
      }]);
      
      if (dbError) throw dbError;

      router.refresh();
    } catch (err: any) {
      alert("Fotoğraf yüklenirken hata oluştu: " + err.message);
      console.error(err);
    } finally {
      setUpdating(null);
    }
  };

  return (
    <div className="space-y-4">
      {groupedAnswers.map(group => {
        const isExpanded = expandedCategory === group.category.id;
        const totalItems = group.items.length;
        const answeredItems = group.answers.filter((a: any) => a.status).length;
        
        return (
          <div key={group.category.id} className="border border-slate-700/50 rounded-xl overflow-hidden bg-slate-800">
            <button 
              onClick={() => setExpandedCategory(isExpanded ? null : group.category.id)}
              className="w-full flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-700/50 transition-colors text-left"
            >
              <div>
                <h3 className="font-bold text-slate-100">{group.category.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{group.category.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700/50">
                  {answeredItems} / {totalItems}
                </span>
                <svg 
                  className={`w-5 h-5 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {isExpanded && (
              <div className="divide-y divide-slate-700/50 p-2 bg-slate-900/20">
                {group.items.map((item: any) => {
                  const answer = group.answers.find((a: any) => a.item_id === item.id);
                  const status = answer?.status;
                  
                  return (
                    <div key={item.id} className="p-4 hover:bg-slate-700/20 rounded-lg transition-colors flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                            item.riskLevel === 'CRITICAL' ? 'bg-red-900/30 text-red-400 border border-red-500/20' :
                            item.riskLevel === 'HIGH' ? 'bg-orange-900/30 text-orange-400 border border-orange-500/20' :
                            item.riskLevel === 'MEDIUM' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/20' :
                            'bg-blue-900/30 text-blue-400 border border-blue-500/20'
                          }`}>
                            {item.riskLevel}
                          </span>
                        </div>
                        <h4 className="text-slate-200 font-medium mb-1">{item.text}</h4>
                        <p className="text-sm text-slate-500">{item.description}</p>
                        
                        {/* Note Input */}
                        <div className="mt-3">
                          <input 
                            type="text" 
                            placeholder="Not ekle..." 
                            defaultValue={answer?.note || ''}
                            onBlur={(e) => handleUpdateNote(answer?.id, item.id, e.target.value)}
                            className="w-full text-sm px-3 py-2 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-200 outline-none transition-all placeholder:text-slate-600"
                          />
                        </div>

                        {/* Photos */}
                        <div className="mt-3 flex flex-wrap gap-2">
                          {answer?.inspection_photos?.map((photo: any) => (
                            <a key={photo.id} href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/photos/${photo.photo_path}`} target="_blank" rel="noreferrer">
                              <img 
                                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/photos/${photo.photo_path}`} 
                                alt="Denetim Fotoğrafı" 
                                className="w-16 h-16 object-cover rounded-lg border border-slate-700 hover:opacity-80 transition-opacity shadow-sm"
                              />
                            </a>
                          ))}
                          
                          <label className={`w-16 h-16 flex flex-col items-center justify-center bg-slate-800 border border-dashed border-slate-600 rounded-lg cursor-pointer hover:bg-slate-700/50 hover:border-slate-400 transition-colors ${updating === item.id + '_photo' ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            {updating === item.id + '_photo' ? (
                              <svg className="animate-spin w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            ) : (
                               <>
                                 <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                 </svg>
                                 <span className="text-[10px] text-slate-400 mt-1">Ekle</span>
                               </>
                            )}
                            <input 
                              type="file" 
                              accept="image/*, capture=camera" 
                              className="hidden" 
                              disabled={updating === item.id + '_photo'}
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  handleUploadPhoto(answer?.id, item.id, file);
                                }
                              }}
                            />
                          </label>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0">
                        <button 
                          disabled={updating === item.id}
                          onClick={() => handleUpdateStatus(answer?.id, item.id, 'PASS')}
                          className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all ${
                            status === 'PASS' 
                              ? 'bg-green-600 text-white border-green-500 shadow-md shadow-green-900/20' 
                              : 'bg-slate-800 text-slate-400 border-slate-700/50 hover:border-green-500 hover:text-green-500 hover:bg-green-500/10'
                          } ${updating === item.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {updating === item.id ? '...' : 'UYGUN'}
                        </button>
                        <button 
                          disabled={updating === item.id}
                          onClick={() => handleUpdateStatus(answer?.id, item.id, 'FAIL')}
                          className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all ${
                            status === 'FAIL' 
                              ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-900/20' 
                              : 'bg-slate-800 text-slate-400 border-slate-700/50 hover:border-red-500 hover:text-red-500 hover:bg-red-500/10'
                          } ${updating === item.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {updating === item.id ? '...' : 'UYGUN DEĞİL'}
                        </button>
                        <button 
                          disabled={updating === item.id}
                          onClick={() => handleUpdateStatus(answer?.id, item.id, 'NOT_APPLICABLE')}
                          className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all ${
                            status === 'NOT_APPLICABLE' 
                              ? 'bg-slate-600 text-white border-slate-500 shadow-md shadow-slate-900/20' 
                              : 'bg-slate-800 text-slate-400 border-slate-700/50 hover:border-slate-500 hover:text-slate-300 hover:bg-slate-700/50'
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
