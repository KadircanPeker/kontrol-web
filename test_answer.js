const { createClient } = require('@supabase/supabase-js');

const NEXT_PUBLIC_SUPABASE_URL = 'https://yjeictqaoarylywqwzxm.supabase.co';
const NEXT_PUBLIC_SUPABASE_ANON_KEY = 'sb_publishable_beZ2SIU-cO4_Pt4r327tJw_U-Hs4wqo';

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function test() {
  const { data: inspections } = await supabase.from('inspections').select('id').limit(1);
  if (!inspections || inspections.length === 0) {
    console.log('No inspections found');
    return;
  }
  
  const inspId = inspections[0].id;
  console.log('Testing with inspection id:', inspId);
  
  const { data, error } = await supabase.from('inspection_answers').insert([{
    inspection_id: inspId,
    item_id: 'item_1_1',
    status: 'PASS',
    created_at: Date.now(),
    updated_at: Date.now()
  }]);
  
  console.log('Error:', error);
  console.log('Data:', data);
}

test();
