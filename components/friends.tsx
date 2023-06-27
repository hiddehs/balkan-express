import { supabase } from '@/lib/supabase'
export const revalidate = 300

export default async function Friends () {
  'use server'
  const { data: friends } = await supabase.from('friends').
    select()
  const friendsString = friends?.map(f => f.name).join(', ') ?? ''
  return (
    <div>
      {friendsString}.
    </div>
  )
}
