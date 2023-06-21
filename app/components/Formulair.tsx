"use client"
import React from "react";
import { FormEvent, useState } from "react";
import moment from "moment";
import { BsCalendar2Date } from "react-icons/bs";
import Image from "next/image";



const Formulair = ({form}) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [job, setJob] = useState("");
  const [job2, setJob2] = useState("");
  const [adresse, setAdresse] = useState("");
  const DateNow = moment().format("MMMM Do YYYY, h:mm:ss a");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      email,
      phone,
      message,
      DateNow,
      job,
      job2,
      adresse,
    };
    setLoading(true);
    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
      
      
    });

    //when done
    // const content = await response.json();
    alert('Vous avez bien été enregistré!');


    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setJob("");
    setJob2("");
    setAdresse("");
    setLoading(false);
  };

  return (
    <div id="home" className="bg-white/75 pt-24  pb-12 bg-fixed bg-center bg-cover custom-img">
      
    <div className=" flex justify-center items-center m-12 text-center mb-12 ">
      <div className="  max-w-5xl mx-auto  py-4 w-[400px] bg-white rounded-2xl shadow-2xl drop-shadow-2xl ">
        <div className="mb-6 mt-6">
          <h1 className="mb-4 text-[28px] font-extrabold text-gray-900/90 dark:text-white md:text-5xl lg:text-[45px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Inscription au formation:{" "}
            </span>{" "}
            {form.formation}{" "}
          </h1>
          <p className="mx-2 text-base font-normal text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
           {form.desc}
          </p>
          
        </div>

        <form className=" space-y-4  " onSubmit={handleSubmit}>
          {/* name */}
          <div className="px-4">
            <label
              htmlFor="name"
              className="sr-only block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            ></label>
            <input
            required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="*Nom et prénom"
            />
          </div>

          {/* email */}
          <div className="px-4">
            <label
              htmlFor="email"
              className="sr-only block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              email
            </label>
            <input
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Adresse e-mail"
            />
          </div>

          {/* phone */}
          <div className="px-4">
            <label
              htmlFor="phone"
              className="sr-only block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              phone
            </label>
            <input
            required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              name="phone"
              id="phone"
              pattern="[0]{1}[0-9]{9}"
              placeholder="*Numéro de téléphone"
            />
          </div>

          {/* Adresse */}
          <div className="px-4">
            <label
              htmlFor="adresse"
              className="sr-only block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Adresse
            </label>
            <input
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
              type="adresse"
              name="adresse"
              id="adresse"
              placeholder="Adresse"
            />
          </div>
          {/* Options */}

          <div 
          className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
          >
            <label
              className="block text-left uppercase tracking-wide text-gray-900 dark:text-gray-300 text-xs  mb-2 "
              htmlFor="grid-state"
            >
             <span className="text-red-700">*</span>Profession

            </label>
            <div className="relative">
              <select
              required
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500   appearance-none w-full  py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white "
                id="grid-state"
              >
                {form.professions.map((profession,index) => (
                  <option key={index} value={profession}>{profession}</option>
                  ) 
                )}
                {/* <option value="Etudiant (e) en Science médicale">Etudiant (e) en Science médicale</option>
                <option value="Médecin">Médecin</option>
                <option value="Dentiste">Dentiste</option>
                <option value="Pharmacien(ne)">Pharmacien(ne)</option>
                <option value="Biologiste">Biologiste</option>
                <option value="Etudiant(e) en paramédical">Etudiant(e) en paramédical</option>
                <option value="Autre">Autre</option> */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Other */}
          <div className="px-4">
          <label
              className="block text-left uppercase tracking-wide text-gray-900 dark:text-gray-300 text-xs  mb-2 "
              htmlFor="grid-state"
            >
              Si autre précisez
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={job2}
              onChange={(e) => setJob2(e.target.value)}
              type="text"
              name="other"
              id="other"
              placeholder="Ton réponse"
            />
          </div>
          {/* message */}
          <div className="px-4">
            <label
              htmlFor="message"
              className="sr-only block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              message
            </label>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              id="message"
              placeholder="Commentaires / Questions"
            />
          </div>

              {loading ? <div role="status">
    <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div> : null}
          <div>
            <button
              type="submit"
              className="text-sm w-64 rounded-md shadow py-3 px-2 text-white hover:bg-gradient-to-bl bg-gradient-to-r  to-[#b673f8] from-[#4ca5ff]   hover:to-[#b673f8]   hover:from-[#4ca5ff]  hover:duration-300 focus:ring-4 focus:outline-none focus:ring-slate-100 duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      
      </div>
    </div>
    </div>
  );
};

export default Formulair;
