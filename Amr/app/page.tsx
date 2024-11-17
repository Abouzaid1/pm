import Image from "next/image";
import Link from "next/link";
import { data } from "../fakeData/data"
export default function Home() {
  const shownData = data
  return (
    <>
      <div className="w-full h-screen bg-blue-400 p-1">

        <h1 className="text-[50px] m-5">Main Page</h1>
        <div className="p-5  flex gap-4 flex-wrap">
          {
            data.map((item) =>
              <Link className="h-fit" key={item.title} href={`/${item.title}`}>
                <button className="w-[300px] h-[300px] font-serif rounded-2xl bg-gray-700 text-white  hover:outline-3 hover:outline font-bold outline-orange-500 outline-offset-2  transition-all">{item.title}</button>
              </Link>
            )
          }

        </div>
      </div>
    </>
  );
}
