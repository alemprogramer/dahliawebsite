import type { Theme } from 'theme-ui'

export const theme: Theme = {
    colors: {
        dark: '#000000',
        gray: '#72828a',
        midDark: '#070a0e',
        mid2Dark: '#1c2127',
        rgbaShadow: 'rgba(128, 255, 219, 0.36)',
        sky: '#80ffdb',
        secondColor: '#3c9279',
        thirdColor: '#070a0e',
        fourthColor: '#72828a',
    },
    // Buttons
    buttons: {
        major: {
            color: 'sky',
            bg: 'thirdColor',
            /* borderColor: 'mainColor', */
            '&:hover': {
                
            }
        },
        secondary: {
            color: 'background',
            bg: 'secondary',
        },
    },
}