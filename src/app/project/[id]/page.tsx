import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import Link from 'next/link';
import ProjectTabs from '@/components/ProjectTabs';

export const revalidate = 0; // Disable static caching

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
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

  const { id } = await params;
  
  const [projectRes, inspectionsRes, filesRes] = await Promise.all([
    supabase.from('projects').select('*').eq('id', id).single(),
    supabase.from('inspections').select('*').eq('project_id', id).order('date', { ascending: false }),
    supabase.from('project_files').select('*').eq('project_id', id).order('created_at', { ascending: false })
  ]);

  const project = projectRes.data;
  const inspections = inspectionsRes.data || [];
  const files = filesRes.data || [];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-slate-100 mb-4">Proje Bulunamadı</h1>
        <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Geri Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 font-medium bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-xl transition-colors border border-blue-500/20 shadow-sm">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tüm Projelere Dön
          </Link>
          <span className="px-4 py-1.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-sm font-semibold shadow-sm">
            {project.building_type}
          </span>
        </div>

        <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/20 border border-slate-700/50 p-8">
          <div className="border-b border-slate-700/50 pb-6 mb-6">
            <h1 className="text-3xl font-extrabold text-slate-100 mb-2">{project.name}</h1>
            <div className="flex items-center text-slate-400 font-medium">
              <svg className="w-5 h-5 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.city} / {project.district}
            </div>
          </div>

          <ProjectTabs project={project} inspections={inspections} files={files} />
        </div>
      </div>
    </div>
  );
}
