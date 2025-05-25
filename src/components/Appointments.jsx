import React from 'react';

export default function Appointments({ appointments }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {appointments.slice(0, 2).map((item, index) => (
        <div
          key={index}
          className={`p-4 rounded-2xl ${
            index === 0 ? 'bg-[#2A2ED2] text-white' : 'bg-[#EAEFFF] text-[#1F1F1F]'
          }`}
        >
          <h4 className="font-semibold text-sm flex items-center justify-between">
            {item.type} <span className="text-lg">{item.icon}</span>
          </h4>
          <p className="text-sm mt-2">{item.time}</p>
          <p className="text-xs">{item.doctor}</p>
        </div>
      ))}
    </div>
  );
}
