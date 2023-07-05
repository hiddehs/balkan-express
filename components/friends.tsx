import { supabase } from '@/lib/supabase'
import Link from 'next/link'
export const revalidate = 0

export default async function Friends () {
  const revalidate = 0
  const { data: friends } = await supabase.from('friends').
    select()
  console.log(friends)
  const friendsString = friends?.map(f => f.name).join(', ') ?? ''
  return (
    <div>
      {friendsString}. <span className="text-dessert-800 brightness-75">
      <Link className='underline' href={'/support?donate=35'}>Get friends with us</Link> and your name will be placed on our car and in this list.
    </span>
    </div>
  )
}
