"use client";

import { useOptimistic } from "react";
import { removeProduct } from "@/actions/products";
import Link from "next/link";
import Form from "next/form";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export const ProductDetail = ({ products }: { products: Product[] }) => {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    },
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  };

  return (
    <ul className="space-y-4 p-4">
      {optimisticProducts.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
          </h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <Form action={removeProductById.bind(null, product.id)}>
            <button
              type="submit"
              className="mt-2 p-2 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </Form>
        </li>
      ))}
    </ul>
  );
};
