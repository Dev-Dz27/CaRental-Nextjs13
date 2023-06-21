import { AiFillCar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

export const bookingInputs = {
  select: [
    {
      id: 1,
      htmlId: "car-type",
      label: { icon: AiFillCar, text: "Select Your Car Type" },
      placeholder: "Select your car type",
      options: [
        { id: 1, option: "" },
        { id: 2, option: "Audi A1 S-Line" },
        { id: 3, option: "VW Golf 6" },
        { id: 4, option: "Toyota Camry" },
        { id: 5, option: "BMW 320 ModernLine" },
        { id: 6, option: "Mercedez-Benz GLK" },
        { id: 7, option: "VW Passat CC" },
        { id: 8, option: "Rolls Royce Ghost" },
      ],
    },
    {
      id: 2,
      htmlId: "pickup-location",
      label: { icon: IoLocationSharp, text: "Pick up Location" },
      placeholder: "Select your pick up location",
      options: [
        { id: 1, option: "" },
        { id: 2, option: "Mostaganem" },
        { id: 3, option: "Oran Ahmed Ben Bella Airport" },
        { id: 4, option: "Algiers Airport Houari Boumediene" },
        { id: 5, option: "Tlemcen" },
        { id: 6, option: "Constantine" },
        { id: 7, option: "Djelfa" },
      ],
    },
    {
      id: 3,
      htmlId: "dropof-location",
      label: { icon: IoLocationSharp, text: "Drop of Location" },
      placeholder: "Select your drop of location",
      options: [
        { id: 1, option: "" },
        { id: 2, option: "Mostaganem" },
        { id: 3, option: "Oran Ahmed Ben Bella Airport" },
        { id: 4, option: "Algiers Airport Houari Boumediene" },
        { id: 5, option: "Tlemcen" },
        { id: 6, option: "Constantine" },
        { id: 7, option: "Djelfa" },
      ],
    },
  ],
  input: [
    { id: 1, htmlId: "pickup-date", label: "Pick up Date" },
    { id: 2, htmlId: "dropof-date", label: "Drop of Date" },
  ],
};

export const personalInfo = [
  {
    id: 1,
    htmlId: "full-name",
    label: "Full Name",
    value: "text",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    id: 2,
    htmlId: "phone-number",
    label: "Phone Number",
    value: "text",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    id: 3,
    htmlId: "email",
    label: "Email",
    value: "email",
    type: "email",
    placeholder: "Enter your email address",
  },
  {
    id: 4,
    htmlId: "age",
    label: "Age",
    value: "number",
    type: "number",
    placeholder: "Enter your age",
  },
  {
    id: 5,
    htmlId: "note",
    label: "Note",
    value: "text",
    type: "text",
    placeholder: "e.g flight number AH1001 Just in case the flight is delayed",
  },
  // {
  //   id: 6,
  //   htmlId: "address",
  //   label: "Address",
  //   type: "text",
  //   placeholder: "Enter your street address",
  // },
  // {
  //   id: 7,
  //   htmlId: "city",
  //   label: "City",
  //   type: "text",
  //   placeholder: "Enter your city",
  // },
  // {
  //   id: 8,
  //   htmlId: "zip-code",
  //   label: "Zip Code",
  //   type: "text",
  //   placeholder: "Enter your zip code",
  // },
];
