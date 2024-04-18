import tw from "twin.macro";

export const H1 = tw.h1`text-xl font-bold mb-4 md:text-2xl lg:text-4xl`;
export const H2 = tw.h2`text-lg font-bold mb-4 md:text-xl lg:text-3xl`;
export const H3 = tw.h3`text-base font-bold mb-4 md:text-lg lg:text-2xl`;

export const H1Green = tw.h1`text-xl font-bold text-green mb-4 md:text-2xl lg:text-4xl`;
export const H2Green = tw.h2`text-lg font-bold text-green mb-4 md:text-xl lg:text-3xl`;
export const H3Green = tw.h3`text-base font-bold text-green mb-4 md:text-lg lg:text-2xl`;

export const P = tw.p`text-base mb-4 md:text-lg lg:text-xl`;
export const PSmall = tw.p`text-sm mb-4 md:text-base`;

export const Button = tw.button`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`;

export const Author = tw.p`text-sm text-gray-500`;

export const ALink = tw.a`text-green hover:(underline)`;

export const Space = tw.div`h-10 w-full`;
