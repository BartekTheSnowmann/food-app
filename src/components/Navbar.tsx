import React, { useState } from "react";
import { Bars3Icon, ChartPieIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

function Navbar({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-md">
      <div className="relative p-4 flex justify-between max-w-[1240px] mx-auto">
        <div>
          <Link to="/">
            <p className="flex items-center gap-x-4 font-bold text-3xl text-black cursor-pointer border-img px-2 italic">
              Food
            </p>
          </Link>
        </div>
        <div>
          <Bars3Icon
            className="h-8 w-8 cursor-pointernp"
            onClick={() => setMenuOpen(true)}
          />
        </div>
        {/* Menu */}
        {/* <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="z-10 fixed top-[74px] right-0 h-screen w-2/5 bg-red-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="p-4 flex justify-end">
                <XMarkIcon
                  className="h-8 w-8 cursor-pointernp"
                  onClick={() => setMenuOpen((prev) => !prev)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </nav>
  );
}

export default Navbar;
