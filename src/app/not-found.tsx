"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    return (
        <>
        <h2>404 - Page Not Found for {pathname}</h2>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Go back to the home page</Link>
        </>
    )
}