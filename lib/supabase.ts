import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  throw new Error('Please provide all envs')
}
export const supabase = createClient<Database>(process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY)
