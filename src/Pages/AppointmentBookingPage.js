// AppointmentBookingPage.js
import React, { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';

const AppointmentBookingPage = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from API
  useEffect(() => {
    // Fetch appointments data from your backend API
    const fetchAppointments = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await fetch('your_api_endpoint_here');
        
        // Check if the response is successful (status code 200)
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        
        // Parse the JSON response
        const data = await response.json();
        
        // Set the fetched appointments in state
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        // Handle errors (e.g., display an error message to the user)
      }
    };
  
    // Call the fetchAppointments function when the component mounts
    fetchAppointments();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  // Define the bookAppointment function
  const bookAppointment = (date) => {
    // Logic to book appointment
    // You can send a request to your backend to save the appointment
    alert(`Appointment booked for ${date}`);
  };

  return (
    <div>
      <h1>Doctor's Appointment Booking</h1>
      <Calendar appointments={appointments} bookAppointment={bookAppointment} />
    </div>
  );
};

export default AppointmentBookingPage;
