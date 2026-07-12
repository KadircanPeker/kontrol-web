const { createClient } = require('@supabase/supabase-js');

const NEXT_PUBLIC_SUPABASE_URL = 'https://yjeictqaoarylywqwzxm.supabase.co';
const NEXT_PUBLIC_SUPABASE_ANON_KEY = 'sb_publishable_beZ2SIU-cO4_Pt4r327tJw_U-Hs4wqo';

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function test() {
  const { data, error } = await supabase.from('inspection_items').select('*').limit(1);
  console.log('Error:', error);
  console.log('Data:', data);
}

test();
