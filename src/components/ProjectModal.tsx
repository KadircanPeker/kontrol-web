'use client';

import { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';

const BUILDING_TYPES = ['Konut', 'Ticari', 'Sanayi', 'Kamu', 'Karma', 'Diğer'];

export default function ProjectModal({ isOpen, onClose, projectToEdit }: { isOpen: boolean, onClose: () => void, projectToEdit?: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const emptyForm = {
    name: '',
    address: '',
    city: '',
    district: '',
    ada: '',
    parsel: '',
    building_type: 'Konut',
    contractor_name: '',
    inspection_firm_name: '',
    inspector_name: '',
    general_note: '',
  };

  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (projectToEdit) {
      setFormData({
        name: projectToEdit.name || '',
        address: projectToEdit.address || '',
        city: projectToEdit.city || '',
        district: projectToEdit.district || '',
        ada: projectToEdit.ada || '',
        parsel: projectToEdit.parsel || '',
        building_type: projectToEdit.building_type || 'Konut',
        contractor_name: projectToEdit.contractor_name || '',
        inspection_firm_name: projectToEdit.inspection_firm_name || '',
        inspector_name: projectToEdit.inspector_name || '',
        general_note: projectToEdit.general_note || '',
      });
    } else {
      setFormData(emptyForm);
    }
    setError('');
  }, [projectToEdit, isOpen]);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  if (!isOpen) return null;

  const set = (key: string, value: string) => setFormData(prev => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const now = Date.now();
    const payload = {
      ...formData,
      completion_percentage: projectToEdit?.completion_percentage || 0,
      updated_at: now,
      ...(projectToEdit ? {} : { created_at: now }),
    };

    try {
      let result;
      if (projectToEdit) {
        result = await supabase.from('projects').update(payload).eq('id', projectToEdit.id);
      } else {
        result = await supabase.from('projects').insert([payload]);
      }

      if (result.error) {
        setError('Hata: ' + result.error.message);
        return;
      }

      onClose();
      router.refresh();
    } catch (err: any) {
      setError('Sistem hatası: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 sticky top-0">
          <h2 className="text-xl font-bold text-gray-800">
            {projectToEdit ? 'Projeyi Düzenle' : 'Yeni Proje Ekle'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Proje Adı<span className="text-red-500 ml-1">*</span></label>
            <input required type="text" value={formData.name} onChange={e => set('name', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm" placeholder="Örn: Güneş Evleri Sitesi" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Adres<span className="text-red-500 ml-1">*</span></label>
            <input required type="text" value={formData.address} onChange={e => set('address', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm" placeholder="Mahalle, Sokak, No..." />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">İl<span className="text-red-500 ml-1">*</span></label>
              <input required type="text" value={formData.city} onChange={e => set('city', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm" placeholder="Örn: Ankara" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">İlçe<span className="text-red-500 ml-1">*</span></label>
              <input required type="text" value={formData.district} onChange={e => set('district', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm" placeholder="Örn: Çankaya" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ada</label>
              <input type="text" value={formData.ada} onChange={e => set('ada', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm" placeholder="Ada numarası" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Parsel</label>
              <input type="text" value={formData.parsel} onChange={e => set('parsel', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm" placeholder="Parsel numarası" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Yapı Türü</label>
            <select
              value={formData.building_type}
              onChange={e => set('building_type', e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white text-sm"
            >
              {BUILDING_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Müteahhit / Yüklenici<span className="text-red-500 ml-1">*</span></label>
            <input required type="text" value={formData.contractor_name} onChange={e => set('contractor_name', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm" placeholder="Örn: ABC İnşaat A.Ş." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Yapı Denetim Firması<span className="text-red-500 ml-1">*</span></label>
            <input required type="text" value={formData.inspection_firm_name} onChange={e => set('inspection_firm_name', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm" placeholder="Örn: XYZ Yapı Denetim" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kontrol Sorumlusu<span className="text-red-500 ml-1">*</span></label>
            <input required type="text" value={formData.inspector_name} onChange={e => set('inspector_name', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm" placeholder="Adı Soyadı" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Genel Not</label>
            <textarea
              rows={2}
              value={formData.general_note}
              onChange={e => set('general_note', e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm resize-none"
              placeholder="İsteğe bağlı notlar..."
            />
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-lg shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading && (
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {projectToEdit ? 'Güncelle' : 'Kaydet'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
