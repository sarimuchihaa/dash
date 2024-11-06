import React, { useState } from "react";

export default function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date(2021, 10, 23)); // November 2021
  
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    // Adjust for Monday as first day of week
    const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    
    const days = [];
    
    // Add days from previous month
    const prevMonth = new Date(year, month - 1, 1);
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      days.push({
        date: daysInPrevMonth - i,
        isCurrentMonth: false,
        isToday: false
      });
    }
    
    // Add days from current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        isCurrentMonth: true,
        isToday: i === currentDate.getDate()
      });
    }
    
    // Add days from next month if needed to fill 5 rows
    const totalDays = 35; // 5 rows × 7 days = 35
    for (let i = days.length + 1; i <= totalDays; i++) {
      days.push({
        date: i - daysInMonth,
        isCurrentMonth: false,
        isToday: false
      });
    }
    
    return days.slice(0, totalDays); // Limit to 35 days for 5 rows
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const days = getDaysInMonth(currentDate);
  const monthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="w-full max-w-sm rounded-lg bg-white shadow-md m-auto">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-black">{monthYear}</h2>
        <div className="flex gap-2">
          <button
            className="h-12 w-12 flex items-center justify-center rounded-full bg-transparent cursor-pointer"
            onClick={() => navigateMonth('prev')}
            aria-label="Previous month"
          >
            <span className="text-2xl">←</span>
          </button>
          <button
            className="h-12 w-12 flex items-center justify-center rounded-full bg-transparent cursor-pointer text-blue-500"
            onClick={() => navigateMonth('next')}
            aria-label="Next month"
          >
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {daysOfWeek.map(day => (
          <div key={day} className="py-2 text-black font-bold">
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <button
            key={index}
            className={`h-10 w-10 p-0 rounded-full ${
              day.isToday ? "bg-blue-500 text-white" : day.isCurrentMonth ? "bg-transparent text-black" : "bg-gray-200 text-gray-500 opacity-50"
            }`}
            aria-label={`Day ${day.date}`}
          >
            <time dateTime={`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day.date}`}>
              {day.date}
            </time>
          </button>
        ))}
      </div>
    </div>
  );
}
