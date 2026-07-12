'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectTabs({ project, inspections, files }: { project: any, inspections: any[], files: any[] }) {
  const [activeTab, setActiveTab] = useState<'info' | 'inspections' | 'files'>('info');
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div>
      <div className="border-b border-slate-700/50 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('info')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'info'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-500'
            }`}
          >
            Genel Bilgiler
          </button>
          <button
            onClick={() => setActiveTab('inspections')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'inspections'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-500'
            }`}
          >
            Denetimler ({inspections?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('files')}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'files'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-500'
            }`}
          >
            Dosyalar ({files?.length || 0})
          </button>
        </nav>
      </div>

      <div className="min-h-[400px]">
        {activeTab === 'info' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Lokasyon Bilgileri</h3>
              <div className="bg-slate-800 rounded-xl p-5 space-y-4 border border-slate-700/50">
                <div>
                  <dt className="text-sm text-slate-500">Açık Adres</dt>
                  <dd className="mt-1 text-slate-200 font-medium">{project.address || 'Belirtilmemiş'}</dd>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm text-slate-500">Ada</dt>
                    <dd className="mt-1 text-slate-200 font-medium">{project.ada || '-'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Parsel</dt>
                    <dd className="mt-1 text-slate-200 font-medium">{project.parsel || '-'}</dd>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Görevli Bilgileri</h3>
              <div className="bg-slate-800 rounded-xl p-5 space-y-4 border border-slate-700/50">
                <div>
                  <dt className="text-sm text-slate-500">Müteahhit / Yüklenici</dt>
                  <dd className="mt-1 text-slate-200 font-medium">{project.contractor_name || 'Belirtilmemiş'}</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Yapı Denetim Firması</dt>
                  <dd className="mt-1 text-slate-200 font-medium">{project.inspection_firm_name || 'Belirtilmemiş'}</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Kontrol Sorumlusu</dt>
                  <dd className="mt-1 text-slate-200 font-medium">{project.inspector_name || 'Belirtilmemiş'}</dd>
                </div>
              </div>
            </div>

            {project.general_note && (
              <div className="col-span-full">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Genel Notlar</h3>
                <p className="text-slate-300 leading-relaxed whitespace-pre-wrap bg-amber-900/10 p-5 rounded-xl border border-amber-700/20 shadow-inner">
                  {project.general_note}
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'inspections' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-100">Denetim Kayıtları</h3>
              <button 
                onClick={async () => {
                  const { createBrowserClient } = await import('@supabase/ssr');
                  const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
                  const { data, error } = await supabase.from('inspections').insert([{
                    project_id: project.id,
                    inspector_name: 'Web Kullanıcısı', // Müşterinin adını Auth'dan da çekebiliriz
                    date: Date.now(),
                    status: 'ONGOING',
                    created_at: Date.now(),
                    updated_at: Date.now()
                  }]).select().single();
                  
                  if (data) {
                    window.location.href = `/project/${project.id}/inspection/${data.id}`;
                  } else {
                    console.error("Hata oluştu:", error);
                  }
                }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Yeni Denetim Başlat
              </button>
            </div>
            
            {inspections.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {inspections.map(insp => {
                  const completionPercentage = insp.completion_percentage || 0;
                  return (
                    <Link href={`/project/${project.id}/inspection/${insp.id}`} key={insp.id} className="group block bg-slate-800 border border-slate-700/50 rounded-xl p-5 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold text-slate-100 group-hover:text-blue-400 transition-colors">Denetim #{insp.id}</h4>
                          <p className="text-sm text-slate-400 mt-1">{new Date(insp.date || insp.created_at).toLocaleDateString('tr-TR')} - {insp.inspector_name}</p>
                        </div>
                        <span className={`px-2.5 py-1 text-xs font-bold rounded-md ${insp.status === 'COMPLETED' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                          {insp.status === 'COMPLETED' ? 'TAMAMLANDI' : 'DEVAM EDİYOR'}
                        </span>
                      </div>
                      
                      <div className="pt-3 border-t border-slate-700/50 mt-3 flex justify-between items-center">
                        <span className="text-xs text-slate-400 font-medium">İlerleme: %{completionPercentage.toFixed(0)}</span>
                        <div className="w-32 bg-slate-700 rounded-full h-1.5 overflow-hidden">
                          <div className={`h-full rounded-full ${completionPercentage === 100 ? 'bg-green-500' : 'bg-blue-500'}`} style={{ width: `${completionPercentage}%` }}></div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 bg-slate-800/50 rounded-xl border border-dashed border-slate-700">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                </div>
                <p className="text-slate-400 font-medium">Henüz denetim kaydı bulunmuyor.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'files' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-100">Proje Dosyaları</h3>
              
              <div>
                <input 
                  type="file" 
                  id="file-upload" 
                  className="hidden" 
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    
                    try {
                      setIsUploading(true);
                      const { createBrowserClient } = await import('@supabase/ssr');
                      const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
                      
                      const sanitizedFileName = file.name
                        .replace(/[^a-zA-Z0-9.-]/g, '_')
                        .replace(/_+/g, '_')
                        .toLowerCase();
                        
                      const filePath = `${project.id}/${Date.now()}_${sanitizedFileName}`;
                      
                      const { error: uploadError } = await supabase.storage
                        .from('project_files')
                        .upload(filePath, file, {
                          cacheControl: '3600',
                          upsert: true,
                          contentType: file.type || 'application/octet-stream'
                        });
                        
                      if (uploadError) throw uploadError;
                      
                      const { error: dbError } = await supabase.from('project_files').insert([{
                        project_id: project.id,
                        file_name: file.name,
                        file_path: filePath,
                        mime_type: file.type || 'application/octet-stream',
                        created_at: Date.now()
                      }]);
                      
                      if (dbError) throw dbError;
                      
                      if (typeof window !== 'undefined') {
                        window.location.reload();
                      }
                    } catch (error: any) {
                      alert("Dosya yüklenirken hata oluştu: " + error.message);
                    } finally {
                      setIsUploading(false);
                      if (e.target) e.target.value = '';
                    }
                  }}
                />
                <label 
                  htmlFor="file-upload" 
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/20 cursor-pointer ${
                    isUploading 
                      ? 'bg-slate-700 cursor-not-allowed text-slate-400' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isUploading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Yükleniyor...
                    </span>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      Dosya Yükle
                    </>
                  )}
                </label>
              </div>
            </div>

             {files.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {files.map(file => {
                  const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/project_files/${file.file_path}`;
                  return (
                    <div key={file.id} className="bg-slate-800 border border-slate-700/50 rounded-xl p-4 flex flex-col items-center text-center group hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
                       <div className="w-12 h-12 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                       </div>
                       <span className="text-sm font-medium text-slate-200 break-all line-clamp-2" title={file.file_name}>{file.file_name}</span>
                       <span className="text-xs text-slate-500 mt-1">{new Date(file.created_at).toLocaleDateString('tr-TR')}</span>
                       
                       <a 
                         href={fileUrl} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="mt-3 text-xs font-semibold text-blue-400 hover:text-blue-300 py-1.5 px-3 bg-blue-500/10 border border-blue-500/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                       >
                         İndir / Görüntüle
                       </a>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 bg-slate-800/50 rounded-xl border border-dashed border-slate-700">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                </div>
                <p className="text-slate-400 font-medium">Bu projeye ait dosya bulunmuyor.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
