interface ButtonProps {
    label: string;
    variant: "primary" | "secondary" | "outlined";
    size?: "small" | "medium" | "large";
    radius?: "rounded" | "roundedSmall" | "roundedMedium" | "roundedLarge";
    sx?: object;
}
declare const Button: (props: ButtonProps) => JSX.Element;

export { Button };
