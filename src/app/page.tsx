import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-teal-800 flex justify-center items-center w-full h-screen flex-col">
      <div className="box-shadow text-6xl text-white bg-black/70 rounded-xl py-20 px-24 my-10">
        Pigeon Voyageur
      </div>

      <div className="box-shadow bg-black/20 w-2/4 text-1xl text-white rounded-xl py-20 px-24 flex justify-between flex-row space-x-4">
        <div className="box-shadow p-20 rounded-xl bg-black/70">
          Quelques mots
        </div>
        <div className="box-shadow p-20 rounded-xl bg-black/70">
          Quelques mots
        </div>
      </div>
    </div>
  );
}
