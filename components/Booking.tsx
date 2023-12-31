"use client";
import React from "react";
import { bookingInputs } from "@/data/input";
import { AiFillCalendar } from "react-icons/ai";
import { useInputValueContext } from "@/context/inputValue";
import { AiOutlineClose } from "react-icons/ai";
import { useTogglersContext } from "@/context/togglers";
import Link from "next/link";

function Booking() {
  const { bookingSelect, setBookingSelect, bookingDate, setBookingDate } =
    useInputValueContext();
  const { bookingFields, setBookingFields, setBookingModal } =
    useTogglersContext();

  function getSelectValue(id: string) {
    switch (id) {
      case "car-type":
        return bookingSelect["car-type"];
      case "pickup-location":
        return bookingSelect["pickup-location"];
      case "dropof-location":
        return bookingSelect["dropof-location"];
      default:
        break;
    }
  }

  // Test
  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString();
    let day = currentDate.getDate().toString();

    // Add leading zeros if month/day is a single digit
    if (month.length === 1) {
      month = "0" + month;
    }
    if (day.length === 1) {
      day = "0" + day;
    }

    return `${year}-${month}-${day}`;
  }

  // Test

  return (
    <section
      className="mx-8 my-16 p-6 lg:p-12 lg:mx-28 bg-white bg-book-bg rounded shadow-white-box space-y-8"
      id="booking"
    >
      <div>
        <h1 className="text-2xl font-bold">Book a car</h1>
      </div>
      {bookingFields.red && (
        <div className="flex items-center justify-between bg-custom-pink py-2 px-4 rounded text-custom-maroon font-medium">
          <p>All fields required!</p>
          <button
            onClick={() => setBookingFields({ ...bookingFields, red: false })}
          >
            <AiOutlineClose />
          </button>
        </div>
      )}
      {bookingFields.green && (
        <div className="flex items-center justify-between bg-light-green py-2 px-4 rounded text-dark-green font-medium">
          <div>
            <p>Successfully booked🎉</p>
            <p className="text-sm font-extralight">
              Our operators will check vehicle availability and confirm your
              reservation and reach out to you.
            </p>
          </div>
          <button
            onClick={() => setBookingFields({ ...bookingFields, green: false })}
          >
            <AiOutlineClose />
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
        {bookingInputs.select.slice(1).map((data) => (
          <div key={data.id} className="flex flex-col gap-4">
            <label htmlFor={data.htmlId} className="flex items-center gap-2">
              <span className="text-custom-orange text-xl">
                <data.label.icon />
              </span>
              <span className="font-semibold">{data.label.text}</span>
              <span className="text-custom-orange font-bold">*</span>
            </label>
            <select
              id={data.htmlId}
              className="p-2 border border-lightest-grey text-custom-grey rounded text-sm bg-transparent"
              onChange={(e) =>
                setBookingSelect({
                  ...bookingSelect,
                  [data.htmlId]: e.target.value,
                })
              }
              value={getSelectValue(data.htmlId)}
            >
              {data.options.map((data) => (
                <option key={data.id} value={data.option} className="m-8">
                  {data.option}
                </option>
              ))}
            </select>
          </div>
        ))}
        {bookingInputs.input.map((data) => (
          <div key={data.id} className="flex flex-col gap-4">
            <label htmlFor={data.htmlId} className="flex items-center gap-2">
              <span className="text-custom-orange text-xl">
                <AiFillCalendar />
              </span>
              <span className="font-semibold">{data.label}</span>
              <span className="text-custom-orange font-bold">*</span>
            </label>
            <input
              type="date"
              id={data.htmlId}
              className="p-2 border border-lightest-grey text-custom-grey rounded text-sm w-full bg-transparent"
              onChange={(e) =>
                setBookingDate({
                  ...bookingDate,
                  [data.htmlId]: e.target.value,
                })
              }
              value={
                data.htmlId === "pickup-date"
                  ? bookingDate["pickup-date"]
                  : bookingDate["dropof-date"]
              }
              min={getCurrentDate()} // Set the min attribute to the current date
            />
          </div>
        ))}
        <Link
          href="/models/#models-main"
          className="bg-custom-orange w-full text-center shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear text-white p-2  font-bold rounded "
          // onClick={() => {
          //   setBookingFields({
          //     ...bookingFields,
          //     red:
          //       bookingDate["pickup-date"] !== "" &&
          //       bookingDate["dropof-date"] !== ""
          //         ? false
          //         : true,
          //   });
          //   bookingDate["pickup-date"] !== "" &&
          //   bookingDate["dropof-date"] !== ""
          //     ? setBookingModal(true)
          //     : null;
          // }}
        >
          Search
        </Link>
      </div>
    </section>
  );
}

export default Booking;
