
type ButtonProps = {
    label: string;
    onClick: () => void;
    variant: "primary" | "secondary" | "danger" | "success" | "outline" | "warning";
    type: "submit" | "reset" ;
    className?: string;
    textsize?: "xs" | "sm" | "lg" | "xl"
};


const Button: React.FC<ButtonProps> = ({ label, onClick, variant, type, textsize = "sm" }) => {

    const base = "py-2 px-3 rounded-md font-montserrat text-sm"
    const styles = {
        primary: `${base} bg-blue-500 text-white`,
        secondary: `${base} bg-gray-300 text-black`,
        danger: `${base} bg-red-500 text-white`,
        success: `${base} bg-green-500 text-white`,
        warning: `${base} bg-yellow-500 text-black`,
        outline: `${base} bg-white border text-black`,
    }
    const fontsize = {
        xs: "text-xs",
        sm: "text-sm",
        lg: "text-lg",
        xl: "text-xl",
    }
    return(
        <button
            onClick={onClick}
            type={type}
            className={`${styles[variant]} ${fontsize[textsize]}`}
        >
            {label}
        </button>
    );
};


export default Button;