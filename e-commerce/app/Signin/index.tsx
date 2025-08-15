"use client";
import Image from "next/image";
import { useState } from "react";
import Input from "../sharedComponents/Input";
import Button from "../sharedComponents/Button";
import Link from "next/link";
const SignInForm = () => {
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
      <div className="flex-1 flex flex-col justify-center max-w-md w-full py-30">
        <h1 className="text-3xl font-semibold mb-2 text-black">Log in to Exclusive</h1>
        <p className="mb-6 text-gray-600">Enter your details below</p>
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
        <div className="flex items-center gap-40">
        <Button variant="default" size="short" className="mb-4">
          Log in
        </Button>
        <p className="text-sm text-pink-700 ">
           <Link href={"/Signup"} className="font-medium">Forgot your password?</Link>
        </p>
        </div>
      </div>
    </div>
  );
};
export default SignInForm;
