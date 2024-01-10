"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import back from "@/assets/icons/chevron-left.svg";
import Link from "next/link";

const DetailBuku = () => {
  const router = useRouter();

  // Fetch data for the specific book using the 'id' parameter

  // Replace this with your actual data fetching logic
  const data = {
    judul: "Book Title",
    deskripsi: "Book Description",
    harga: "Book Price",
    penulis: "Book Author",
    // Add more details as needed
  };

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
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Detail Buku</h1>
          <p className="mb-2">Judul: {data.judul}</p>
          <p className="mb-2">Deskripsi: {data.deskripsi}</p>
          <p className="mb-2">Harga: {data.harga}</p>
          <p className="mb-2">Penulis: {data.penulis}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </main>
  );
};

export default DetailBuku;
