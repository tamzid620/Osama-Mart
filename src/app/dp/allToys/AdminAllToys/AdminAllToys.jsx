"use client";
import React, { useEffect, useState } from "react";
import "./AdminAllToys.css";
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";
import axios from "axios";
import { baseUrl } from "../../../../utilies/config";
import Image from "next/image";
import Link from "next/link";
import LoadingCompo from "../../../../components/shared/LoadingCompo/LoadingCompo";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  preload: true,
});
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "700"],
  style: ["normal"],
  preload: true,
});

const AdminAllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchToys = async () => {
      setIsloading(true);
      try {
        const res = await axios.get(baseUrl("all-toys"));
        setAllToys(res.data);
      } catch (error) {
        console.error("Error fetching toys:", error);
      } finally {
        setIsloading(false);
      }
    };

    fetchToys();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentToys = allToys.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allToys.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingCompo />
      ) : (
        <table className="table ">
          <thead className={` ${kanit.className} text-[14px]`}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Hover Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Category</th>
              <th scope="col">Rating</th>
              <th scope="col">description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className={` ${mulish.className} `}>
            {currentToys.map((toy, index) => (
              <tr key={`${toy?.id}-${index}`}>
                <td>{index + 1}</td>
                <td>
                  {toy?.image?.trimEnd() ? (
                    <Image
                      width={60}
                      height={60}
                      src={toy?.image?.trimEnd()}
                      alt={toy?.name}
                      priority
                    />
                  ) : (
                    <span>No Image</span> // You can display a placeholder or text here.
                  )}
                </td>
                <td>
                  {toy?.hoverImage?.trimEnd() ? (
                    <Image
                      width={60}
                      height={60}
                      src={toy?.hoverImage?.trimEnd()}
                      alt={toy?.name}
                      priority
                    />
                  ) : (
                    <span>No Hover Image</span> // Placeholder for missing hover image.
                  )}
                </td>
                <td>{toy?.name}</td>
                <td>{toy?.price}</td>
                <td>{toy?.quantity}</td>
                <td>{toy?.category}</td>
                <td>{toy?.rating}</td>
                <td>{toy?.description}</td>
                <td className="">
                  <Link className="" href={`updateToys/${toy?.id}`}>
                    <button
                      className={` ${kanit.className} uppercase bg-green-500 w-[70px] h-[25px] mx-1 my-1 rounde-md hover:bg-green-600 `}
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    className={` ${kanit.className} uppercase bg-red-500 w-[70px] h-[25px] mx-1 my-1 rounde-md hover:bg-red-600 `}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* Pagination */}
      <div className="pagination flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-3 py-1 mx-1 ${
                currentPage === pageNumber
                  ? "bg-[#A64D79] text-white"
                  : "bg-gray-200 text-black"
              } rounded`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default AdminAllToys;
