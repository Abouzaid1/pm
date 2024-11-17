import Image from "next/image";
import Link from "next/link";
import { data } from "../fakeData/data"
export default function Home() {
  const shownData = data
  return (
    <>
      <div className="p-5 w-full flex flex-col h-screen  items-center ">
        <h1 className="text-[50px] m-5">Main Page</h1>
        {
          data.map((item) =>
            <Link key={item.title} href={`/${item.title}`}>
              <button className="w-[300px] mb-5 px-5 py-3 rounded-2xl bg-green-900 text-white hover:bg-white hover:outline-3 hover:outline font-bold outline-orange-500 outline-offset-2 hover:text-black transition-all">{item.title}</button>
            </Link>
          )
        }

      </div>
    </>
  );
}
