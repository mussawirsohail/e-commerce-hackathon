"use client"
import React from 'react';
import Link from 'next/link';

const Shopmain = () => {
  // Sample product data
  const products = [
    {
      image: '/photo.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo2.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo3.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
      image: '/photo4.png',
      title: 'Graphic Design',
      department: 'English Department',
      originalPrice: 16.48,
      price: 6.48,
      colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
    },
    {
        image: '/photo5.png',
        title: 'Graphic Design',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      {
        image: '/photo6.png',
        title: 'Graphic Design',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      {
        image: '/photo7.png',
        title: 'Graphic Design',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      {
        image: '/photo8.png',
        title: 'Graphic Design',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      
    {
        image: '/photo9.png',
        title: 'Graphic Design',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      {
        image: '/photo10.png',
        title: 'Graphic Design',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      {
        image: '/photo11.png',
        title: 'Graphic Design',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      },
      {
        image: '/photo12.png',
        title: 'Graphic Design',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
      }
  ];

  return (

    <div className="container mx-auto py-12  ">
      <h2 className="text-2xl  text-center mb-4">Featured Products</h2>
      <h3 className="text-3xl font-bold text-center mb-4">BESTSELLER PRODUCTS</h3>
      <p className=" text-center">Problems trying to resolve the conflict between</p>
      <div className="grid grid-cols-4 gap- 4 ml-[70px] ">
        {products.map((product, index) => (
          <div key={index} className="bg-white  w-[239px]  mt-[90px] overflow-hidden">
            <div className=" h-[427px] w-[239px] " style= {{ backgroundImage: `url(${product.image})` }} />
            <div className="p-4 ">
              <h4 className="text-lg font-medium mb-2">{product.title}</h4>
              <p className="text-gray-500 mb-4">{product.department}</p>
              <div className="flex items-center justify-between ">
                <p className="text-gray-500 line-through mr-2">${product.originalPrice}</p>
                <p className="text-blue-500 font-medium">${product.price}</p>
              </div>
              <div className="flex mt-4">
                {product.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="w-6 h-6 rounded-full mr-2"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopmain

