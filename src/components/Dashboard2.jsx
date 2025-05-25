import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import ScheduleList from './ScheduleList';
import Appointments from './Appointments';
import schedule from '../data/Schedule.json';

function Dashboard2() {
  return (
    <div className="p-4">
      <Header />
      <Calendar />
      <Appointments appointments={schedule} />
      <ScheduleList appointments={schedule} />
    </div>
  );
}

export default Dashboard2;
