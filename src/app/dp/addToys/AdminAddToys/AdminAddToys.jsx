"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { kanit, mulish } from "../../../../utilies/FontsProvider/fontProvider";

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
      .put("http://localhost:7000/all-toys", addToys)
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

  return (
    <div
      className={` ${kanit.className} max-w-3xl mx-auto p-6 bg-white text-black shadow-md rounded-sm mt-10 `}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Toy Id
          </label>
          <input
            type="number"
            name="id"
            placeholder="write number"
            value={addToys?.id}
            onChange={handleChange} 
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
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
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select 
          type="ratio"
          name="rating"
          value={addToys?.rating}
          onChange={handleChange}
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
