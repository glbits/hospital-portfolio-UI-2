
import React, { useState } from 'react';

interface CalendarProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = [];
  const totalDays = daysInMonth(year, month);
  const offset = firstDayOfMonth(year, month);

  // Padding for previous month
  for (let i = 0; i < offset; i++) {
    days.push(<div key={`empty-${i}`} className="h-10"></div>);
  }

  // Current month days
  for (let d = 1; d <= totalDays; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const isSelected = selectedDate === dateStr;
    const dateObj = new Date(year, month, d);
    const isPast = dateObj < today;

    days.push(
      <button
        key={d}
        type="button"
        disabled={isPast}
        onClick={() => onDateSelect(dateStr)}
        className={`h-10 w-full rounded-xl text-sm font-medium transition-all flex items-center justify-center
          ${isSelected ? 'bg-teal-600 text-white shadow-lg shadow-teal-200 scale-110 z-10' : ''}
          ${!isSelected && !isPast ? 'hover:bg-teal-50 text-slate-700' : ''}
          ${isPast ? 'text-slate-200 cursor-not-allowed' : ''}
        `}
      >
        {d}
      </button>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-bold text-slate-800 serif-font">
          {monthNames[month]} {year}
        </h4>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-teal-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNextMonth}
            className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-teal-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="h-8 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-slate-100 rounded-full"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase">Available</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
