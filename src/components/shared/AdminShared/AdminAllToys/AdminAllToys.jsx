"use client";
import React, { useEffect, useState } from "react";
import "./AdminAllToys.css";
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";
import axios from "axios";
import { baseUrl } from "../../../../utilies/config";
import Image from "next/image";
import Link from "next/link";

const kanit = Kanit({
  weight: ["400", "700"],
  style: ["normal"],
});
const mulish = Mulish({
  weight: ["300", "700"],
  style: ["normal"],
});

const AdminAllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 


  useEffect(() => {
    axios
      .get(baseUrl("all-toys"))
      .then((res) => setAllToys(res.data))
      .catch((error) => {
        setAllToys(error);
      });
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
      <table className="table">
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
            <tr key={toy?.id}>
              <td>{index + 1}</td>
              <td>
                <Image
                  width={60}
                  height={60}
                  src={toy?.image?.trim()}
                  alt={toy?.name}
                />
              </td>
              <td>
                <Image
                  width={60}
                  height={60}
                  src={toy?.hoverImage?.trim()}
                  alt={toy?.name}
                />
              </td>
              <td>{toy?.name}</td>
              <td>{toy?.price}</td>
              <td>{toy?.quantity}</td>
              <td>{toy?.category}</td>
              <td>{toy?.rating}</td>
              <td>{toy?.description}</td>
              <td>
                <Link href="/dp/updateToys">
                  <button
                    className={` ${kanit.className} uppercase bg-green-500 px-3 py-1 rounde-md hover:bg-green-600 me-2 mb-1`}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className={` ${kanit.className} uppercase bg-red-500 px-3 py-1 rounde-md hover:bg-red-600 `}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
