"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation';
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";
import { baseUrl } from "../../../../utilies/config";

export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  preload: true,
});
export const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "700"],
  style: ["normal"],
  preload: true,
});

const AdminUpdateToysForm = () => {


  const { id } = useParams();
  const [toyDetails, setToyDetails] = useState({
 
    image: "",
    hoverImage: "",
    name: "",
    price: "",
    quantity: "",
    category: "",
    rating: "",
    description: "",
  });
  const router = useRouter();

  useEffect(() => {
    axios
      .get(baseUrl(`all-toys/${id}`))
      .then((res) => {
        setToyDetails(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .put(baseUrl(`all-toys/${id}`), toyDetails) 
    .then((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Toy Updated',
        text: res.data.message,
      });
      router.push('/dp/allToys');// Navigate back to the toys list page
    })
    .catch((error) => {
      console.error('Error updating toy:', error);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: error.res?.data?.message || 'An error occurred.',
      });
    });
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div
      className={` ${kanit.className} max-w-3xl mx-auto p-6 bg-gray-900  shadow-md rounded-sm mt-10 `}
    >
      <form onSubmit={handleSubmit}  onKeyDown={handleKeyDown}  className="space-y-4">
      <div>
          <label className="block text-sm font-medium text-white">
           Toy Id
          </label>
          <input
            type="number"
            name="name"
            value={id}
            hidden
            readOnly
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={toyDetails?.image}
            onChange={handleChange}
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Hover Image URL
          </label>
          <input
            type="text"
            name="hoverImage"
            value={toyDetails?.hoverImage}
            onChange={handleChange}
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={toyDetails?.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={toyDetails?.price}
            onChange={handleChange}
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={toyDetails?.quantity}
            onChange={handleChange}
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={toyDetails?.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Rating
          </label>
          <input
            type="number"
            step="0.1"
            max="5"
            name="rating"
            value={toyDetails?.rating}
            onChange={handleChange}
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Description
          </label>
          <textarea
            name="description"
            value={toyDetails?.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className={` ${mulish.className} w-full uppercase border-2 text-white py-2 px-4 rounded-sm shadow hover:bg-[#A64D79] focus:outline-none focus:ring-2 focus:ring-green-500 font-semibold`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminUpdateToysForm;
