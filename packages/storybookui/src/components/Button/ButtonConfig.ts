/** 
* BUTTON VARIANT USING TAILWINDCSS THEME
* YOU CAN UPDATE THE THEME IN TAILWIND CONFIG
*/

const ButtonVariant = {

  // primary variant
  primary: {
    class: 'bg-primary  text-white hover:bg-opacity-80 cursor-pointer',
  },

  // secondary variant
  secondary: {
    class: 'bg-secondary text-white hover:bg-opacity-80 cursor-pointer',
  },

  // outlined variant
  outlined: {
    class: 'bg-transparent border shadow-sm cursor-pointer',
  },

  // Sizes
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-md',
  large: 'px-5 py-2 text-lg',

  // Border Radius
  rounded: 'rounded-full',
  roundedSmall: 'rounded-sm',
  roundedMedium: 'rounded-md',
  roundedLarge: 'rounded-lg',
};

export default ButtonVariant;

