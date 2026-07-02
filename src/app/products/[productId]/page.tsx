export const dynamicParams = false

import React from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;

  return {
    title: `Product ${productId}`,
  };
}

type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateStaticParams() {
  return [{ productId: "1" }, { productId: "2" }, { productId: "3" }];
}

async function ProductDetail({ params }: Props) {
  const { productId } = await params;
  return (
    <h2>
      Welcome to the Product Detail Page for {productId}{" "}
      {new Date().toLocaleTimeString()}
    </h2>
  );
}

export default ProductDetail;
