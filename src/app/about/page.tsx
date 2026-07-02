import React from 'react'
import { Metadata } from "next";
import Link from 'next/link'

export const metadata: Metadata = {
  title: "About",
  // description: "This is the about page of the app",
};

function About() {
  return (
    <>
      <h2>About Page {new Date().toLocaleTimeString()}</h2>
      <Link href="/">Home</Link>
    </>
  ); 
}

export default About