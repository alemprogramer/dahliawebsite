import type { Theme } from 'theme-ui';

const makeTheme = <T extends Theme>(t: T) => t

const theme = makeTheme({
    colors: {
        dark: '#000000',
        gray: '#72828a',
        midDark: '#070a0e',
        rgbaShadow: 'rgba(128, 255, 219, 0.36)',
        text: 'black',
        blue: {
            light: '#187abf',
            dark: '#235a97',
        },
    },
})

export type ExactTheme = typeof theme