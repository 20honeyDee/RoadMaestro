import type React from "react";
import Button from "../components/Button"
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';

type CardProps = {
    title: string;
    description: string;
    imageUrl: React.ImgHTMLAttributes<HTMLImageElement>['src'];
    linkUrl: string;
    className?: string;
};


const Card: React.FC<CardProps> = ({ title, description, imageUrl, linkUrl }) =>{
    return(
        <div className="card border rounded-2xl p-2 m-3 bg-white h-[40vh] overflow-y-scroll max-w-[300px] min-w-[250px] shadow-lg hover:scale-[1.02] transition-transform duration-300">
            
            <img src={imageUrl} className="card-img-top border-white border-2 rounded-none" alt={title} 
                style={{
                    aspectRatio: '3/2',
                    borderRadius: '20px',
                }}
            />
            
            <div className="card-body p-2">
                <h5 className="card-title font-bold font-montserrat">{title}</h5>
                
                <p className="card-text text-justify text-sm leading-[1.2]">{description}</p>
                <Button
                        label="Learn More"
                        onClick={() => window.open(linkUrl, "_blank")}
                        variant="primary"
                        textsize="xs"
                        className="w-full mt-2 flex justify-center items-center"
                    >{<LaunchSharpIcon style={{
                        fontSize: '15px',
                    }}/>}
                </Button>
            </div>
        </div>
    );
};


export default Card;