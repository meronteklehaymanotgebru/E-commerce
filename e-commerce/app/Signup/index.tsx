"use client";
import Image from "next/image";
import { useState } from "react";
import Input from "../sharedComponents/Input";
import Button from "../sharedComponents/Button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
const SignUpForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-40 py-12  ">
      <div className=" flex ">
        <Image
          src="/images/mobile.avif"
          alt="Cart and a smartphone"
          width={900}
          height={900}
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-2 text-black">Create an account</h1>
        <p className="mb-6 text-gray-600">Enter your details below</p>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full border-0 border-b-2 border-gray-400 py-2 px-0 rounded-none mb-6"
        />
        <Input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Email or Phone Number"
          className="w-full border-0 border-b-2 border-gray-400 py-2 px-0 rounded-none mb-6"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border-0 border-b-2 border-gray-400 py-2 px-0 rounded-none mb-6"
        />
        <Button variant="default" size="full" className="w-32">
          Create Account
        </Button>
        <Button
          variant="google"
          size="full"
          className="flex items-center justify-center gap-2 mb-4"
        >
          <FcGoogle className="text-lg" /> Sign up with Google
        </Button>
        <p className="text-sm text-gray-600 text-center">
          Already have account?{" "}
         <Link href={"/Signin"} className="underline font-medium">Log In</Link>

        </p>
      </div>
    </div>
  );
};
export default SignUpForm;
