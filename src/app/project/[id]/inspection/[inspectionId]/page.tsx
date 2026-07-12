import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { categories, items } from '@/lib/seed';
import InspectionChecklist from '@/components/InspectionChecklist';

export const revalidate = 0; // Disable static caching

export default async function InspectionDetail({ params }: { params: Promise<{ id: string, inspectionId: string }> }) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const { id: projectId, inspectionId } = await params;
  
  const [projectRes, inspectionRes, answersRes] = await Promise.all([
    supabase.from('projects').select('*').eq('id', projectId).single(),
    supabase.from('inspections').select('*').eq('id', inspectionId).single(),
    supabase.from('inspection_answers').select('*, inspection_photos(*)').eq('inspection_id', inspectionId)
  ]);

  const project = projectRes.data;
  const inspection = inspectionRes.data;
  const answers = answersRes.data || [];

  if (!project || !inspection) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-slate-100 mb-4">Kayıt Bulunamadı</h1>
        <Link href={`/project/${projectId}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Projeye Dön
        </Link>
      </div>
    );
  }

  // Grup answers by category
  const groupedAnswers = categories.map(cat => {
    const catItems = items.filter(item => item.categoryId === cat.id);
    const catAnswers = answers.filter(a => catItems.some(i => i.id === a.item_id));
    return {
      category: cat,
      items: catItems,
      answers: catAnswers
    };
  }).filter(g => g.items.length > 0);

  return (
    <div className="min-h-screen bg-slate-900 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link href={`/project/${projectId}`} className="flex items-center text-blue-400 hover:text-blue-300 font-medium bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-xl transition-colors border border-blue-500/20 shadow-sm">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Projeye Dön
          </Link>
          <span className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm border ${inspection.status === 'COMPLETED' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
            {inspection.status === 'COMPLETED' ? 'TAMAMLANDI' : 'DEVAM EDİYOR'}
          </span>
        </div>

        <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/20 border border-slate-700/50 p-8 mb-8">
          <div className="border-b border-slate-700/50 pb-6 mb-6">
            <h1 className="text-3xl font-extrabold text-slate-100 mb-2">Denetim #{inspection.id}</h1>
            <div className="flex items-center gap-6 text-slate-400 font-medium">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(inspection.date || inspection.created_at).toLocaleDateString('tr-TR')}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {inspection.inspector_name}
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 mb-6 border border-slate-700/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-slate-300">Denetim İlerlemesi</span>
              <span className="text-lg font-bold text-blue-400">% {(inspection.completion_percentage || 0).toFixed(0)}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-1000 ease-out ${(inspection.completion_percentage || 0) === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-blue-500 to-indigo-400'}`}
                style={{ width: `${inspection.completion_percentage || 0}%` }}
              ></div>
            </div>
          </div>
          
          <InspectionChecklist groupedAnswers={groupedAnswers} inspectionId={inspection.id} projectId={project.id} />
        </div>
      </div>
    </div>
  );
}
