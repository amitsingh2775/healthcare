import React from 'react';

export default function ScheduleList({ appointments }) {
  const grouped = appointments
    .filter((a) => !a.doctor)
    .reduce((acc, curr) => {
      if (!acc[curr.day]) acc[curr.day] = [];
      acc[curr.day].push(curr);
      return acc;
    }, {});

  return (
    <div className="mt-8">
      <h3 className="font-semibold text-lg text-[#1F1F1F] mb-4">The Upcoming Schedule</h3>
      {Object.keys(grouped).map((day) => (
        <div key={day} className="mb-6">
          <p className="text-[#6B7280] font-semibold mb-2">On {day}</p>
          <div className="grid grid-cols-2 gap-4">
            {grouped[day].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#EAEFFF] text-[#1F1F1F] rounded-2xl p-4 shadow-sm"
              >
                <p className="font-semibold text-sm flex justify-between">
                  {item.type} <span>{item.icon}</span>
                </p>
                <p className="text-xs mt-1 text-[#4B5563]">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
