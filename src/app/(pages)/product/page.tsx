"use client";

import Image from "next/image";
import { useState } from "react";
import { FaSquareXTwitter, FaFacebook } from "react-icons/fa6";
import Link from "next/link";

export default function ProductPage() {

  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false); // State to show popup

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  // Show popup when item is added to cart
  const handleAddToCart = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <div className="px-10 py-16 bg-gray-50">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-8">
        <span>Home</span> <span className="mx-2">/</span>
        <span>Shop</span> <span className="mx-2">/</span>
        <span className="text-gray-900 font-semibold">Asgaard sofa</span>
      </nav>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Product Gallery and Main Image (50%) */}
        <div className="flex w-full lg:w-1/2 gap-4">
          {/* Product Gallery */}
          <div className="flex flex-col gap-4 w-1/4">
            <div className="relative flex items-center bg-cream2 w-full h-[150px] rounded-lg overflow-hidden">
              <Image
                src="/images/product1/1.png"
                alt="Thumbnail 1"
                height={400}
                width={400}
                className="rounded-lg"
              />
            </div>
            <div className="relative items-center bg-cream2 w-full h-[150px] rounded-lg overflow-hidden">
              <Image
                src="/images/product1/2.png"
                alt="Thumbnail 2"
                height={400}
                width={400}
                className="rounded-lg"
              />
            </div>
            <div className="relative items-center bg-cream2 w-full h-[150px] rounded-lg overflow-hidden">
              <Image
                src="/images/product1/1.png"
                alt="Thumbnail 3"
                height={400}
                width={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Main Product Image */}
          <div className="relative w-3/4 flex justify-center items-center bg-cream2 h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/product1/asgaarda.png"
              alt="Asgaard sofa"
              width={650}
              height={650}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-semibold">Asgaard sofa</h1>
          <p className="text-2xl font-bold text-gray-800">Rs. 250,000.00</p>

          <div className="flex items-center gap-2">
            <div className="flex">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
            <span className="text-gray-500">(10 customer reviews)</span>
          </div>

          <p className="text-gray-600">
            Meticulously crafted with premium materials, this sofa offers
            superior comfort and timeless elegance, making it the perfect
            centerpiece for any living room.
          </p>

          <div>
            <h1>Size</h1>
            <div className="flex gap-2">
              <button className="bg-cream rounded-md py-2 px-3">L</button>
              <button className="bg-cream rounded-md py-2 px-3">XL</button>
              <button className="bg-cream rounded-md py-2 px-3">LS</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-800">Color:</span>
            <button className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300"></button>
            <button className="w-6 h-6 rounded-full bg-yellow-500 border border-gray-300"></button>
            <button className="w-6 h-6 rounded-full bg-gray-500 border border-gray-300"></button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-800">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={decrementQuantity}
                className="px-3 py-1 bg-gray-200 rounded-l-lg"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-3 py-1 bg-gray-200 rounded-r-lg"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart} 
              className="w-full lg:w-auto px-6 py-3 bg-black text-white rounded-lg"
            >
              Add to Cart
            </button>
          </div>

          <button className="flex items-center gap-2 text-gray-800">
            <Image
              src="/icons/wishlist.png"
              alt="Wishlist Icon"
              width={20}
              height={20}
            />
            Add to Wishlist
          </button>

          <div className="mt-20">
            <hr className="border-t1 border-black" />
          </div>

          <div className="flex gap-10 text-left">
            <h5 className="font-semibold w-[25%]">SKU</h5>
            <h5>: SS001</h5>
          </div>
          <div className="flex gap-10 text-left">
            <h5 className="font-semibold w-[25%]">Category</h5>
            <h5>: Sofas</h5>
          </div>
          <div className="flex gap-10 text-left">
            <h5 className="font-semibold w-[25%]">Tags</h5>
            <h5>: Sofa, Chair, Home, Shop</h5>
          </div>
          <div className="flex gap-10 text-left">
            <h5 className="font-semibold w-[25%]">Share</h5>
            <h5 className="flex gap-5">
              :
              <FaFacebook />
              <FaSquareXTwitter />
            </h5>
          </div>
        </div>
      </div>

      {/* Popup shopup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">Added to Cart!</h3>
            <p className="text-gray-600">Your product has been successfully added to the cart.</p>
            <div className="flex py-3 mt-3 justify-between shadow-md gap-3 px-4 bg-cream2">
                <h1>Product</h1>
                <h1>Price</h1>
            </div>
            <div className="flex justify-between gap-3 py-3 px-4">
                <Image src='/images/product1/asgaarda.png' height={60} width={60} alt="Product Image"/>
                <h1>Rs. 250,000.00</h1>
            </div>
            <Link href="/checkout">
            <button className="my-4 mx-4 px-6 py-2 bg-black text-white rounded-lg">Checkout</button>
            </Link>
            
            <button
              onClick={() => setShowPopup(false)}
              className="mx-4 my-4 px-6 py-2 bg-black text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Related Products */}
      <div className="py-10">
        <h1 className="text-[34px] text-center font-semibold">
          Related Products
        </h1>
      </div>
      <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 md:px-20 py-10">
        <div className="flex flex-col">
          <Image
            src="/images/rocket.png"
            height={200}
            width={200}
            alt="Product Image"
            className="mb-4"
          />
          <h5 className=" text-gray-800 w-[70%] mb-2">
            Trenton Modular Sofa_3
          </h5>
          <h3 className="font-semibold text-black mb-4">Rs. 25,000.00</h3>
        </div>

        <div className="flex flex-col">
          <Image
            src="/images/rocket.png"
            height={200}
            width={200}
            alt="Product Image"
            className="mb-4"
          />
          <h5 className=" w-[70%] text-gray-800 mb-2">
            Granite dining table with dining chair
          </h5>
          <h3 className=" font-semibold text-black mb-4">Rs. 25,000.00</h3>
        </div>

        <div className="flex flex-col">
          <Image
            src="/images/rocket.png"
            height={200}
            width={200}
            alt="Product Image"
            className="mb-4"
          />
          <h5 className=" text-gray-800 w-[70%] mb-2">
            Outdoor bar table and stool
          </h5>
          <h3 className="font-semibold text-black mb-4">Rs. 25,000.00</h3>
        </div>

        <div className="flex flex-col">
          <Image
            src="/images/rocket.png"
            height={200}
            width={200}
            alt="Product Image"
            className="mb-4"
          />
          <h5 className=" text-gray-800 w-[70%] mb-2">
            Comfortably large arm chair
          </h5>
          <h3 className="font-semibold text-black mb-4">Rs. 25,000.00</h3>
        </div>
      </div>
    </div>
  );
}
