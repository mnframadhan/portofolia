type ButtonProps = {

    title: string;
    bgColor?: "bg-purple-400" | "bg-purple-800";
    customGradient? : string;
    textColor? : "text-white";
    textSize? : "text-xl" | "text-2xl" | "text-sm" | "text-xs";
    textWeight? : string;

}

export const Button = ({title, bgColor, customGradient, textColor, textSize, textWeight } : ButtonProps) => {

    return (

        <button type="submit" className={`${bgColor} ${textColor} ${textSize} ${customGradient} font-main ${textWeight} px-3 py-1 hover:hue-rotate-15 hover:duration-300 rounded-full`} >{title}</button>

    )

}