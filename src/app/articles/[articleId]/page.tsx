"use client";

import Link from "next/link";
import { use } from "react";

// export default async function NewsArticle
export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" }>;
}) {
    // const { articleId } = await params
    // const { lang } = await searchParams
  const { articleId } = use(params);
  const { lang } = use(searchParams);

  return (
    <>
      <h1>News Article: {articleId}</h1>
      <p>Reading in language: {lang || "default"}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>{" "}
        <br />
        <Link href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
      </div>
    </>
  );
}
