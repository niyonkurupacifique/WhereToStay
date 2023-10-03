import React, { useEffect } from "react";
import Header from "./header";
import logo from "./Images/logo.png";
import homelogo from "./Images/homelogo.png";
import dashboardlogo from "./Images/dashlogo.png";
import addnewrentallogo from "./Images/dashboardLogo.png";
import logoutlogo from "./Images/logoutlogo.png";
import profilePhoto from "./Images/accountOwner.png";
import locationlogo from "./Images/location.png";
import apartmentlogo from "./Images/apartmentlogo.png";
import bedroomlogo from "./Images/bedroomlogo.png";
import bathroomlogo from "./Images/bathroomlogo.png";
import Chart from "react-apexcharts";
import houseImage from "./Images/house0.png";
import { useState } from "react";
import { HideOn } from "react-hide-on-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdBedroomParent, MdBathroom } from "react-icons/md";
import imglogo from "./Images/imglogo.png";
import { useContext } from "react";
import { OpenModalContext } from "./context";
import { useLocation, useParams } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
import { color } from "@cloudinary/url-gen/qualifiers/background";
import "../App.css";

const AddnewRental = () => {
  const navigate = useNavigate(Navigate);

  const { newToken } = useParams();
  const splitToken = newToken.split(" ");
  const newTokenn = splitToken[1];
  console.log("token from dashboard", newTokenn);
  const [imageURL, setImageURL] = useState("");
  const [imageURL2, setImageURL2] = useState("");
  const [imageURL3, setImageURL3] = useState("");
  const [imageURL4, setImageURL4] = useState("");
  const [imageURL5, setImageURL5] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [Status, setStatus] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [rentPeriod, setRentalPeriod] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [numberOfBedroom, setNumberOfBedroom] = useState(0);
  const [numberofBoothroom, setNumberOfBoothRoom] = useState(0);
  const [rentalPrice, setRentalPrice] = useState(0);
  const [DescriptionOfProperty, setDescriptionOfProperty] = useState("");
  const { setmessageStatus } = useContext(OpenModalContext);
  const { messageStatus } = useContext(OpenModalContext);
  const { setMessage } = useContext(OpenModalContext);
  const { setMessageType } = useContext(OpenModalContext);
  const [loading, setLoading] = useState(false);
  const [IsImageUploaded, setIsImageUploaded] = useState(false);
  const [IsImageUploaded2, setIsImageUploaded2] = useState(false);
  const [IsImageUploaded3, setIsImageUploaded3] = useState(false);
  const [IsImageUploaded4, setIsImageUploaded4] = useState(false);
  const [IsImageUploaded5, setIsImageUploaded5] = useState(false);

  const handleImageUpload = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ww2ueyt4");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dhtyvcwxo/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.secure_url;
          setIsImageUploaded(true);
          setImageURL(imageUrl);
          console.log("link yifoto", imageUrl);
        } else {
          console.error("Image upload failed");
          setIsImageUploaded(false);
        }
      } catch (error) {
        console.error("An error occurred while uploading the image:", error);
        setIsImageUploaded(false);
      }
    } else {
      console.error("No files selected.");
      setIsImageUploaded(false);
    }
  };
  const handleImageUpload2 = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ww2ueyt4");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dhtyvcwxo/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.secure_url;
          setIsImageUploaded2(true);
          setImageURL2(imageUrl);
          console.log("link yifoto", imageUrl);
        } else {
          console.error("Image upload failed");
          setIsImageUploaded2(false);
        }
      } catch (error) {
        console.error("An error occurred while uploading the image:", error);
        setIsImageUploaded2(false);
      }
    } else {
      console.error("No files selected.");
      setIsImageUploaded2(false);
    }
  };

  const handleImageUpload3 = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ww2ueyt4");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dhtyvcwxo/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.secure_url;
          setIsImageUploaded3(true);
          setImageURL3(imageUrl);
          console.log("link yifoto", imageUrl);
        } else {
          console.error("Image upload failed");
          setIsImageUploaded3(false);
        }
      } catch (error) {
        console.error("An error occurred while uploading the image:", error);
        setIsImageUploaded3(false);
      }
    } else {
      console.error("No files selected.");
      setIsImageUploaded3(false);
    }
  };
  const handleImageUpload4 = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ww2ueyt4");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dhtyvcwxo/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.secure_url;
          setIsImageUploaded4(true);
          setImageURL4(imageUrl);
          console.log("link yifoto", imageUrl);
        } else {
          console.error("Image upload failed");
          setIsImageUploaded4(false);
        }
      } catch (error) {
        console.error("An error occurred while uploading the image:", error);
        setIsImageUploaded4(false);
      }
    } else {
      console.error("No files selected.");
      setIsImageUploaded4(false);
    }
  };
  const handleImageUpload5 = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ww2ueyt4");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dhtyvcwxo/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.secure_url;
          setIsImageUploaded5(true);
          setImageURL5(imageUrl);
          console.log("link yifoto", imageUrl);
        } else {
          console.error("Image upload failed");
          setIsImageUploaded5(false);
        }
      } catch (error) {
        console.error("An error occurred while uploading the image:", error);
        setIsImageUploaded5(false);
      }
    } else {
      console.error("No files selected.");
      setIsImageUploaded5(false);
    }
  };
  const handleSubmitHouse = async (e) => {
    e.preventDefault();
    if (
      IsImageUploaded == false &&
      IsImageUploaded2 == false &&
      IsImageUploaded3 == false &&
      IsImageUploaded4 == false &&
      IsImageUploaded5 == false
    ) {
      setmessageStatus(true);
      setMessage("failed uploading image");
      setMessageType("error");
      return;
    } else {
      console.log([
        DescriptionOfProperty,
        rentalPrice,
        streetAddress,
        propertyType,
        imageURL,
        Status,
        numberOfBedroom,
        numberofBoothroom,
      ]);
      try {
        setLoading(true);
        const result = await fetch(
          "https://wheretostay.onrender.com/api/properties/create",
          {
            method: "POST",
            body: JSON.stringify({
              description: DescriptionOfProperty,
              price: rentalPrice,
              location: streetAddress,
              property_type: propertyType,
              imageUrls: [imageURL, imageURL2, imageURL3, imageURL4, imageURL5],
              isAvailable: Status,
              number_rooms: numberOfBedroom,
              number_of_bathrooms: numberofBoothroom,
            }),
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Authorization: newTokenn,
            },
          }
        );

        if (!result.ok) {
          console.error(result.status);
          setmessageStatus(true);
          setMessage("failed");
          setMessageType("error");
        } else {
          const result2 = await result.json();
          console.log(result2);

          setmessageStatus(true);
          setMessage("property posted successfully");
          setMessageType("success");
          navigate(`/dashboard/${newToken}`);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setMessageType("error");
        setMessage("login failed");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className=" h-full overflow-y-auto">
      <div className=" fixed top-1">
        <div className=" mt-4 w-full mx-8 ">
          <div className=" flex-1 flex   justify-between  mx-8">
            <div>
              <img style={{ maxWidth: "150px" }} src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="default-sidebar"
          class="fixed border   top-28  left-10 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 bg-txtecolor overflow-y-auto  dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  class="flex flex-col  items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group"
                >
                  <img style={{ maxWidth: "50px" }} src={profilePhoto} alt="" />
                  {/* <span class="">Uwase Yvonne</span> */}
                </a>
              </li>

              <li>
                <button
                  onClick={() => {
                    navigate(`/dashboard/${newToken}`);
                  }}
                >
                  {" "}
                  <div class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
                    <img src={dashboardlogo} alt="" />
                    <span class="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                  </div>
                </button>
              </li>

              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group"
                >
                  <img src={logoutlogo} alt="" />
                  <span class="flex-1 ml-3 whitespace-nowrap">LogOut</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div style={{ marginLeft: "38%" }} className="  mt-28 space-y-4">
          <div className=" flex  space-x-10">
            <div className=" mt-4">Upload Photo</div>
            <div className="flex space-x-7 ">
              <div
                style={{ marginLeft: "10%", maxWidth: "13%", maxHeight: "80%" }}
                class="relative   text-white p-2 rounded border border-black   cursor-pointer"
              >
                <div className="flex justify-center items-center w-full relative group">
                  <label className="flex justify-center items-center w-full relative group">
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="opacity-0 absolute inset-0"
                    />
                    {imageURL ? (
                      <img
                        className="w-full h-3/4 max-w-full max-h-full" // Add these styles
                        src={imageURL}
                        alt="Uploaded Image"
                      />
                    ) : (
                      <BsFillImageFill
                        className="camera-icon transition-blur group-hover:blur-sm "
                        size={48}
                      />
                    )}
                    <div className="absolute inset-0 flex justify-center items-center text-black opacity-0 group-hover:opacity-100 transition-opacity animate-fade-in">
                      <AiOutlineCloudUpload size={40} />
                    </div>
                  </label>
                </div>
              </div>
              <div
                style={{ marginLeft: "10%", maxWidth: "13%", maxHeight: "80%" }}
                class="relative   text-white p-2 rounded border border-black   cursor-pointer"
              >
                <div className="flex justify-center items-center w-full relative group">
                  <label className="flex justify-center items-center w-full relative group">
                    <input
                      type="file"
                      onChange={handleImageUpload2}
                      accept="image/*"
                      className="opacity-0 absolute inset-0"
                    />
                    {imageURL2 ? (
                      <img
                        className="w-full h-3/4 max-w-full max-h-full" // Add these styles
                        src={imageURL2}
                        alt="Uploaded Image"
                      />
                    ) : (
                      <BsFillImageFill
                        className="camera-icon transition-blur group-hover:blur-sm "
                        size={48}
                      />
                    )}
                    <div className="absolute inset-0 flex justify-center items-center text-black opacity-0 group-hover:opacity-100 transition-opacity animate-fade-in">
                      <AiOutlineCloudUpload size={40} />
                    </div>
                  </label>
                </div>
              </div>
              <div
                style={{ marginLeft: "10%", maxWidth: "13%", maxHeight: "80%" }}
                class="relative   text-white p-2 rounded border border-black   cursor-pointer"
              >
                <div className="flex justify-center items-center w-full relative group">
                  <label className="flex justify-center items-center w-full relative group">
                    <input
                      type="file"
                      onChange={handleImageUpload3}
                      accept="image/*"
                      className="opacity-0 absolute inset-0"
                    />
                    {imageURL3 ? (
                      <img
                        className="w-full h-3/4 max-w-full max-h-full" // Add these styles
                        src={imageURL3}
                        alt="Uploaded Image"
                      />
                    ) : (
                      <BsFillImageFill
                        className="camera-icon transition-blur group-hover:blur-sm "
                        size={48}
                      />
                    )}
                    <div className="absolute inset-0 flex justify-center items-center text-black opacity-0 group-hover:opacity-100 transition-opacity animate-fade-in">
                      <AiOutlineCloudUpload size={40} />
                    </div>
                  </label>
                </div>
              </div>
              <div
                style={{ marginLeft: "10%", maxWidth: "13%", maxHeight: "80%" }}
                class="relative   text-white p-2 rounded border border-black   cursor-pointer"
              >
                <div className="flex justify-center items-center w-full relative group">
                  <label className="flex justify-center items-center w-full relative group">
                    <input
                      type="file"
                      onChange={handleImageUpload4}
                      accept="image/*"
                      className="opacity-0 absolute inset-0"
                    />
                    {imageURL4 ? (
                      <img
                        className="w-full h-3/4 max-w-full max-h-full" 
                        src={imageURL4}
                        alt="Uploaded Image"
                      />
                    ) : (
                      <BsFillImageFill
                        className="camera-icon transition-blur group-hover:blur-sm "
                        size={48}
                      />
                    )}
                    <div className="absolute inset-0 flex justify-center items-center text-black opacity-0 group-hover:opacity-100 transition-opacity animate-fade-in">
                      <AiOutlineCloudUpload size={40} />
                    </div>
                  </label>
                </div>
              </div>
              <div
                style={{ marginLeft: "10%", maxWidth: "13%", maxHeight: "80%" }}
                class="relative   text-white p-2 rounded border border-black   cursor-pointer"
              >
                <div className="flex justify-center items-center w-full relative group">
                  <label className="flex justify-center items-center w-full relative group">
                    <input
                      type="file"
                      onChange={handleImageUpload5}
                      accept="image/*"
                      className="opacity-0 absolute inset-0"
                    />
                    {imageURL5 ? (
                      <img
                        className="w-full h-3/4 max-w-full max-h-full" 
                        src={imageURL5}
                        alt="Uploaded Image"
                      />
                    ) : (
                      <BsFillImageFill
                        className="camera-icon transition-blur group-hover:blur-sm "
                        size={48}
                      />
                    )}
                    <div className="absolute inset-0 flex justify-center items-center text-black opacity-0 group-hover:opacity-100 transition-opacity animate-fade-in">
                      <AiOutlineCloudUpload size={40} />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-6 flex  space-x-20">
            <label
              for="large-input"
              class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Street Address
            </label>
            <input
              onChange={(e) => {
                setStreetAddress(e.target.value);
              }}
              style={{ width: "55%", marginLeft: "17%" }}
              type="text"
              id="large-input"
              class="block    p-4 text-gray-900 border  border-b-mycolor rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div class="mb-6 flex space-x-16">
            <label
              for="large-input"
              class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              District
            </label>
            <input
              style={{ width: "55%", marginLeft: "22%" }}
              type="text"
              id="large-input"
              class="block  p-4 text-gray-900 border  border-b-mycolor rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-6 flex space-x-16">
            <label
              for="large-input"
              class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Is available
            </label>
            <input
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              style={{ width: "55%", marginLeft: "19%" }}
              type="text"
              id="large-input"
              class="block  p-4 text-gray-900 border  border-b-mycolor rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-6 flex space-x-16">
            <label
              for="large-input"
              class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sector
            </label>
            <input
              style={{ width: "55%", marginLeft: "23%" }}
              type="text"
              id="large-input"
              class="block  p-4 text-gray-900 border  border-b-mycolor rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-6 flex space-x-16">
            <label
              for="large-input"
              class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rent Period
            </label>
            <input
              style={{ width: "55%", marginLeft: "19%" }}
              type="text"
              id="large-input"
              class="block  p-4 text-gray-900 border  border-b-mycolor rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-6 flex space-x-16">
            <label
              for="large-input"
              class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Property Type
            </label>
            <select
              onChange={(e) => {
                setPropertyType(e.target.value);
              }}
              style={{ width: "55%", marginLeft: "17%" }}
              type="text"
              id="large-input"
              class="block  p-4 text-gray-900 border  border-b-mycolor rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name=""
            >
              <option value="ghetto">ghetto</option>
              <option value="apartment">apartment</option>
              <option value="home">home</option>
            </select>
          </div>
          <div class="mb-6 flex space-x-16">
            <label
              for="large-input"
              class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number of Bedroom
            </label>
            <input
              onChange={(e) => {
                setNumberOfBedroom(e.target.value);
              }}
              style={{ width: "55%", marginLeft: "12%" }}
              type="text"
              id="large-input"
              class="block  p-4 text-gray-900 border  border-b-mycolor rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div class="mb-6 flex space-x-16">
            <label
              for="large-input"
              class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number of bathroom
            </label>
            <input
              onChange={(e) => {
                setNumberOfBoothRoom(e.target.value);
              }}
              style={{ width: "55%", marginLeft: "11.5%" }}
              type="text"
              id="large-input"
              class="block  p-4 text-gray-900 border  border-b-mycolor rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-6 flex space-x-16">
            <label
              for="large-input"
              class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rental Price
            </label>
            <input
              onChange={(e) => setRentalPrice(e.target.value)}
              style={{ width: "55%", marginLeft: "19%" }}
              type="text"
              id="large-input"
              class="block  p-4 text-gray-900 border  border-b-mycolor rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-6 flex space-x-16">
            <label
              for="large-input"
              class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description Of Property
            </label>
            <textarea
              onChange={(e) => setDescriptionOfProperty(e.target.value)}
              style={{ width: "55%", marginLeft: "10%" }}
              type="text"
              id="large-input"
              class="block  p-4 text-gray-900 border  border-b-mycolor rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div style={{ marginLeft: "45%" }}>
            <button
              onClick={handleSubmitHouse}
              type="button"
              class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddnewRental;
