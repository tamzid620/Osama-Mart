"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { kanit, mulish } from "../../../../utilies/FontsProvider/fontProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AdminAddToys = () => {
  const [addToys, setAddToys] = useState({
    id: "",
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

  // Handle Function to generate a random number (ID)
  const handleRenerateRandomId = () => {
    const randomId = Math.floor(Math.random() * 100000); 
    setAddToys((prevDetails) => ({
      ...prevDetails,
      id: randomId.toString(),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddToys((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://osama-mart-server-backend.vercel.app/all-toys", addToys)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Toy Added",
          text: res.data.message,
        });
        router.push("/dp/allToys");
      })
      .catch((error) => {
        console.error("Error updating toy:", error);
        Swal.fire({
          icon: "error",
          title: "Add Failed",
          text: error.res?.data?.message || "An error occurred.",
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
      className={` ${kanit.className} max-w-3xl mx-auto p-6 bg-white text-black shadow-md rounded-sm mt-10 `}
    >
      <form onSubmit={handleSubmit}  onKeyDown={handleKeyDown} className="space-y-4">
      <div>
          <label className="block text-sm font-medium text-gray-700">
            Toy Id
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="id"
              value={addToys?.id}
              placeholder="click generate id button"
              readOnly
              className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={handleRenerateRandomId}
              className="ml-2 bg-[#A64D79] hover:bg-[#6A1E55] text-white w-[100px] py-3 rounded-sm text-sm"
            >
              Generate ID
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={addToys?.image}
            placeholder="paste first image url"
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Hover Image URL
          </label>
          <input
            type="text"
            name="hoverImage"
            value={addToys?.hoverImage}
            placeholder="paste second image url"
            onChange={handleChange}
            required
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
            value={addToys?.name}
            placeholder="write product name"
            onChange={handleChange}
            required
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
            value={addToys?.price}
            placeholder="write product price"
            onChange={handleChange}
            required
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
            value={addToys?.quantity}
            placeholder="write product quantity"
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select 
          type="ratio"
          name="category"
          value={addToys?.category}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        
          >
            <option value="">Select Your Category</option>
            <option value="Action Figures">Action Figures</option>
            <option value="Vehicles & Starships">Vehicles & Starships</option>
            <option value="Lightsabers & Weapons">Lightsabers & Weapons</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <select 
          type="ratio"
          name="rating"
          value={addToys?.rating}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        
          >
            <option value="">Select Your Rating</option>
            <option value="1.0">1.0</option>
            <option value="1.5">1.5</option>
            <option value="2.0">2.0</option>
            <option value="2.5">2.5</option>
            <option value="3.0">3.0</option>
            <option value="3.5">3.5</option>
            <option value="4.0">4.0</option>
            <option value="4.5">4.5</option>
            <option value="5.0">5.0</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={addToys?.description}
            placeholder="write product description"
            onChange={handleChange}
            required
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

export default AdminAddToys;
