import React from 'react';

const Calendar = ({ appointments, bookAppointment }) => {
  const renderCalendar = () => {
    // Create an array of weekdays for the header row
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    return (
      <div className="calendar">
        <h2>Calendar</h2>
        <table>
          <thead>
            <tr>
              {weekdays.map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Render calendar rows */}
            {/* For simplicity, let's assume a month with 4 weeks */}
            {[...Array(4)].map((_, weekIndex) => (
              <tr key={weekIndex}>
                {/* Render cells for each day of the week */}
                {weekdays.map((_, dayIndex) => {
                  // Calculate the date for the current cell
                  const date = new Date();
                  date.setDate(date.getDate() + (weekIndex * 7) + dayIndex);
  
                  // Check if the date has appointments
                  const formattedDate = date.toISOString().split('T')[0];
                  const isBooked = appointments.some(appointment => appointment.date === formattedDate);
  
                  return (
                    <td
                      key={dayIndex}
                      className={isBooked ? 'booked' : 'available'}
                      onClick={() => isBooked ? null : bookAppointment(date)}>
                      {date.getDate()}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return renderCalendar();
};

export default Calendar;
