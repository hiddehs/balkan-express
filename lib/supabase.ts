import { createClient } from '@supabase/supabase-js'

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  throw new Error('Please provide all envs')
}
export const supabase = createClient(process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY)
