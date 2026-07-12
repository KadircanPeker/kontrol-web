'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectModal from './ProjectModal';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';

export default function Dashboard({ initialProjects: projects }: { initialProjects: any[] }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<any>(null);
  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const openNewModal = () => {
    setProjectToEdit(null);
    setIsModalOpen(true);
  };

  const openEditModal = (project: any) => {
    setProjectToEdit(project);
    setIsModalOpen(true);
  };

  const handleDelete = async (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    if (confirm('Bu projeyi ve ona bağlı tüm verileri silmek istediğinize emin misiniz?')) {
      await supabase.from('projects').delete().eq('id', id);
      router.refresh();
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">Yapi Kontrol Merkezi</h1>
        <button 
          onClick={openNewModal}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-200"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Yeni Proje
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project: any) => (
          <div key={project.id} className="group relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-black/20 border border-slate-700/50 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full">
            <Link href={`/project/${project.id}`} className="flex-1 block outline-none">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-100 line-clamp-1 pr-4">{project.name}</h3>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-semibold whitespace-nowrap shrink-0">
                  {project.building_type}
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-slate-400">
                  <svg className="w-4 h-4 mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="font-medium text-slate-300">{project.city} / {project.district}</span>
                </div>
                <div className="flex items-center text-sm text-slate-400">
                  <svg className="w-4 h-4 mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  <span className="font-medium text-slate-300 line-clamp-1">{project.contractor_name || 'Belirtilmemiş'}</span>
                </div>
              </div>
  
              <div className="pt-4 border-t border-slate-700/50 mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tamamlanma</span>
                  <span className="text-sm font-bold text-blue-400">% {project.completion_percentage.toFixed(0)}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-400 h-full rounded-full transition-all duration-500" style={{ width: `${project.completion_percentage}%` }}></div>
                </div>
              </div>
            </Link>

            {/* Actions overlay - appears on hover */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 bg-slate-800/95 backdrop-blur-sm p-1 rounded-lg shadow-lg border border-slate-700">
              <button 
                onClick={(e) => { e.preventDefault(); openEditModal(project); }}
                className="p-1.5 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-md transition-colors"
                title="Düzenle"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </button>
              <button 
                onClick={(e) => handleDelete(e, project.id)}
                className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors"
                title="Sil"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </button>
            </div>
          </div>
        ))}

        {(!projects || projects.length === 0) && (
          <div className="col-span-full flex flex-col items-center justify-center py-20 bg-slate-800/50 rounded-2xl border border-dashed border-slate-700">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4 text-blue-400">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-slate-100 mb-1">Henüz proje yok</h3>
            <p className="text-slate-400 text-center max-w-sm mb-6">Sisteme henüz hiç proje eklenmemiş. Yeni bir proje oluşturarak hemen denetimlere başlayın.</p>
            <button onClick={openNewModal} className="text-blue-400 font-medium hover:text-blue-300">Yeni Proje Ekle</button>
          </div>
        )}
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        projectToEdit={projectToEdit} 
      />
    </>
  );
}
