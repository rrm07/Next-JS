// "use client";

// import { FormState, createProduct } from "@/actions/products";
// import { Submit } from "@/components/submit";
import { getProduct } from "@/prisma-db";
import EditProductForm from "./product-edit-form";
import { notFound } from "next/navigation";
import type { Product } from "@/app/products-db/page";

// import { useActionState } from "react";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  //split logic CC and SC
  return <EditProductForm product={product} />;
}
