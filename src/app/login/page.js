'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import loginBanner from '../../assests/images/banner.jpg';
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";
import Link from 'next/link';
import brandLogo from "../../assests/icons/OsamaMart -Logo.png";
import showPasswordIcon from "../../assests/icons/show-password-icon-18.jpg";
import hidePasswordIcon from "../../assests/icons/show-password-icon-19.jpg";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
// import { auth } from "../../../pages/api/auth/firebase/firebaseConfig";
import { getAuth } from "firebase/auth"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../pages/api/auth/firebase/firebaseConfig';


const kanit = Kanit({
    subsets: ['latin'],
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


const Login = () => {
    
// const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!e.target.value) {
            setEmailError("Email is required");
        } else {
            setEmailError("");
        }
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (!e.target.value) {
            setPasswordError("Password is required");
        } else {
            setPasswordError("");
        }
    };

    // handle submit button -------------


const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        localStorage.setItem('user', JSON.stringify(user));
        Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: `Welcome back, ${user.email}`,
        });

        router.push("/dp"); 
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            setEmailError("No account found with this email.");
        } else if (error.code === "auth/wrong-password") {
            setPasswordError("Incorrect password.");
        } else {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.message,
            });
            
        router.push("/login"); 
        }
    }
};


    return (
        <div>
            <div className='relative'>
                <Image className='relative w-full h-screen' src={loginBanner} alt='' />
                <div className="absolute top-0 w-full bg-black opacity-60 inset-0" />
            </div>
            {/* Login Card  */}
            <div className={` ${kanit.className} absolute inset-0 flex justify-center items-center`}>
                <div className='w-full max-w-md relative'>
                    {/* form section  */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-black drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4 shadow-lg shadow-[#F26626] border-t-2 border-[#F26626] "
                    >
                        <h1 className={` ${mulish.className} font-semibold text-sm text-white text-center mb-2 `}>
                            Email: admin@test.com
                        </h1>
                        <h1 className={` ${mulish.className} font-semibold text-sm text-white text-center mb-5 `}>
                            Password: 123456
                        </h1>
                        {/* email field  */}
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                Enter Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            <span className="text-red-500 text-lg">{emailError}</span>
                        </div>
                        {/* password field  */}
                        <div className="mb-6">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                <span
                                    onClick={handleShowPassword}
                                    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                >
                                    {showPassword ? (
                                        <Image
                                            className="w-[20px] h-[20px]"
                                            src={showPasswordIcon}
                                            alt=""
                                        />
                                    ) : (
                                        <Image
                                            className="w-[20px] h-[20px]"
                                            src={hidePasswordIcon}
                                            alt=""
                                        />
                                    )}
                                </span>
                            </div>
                            <span className="text-red-600">{passwordError}</span>
                        </div>
                        {/* login button  */}
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-[#F26626] hover:bg-[#f26726c0] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                        {/* home button-------------  */}

                        <button className="mt-5  bg-[#F26626] hover:bg-[#f26726c0] font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                            <Link className="flex justify-center" href="/">
                                Return Home
                            </Link>
                        </button>
                        <hr className="my-5 border border-[#F26626]" />
                        <h1 className="flex justify-center items-center text-white">
                            copyright ©{" "}
                            <Image className="w-[120px] ms-2" src={brandLogo} alt="" />
                        </h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;