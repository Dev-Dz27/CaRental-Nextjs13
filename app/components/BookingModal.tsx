import React, { useEffect, useState } from "react";
import {
  AiFillInfoCircle,
  AiOutlineClose,
  AiFillCalendar,
} from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { useTogglersContext } from "../context/togglers";
import { useInputValueContext } from "../context/inputValue";
import Image from "next/image";
import { bookingInputs, personalInfo } from "@/data/input";
import moment from "moment";
import { RiErrorWarningLine } from "react-icons/ri";

function BookingModal() {
  const { bookingModal, setBookingModal, setBookingToast } =
    useTogglersContext();
  const { bookingSelect, bookingDate, setBookingSelect, setBookingDate } =
    useInputValueContext();

  const [personalInfoInputs, setPersonalInfoInputs] = useState({
    ...personalInfo.reduce((obj, data) => ({ ...obj, [data.id]: "" }), {}),
    ...bookingDate,
    ...bookingSelect,
  });
  const [pickupTime, setPickupTime] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  const [babySeatChecked, setBabySeatChecked] = useState(false);

  const formattedData = {
    name: personalInfoInputs["1"],
    phone: personalInfoInputs["2"],
    email: personalInfoInputs["3"],
    age: personalInfoInputs["4"],
    note: personalInfoInputs["5"],
    DateNow: moment().format("MMMM Do YYYY, h:mm:ss a"), // Update to use the correct key
    pickupDate: `${personalInfoInputs["pickup-date"]}, ${pickupTime}`,
    dropOffDate: `${personalInfoInputs["dropof-date"]}, ${dropOffTime}`,
    carType: personalInfoInputs["car-type"],
    pickupLocation: personalInfoInputs["pickup-location"],
    babySeatChecked: babySeatChecked,
    dropOffLocation: personalInfoInputs["dropof-location"],
  };

  // const fieldOrder = [
  //   "name",
  //   "email",
  //   "phone",
  //   "age",
  //   "carType",
  //   "pickupDate",
  //   "pickupLocation",
  //   "dropOffDate",
  //   "dropOffLocation",
  //   "note",
  //   "DateNow",
  // ];

  // const formattedData = {
  //   name: personalInfoInputs1["name"],
  //   email: personalInfoInputs1["email"],
  //   phone: personalInfoInputs1["phone"],
  //   age: personalInfoInputs1["age"],
  //   carType: personalInfoInputs1["carType"],
  //   pickupDate: personalInfoInputs1["pickupDate"],
  //   pickupLocation: personalInfoInputs1["pickupLocation"],
  //   dropOffDate: personalInfoInputs1["dropOffDate"],
  //   dropOffLocation: personalInfoInputs1["dropOffLocation"],
  //   note: personalInfoInputs1["note"],
  //   babySeatChecked: babySeatChecked,
  //   DateNow: personalInfoInputs1["DateNow"],
  // };

  // Now, `formattedData` will contain the values in the desired order

  // const dummyData = {
  //   name: "John Doe",
  //   email: "johndoe@example.com",
  //   phone: 1234567890,
  //   age: 123,
  //   carType: "BMW",
  //   pickupDate: "2021-10-11",
  //   pickupLocation: "Alger",
  //   dropOffDate: "2021-12-10",
  //   dropOffLocation: "Oran",
  //   note: "test",
  //   DateNow: "2023-06-14",
  // };

  const [showToast, setShowToast] = useState(false); // State variable for toast message
  const [showWarn, setShowWarn] = useState(false); // State variable for toast message

  async function handleSubmit(e) {
    e.preventDefault();
    if (bookingDate["pickup-date"] && bookingSelect["pickup-location"]) {
      setShowToast(true); // Show the toast message
      try {
        const response = await fetch("/api/hello", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        });
        // const response = await axios.post("/api/hello", formattedData);
        // console.log(response); // Optional: Log the response data

        setBookingModal(false);
        setShowToast(false); // Hide the toast message after 2.5 seconds
        setBookingToast(true);

        // Clear the fields except for the car type field
        setPersonalInfoInputs((prevInputs) => ({
          "car-type": prevInputs["car-type"],
          "pickup-location": "",
          "dropof-location": "",
          "pickup-date": "",
          "dropof-date": "",
        }));

        setPickupTime("");
        setDropOffTime("");
        setBabySeatChecked(false);
      } catch (error) {
        setShowToast(true); // Show the toast message
        console.error(error);
        // Handle error
      }
    } else {
      // Redirect to bookingDate inputs or show a message
      // Add your logic here
      setShowWarn(true); // Hide the toast message after 5 seconds

      setTimeout(() => {
        setShowWarn(false); // Hide the toast message after 5 seconds
      }, 2000); // 5000 milliseconds = 5 seconds
    }
    // setShowToast(false); // Show the toast message
  }

  useEffect(() => {
    document.body.style.overflowY = bookingModal ? "hidden" : "auto";
    setPersonalInfoInputs((prevInputs) => ({
      ...prevInputs,
      ...bookingDate,
      ...bookingSelect,
    }));
  }, [bookingModal, bookingDate, bookingSelect]);

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
  if (!bookingModal) return null;

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
    <section id="booking-modal">
      <div className="bg-black/70 fixed inset-0 z-50">
        <div className="absolute bg-white inset-y-0 inset-x-0 lg:inset-y-16 lg:inset-x-80 z-50 overflow-y-auto">
          <div className="bg-custom-orange flex items-center justify-between text-white text-2xl p-4 font-bold">
            <h1>COMPLETE RESERVATION</h1>
            <button onClick={() => setBookingModal(false)}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="bg-custom-pink p-4 space-y-4">
            <div className="text-custom-orange flex items-center gap-2">
              <span className="text-2xl">
                <AiFillInfoCircle />
              </span>
              <span className="font-bold lg:text-xl">
                Upon completing this reservation enquiry, you will receive:
              </span>
            </div>
            <div>
              <p className="text-custom-grey font-medium">
                Your rental voucher to produce on arrival at the rental desk and
                a toll-free customer support number.
              </p>
            </div>
          </div>
          <div className="text-center lg:text-left px-8 py-10 flex flex-col gap-12  lg:justify-between">
            <div className="space-y-6">
              <div>
                <h1 className="text-custom-orange font-bold text-lg">
                  Location & Date
                </h1>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-lg">
                    <AiFillCalendar />
                  </span>
                  <h3 className="font-bold">Pick Up Date & Time</h3>
                </div>
                <div>
                  <span className="flex items-center justify-center gap-2 text-custom-grey">
                    {bookingInputs.input.slice(0, 1).map((data) => (
                      <input
                        key={data.htmlId}
                        type="date"
                        id={data.htmlId}
                        className="border border-lightest-grey rounded text-sm px-2 text-center bg-transparent w-fit"
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
                    ))}
                    <p>{/* {bookingDate["pickup-date"]} */}/ </p>
                    <input
                      type="time"
                      className="border border-lightest-grey rounded text-sm px-2 text-center bg-transparent w-fit"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                    />
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-lg">
                    <AiFillCalendar />
                  </span>
                  <h3 className="font-bold">Drop Off Date & Time</h3>
                </div>
                <div>
                  <span className="flex items-center justify-center gap-2 text-custom-grey">
                    {bookingInputs.input.slice(1, 2).map((data) => (
                      <input
                        key={data.htmlId}
                        type="date"
                        id={data.htmlId}
                        className="border border-lightest-grey rounded text-sm px-2 text-center bg-transparent w-fit"
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
                    ))}
                    <p>{/* {bookingDate["dropof-date"]}  */}/ </p>
                    <input
                      type="time"
                      className="border border-lightest-grey rounded text-sm px-2 text-center bg-transparent w-fit"
                      value={dropOffTime}
                      onChange={(e) => setDropOffTime(e.target.value)}
                    />
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-lg">
                    <IoLocationSharp />
                  </span>
                  <h3 className="font-bold">Pick Up Location</h3>
                </div>
                <div>
                  {bookingInputs.select.slice(1, 2).map((data) => (
                    <select
                      key={data.htmlId}
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
                        <option
                          key={data.id}
                          value={data.option}
                          className="m-8"
                        >
                          {data.option}
                        </option>
                      ))}
                    </select>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-lg">
                    <IoLocationSharp />
                  </span>
                  <h3 className="font-bold">Drop Off Location</h3>
                </div>
                <div>
                  {bookingInputs.select.slice(2).map((data) => (
                    <select
                      key={data.htmlId}
                      id={data.htmlId}
                      className="p-2 border border-lightest-grey text-custom-grey rounded text-sm bg-transparent "
                      onChange={(e) =>
                        setBookingSelect({
                          ...bookingSelect,
                          [data.htmlId]: e.target.value,
                        })
                      }
                      value={getSelectValue(data.htmlId)}
                    >
                      {data.options.map((data) => (
                        <option
                          key={data.id}
                          value={data.option}
                          className="m-8"
                        >
                          {data.option}
                        </option>
                      ))}
                    </select>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg">
                    Car -{" "}
                    <span className="text-custom-orange">
                      {bookingSelect["car-type"]}
                    </span>
                  </h3>
                </div>
                <div>
                  <Image
                    src={`/images/${bookingSelect["car-type"]}.png`}
                    alt={bookingSelect["car-type"]}
                    width={600}
                    height={600}
                    className="m-auto w-96"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-custom-grey/25" />
          <form onSubmit={handleSubmit} className="px-8 py-10 space-y-8">
            <div>
              <h1 className="font-bold text-custom-orange text-lg">
                PERSONAL INFORMATION
              </h1>
            </div>
            <div className="space-y-6">
              {personalInfo.slice(0, 4).map((data) => (
                <div key={data.id} className="flex flex-col gap-2">
                  <label htmlFor={data.htmlId}>
                    <span className="text-dark-grey font-medium">
                      {data.label}
                    </span>{" "}
                    <span className="text-custom-orange">*</span>
                  </label>
                  <input
                    required
                    type={data.type}
                    placeholder={data.placeholder}
                    className="bg-lighter-grey p-3 text-sm placeholder:text-custom-grey rounded"
                    value={personalInfoInputs[data.id] || ""} // Get the value from personalInfoInputs state
                    onChange={(e) =>
                      setPersonalInfoInputs({
                        ...personalInfoInputs,
                        [data.id]: e.target.value, // Update the specific input value
                      })
                    }
                  />
                </div>
              ))}
              {personalInfo.slice(4).map((data) => (
                <div key={data.id} className="flex flex-col gap-2">
                  <label htmlFor={data.htmlId}>
                    <span className="text-dark-grey font-medium">
                      {data.label}
                    </span>{" "}
                    <span className="text-slate-400"> (optional)</span>
                  </label>
                  <textarea
                    placeholder={data.placeholder}
                    className="bg-lighter-grey p-3 text-sm placeholder:text-custom-grey rounded"
                    value={personalInfoInputs[data.id] || ""} // Get the value from personalInfoInputs state
                    onChange={(e) =>
                      setPersonalInfoInputs({
                        ...personalInfoInputs,
                        [data.id]: e.target.value, // Update the specific input value
                      })
                    }
                  />
                </div>
              ))}

              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="cb"
                  checked={babySeatChecked}
                  onChange={(e) => setBabySeatChecked(e.target.checked)}
                />
                <label htmlFor="cb">Baby seat (1€/day)</label>
              </div>
            </div>
            {showWarn && (
              <div className="flex flex-col justify-center  bg-custom-pink py-2 px-4 my-4 rounded text-center  font-normal">
                <RiErrorWarningLine className="w-6 h-6 mx-auto " />
                <p>
                  Please provide a{" "}
                  <span className="font-medium">pick-up location & Date</span>
                </p>
              </div>
            )}
            <div className="lg:flex lg:justify-end">
              <button
                type="submit"
                disabled={showToast ? true : false}
                className="bg-custom-orange  w-full lg:w-fit shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear text-white p-3 font-bold rounded"
              >
                {/* Reserve Now */}
                {showToast ? (
                  <div role="status" className="font-medium">
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white "
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    Processing...
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Reserve now"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookingModal;
