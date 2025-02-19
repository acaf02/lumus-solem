import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-3 items-center mb-4">
      <p className="text-custom-yellow font-semibold text-2xl sm:text-5xl font-light">
        {text1} <span className="text-custom-pink font-semibold text-2xl sm:text-5xl">{text2}</span>
      </p>
      <p className="w-10 sm:w-16 h-[1px] sm:h-[2px] bg-custom-pink"></p>
    </div>
  );
};

export default Title;
