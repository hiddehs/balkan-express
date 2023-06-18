'use server'
import { supabase } from '@/lib/supabase'

export default async function Friends () {

  const { data: friends } = await supabase.from('friends').
    select()
  const friendsString = friends?.map(f => f.name).join(', ') ?? ''
  return (
    <div>
      {friendsString}.
    </div>
  )
}
