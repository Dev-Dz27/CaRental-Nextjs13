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
        { id: 1, option: "Audi A1 S-Line" },
        { id: 2, option: "VW Golf 6" },
        { id: 3, option: "Toyota Camry" },
        { id: 4, option: "BMW 320 ModernLine" },
        { id: 5, option: "Mercedez-Benz GLK" },
        { id: 6, option: "VW Passat CC" },
      ],
    },
    {
      id: 2,
      htmlId: "pickup-location",
      label: { icon: IoLocationSharp, text: "Pick up Location" },
      placeholder: "Select your pick up location",
      options: [
        { id: 1, option: "Mostaganem" },
        { id: 2, option: "Oran" },
        { id: 3, option: "Alger" },
        { id: 4, option: "Tlemcen" },
        { id: 5, option: "Constantine" },
        { id: 6, option: "Djelfa" },
      ],
    },
    {
      id: 3,
      htmlId: "dropof-location",
      label: { icon: IoLocationSharp, text: "Drop of Location" },
      placeholder: "Select your drop of location",
      options: [
        { id: 1, option: "Oran" },
        { id: 2, option: "Mostaganem" },
        { id: 3, option: "Alger" },
        { id: 4, option: "Tlemcen" },
        { id: 5, option: "Constantine" },
        { id: 6, option: "Djelfa" },
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
    htmlId: "first-name",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
  },
  {
    id: 2,
    htmlId: "last-name",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
  },
  {
    id: 3,
    htmlId: "phone-number",
    label: "Phone Number",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    id: 4,
    htmlId: "age",
    label: "Age",
    type: "number",
    placeholder: "Enter your age",
  },
  {
    id: 5,
    htmlId: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email address",
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
