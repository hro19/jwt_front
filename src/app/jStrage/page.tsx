"use client";

import React from 'react';
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const darkModeAtom = atomWithStorage("darkMode", false);

const page = () => {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  return (
      <div>
      {/* <h1>Welcome to {darkMode ? "dark" : "light"} mode!</h1> */}
      <button className="bg-slate-400" onClick={() => setDarkMode(!darkMode)}>toggle theme</button>
    </div>
  );
}

export default page