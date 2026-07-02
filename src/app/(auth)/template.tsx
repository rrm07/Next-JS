"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/register", label: "Register" },
  { href: "/login", label: "Login" },
  { href: "/forgot-password", label: "Forgot Password" },
];

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [value, setValue] = useState("");

  return (
    <div>
      <div>
        <input className='p-2 m-2 border border-gray-300 rounded' value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
