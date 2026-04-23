import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;


console.log('Supabase URL Loaded:', supabaseUrl ? 'YES' : 'NO');

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase env variables are missing! Check .env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);