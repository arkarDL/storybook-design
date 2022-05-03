import { FC, ButtonHTMLAttributes } from 'react';

/**
* BUTTON TYPES
*/
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant: "primary" | "secondary" | "outlined";
    size?: "small" | "medium" | "large";
    radius?: "rounded" | "roundedSmall" | "roundedMedium" | "roundedLarge";
    sx?: object;
}
/**
* BUTTON COMPONENT
*/
declare const Button: FC<ButtonProps>;

/**
* TYPE FOR VARIOUS HEADING
*/
/**
* TYPES FOR TYPOGRAPHY
*/
interface TypographyProps {
    children: string;
    role?: "h1" | "h2" | "h3" | "p" | "a";
    fontWeight?: "lighter" | "normal" | "semibold" | "bold";
    size?: "small" | "medium" | "large" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
    sx?: object;
}

/**
* TYPOGRAPHY COMPONENT
*/
declare const Typography: (props: TypographyProps) => JSX.Element;

export { Button, Typography as Text };
