import type {Theme}
from 'theme-ui'

export const theme : Theme = {
    colors: {
        dark: '#000000',
        white: '#ffffff',
        gray: '#72828a', //fourth-color
        midDark: '#070a0e',
        mid2Dark: '#1c2127',
        rgbaShadow: 'rgba(128, 255, 219, 0.36)',
        sky: '#80ffdb', //main-color
        green: '#3c9279', //second-color
        bunker: '#070a0e', //third-color
    },
    //Varients Buttons
    buttons: {},

    cards: {
        home: {
            wrappers: {
                width: '85vw',
                minHeight: 'calc(calc(100vh - 115px) - 10vh)',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                '@media screen and(max - width: 1000px)': {
                    width: '90vw'
                }
            },
            container: {
                width: '100%',
                minHeight: 'calc(calc(70vh - 115px) / 2)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                '@media screen and(max - width: 1000px)': {
                    minHeight: '45vh',
                    '&:last-of-type': {
                        marginBottom: '3rem'
                    },
                    '&:first-of-type': {
                        marginTop: '2rem'
                    }
                }
            },
            TextContainer: {
                width: '40%',
                minHeight: '20vh',
                display: 'block',
                "@media screen and(max - width: 1000px)": {
                    width: '100%'
                }
            },
            Header: {
                color: 'sky',
                fontWeight: 'bold',
                fontSize: '48px',
                lineHeight: '59px',
                padding: '0',
                margin: '0',
                marginBottom: '2rem',
                '@media screen and (max-width: 1000px)': {
                    fontSize: '42px',
                    lineHeight: '51px',
                    margin: '1rem 0'
                }
            },
            btns: {
                width: '211px',
                height: '58px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'bunker',
                boxShadow: '0px 0px 12px rgba(128, 255, 219, 0.36)',
                borderRadius: '5px',
                border: '1px solid sky',
                textDecoration: 'none',
                color: 'sky',
                fontWeight: '600',
                fontSize: '25px',
                '@media screen and(max - width: 1000px)': {
                    marginBottom: '2rem'
                }
            },
            CardContainer: {
                width: '50%',
                height: '20vh',
                display: 'flex',
                justifyContent: 'flex-end',
                '@media screen and (max-width: 1000px)': {
                    width: '100%'
                }
            },
            Card: {
                width: '460px',
                height: '153px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'dark',
                border: '6px solid sky',
                borderRadius: '5px',
                '@media screen and (max-width: 1000px)': {
                    border: '4px solid sky',
                    height: '125px',
                    width: '100%'
                }
            },
            ContainerContentCard: {
                height: '75%',
                width: '90%',
                display: 'grid',
                margin: 'auto 5%'
            },

            Title: {
                fontSize: '30px',
                color: 'sky',
                fontWeight: '700',
                padding: '0',
                margin: '0',
                marginLeft: 'auto',
                '@media screen and (max-width: 1000px)': {
                    fontSize: '24px'
                }
            },
            Amount: {
                fontSize: '50px',
                fontWeight: '400',
                color: 'sky',
                padding: '0',
                margin: '0',
                marginLeft: 'auto',
                '@media screen and (max-width: 1000px)': {
                    fontSize: '36px'
                }
            },
            InfoCard: {
                width: '32%',
                height: '115px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'dark',
                boxShadow: '0px 0px 12px rgba(128, 255, 219, 0.36)',
                borderRadius: '5px',
                '@media screen and (max-width: 1000px)': {
                    width: '100%',
                    margin: '1rem 0',
                    '&:first-of-type': {
                        marginTop: '0'
                    },
                    '&:last-of-type': {
                        marginBottom: '2rem'
                    }
                }
            },
            InfoCardContainer: {
                width: '90%',
                height: '70%',
                margin: 'auto 5%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flexStart'
            },
            Image: {
                width: '42',
                height: 'auto',
                marginRight: '2rem'
            },

            CardHeader: {
                padding: '0',
                margin: '0',
                marginBottom: '0.5rem',
                color: 'gray',
                fontSize: '14px',
                fontWeight: '600'
            },
            CardInfo: {
                padding: '0',
                margin: '0',
                color: 'sky',
                fontSize: '28px',
                fontWeight: '400'
            }
        },

        // wrappers:{},
        dropDown: {
            DropdownContainer: {
                position: 'fixed',
                zIndex: '999',
                width: '100vw',
                height: '100vh',
                background: 'bunker',
                display: 'grid',
                alignItems: 'center',
                left: '0',
                transition: '0.3s ease-in-out'
            },
            CloseBtn: {
                position: 'absolute',
                top: '57.5px',
                right: '10vw',
                background: 'transparent',
                fontSize: '2rem',
                cursor: 'pointer',
                outline: 'none',
                transform: 'translate(50%, -50%)'
            },

            CloseIcon: {
                color: 'sky'
            },

            DropdownMenu: {
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: 'repeat(4, 80px)',
                textAlign: 'center',
                marginBottom: '4rem'
            },
            DropdownLink: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                textDecoration: 'none',
                listStyle: 'none',
                cursor: 'pointer',
                transition: '0.2s ease-in-out',
                svg: {
                    marginRight: '0.5rem',
                    width: '1.5rem',
                    height: 'auto',
                    fontSize: '2rem'
                }
            },
            BtnWrapper: {
                display: 'flex',
                justifyContent: 'center'
            },

            Button: {
                borderRadius: '5px',
                background: 'bunker',
                padding: '12px 25px',
                border: '1px solid sky',
                boxShadow: '0px 0px 12px rgba(128, 255, 219, 0.36)',
                textDecoration: 'none',
                color: 'sky',
                fontSize: '14px'
            }
        }
    }
}