"use client";
import React, { useContext, useState } from "react";

type InputValueContextType = {
  bookingSelect: {
    "car-type": string;
    "pickup-location": string;
    "dropof-location": string;
  };
  setBookingSelect: React.Dispatch<
    React.SetStateAction<{
      "car-type": string;
      "pickup-location": string;
      "dropof-location": string;
    }>
  >;
  bookingDate: {
    "pickup-date": string;
    "dropof-date": string;
  };
  setBookingDate: React.Dispatch<
    React.SetStateAction<{
      "pickup-date": string;
      "dropof-date": string;
    }>
  >;
  clearBookingInputs(): void;
};

const InputValueContext = React.createContext<InputValueContextType>({
  bookingSelect: {
    "car-type": "",
    "pickup-location": "",
    "dropof-location": "",
  },
  setBookingSelect: () => {},
  bookingDate: {
    "pickup-date": "",
    "dropof-date": "",
  },
  setBookingDate: () => {},
  clearBookingInputs() {},
});

export const useInputValueContext = () => useContext(InputValueContext);

export const InputValueProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookingSelect, setBookingSelect] = useState({
    "car-type": "",
    "pickup-location": "",
    "dropof-location": "",
  });
  const [bookingDate, setBookingDate] = useState({
    "pickup-date": "",
    "dropof-date": "",
  });

  function clearBookingInputs() {
    setBookingSelect({
      "car-type": "",
      "pickup-location": "",
      "dropof-location": "",
    });
    setBookingDate({
      "pickup-date": "",
      "dropof-date": "",
    });
    
  }

  return (
    <InputValueContext.Provider
      value={{
        bookingSelect,
        setBookingSelect,
        bookingDate,
        setBookingDate,
        clearBookingInputs,
      }}
    >
      {children}
    </InputValueContext.Provider>
  );
};
