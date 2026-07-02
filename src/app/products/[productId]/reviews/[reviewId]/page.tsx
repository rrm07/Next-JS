import React from 'react'
import {notFound, redirect} from 'next/navigation'

async function ReviewDetail({params}: {params: Promise<{productId: string, reviewId: string}>}) {
    const {productId, reviewId} = await params;
    if (Number(reviewId) > 1000) {
        notFound();
        // redirect('/products');
    }
    return (
        <h2>Welcome to the Review Detail Page for product {productId} and review {reviewId}</h2>
    )
}

export default ReviewDetail