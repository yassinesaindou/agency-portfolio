"use client";

import { Menu } from "lucide-react";

// import Button from "./components/Button";

import { useState } from "react";
import Button from "./components/Button";
// import Button from "./components/Button";
// import { Menu } from "lucide-react";

export default function Navbar() {
  const links = ["Services", "Why us", "Ou Tech Stack"];
  const [hidden, setHidden] = useState(true);
  return (
    <nav className="flex gap-4 md:flex-row justify-between items-center py-2 px-4 backdrop:blur-sm border-b flex-wrap text-gray-300 mx-auto w-[100%]">
      <div>LOGO</div>

      <Menu
        size={32}
        className="md:hidden"
        onClick={() => setHidden(!hidden)}
      />
      <div
        className={`${
          hidden ? "hidden md:flex" : ""
        } w-[100%]  md:w-auto text-center`}>
        <ul className=" md:flex gap-3 ">
          {links.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
      <div
        className={`${
          hidden ? "hidden md:flex" : ""
        } flex gap-3 justify-center md:justify-normal w-[100%] md:w-auto`}>
        <Button text="FAQ's" variant="outline" />
        <Button text="Contact us" variant="primary" />
      </div>
    </nav>
  );
}
