import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
    <div className="flex items-center justify-center flex-col h-[100vh]">
  <h1 className="text-4xl mb-5">Working</h1>
  <Link href={"/dan_home"} className="bg-white p-2 rounded-full text-black text-lg hover:bg-gray-200 hover:italics font-bold">Go to the home page</Link>
    </div>
  </>
  );

}