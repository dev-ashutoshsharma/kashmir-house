"use client";
import Menu from "@/components/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">

      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          We're Sorry, We're Closed
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your support over the years. Our restaurant has permanently closed its doors. We are grateful for the memories and the community we've built together.
        </p>
       
      </div>
    </div>
  );
}