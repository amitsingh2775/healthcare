import React from 'react';
import { Search, Bell, ChevronDown, ZoomIn, MoveRight } from 'lucide-react';
import ActivityChart from './ActivityChart';

function Dashboard() {
  return (
    <div className='flex flex-col'>
      
      <div className="flex items-center border border-gray-100 px-2 w-full max-w-md ml-4 mt-4 rounded-xl p-2">
        <span className="text-gray-500"><Search /></span>
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-2 py-1 outline-none bg-transparent"
        />
        <span className="text-blue-700"><Bell /></span>
      </div>

     
      <div className='flex mt-4'>
        <div className='flex items-center justify-between w-full max-w-md'>
          <span className='ml-3 text-blue-800 font-bold w-40 text-2xl'>Dashboard</span>
          <div className='flex items-center'>
            <span className='text-blue-800 font-semibold'>This week</span>
            <ChevronDown className='mt-1 w-5 text-slate-300' />
          </div>
        </div>
      </div>

      
      <div className='flex w-full p-3 h-[350px]'>
       
        <div className='w-1/2 bg-slate-100 relative flex justify-center items-center rounded-md'>
          <img
            src="./anatomy.png"
            alt="Human Body"
            className="h-full object-contain"
          />
          <div className="absolute top-[23%] right-[-20px] bg-blue-800 text-white px-3 py-1 rounded-lg shadow-md flex items-center gap-1 text-sm">
            ❤️ <span>Healthy Heart</span>
          </div>
          <div className="absolute bottom-[30%] left-[-10px] bg-cyan-400 text-black px-3 py-1 rounded-lg shadow-md flex items-center gap-1 text-sm">
            🦵 <span>Healthy Leg</span>
          </div>
          <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
            <ZoomIn />
          </button>
        </div>

        
        <div className='w-1/2 p-4 ml-2 rounded-md space-y-4 overflow-y-auto'>
          {[
            { emoji: '🫁', title: 'Lungs', color: 'bg-red-900', width: 'w-2/3' },
            { emoji: '🦷', title: 'Teeth', color: 'bg-teal-400', width: 'w-1/2' },
            { emoji: '🦴', title: 'Bone', color: 'bg-orange-500', width: 'w-2/5' },
          ].map((item, index) => (
            <div key={index} className="bg-slate-100 rounded-xl shadow p-3 space-y-1">
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                <span className="text-xl">{item.emoji}</span>
                {item.title}
              </div>
              <p className="text-xs text-gray-400">Date: 26 Oct 2021</p>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className={`h-full rounded-full ${item.color} ${item.width}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className='flex mt-[-20px]'>
        <div className='flex items-center justify-between w-full max-w-md'>
          <span className='ml-3 text-blue-800 font-bold w-40 text-2xl'></span>
          <div className='flex items-center'>
            <span className='text-blue-500 font-semibold'>Details</span>
            <MoveRight className='mt-1 w-5 ml-2 text-blue-500' />
          </div>
        </div>
      </div>

     
      <div className='mt-10'>
         <ActivityChart />
      </div>
     
    </div>
  );
}

export default Dashboard;
