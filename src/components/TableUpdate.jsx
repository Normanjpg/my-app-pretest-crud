"use client";
import Image from "next/image";
import back from "@/assets/icons/chevron-left.svg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TableUpdate(products) {
  const [judul, setJudul] = useState(products.judul);
  const [deskripsi, setDeskripsi] = useState(products.deskripsi);
  const [harga, setHarga] = useState(products.harga);
  const [penulis, setPenulis] = useState(products.penulis);
  const [isMutating, setIsMutating] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);

  const router = useRouter();

  function handlechange() {
    setIsModalEdit(!isModalEdit);
  }

  async function handleUpdate(e) {
    e.preventDefault();
    setIsMutating(true);
    const data = {
      judul: judul,
      deskripsi: deskripsi,
      harga: harga,
      penulis: penulis,
    };
    const res = await fetch(`http://localhost:5000/products/${products.id}`, {
      method: "PATCH",
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

    router.refresh();
  }

  return (
    <div className="flex flex-col w-full bg-[#F9F6EE] shadow-xl">
      {/* <Link
        href="/products"
        className="text-xs flex transform transition-transform duration-200 hover:scale-105"
      >
        <Image src={back} className="pr-3 pt-1" alt="back" width={35} />
        <span className="text-[#044E8C] text-xl py-8">Kembali</span>
      </Link> */}
      {!isModalEdit ? (
        <button
          className="w-full btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={handlechange}
        >
          Edit
        </button>
      ) : null}

      {!isModalEdit ? null : (
        <div className="items-center justify-between bg-yellow-100">
          <form className="w-full" onSubmit={handleUpdate}>
            <div className="pb-5">Edit {products.judul}</div>
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
            <div className="pb-4 relative w-full">
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
            <div className="mb-1">
              <button
                className=" btn bg-blue-500 text-white text-sm font-semibold w-full rounded-md mt-1 transform transition-transform duration-200 hover:scale-105 hover:bg-[#FFC300] hover:text-black"
                type="button"
                onClick={() => setIsModalEdit(false)}
                id="confirm-reset"
              >
                Batal Edit
              </button>
            </div>
              {!isMutating ? (
                <button
                  className=" btn bg-purple-600 text-white text-lg font-semibold w-full rounded-md mt-1 py-1.5 my-4 transform transition-transform duration-200 hover:scale-105 hover:bg-[#FFC300] hover:text-black"
                  type="submit"
                  id="confirm-reset"
                >
                  Update
                </button>
              ) : (
                <button
                  className="btn loading bg-purple-600 text-white text-lg font-semibold w-full rounded-md mt-1 py-1.5 my-4 transform transition-transform duration-200 hover:scale-105 hover:bg-[#FFC300] hover:text-black"
                  type="button"
                  id="confirm-reset"
                >
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
