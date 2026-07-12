const { createClient } = require('@supabase/supabase-js');

const NEXT_PUBLIC_SUPABASE_URL = 'https://yjeictqaoarylywqwzxm.supabase.co';
const NEXT_PUBLIC_SUPABASE_ANON_KEY = 'sb_publishable_beZ2SIU-cO4_Pt4r327tJw_U-Hs4wqo';

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function test() {
  const { data, error } = await supabase.rpc('execute_sql', { sql: `
    ALTER TABLE public.inspection_answers ENABLE ROW LEVEL SECURITY;
    DROP POLICY IF EXISTS "Enable all for all users" ON public.inspection_answers;
    CREATE POLICY "Enable all for all users" ON public.inspection_answers FOR ALL USING (true);
  `});
  console.log('Error:', error);
}

test();
