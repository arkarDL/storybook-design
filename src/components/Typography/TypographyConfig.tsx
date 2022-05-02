import React from 'react'

// tailwindcss class for a link
export const TypographyVariant = {

    h1: 'text-3xl leading-relaxed font-bold',
    h2: 'text-xl leading-relaxed font-bold',
    h3: 'text-lg leading-relaxed font-bold',
    p: 'text-[1.0625em] leading-[1.6875em]',
    a: 'text-blue-500 hover:text-blue-700 underline cursor-pointer',
    // Sizes
    small: 'text-sm',
    medium: 'text-md',
    large: 'text-lg',
    'xl': 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    // Font Weight
    lighter: 'font-light',
    normal: 'font-normal',
    semibold: 'font-semibold',
    bold: 'font-bold',


};



export interface TypographyProps {
    children: string,
    role?: "h1" | "h2" | "h3" | "p" | "a",
    fontWeight?: "lighter" | "normal" | "semibold" | "bold",
    size?: "small" | "medium" | "large" | "xl" | "2xl" | "3xl" | "4xl" | "5xl",
    sx?: object;
}


const TypographyContainer = (props: TypographyProps): JSX.Element => {

    const role = TypographyVariant[props.role || 'p'];
    const fontWeight = TypographyVariant[props.fontWeight || 'normal'];
    const size = TypographyVariant[props.size || 'medium'];

    switch (props.role) {
        case "h1":
            return <h1 className={`${role} ${fontWeight} ${size} `} style={props.sx && props.sx} >{props.children}</h1>;
        case "h2":
            return <h2 className={`${role} ${fontWeight} ${size} `} style={props.sx && props.sx}>{props.children}</h2>;
        case "h3":
            return <h3 className={`${role} ${fontWeight} ${size} `} style={props.sx && props.sx}>{props.children}</h3>;
        case "p":
            return <p className={`${role} ${fontWeight} ${size} `} style={props.sx && props.sx}> {props.children}</p>;
        case "a":
            return <a className={`${role} ${fontWeight} ${size} `} style={props.sx && props.sx}>{props.children}</a>;
        default:
            return <p className={`${role} ${fontWeight} ${size} `} style={props.sx && props.sx}>{props.children}</p>;
    }

}




export default TypographyContainer;
