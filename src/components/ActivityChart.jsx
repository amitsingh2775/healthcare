import React from 'react';

function ActivityChart() {
  const activityData = [
    { day: 'Mon', bars: [30, 30, 20] },
    { day: 'Tues', bars: [20, 35, 50] },
    { day: 'Wed', bars: [10, 25, 35] },
    { day: 'Thurs', bars: [30, 40, 25] },
    { day: 'Fri', bars: [15, 40, 80] },
    { day: 'Sat', bars: [18, 25, 35] },
    { day: 'Sun', bars: [20, 55, 30] },
  ];

  return (
    <div className="bg-blue-50 rounded-xl p-4  mx-4 h-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-blue-800 font-semibold text-lg">Activity</h3>
        <span className="text-gray-500 text-sm">3 appointments this week</span>
      </div>
      <div className="flex justify-between items-end h-20 px-2 mt-15">
        {activityData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-1">
            <div className="flex items-end space-x-1">
              {item.bars.map((height, i) => (
                <div
                  key={i}
                  className={`w-1.5 rounded-full ${i === 0 ? 'bg-gray-300' : i === 1 ? 'bg-cyan-400' : 'bg-indigo-500'}`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            <span className="text-sm text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityChart;
