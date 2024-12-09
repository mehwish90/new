import React from 'react'
import Image from 'next/image';

const Shop = () => {
   const  products = [
        {
          id: 1,
          name: "Stylish Chair",
          price: "Rp 2,500,000",
          image: "/images (7).png",
          description: "A modern and stylish chair for your home.",
        },
        {
          id: 2,
          name: "Comfortable Sofa",
          price: "Rp 7,000,000",
          image: "/images (6).png",
          description: "A luxury sofa to add comfort and style to your living room.",
        },
        {
          id: 3,
          name: "Elegant Table",
          price: "Rp 3,500,000",
          image: "/images (1).png",
          description: "An elegant table that fits perfectly in any space.",
        },
        {
          id: 4,
          name: "Bedroom Lamp",
          price: "Rp 1,200,000",
        image: "/images (2).png",
          description: "A sleek lamp to brighten your room.",
        },
        {
            id: 5,
            name: "Bedroom Lamp",
            price: "Rp 1,200,000",
            image: "/images (3).png",
            description: "A sleek lamp to brighten your room.",
          },
          {
            id: 6,
            name: "Bedroom Lamp",
            price: "Rp 1,200,000",
            image: "/images (9).png",
            description: "A sleek lamp to brighten your room.",
          },{
            id: 7,
            name: "Bedroom Lamp",
            price: "Rp 1,200,000",
            image: "/images (5).png",
            description: "A sleek lamp to brighten your room.",
          },
          {
            id: 8,
            name: "Bedroom Lamp",
            price: "Rp 1,200,000",
            image: "/image 8.png",
            description: "A sleek lamp to brighten your room.",
          },
          
      ];
      
  return (
    <div>
<div className='relative '> <Image src="/Rectangle 1 (1).png"width={1400} height={300} alt="Filter Icon" /></div>

    <div className="showBlowBar w-full h-16 bg-[#F9F1E7] flex items-center justify-between px-4 md:px-8">

      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Filter Icon */}
        <div className="flex items-center gap-2">
          <Image src="/filter.png"width={30} height={30} alt="Filter Icon" />
          <p className="text-sm font-medium">Filter</p>
        </div>
        <p className="text-sm font-medium hidden md:block">| Showing 1–16 of 32 results</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Show</p>
          <input
            className="w-10 h-10 bg-white text-black text-center rounded-md"
            type="text"
            placeholder="16"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Sort by</p>
          <input
            className="w-32 h-10  bg-white text-black text-center rounded-md"
            type="text"
            placeholder="Option"
          />
        </div>
      </div>
      
    </div>
   
    <div className="bg-gray-50 py-8 mr-16 mx-16">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Shop Our Products
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-lg font-bold text-gray-900 mt-2">
                  {product.price}
                </p>
              </div>
              <div className="p-4 border-t">
                <button className="w-full py-2 text-sm font-bold text-white bg-purple-500 rounded hover:bg-purple-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  

   </div>
);
}
export default Shop