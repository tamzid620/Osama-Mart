"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation';
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";

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
      .get(`http://localhost:7000/all-toys/${id}`)
      .then((res) => setToyDetails(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToyDetails({ ...toyDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('image', toyDetails.image);
    formData.append('hoverImage', toyDetails.hoverImage);
    formData.append('name', toyDetails.name);
    formData.append('price', toyDetails.price);
    formData.append('quantity', toyDetails.quantity);
    formData.append('category', toyDetails.category);
    formData.append('rating', toyDetails.rating);
    formData.append('description', toyDetails.description);
  
    axios
      .post('http://localhost:7000/update-toy', formData)
      .then((res) => {
        Swal.fire({
          title: 'Success!',
          text: 'Toy details have been updated!',
          icon: 'success',
        });
        router.push('/dp/allToys');
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error',
        });
      });
  };
  
  

  return (
    <div
      className={` ${kanit.className} max-w-3xl mx-auto p-6 bg-white text-black shadow-md rounded-sm mt-10 `}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            name="image"
            onChange={(e) =>
              setToyDetails({ ...toyDetails, image: e.target.files[0] })
            }
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Hover Image
          </label>
          <input
            type="file"
            name="hoverImage"
            onChange={(e) =>
              setToyDetails({ ...toyDetails, hoverImage: e.target.files[0] })
            }
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={toyDetails?.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={toyDetails?.price}
            onChange={handleChange}
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={toyDetails?.quantity}
            onChange={handleChange}
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={toyDetails?.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <input
            type="number"
            step="0.1"
            max="5"
            name="rating"
            value={toyDetails?.rating}
            onChange={handleChange}
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={toyDetails?.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <button
          type="submit"
          className={` ${mulish.className} w-full uppercase bg-green-600 text-white py-2 px-4 rounded-sm shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 font-semibold`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminUpdateToysForm;
