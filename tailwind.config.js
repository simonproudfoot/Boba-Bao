const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1512px',
        },
        colors: {
            gray: colors.gray,
            black: colors.black,
            'brandPink' : '#ec608d',
            'red': '#890000',
            'white': '#fff'
        },

        extend: {
            fontSize: {
                base: '20px',
                'xxs': '0.7rem',
            },
            fontFamily: {
                heading: ['supersize-bk'],
                // body: ["dosisregular"],
                // bold: ['dosisbold']
            },
        }
    }
}