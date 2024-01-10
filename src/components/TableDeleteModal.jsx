"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TableDeleteModal(product) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  function handlechange() {
    setModal(!modal);
  }

  async function handleDelete(productId) {
    setIsMutating(true);

    const res = await fetch(`http://localhost:5000/products/${productId}`, {
      method: "DELETE",
    });

    setIsMutating(false);

    if (res.ok) {
      // Check if the request was successful
      alert("Data Delete successfully");
    } else {
      alert("Failed to Delete data");
    }
    router.refresh()
    setModal(false);
  }

  return (
    <div className="flex flex-col w-full bg-[#F9F6EE] shadow-xl">
      {!modal ? (
        <button
          className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlechange}
        >
          Delete
        </button>
      ) : null}
      {!modal ? (
        <div></div>
      ) : (
        <div className="items-center justify-between bg-green-200">
          <div className="py-2.5 text-center font-semibold">
            Yakin mau mendelete {product.judul} ?
          </div>
          <div className="w-full">
            <div className="mb-2">
              <button
                className=" btn bg-blue-500 text-white text-sm font-semibold w-full rounded-md mt-1 transform transition-transform duration-200 hover:scale-105 hover:bg-[#FFC300] hover:text-black"
                type="button"
                onClick={() => setModal(false)}
                id="confirm-reset"
              >
                Cancel
              </button>
            </div>
            {!isMutating ? (
              <div className="">
                <button
                  className=" btn bg-red-500 text-white text-sm font-semibold w-full rounded-md transform transition-transform duration-200 hover:scale-105 hover:bg-red-600 hover:text-black"
                  type="button"
                  id="confirm-reset"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            ) : (
              <button
                className="btn loading bg-[#2A48FD] text-white text-sm font-semibold w-full rounded-md transform transition-transform duration-200 hover:scale-105 hover:bg-[#FFC300] hover:text-black"
                type="button"
                id="confirm-reset"
              >
                Deleting...
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
