import TableData from "@/components/TableData";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="w-1/2">
        <div className="text-center font-bold text-2xl py-4">Halaman Utama</div>
        <div className="pb-4">
          <button
            className="bg-[#2A48FD] text-white text-lg font-semibold w-full rounded-md mt-1 py-1.5 my-4 transform transition-transform duration-200 hover:scale-105 hover:bg-[#FFC300] hover:text-black"
            type="button"
            id="confirm-reset"
          >
            <Link href="/tambah-data"> Tambah Data </Link>
          </button>
        </div>
        <div className="pb-4">
        <button
          className="bg-[#2A48FD] text-white text-lg font-semibold w-full rounded-md mt-1 py-1.5 my-4 transform transition-transform duration-200 hover:scale-105 hover:bg-[#FFC300] hover:text-black"
          type="button"
          id="confirm-reset"
        >
          <Link href="/products"> Tabel Data </Link>
        </button>
      </div>
      </div>
    </main>
  );
}
