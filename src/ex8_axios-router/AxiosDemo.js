import React, { useState } from "react";
import axios from "axios";

const AxiosDemo = () => {
  const baseURL = "http://localhost:8080";

  const [bookings, setBookings] = useState([]);

  const getBookingsClickHandler = async () => {
    console.log("Start");

    await axios
      .get(baseURL + "/api/v1/booking/from/2023-12-11/to/2023-12-12")
      .then((response) => {
        console.log("RESPONSE:", response);
        if (response.status === 200) {
          console.log("DATA:", response.data);
          setBookings(response.data);
        }
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });

    console.log("End");
  };

  const bookBookingClickHandler = () => {
    
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-info"
            type="button"
            onClick={getBookingsClickHandler}
          >
            Get Bookings
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {bookings && bookings.length !== 0 && (
            <h2 className="mb-4">Booking List</h2>
          )}
          <div className="row">
            {bookings.map((booking) => (
              <div className="card mb-4 col-md-3">
                <div className="card-body">
                  <h5 className="card-title">{booking.dateTime}</h5>
                </div>
                <div className="d-grid card-footer">
                    <button type="button" className="btn btn-success" onClick={bookBookingClickHandler} >Book</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiosDemo;
