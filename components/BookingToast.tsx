import React, { useEffect, useState } from "react";
import { AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
import { useTogglersContext } from "@/context/togglers";
import { useInputValueContext } from "@/context/inputValue";
import Image from "next/image";

function BookingToast() {
  const { bookingToast, setBookingToast } = useTogglersContext();
  const { bookingSelect, clearBookingInputs } = useInputValueContext();

  function handleClose() {
    setBookingToast(false);
    clearBookingInputs();
  }

  // Test

  // Test

  useEffect(() => {
    document.body.style.overflowY = bookingToast ? "hidden" : "auto";
  }, [bookingToast]);

  if (!bookingToast) return null;

  return (
    <section id="booking-modal">
      <div className="bg-black/70 fixed inset-0 z-40 text-center ">
        <div className="absolute bg-white inset-y-0 inset-x-0 lg:inset-y-16 lg:inset-x-80 z-50 overflow-y-auto">
          <div className="bg-green-400 text-center  flex items-center justify-between text-white text-2xl p-4 font-bold ">
            <h1 className="text-center flex-auto "> RESERVATION COMPLETED</h1>
            <button onClick={handleClose}>
              <AiOutlineClose />
            </button>
          </div>

          <div className="bg-green-100 p-4 space-y-4">
            <div className="text-green-500 flex items-center  gap-2">
              <span className="text-2xl">
                <AiFillInfoCircle />
              </span>
              <span className="font-bold lg:text-xl">
                Successfully booked 🎉
              </span>
            </div>
            <div>
              <p className="text-custom-grey font-medium">
                Thank you for contacting Car Auto Rental, a team representative
                will be in contact with you shortly.
              </p>
            </div>
          </div>
          <hr className="border border-custom-grey/25" />
          <div className="text-center lg:text-left px-8 py-10 flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    The{" "}
                    <span className="text-green-500">
                      {bookingSelect["car-type"]}
                    </span>{" "}
                    is being prepared
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
        </div>
      </div>
    </section>
  );
}

export default BookingToast;
