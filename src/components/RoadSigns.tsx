

type RoadSignsProps = {
    title: string;
    description: string;
    alt?: string;
    image: React.ImgHTMLAttributes<HTMLImageElement>['src'];
    className?: string;
};


const RoadSigns: React.FC<RoadSignsProps> = ({ title, description, image }) => {
    return(
        <div className="">
            <div className="bg-white rounded-lg border-2 border-gray-500 shadow-md shadow-red-400 flex flex-col justify-between items-center p-3
            h-[400px] min-w-[200px] max-w-[280px] hover:transform hover:scale-105 transition duration-200 ease-in-out">
                <img src={image} alt={title} 
                    style={{
                        width: '180px',
                        minWidth: '180px',
                        maxWidth: '300px',
                        height: '200px',
                        minHeight: '200px',
                        maxHeight: '300px'
                    }}
                />
                <p className="font-bold font-montserrat underline underline-offset-2">{title}</p>
                <p className='font-montserrat text-center'>{description}</p>
            </div>
        </div>
    );
};

export default RoadSigns;

