import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import Dashboard from '@/components/Dashboard';

export const revalidate = 0; // Disable static caching

export default async function Home() {
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

  const { data: projects } = await supabase.from('projects').select('*').order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <Dashboard initialProjects={projects || []} />
      </div>
    </div>
  );
}
