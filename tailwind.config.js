/** @type {import('tailwindcss').Config} */

import fontFamily from './src/tailwind/theme/fontFamily';
import colors from './src/tailwind/theme/colors';
import fontSize from './src/tailwind/theme/fontSize';
import screens from './src/tailwind/theme/screens';

import corePlugins from './commons/tailwind/plugins/corePlugins';

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,scss}", 
    ],
    theme: {
        fontFamily: fontFamily,  
        colors: colors,  
        fontSize: fontSize, 
        screens: screens,  
    },
    corePlugins: corePlugins,
    plugins: [
        require('./commons/tailwind/plugins/index'),  
        require('tailwind-scrollbar') 
    ]
};
