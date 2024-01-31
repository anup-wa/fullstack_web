import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Delivery, HeroBg } from "../assets";
import { buttonClick } from "../animations";

const Home = () => {
  const [randomText, setRandomText] = useState("");
  const [randomParagraph, setRandomParagraph] = useState("");

  const textOptions = [
    {
      heading: "The Fastest Delivery in Your City",
      paragraph:
        "Enjoy daily changing, delicious chef-recommended meals created based on the food preferences shared by you.",
    },
    {
      heading: "EATING HOMELY, BALANCED MEALS IS EASIER NOW.",
      paragraph: "Freshly cooked, well-portioned meals, door-delivered.",
    },
    {
      heading: "DAILY CHANGING MENU THAT WON’T BORE YOU.",
      paragraph: "Widest range of 30+ weekly rotating dishes.",
    },
    {
      heading: "CHOOSE CONVENIENCE OVER KITCHEN CHAOS..",
      paragraph: "Subscribe to meals. Pause, restart anytime..",
    },
  ];

  useEffect(() => {
    const updateRandomContent = () => {
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setRandomText(textOptions[randomIndex].heading);
      setRandomParagraph(textOptions[randomIndex].paragraph);
    };

    updateRandomContent();

    const interval = setInterval(updateRandomContent, 5000);

    return () => clearInterval(interval);
  }, [textOptions]);

  const variants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
      key={randomParagraph}
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-start justify-start gap-6">
        <div className="px-4 py-1 flex items-center justify-center gap-2 bg-orange-100 rounded-full">
          <p className="text-lg font-semibold text-orange-500 ">
            Free Delivery
          </p>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md">
            <img
              src={Delivery}
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
        </div>

        <p className="text-[40px] text-headingColor md:text-[69px] font-sans font-extrabold tracking-wide">
          {randomText}
        </p>
        <p className="text-textColor text-lg">{randomParagraph}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.button
            {...buttonClick}
            className="bg-gradient-to-bl from-orange-400 to-orange-600 px-2 py-2 rounded-xl text-black text-base font-semibold "
          >
            Buy 3 Day Trial
          </motion.button>
          <motion.button
            {...buttonClick}
            className="bg-gradient-to-bl from-orange-400 to-orange-600 px-4 py-2 rounded-xl text-black text-base font-semibold "
          >
            Buy Meal Subscription
          </motion.button>
        </div>
      </div>

      <div className="py-2 flex-1 flex items-center justify-end relative ">
        <img
          className="absolute top-0 right-0 md:-right-12 w-full h-420 md:w-auto md:h-650"
          src={HeroBg}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default Home;
