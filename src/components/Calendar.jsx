import React from 'react';
import {ArrowLeft } from 'lucide-react'

export default function Calendar() {
  const week = [
    { day: 'Mon', date: 25, slots: ['10:00', '11:00', '12:00'] },
    { day: 'Tues', date: 26, active: true, slots: ['08:00', '09:00', '10:00'] },
    { day: 'Wed', date: 27, slots: ['12:00','-----', '13:00'] },
    { day: 'Thurs', date: 28, slots: ['10:00', '11:00','----'] },
    { day: 'Fri', date: 29, slots: ['----','14:00', '16:00'] },
    { day: 'Sat', date: 30, slots: ['12:00', '14:00', '15:00'] },
    { day: 'Sun', date: 31, disabled: true, slots: ['09:00', '10:00', '11:00'] },
  ];

  return (
    <div className="bg-[#F9FAFF] p-6 rounded-2xl shadow-md w-full">
    

   
      <div className="grid grid-cols-7 gap-4 text-center">
        {week.map((w, i) => (
         <div
  key={i}
  className={`px-4 py-2 w-18 rounded-2xl text-center ${
    w.active ? 'bg-[#EEF0FF]' : ''
  } ${w.disabled ? 'opacity-50' : ''}`}
>

            <p className="text-xs text-gray-500">{w.day}</p>
            <p className={`text-lg font-bold ${w.active ? 'text-indigo-600' : 'text-gray-800'}`}>
              {w.date}
            </p>
            <div className="mt-2 flex flex-col gap-1">
              {w.slots.map((time, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-2 py-1 rounded-full w-fit mx-auto text-slate-400 ${
                    w.active && time === '09:00'
                      ? 'bg-indigo-600 '
                      : ''
                  } 
                      
                       `}
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
