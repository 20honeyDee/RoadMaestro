


type ButtonProps = {
    label: string;
    onClick: () => void;
    variant: "primary" | "secondary" | "danger" | "success" | "outline" | "warning";
    type?: "submit" | "reset" ;
    className?: string;
    textsize?: "xs" | "sm" | "lg" | "xl"
    children?: React.ReactNode;
};


const Button: React.FC<ButtonProps> = ({ label, onClick, variant, type, textsize = "sm", children, className }) => {

    const base = "rounded-md font-montserrat text-sm"
    const textXs = "py-1 px-2"

    const styles = {
        primary: `${base} bg-blue-500 text-white`,
        secondary: `${base} bg-gray-300 text-black`,
        danger: `${base} bg-red-500 text-white`,
        success: `${base} bg-green-500 text-white`,
        warning: `${base} bg-yellow-500 text-black`,
        outline: `${base} bg-white border text-black`,
    }
    const fontsize = {
        xs: `${textXs} text-xs`,
        sm: `${textXs} text-sm`,
        lg: `${textXs} text-lg`,
        xl: `${textXs} text-xl`,
    }
    return(
        <button
            onClick={onClick}
            type={type}
            className={`${styles[variant]} ${fontsize[textsize]} ${className}`}
        >
            <span className="flex justify-center items-center gap-1"></span>
            {label}
            {children}
        </button>
    );
};


export default Button;