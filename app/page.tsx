import Image from "next/image";
import logoImage from "../public/logo.png"

export default async function Home() {
    return (
        <main className="">
            <div className="page flex flex-col items-center justify-between p-24">
                <Image src="/logo.png" width={215} height={170} alt="Balkan Express" className={"w-[24rem]"} priority={true}/>
            </div>


            <footer className="bg-slate-100 text-slate-500 text-sm flex">
                <div className="grid grid-cols-3 divide-x mx-auto">
                    <div className="p-4">
                        <h2>Follow Us</h2>
                        <a className="underline" href="https://instagram.com/balkanexpress2023">Instagram</a>
                    </div>
                    <div className="p-4">
                        <p>Balkan Express Tour</p>
                        <p>KvK 67988695</p>
                        <p className={"mt-2 text-slate-200"}>Haverstraat 32 BIS<br/>3511ND<br/>Utrecht</p>
                    </div>
                    <div className="p-4">
                        <h2>Contact</h2>
                        <a className="underline">info(at)balkan-expresss.nl</a>
                    </div>
                </div>

            </footer>
        </main>
    )
}
