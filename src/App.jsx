import React, { useState } from 'react';
import Datas from "./component/Data.json";

export default function App() {
  const [isAnnually, setIsAnnually] = useState(false);
  const [clickedBoxIndex, setClickedBoxIndex] = useState(null);

  const handleToggle = () => {
    setIsAnnually(!isAnnually);
  };

  const handleBoxClick = (index) => {
    setClickedBoxIndex(index === clickedBoxIndex ? null : index);
  };

  return (
    <main className="min-h-screen bg-VeryLightGrayishBlue bg-bg-bottom bg-no-repeat bg-left-bottom">
      <section className=" bg-bg-top bg-no-repeat bg-right-top bg-contain">
        <div className="flex flex-col justify-center items-center p-8 gap-4">
          <h1>Our Pricing</h1>
          {/* Toggle */}
          <label className="inline-flex items-center cursor-pointer">
            <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Annually</span>
            <input type="checkbox" 
            checked = {isAnnually}
            onChange= {handleToggle}
            className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Monthly</span>
          </label>

          {/* Box */}
          <div className="flex flex-col sm:flex-row gap-4">
            {Datas.map((data, index) => (
              <div key={index}
              onClick={() => handleBoxClick(index)}
              className={`w-80 flex flex-col text-center p-4 gap-4 rounded-lg bg-white ${index === clickedBoxIndex ? 'transform scale-110 z-10 bg-gradient-to-t from-linear1 to-linear2 text-white' : ''}`}>
                <h1 className='font-semibold text-DarkGrayishBlue'>{data.name}</h1>
                <span className='text-4xl'>${!isAnnually ? (data.price * 10).toFixed(2) : data.price}</span>
                <hr className="border-2" />
                <p className='text-DarkGrayishBlue'>{data.info.storage} Storage</p>
                <hr className='border-1' />
                <p className='text-DarkGrayishBlue'>{data.info.users} User Allowed</p>
                <hr className="border-2" />
                <p className='text-DarkGrayishBlue'>Send up to {data.info.devices} GB</p>
                <hr className="border-1" />
                <button className={`uppercase py-2 rounded-md ${index !== clickedBoxIndex ? " text-white bg-gradient-to-r from-linear1 to-linear2" : "bg-white text-GrayishBlue"} hover:text-GrayishBlue hover:bg-none hover:border-2`}>learn more</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}