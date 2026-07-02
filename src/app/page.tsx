import React from "react";
import Link from "next/link";

function Home() {
  return (
    <>
      <h2>Welcome Home</h2>
      <Link href="/about">About</Link> <br/>
      <Link href="/products">Products</Link> <br/>
      <Link href="articles/breaking-news-123?lang=en">Read in English</Link> <br/>
      <Link href="articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}

export default Home;
