import React from "react";

const Card = ({ name, price, stock, photo }) => {
  return (
    <div className="card relative border-2 rounded-xl overflow-hidden w-[10.5rem] md:w-max">
    <button className="absolute right-2 top-2 p-1 rounded-xl bg-white opacity-50 hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
    </button>
      <img src={photo} alt="product" className="w-[10.5rem] h-[10.5rem] md:w-[15rem] md:h-[15rem]" />
      <div className="wrapperContent my-3">
        <p className="font-medium text-sm my-2 md:text-lg">{name}</p>
        <div className="flex px-3">
          <div className="w-1/2 block md:flex border-r">
            <p className="text-center md:text-left text-xs md:text-sm font-semibold">Price</p>
            <p className="text-center md:text-left text-xs md:text-sm ml-1">{price}</p>
          </div>
          <div className="w-1/2 border-l block md:flex">
            <p className="text-center md:text-left text-xs md:text-sm font-semibold pl-1">Stock</p>
            <p className="text-center md:text-left text-xs md:text-sm ml-1">{stock}</p>
          </div>
        </div>
        <div className="flex px-3 my-1">
          <div className="w-1/2 block md:flex border-l">
            <p className="text-center md:text-left text-xs md:text-sm font-semibold">Order</p>
            <p className="text-center md:text-left text-xs md:text-sm ml-1">10</p>
          </div>
          <div className="w-1/2 border-l block md:flex">
            <p className="text-center md:text-left text-xs md:text-sm font-semibold pl-1">Status</p>
            <p className="text-center md:text-left text-xs md:text-sm ml-1">Actived</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
