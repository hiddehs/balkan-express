export default function Page () {

  return (
    <div className="p-4">
      <div
        className="max-w-sm mx-auto flex flex-col gap-4 py-8 bg-amber-50 text-midnight-900 p-4 rounded-lg shadow-md">

        <h2 className="text-center font-display text-3xl">Balkan Contact
          Express</h2>
        <div className="px-4">
          <div className="">
            <a className="underline"
               href="https://instagram.com/balkanexpress2023">Instagram:
              @balkanexpress2023</a>
            <br/>
            <a className="underline">Email: info[at]balkan-express.nl</a>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Balkan Express Tour</p>
            <p>KvK 67988695</p>
            <p className={'mt-2 text-slate-400'}>Address<br/>Haverstraat 32
              BIS<br/>3511ND<br/>Utrecht</p>
          </div>
        </div>
      </div>
    </div>
  )
}
