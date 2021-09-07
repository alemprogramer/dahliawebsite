import type { Theme } from 'theme-ui';

const makeTheme = <T extends Theme>(t: T) => t

const theme = makeTheme({
    colors: {
        dark: '#000000',
        gray: '#72828a',
        midDark: '#070a0e',
        mid2Dark: '#1c2127',
        rgbaShadow: 'rgba(128, 255, 219, 0.36)',
        mainColor: '#80ffdb',
        secondColor: '#3c9279',
        thirdColor: '#070a0e',
        fourthColor: '#72828a',
    },
})

export type ExactTheme = typeof theme