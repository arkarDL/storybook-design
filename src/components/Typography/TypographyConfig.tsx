import React, { FC } from 'react'


/** 
* TYPOGRAPHY VARIANT FOR DESIGN SYSTEM USING TAILWINDCSS PROPS
* ROLE
* SIZE
* FONT WEIGHT
*/
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

/** 
* TYPE FOR  TYPOGRAPHY
*/


export interface TypographyProps {
    children: string,
    role?: "h1" | "h2" | "h3" | "p" | "a",
    fontWeight?: "lighter" | "normal" | "semibold" | "bold",
    size?: "small" | "medium" | "large" | "xl" | "2xl" | "3xl" | "4xl" | "5xl",
    sx?: object;
}

/** 
* DECORATOR FUNCTION FOR TYPOGRAPHY COMPONENT
* FUTHER TO ADD ARIA ROLES AND ACCESSIBILITY RULES
*/
const TypographyContainer: FC<TypographyProps> = ({ role, size, fontWeight, sx, children, ...args }): JSX.Element => {

    const typographyRole = TypographyVariant[role || 'p'];
    const typographyWeight = TypographyVariant[fontWeight || 'normal'];
    const typographySize = TypographyVariant[size || 'medium'];

    switch (role) {
        case "h1":
            return <h1 className={`${typographyRole} ${typographyWeight} ${typographySize} `} style={sx && sx} {...args} >{children}</h1>;
        case "h2":
            return <h2 className={`${typographyRole} ${typographyWeight} ${typographySize} `} style={sx && sx} {...args}>{children}</h2>;
        case "h3":
            return <h3 className={`${typographyRole} ${typographyWeight} ${typographySize} `} style={sx && sx} {...args}>{children}</h3>;
        case "p":
            return <p className={`${typographyRole} ${typographyWeight} ${typographySize} `} style={sx && sx} {...args}> {children}</p>;
        case "a":
            return <a className={`${typographyRole} ${typographyWeight} ${typographySize} `} style={sx && sx} {...args}>{children}</a>;
        default:
            return <p className={`${typographyRole} ${typographyWeight} ${typographySize} `} style={sx && sx} {...args}>{children}</p>;
    }

}




export default TypographyContainer;



/**
* TYPES FOR TYPOGRAPHY
*/
// export interface HeadingPROPS extends HTMLAttributes<HTMLHeadingElement> {
//     children: string,
//     role?: "h1" | "h2" | "h3" | "p" | "a",
//     fontWeight?: "lighter" | "normal" | "semibold" | "bold",
//     size?: "small" | "medium" | "large" | "xl" | "2xl" | "3xl" | "4xl" | "5xl",
//     sx?: object;
// }

// export interface LinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
//     children: string,
//     role?: "h1" | "h2" | "h3" | "p" | "a",
//     fontWeight?: "lighter" | "normal" | "semibold" | "bold",
//     size?: "small" | "medium" | "large" | "xl" | "2xl" | "3xl" | "4xl" | "5xl",
//     sx?: object;
// }