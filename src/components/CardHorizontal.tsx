import React from "react";

interface CardHorizontalProps {
  title: string;
  description: string;
  imageUrl: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  reverse?: boolean; // Determines image placement
}

const HorizontalCard: React.FC<CardHorizontalProps> = ({ title, description, imageUrl, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center my-10 md:my-20 gap-3 ${
        reverse ? "md:flex-row-reverse" : ""
      }` } 
     >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-2xl shadow-md shadow-gray-400"
          style={{
            aspectRatio: '3/2',
            width: '80%',
        }}
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 px-3">
        <h2 className="text-xl mb-2 font-bold text-white md:text-2xl lg:text-4xl">{title}</h2>
        <p className="text-white leading-5 md:leading-6 text-justify md:text-md md:font-bold lg:text-lg ">{description}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;
