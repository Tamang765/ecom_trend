import React,{useState, useEffect} from 'react'
import ProductCard from '../../components/UserDashboard/ProductCard'
import { Link } from "react-router-dom";
import axios from 'axios';

const Mens = () => {
  const [data, SetData] = useState([]);
  useEffect(()=>{
      const fetchdata = async()=>{
          try{
          let res =  await fetch('http://127.0.0.1:8000/product/')
          let datas = await res.json();
          console.log(datas)
          SetData(datas)
          }catch(e){
              console.log(e.message)
          }
      }
      fetchdata()
  },[])
  return (
    <>
    <div className="font-poppins p-4 mx-auto lg:max-w-6xl md:max-w-3xl sm:max-w-full ">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Mens Collection</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
        {/* <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/> */}
        { data.map(items=>(
            <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all" key={items.id}>
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img src="https://readymadeui.com/images/product2.webp" alt="Product 2"
                className="h-full w-full object-cover object-top" />
            </div>
  
            <div className="p-4">
              <h3 className="text-sm lg:text-lg  font-bold text-gray-800">{items.title}</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">Rs. {items.price}</h4>
  
                <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          ))
        }

       

        {/* <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product3.webp" alt="Product 3"
              className="h-full w-full object-cover object-top" />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">ThreadCraft Vibes | T-shirt</h3>
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <h4 className="text-lg font-bold text-gray-800">$14</h4>

              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product7.webp" alt="Product 3"
              className="h-full w-full object-cover object-top" />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Verbal Vogue Tees | T-shirt</h3>
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <h4 className="text-lg font-bold text-gray-800">$12</h4>

              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product5.webp" alt="Product 3"
              className="h-full w-full object-cover object-top" />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Jargon Jungle | T-shirt</h3>
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <h4 className="text-lg font-bold text-gray-800">$15</h4>

              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product6.webp" alt="Product 3"
              className="h-full w-full object-cover object-top" />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Syllable Streetwear | T-shirt</h3>
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <h4 className="text-lg font-bold text-gray-800">$14</h4>

              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default Mens