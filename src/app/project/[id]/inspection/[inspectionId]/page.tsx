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
    supabase.from('inspection_answers').select('*').eq('inspection_id', inspectionId)
  ]);

  const project = projectRes.data;
  const inspection = inspectionRes.data;
  const answers = answersRes.data || [];

  if (!project || !inspection) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Kayıt Bulunamadı</h1>
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
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link href={`/project/${projectId}`} className="flex items-center text-blue-600 hover:text-blue-800 font-medium bg-blue-50/50 px-4 py-2 rounded-xl transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Projeye Dön
          </Link>
          <span className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm ${inspection.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
            {inspection.status === 'COMPLETED' ? 'TAMAMLANDI' : 'DEVAM EDİYOR'}
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-100 p-8 mb-8">
          <div className="border-b border-gray-100 pb-6 mb-6">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Denetim #{inspection.id}</h1>
            <div className="flex items-center gap-6 text-gray-500 font-medium">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(inspection.date || inspection.created_at).toLocaleDateString('tr-TR')}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {inspection.inspector_name}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-gray-700">Denetim İlerlemesi</span>
              <span className="text-lg font-bold text-blue-600">% {(inspection.completion_percentage || 0).toFixed(0)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-1000 ease-out ${(inspection.completion_percentage || 0) === 100 ? 'bg-green-500' : 'bg-blue-600'}`}
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
