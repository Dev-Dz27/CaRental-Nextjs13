import React from "react";
import { faq } from "@/data/content";
import { useTogglersContext } from "@/context/togglers";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Faq() {
  const { showAnswer, setShowAnswer } = useTogglersContext();

  function toggleAnswer(id) {
    setShowAnswer((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((key) => {
        newState[key] = key === `q${id}` ? !newState[key] : false;
      });
      return newState;
    });
  }

  return (
    <section id="faq">
      <div className="bg-faq-bg bg-white bg-no-repeat bg-[0_70%] px-8 lg:px-[22rem] py-16 lg:py-24 my-16 space-y-16">
        <div className="space-y-6">
          <div className="text-center font-bold space-y-2">
            <h3 className="text-xl">FAQ</h3>
            <h1 className="text-2.5rem leading-tight">
              Frequently Asked Questions
            </h1>
          </div>
          <div>
            <p className="text-center text-custom-grey">
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
        </div>
        <div className="bg-white rounded shadow-white-box">
          {faq.map((data) => (
            <div className="shadow-faq-divider" key={data.id}>
              <button
                className={`${
                  showAnswer[`q${data.id}`]
                    ? "bg-custom-orange text-white shadow-orange-bottom"
                    : ""
                } text-left font-medium text-lg flex items-center justify-between p-6 w-full`}
                onClick={() => toggleAnswer(data.id)}
              >
                <span>
                  {data.id}. {data.question}
                </span>
                <span className="text-xl">
                  {showAnswer[`q${data.id}`] ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </button>
              <p
                className={`${
                  showAnswer[`q${data.id}`]
                    ? "max-h-[30rem] lg:max-h-64 py-6 "
                    : "max-h-0 py-0"
                } text-left px-6 transition-all duration-300 ease-linear overflow-hidden text-custom-grey leading-relaxed `}
              >
                {data.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
