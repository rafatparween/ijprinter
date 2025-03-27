"use client"
import React, { useState } from 'react';
import { products } from '../data';

export default function DataContent() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProducts = products.map((productCategory) => {
    const filteredItems = productCategory.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );

    return {
      ...productCategory,
      items: filteredItems,
    };
  }).filter(productCategory => productCategory.items.length > 0);

  return (
    <div className="container mx-auto px-4">
    {/* <input
      type="text"
      placeholder="Search"
      className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none mb-6"
      value={searchQuery}
      onChange={handleSearch}
    /> */}
    {filteredProducts.map((productCategory, index) => (
      <div key={index} className="mb-10">
        <h2 className="text-2xl font-bold mb-6">{productCategory.category}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {productCategory.items.map((item, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <img
                src={item.imgSrc}
                alt={item.name}
                width={350}
                height={350}
                className="w-full object-cover"
              />
              <div className="p-4">
                <div className="text-xs text-blue-600 font-bold mb-2">BUY 1 @ Rs.{item.price}</div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
  );
}
