

export type QuizProps = {
  Image?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  Question: string;
  Options: string[];
  onSelectOption?: (option: string) => void;
  selectedOption?: string;
  className?: string;
};

const Quiz: React.FC<QuizProps> = ({
  Image,
  Question,
  Options,
  onSelectOption,
  selectedOption,
}) => {
  return (
    <div className="quiz-card p-3 shadow-md rounded-xl shadow-gray-500 bg-white min-w-[300px] max-w-[400px]">
      {Image && <img src={Image} alt="quiz" className="w-40 h-auto mb-3 mx-auto" />}

      <div className="text-md md:text-lg font-semibold text-center mb-4">{Question}</div>

      <div className="flex flex-col gap-2">
        {Options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption?.(option)}
            className={`p-1 border rounded text-left transition md:text-lg
              ${selectedOption === option ? "bg-blue-100 border-blue-400" : "hover:bg-gray-100"}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;