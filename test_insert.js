const { createClient } = require('@supabase/supabase-js');

const NEXT_PUBLIC_SUPABASE_URL = 'https://yjeictqaoarylywqwzxm.supabase.co';
const NEXT_PUBLIC_SUPABASE_ANON_KEY = 'sb_publishable_beZ2SIU-cO4_Pt4r327tJw_U-Hs4wqo';

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function test() {
  const now = Date.now();
  const payload = {
    name: 'Test Project',
    address: 'Test Address',
    city: 'Istanbul',
    district: 'Kadikoy',
    ada: '',
    parsel: '',
    building_type: 'Konut',
    contractor_name: 'Test',
    inspection_firm_name: 'Test',
    inspector_name: 'Test',
    general_note: '',
    completion_percentage: 0,
    created_at: now,
    updated_at: now,
  };

  const { data, error } = await supabase.from('projects').insert([payload]);
  console.log('Error:', error);
  console.log('Data:', data);
}

test();
