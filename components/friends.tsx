import { supabase } from '@/lib/supabase'
import Link from 'next/link'
export const revalidate = 300

export default async function Friends () {
  'use server'
  const { data: friends } = await supabase.from('friends').
    select()
  const friendsString = friends?.map(f => f.name).join(', ') ?? ''
  return (
    <div>
      {friendsString}. <span className="text-dessert-800 brightness-75">
      <Link className='underline' href={'/support?donate=35'}>Get friends with us</Link> and your name will be placed on our car and in this list.
    </span>
    </div>
  )
}
