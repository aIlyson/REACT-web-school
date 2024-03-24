"use client";

import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-800 text-white w-full h-16 flex items-center justify-center">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;
