"use client";
import Image from "next/image";
import back from "@/assets/icons/chevron-left.svg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TableTambah() {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState("");
  const [penulis, setPenulis] = useState("");
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsMutating(true);
    const data = {
      judul: judul,
      deskripsi: deskripsi,
      harga: harga,
      penulis: penulis,
    };
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setIsMutating(false);

    if (res.ok) {
      // Check if the request was successful
      alert("Data saved successfully");
    } else {
      alert("Failed to save data");
    }

    setJudul("");
    setDeskripsi("");
    setHarga("");
    setPenulis("");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen flex-col p-24 w-full bg-[#F9F6EE] shadow-xl">
      <Link
        href="/"
        className="text-xs flex transform transition-transform duration-200 hover:scale-105"
      >
        <Image src={back} className="pr-3 pt-1" alt="back" width={35} />
        <span className="text-[#044E8C] text-xl py-8">Kembali</span>
      </Link>
      <div className="items-center justify-between">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="pb-5">Form Tambah Buku</div>
          <div className="pb-6 relative">
            <input
              className="w-full border-b py-1 px-2.5 focus:outline-none focus:border-purple-600 focus:border-2 transition-colors duration-400 peer"
              autoComplete="off"
              type="text"
              name="judul"
              id="judul"
              placeholder=""
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />
            <label
              className="absolute left-0 pl-3.5 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:pl-0 peer-focus:text-purple-600 transition-all duration-400"
              htmlFor="judul"
            >
              Judul
            </label>
          </div>
          <div className="pb-6 relative">
            <textarea
              className="w-full border-b py-1 px-2.5 focus:outline-none focus:border-purple-600 focus:border-2 transition-colors duration-400 peer focus:h-[80px]"
              autoComplete="off"
              type="text"
              name="decs"
              id="decs"
              placeholder=""
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
            />
            <label
              className="absolute left-0 pl-3.5 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:pl-0 peer-focus:text-purple-600 transition-all duration-400"
              htmlFor="decs"
            >
              Deskripsi
            </label>
          </div>
          <div className="pb-6 relative">
            <input
              className="w-full border-b py-1 px-2.5 focus:outline-none focus:border-purple-600 focus:border-2 transition-colors duration-400 peer"
              autoComplete="off"
              type="text"
              name="harga"
              id="harga"
              placeholder=""
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
            />
            <label
              className="absolute left-0 pl-3.5 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:pl-0 peer-focus:text-purple-600 transition-all duration-400"
              htmlFor="harga"
            >
              Harga
            </label>
          </div>
          <div className="pb-6 relative w-full">
            <input
              className="w-full border-b py-1 px-2.5 focus:outline-none focus:border-purple-600 focus:border-2 transition-colors duration-400 peer"
              autoComplete="off"
              type="text"
              name="penulis"
              id="penulis"
              placeholder=""
              value={penulis}
              onChange={(e) => setPenulis(e.target.value)}
            />
            <label
              className="absolute left-0 pl-3.5 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:pl-0 peer-focus:text-purple-600 transition-all duration-400"
              htmlFor="penulis"
            >
              Penulis
            </label>
          </div>
          <div className="w-full">
            {!isMutating ? (
              <button
                className=" btn bg-[#2A48FD] text-white text-lg font-semibold w-full rounded-md mt-1 py-1.5 my-4 transform transition-transform duration-200 hover:scale-105 hover:bg-[#FFC300] hover:text-black"
                type="submit"
                id="confirm-reset"
              >
                Tambah
              </button>
            ) : (
              <button
                className="btn loading bg-[#2A48FD] text-white text-lg font-semibold w-full rounded-md mt-1 py-1.5 my-4 transform transition-transform duration-200 hover:scale-105 hover:bg-[#FFC300] hover:text-black"
                type="button"
                id="confirm-reset"
              >
                Menambah...
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
