"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { kanit, mulish } from "../../../../utilies/FontsProvider/fontProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "../../../../utilies/config";

const AdminAddToys = () => {
  const [isLoding, setIsLoading] = useState(false) ;
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

  // image upload  handle funciton ----------------
  const handleImageUpload = async (e, field) => {
    const file = e.target.files[0]; 
    if (!file) return;
  
    const formData = new FormData();
    formData.append("image", file);
  
    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=20c5bd09df5ae71b18f0540387ed355a`,
        formData
      );
  
      if (response.data.success) {
        setAddToys((prevDetails) => ({
          ...prevDetails,
          [field]: response.data.data.url, 
        }));
      } else {
        Swal.fire({
          icon: "error",
          title: "Upload Failed",
          text: "Image upload failed. Try again!",
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire({
        icon: "error",
        title: "Upload Error",
        text: "Something went wrong while uploading the image.",
      });
    }
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get(baseUrl('all-toys'), addToys) 
  //     .then((res) => {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Toy Added",
  //         text: res.data.message,
  //       });
  //       router.push("/dp/allToys");
  //     })
  //     .catch((error) => {
  //       console.error("Error updating toy:", error);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Add Failed",
  //         text: error.res?.data?.message || "An error occurred.",
  //       });
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!addToys.image || !addToys.hoverImage) {
      return Swal.fire({
        icon: "warning",
        title: "Image Required",
        text: "Please upload images before submitting.",
      });
    }
    setIsLoading(true); 
    axios
      .post(baseUrl("all-toys"), addToys)
      .then((res) => {
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title: "Toy Added",
          text: "Your toy has been added successfully!",
        });
        router.push("/dp/allToys");
      })
      .catch((error) => {
        console.error("Error adding toy:", error);
        Swal.fire({
          icon: "error",
          title: "Add Failed",
          text: "An error occurred while adding the toy.",
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
      className={` ${kanit.className} max-w-3xl mx-auto p-6 bg-gray-900 text-black shadow-md rounded-sm mt-10 `}
    >
      <form onSubmit={handleSubmit}  onKeyDown={handleKeyDown} className="space-y-4">
      <div>
          <label className="block text-sm font-medium text-white">
            Toy Id
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="id"
              value={addToys?.id}
              placeholder="click generate id button"
              readOnly
              className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
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

        {/* <div>
          <label className="block text-sm font-medium text-white">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={addToys?.image}
            placeholder="paste first image url"
            onChange={handleChange}
            required
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
            value={addToys?.hoverImage}
            placeholder="paste second image url"
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          />
        </div> */}
        <div>
  <label className="block text-sm font-medium text-white">
    Image Upload
  </label>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => handleImageUpload(e, "image")}
    className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 bg-white text-black"
  />
</div>

<div>
  <label className="block text-sm font-medium text-white">
    Hover Image Upload
  </label>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => handleImageUpload(e, "hoverImage")}
    className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 bg-white text-black"
  />
</div>


        <div>
          <label className="block text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={addToys?.name}
            placeholder="write product name"
            onChange={handleChange}
            required
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
            value={addToys?.price}
            placeholder="write product price"
            onChange={handleChange}
            required
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
            value={addToys?.quantity}
            placeholder="write product quantity"
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Category
          </label>
          <select 
          type="ratio"
          name="category"
          value={addToys?.category}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
        
          >
            <option value="">Select Your Category</option>
            <option value="Action Figures">Action Figures</option>
            <option value="Vehicles & Starships">Vehicles & Starships</option>
            <option value="Lightsabers & Weapons">Lightsabers & Weapons</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Rating
          </label>
          <select 
          type="ratio"
          name="rating"
          value={addToys?.rating}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
        
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
          <label className="block text-sm font-medium text-white">
            Description
          </label>
          <textarea
            name="description"
            value={addToys?.description}
            placeholder="write product description"
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full rounded-sm border-2 border-gray-300 shadow-lg py-2 ps-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          ></textarea>
        </div>
        {/*---------------------- Submit Button-------------------  */}
        <button
  type="submit"
  className={`${mulish.className} w-full uppercase ${
    isLoding ? "bg-gray-300" : "bg-green-600 hover:bg-green-700"
  } text-white py-2 px-4 rounded-sm shadow font-semibold`}
  disabled={isLoding}
>
  {isLoding ? (
    <span className="loading loading-spinner text-success"></span>
  ) : (
    "Submit"
  )}
</button>

      </form>
    </div>
  );
};

export default AdminAddToys;
