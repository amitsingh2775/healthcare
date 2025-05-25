import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-2 mb-4">
      
      
      <div className="flex items-center space-x-4 mt-10">
        <button className="text-indigo-600">
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-lg font-semibold text-gray-700">October 2021</h2>
        <button className="text-indigo-600">
          <ArrowRight size={20} />
        </button>
      </div>

     
      <div className="flex items-center space-x-2 mt-10">
        <div className="w-8 h-8 rounded-md bg-[#00D5E2] flex items-center justify-center">
          <img src="./pro.png" alt="user icon" className="w-6 h-6" />
        </div>
        <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-lg">+</button>
      </div>
    </div>
  );
}
