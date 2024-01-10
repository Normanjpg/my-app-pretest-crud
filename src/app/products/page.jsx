import Image from "next/image";
import back from "@/assets/icons/chevron-left.svg";
import Link from "next/link";
import TableDeleteModal from "@/components/TableDeleteModal";
import TableUpdate from "@/components/TableUpdate";

async function getProducts() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductList() {
  const products = await getProducts();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="w-1/2">
        <div className="flex min-h-screen flex-col px-24 py-10 w-full bg-[#F9F6EE] shadow-xl">
          <div className="pb-4">
            <button
              className="bg-[#2A48FD] text-white text-lg font-semibold w-full rounded-md mt-1 py-1.5 my-4 transform transition-transform duration-200 hover:scale-105 hover:bg-[#FFC300] hover:text-black"
              type="button"
              id="confirm-reset"
            >
              <Link href="/tambah-data"> Tambah Buku </Link>
            </button>
          </div>
          <table className="table-auto border-4 w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Judul</th>
                <th className="px-4 py-2">Deskripsi</th>
                <th className="px-4 py-2">Harga</th>
                <th className="px-4 py-2">Penulis</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td className="border-4 text-sm px-2 text-xs py-2">
                    {index + 1}
                  </td>
                  <td className="border-4 text-sm px-2 text-xs py-2">
                    {product.judul}
                  </td>
                  <td className="border-4 text-sm px-2 text-xs py-2">
                    {product.deskripsi}
                  </td>
                  <td className="border-4 text-sm px-2 text-xs py-2">
                    {product.harga}
                  </td>
                  <td className="border-4 text-sm px-2 text-xs py-2">
                    {product.penulis}
                  </td>
                  <td className="border-4 text-sm px-2 text-xs py-2 gap-2">
                      {/* <button
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="button"
                      >
                        Edit
                      </button> */}
                    <TableUpdate {...product}/>
                    <TableDeleteModal {...product} />
                    <div>
                      {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                      </button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link
            href="/"
            className="text-xs flex transform transition-transform duration-200 hover:scale-105"
          >
            <Image src={back} className="pr-3 pt-1" alt="back" width={35} />
            <span className="text-[#044E8C] text-xl py-8">Kembali</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
