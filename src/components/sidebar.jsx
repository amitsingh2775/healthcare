import React from 'react'
import { LayoutDashboard, History,CalendarDays,ShieldPlus,ChartLine,MessageCircleMore,Phone,Settings      } from 'lucide-react';

function Sidebar() {
    return (
        <div className=' w-full md:w-60 flex flex-col p-5 min-h-screen overflow-y-auto'>
            <div className='flex flex-col'>
                <div className="text-2xl font-medium mt-6 ml-5">
                    <span className="text-[#2ee8e2] font-bold">Health</span>
                    <span className="text-gray-800 font-bold">care.</span>
                </div>
                <div className='flex p-4 mt-1'>
                    <span className='text-slate-300'>General</span>
                </div>
                <div className='flex flex-col p-4 py-0.5'>
                    <div className="flex items-center space-x-2 w-full h-6">
                        <LayoutDashboard className='text-[#1114a8] w-4' />
                        <span className="text-md font-semibold text-[#1114a8]">Dashboard</span>
                    </div>

                    <div className="flex items-center space-x-2 w-full h-6 mt-3">
                        <History className=' w-4 text-slate-400 ' />
                        <span className="text-md font-semibold text-slate-400">History</span>
                    </div>
                    <div className="flex items-center space-x-2 w-full h-6 mt-3">
                        <CalendarDays className=' w-4 text-slate-400 ' />
                        <span className="text-md font-semibold text-slate-400">Calendar</span>
                    </div>
                    <div className="flex items-center space-x-2 w-full h-6 mt-3">
                        <ShieldPlus className=' w-4 text-slate-400 ' />
                        <span className="text-md font-semibold text-slate-400">Appointments</span>
                    </div>
                                        <div className="flex items-center space-x-2 w-full h-6 mt-3">
                        <ChartLine className=' w-4 text-slate-400 ' />
                        <span className="text-md font-semibold text-slate-400">Statics</span>
                    </div>
                </div>
                <div className='flex p-4 mt-5'>
                    <span className='text-slate-300'>Tools</span>
                </div>
                <div className='flex flex-col p-4 py-0.5 mt-1'>
                  <div className="flex items-center space-x-2 w-full h-6 mt-3">
                        <MessageCircleMore  className=' w-4 text-slate-400 ' />
                        <span className="text-md font-semibold text-slate-400">Chat</span>
                    </div>
                                        <div className="flex items-center space-x-2 w-full h-6 mt-3">
                        <Phone className=' w-4 text-slate-400 ' />
                        <span className="text-md font-semibold text-slate-400">Support</span>
                    </div>
                    <div className="flex items-center space-x-2 w-full h-6 mt-35">
                        <Settings className=' w-4 text-slate-400 ' />
                        <span className="text-md font-semibold text-slate-400">Setting</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar