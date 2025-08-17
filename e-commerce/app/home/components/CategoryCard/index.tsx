"use client";
import { FC } from "react";

interface CategoryCardProps {
  icon: React.ReactNode;
  label: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ icon, label }) => {
  return (
    <div
      className={`
        flex flex-col items-center justify-center border p-6 cursor-pointer transition 
        bg-white text-gray-700 hover:bg-red-500 hover:text-white
      `}
    >
      <div className="mb-3">{icon}</div>
      <span className="text-xl">{label}</span>
    </div>
  );
};

export default CategoryCard;
