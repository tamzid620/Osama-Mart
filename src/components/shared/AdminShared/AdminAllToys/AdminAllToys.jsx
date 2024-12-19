"use client";
import React, { useEffect, useState } from "react";
import "./AdminAllToys.css";
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";
import axios from "axios";
import { baseUrl } from "../../../../utilies/config";
import Image from "next/image";

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

  useEffect(() => {
    axios
      .get(baseUrl("all-toys"))
      .then((res) => setAllToys(res.data))
      .catch((error) => {
        setAllToys(error);
      });
  }, []);

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
          {allToys.map((toy, index) => (
            <tr key={toy?.id}>
              <td>{index + 1}</td>
              <td>
                <Image width={30} height={30} src={toy?.image?.trim()} alt={toy?.name} />
              </td>
              <td>
                <Image width={30} height={30} src={toy?.hoverImage?.trim()} alt={toy?.name} />
              </td>
              <td>{toy?.name}</td>
              <td>{toy?.price}</td>
              <td>{toy?.quantity}</td>
              <td>{toy?.category}</td>
              <td>{toy?.rating}</td>
              <td>{toy?.description}</td>
              <td>
                <button
                  className={` ${kanit.className} uppercase bg-green-500 px-3 py-1 rounde-md hover:bg-green-600 me-2 mb-1`}
                >
                  Edit
                </button>
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
    </div>
  );
};

export default AdminAllToys;
