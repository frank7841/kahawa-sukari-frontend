import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Sacraments_Links() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const sacraments = [
    { name: "Baptism", path: "baptism" },
    { name: "Confirmation", path: "confirmation" },
    { name: "Eucharist", path: "eucharist" },
    { name: "Reconciliation", path: "penance" },
    { name: "Anointing of the Sick", path: "annointing" },
    { name: "Matrimony", path: "matrimony" },
    { name: "Holy Orders", path: "orders" },
    { name: "Becoming Catholic (RCIC)", path: "rcic" },
    { name: "Becoming Catholic (RCIA)", path: "rcia" },
  ];

  return (
    <div className="w-full">
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-primary text-white rounded-lg"
        >
          <span className="text-lg font-semibold">Sacraments</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Sacraments</h2>
        <ul className="space-y-2">
          {sacraments.map((sacrament) => (
            <li key={sacrament.path}>
              <Link
                className={`block p-2 rounded-lg transition-colors ${
                  pathname.includes(sacrament.path)
                    ? "bg-secondary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                href={`/sacraments/${sacrament.path}`}
              >
                {sacrament.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
          >
            <ul className="mt-2 space-y-1">
              {sacraments.map((sacrament) => (
                <li key={sacrament.path}>
                  <Link
                    className={`block p-3 rounded-lg transition-colors ${
                      pathname.includes(sacrament.path)
                        ? "bg-secondary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    href={`/sacraments/${sacrament.path}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {sacrament.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sacraments_Links;
