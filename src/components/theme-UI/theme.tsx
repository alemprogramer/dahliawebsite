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
                '@media screen and(maxWidth: 1000px)': {
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
                '@media screen and(maxWidth: 1000px)': {
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
                "@media screen and(maxWidth: 1000px)": {
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
                '@media screen and(maxWidth: 1000px)': {
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
        },
        remove: {
            Header: {
                fontSize: '36px',
                color: 'sky',
                fontWeight: '700',
                marginLeft: '7.5vw',
                marginTop: '4rem',
                marginBottom: '3rem'
            }
        },
        position: {
            Background: {
                position: 'fixed',
                bottom: '-10%',
                left: '10%',
                width: '80%',
                height: 'auto'
            },

            ItemInvestment: {
                width: '100%',
                padding: '0 2rem',
                display: 'grid',
                gridTemplateColumns: '3fr repeat(2, 1fr)',
                gridTemplateRows: '1fr',
                height: '70px',
                borderBottom: '1px solid #72828a15',
                color: 'white',
                image: {
                    height: '40px',
                    marginRight: '0.5rem'
                },
                text: {
                    margin: '0',
                    padding: '0'
                },
                flexFirst: {
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    h2: {
                        fontSize: '12px',
                        color: 'white',
                        fontWeight: '400'
                    }
                },

                centerMiddle: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '400'
                },
                '@media screen and (max-width: 1000px)': {
                    display: 'none'
                }
            },

            HeaderInvestment: {
                display: 'grid',
                gridTemplateColumns: '3fr repeat(2, 1fr)',
                gridTemplateRows: '1fr',
                height: '55px',
                borderBottom: '1px solid #72828a15',
                margin: '0',
                padding: '0 2rem',
                position: 'sticky',
                top: '0',
                left: '0',
                background: 'bunker',
                '@media screen and (max-width: 1000px)': {
                    display: 'none'
                },
                center: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    display: 'flex',
                    fontWeight: '600',
                    fontSize: '14px',
                    color: 'gray',
                    margin: '0',
                    padding: '0'
                },
                text: {
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: '600',
                    fontSize: '14px',
                    color: 'gray',
                    margin: '0',
                    padding: '0'
                }
            },

            SecondHeader: {
                fontSize: '28px',
                fontWeight: '600',
                color: 'white',
                margin: '4rem 0 2rem',
                padding: '0'
            },

            Item: {
                width: '100%',
                padding: '0 2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 0.95fr)1.4fr',
                gridTemplateRows: '1fr',
                height: '100px',
                borderBottom: '1px solid #72828a15',
                color: 'white',
                left: {
                    marginLeft: '1rem'
                },
                image: {
                    height: '40px',
                    marginRight: '0.5rem'
                },
                /* h2,
                            h3 {margin: 0, padding: 0}, */
                flexFirst: {
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    /* h2 {
                                    fontSize: '12px',
                                    color: 'white',
                                        fontWeight: 400
                                    }
                                } */
                    centerMiddle: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    thin: {
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: '400'
                    },
                    end: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gridTemplateRows: 'repeat(2, 1fr)',
                        margin: 'auto 0'
                    },
                    button: {
                        boxShadow: '0px 0px 12px rgba(128, 255, 219, 0.36)',
                        borderRadius: '5px',
                        background: 'sky',
                        color: 'dark',
                        fontWeight: '600',
                        fontSize: '14px',
                        textDecoration: 'none',
                        marginBottom: '0.2rem'
                    },
                    small: {
                        width: '85px',
                        height: '30px'
                    },
                    large: {
                        width: '115px',
                        height: '30px'
                    },
                    special: {
                        background: 'mid2Dark',
                        border: '1px solid sky',
                        color: 'sky'
                    },
                    '@media screen and(maxWidth : 1000px)': {
                        display: 'none'
                    }
                }
            },

            Wrapper: {
                width: '70vw',
                minHeight: '100vh',
                display: 'block',
                margin: '3rem auto 10rem'
            },

            Header: {
                fontSize: '48px',
                fontWeight: '700',
                color: 'sky',
                padding: '0',
                margin: '0',
                marginBottom: '2rem',
                textAlign: 'center'
            },

            Desc: {
                fontWeight: '400',
                fontSize: '22px',
                color: 'white',
                padding: '0',
                margin: '1rem 0',
                textAlign: 'center'
            },

            Button: {
                width: '382px',
                minHeight: '122px',
                background: 'mid2Dark',
                border: '4px solid sky',
                boxShadow: '0px 0px 12px rgba(128, 255, 219, 0.36)',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                color: 'sky',
                margin: '2rem auto',
                h3: {
                    fontWeight: '700',
                    fontSize: '22px',
                    padding: '0',
                    margin: '0'
                },
                p: {
                    fontWeight: '400',
                    fontSize: '36px',
                    padding: '0',
                    margin: '0'
                }
            },

            InfoContainer: {
                width: '100%',
                background: 'bunker',
                height: '55vh',
                borderRadius: '5px',
                boxShadow: '0px 0px 12px rgba(128, 255, 219, 0.36)',
                position: 'relative',
                overflowY: 'scroll',
                '&:: -webkitScrollbar': {
                    width: '12px'
                },
                '&:: -webkitScrollbarTrack': {
                    /* background: #80ffdb15, wrong code*/
                },
                '&:: -webkitScrollbarThumb': {
                    background: 'sky',
                    borderRadius: '50px'
                },
                '@media screen and(maxWidth : 1000px)': {
                    width: '100%'
                }
            },

            InfoContainerSecond: {
                width: '100%',
                background: 'bunker',
                height: '40vh',
                borderRadius: '5px',
                boxShadow: '0px 0px 12px rgba(128, 255, 219, 0.36)',
                position: 'relative',
                overflowY: 'scroll',
                '&:: -webkitScrollbar': {
                    width: '12px'
                },
                '&:: -webkitScrollbarTrack': {
                    /* background: #80ffdb15, wrong code*/
                },
                '&:: -webkitScrollbarThumb': {
                    background: 'sky',
                    borderRadius: '50px'
                },
                '@media screen and(maxWidth : 1000px)': {
                    width: '100%'
                }
            },

            HeaderContainer: {
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 0.95fr)1.4fr',
                gridTemplateRows: '1fr',
                height: '55px',
                borderBottom: '1px solid #72828a15',
                margin: 0,
                padding: '0 2rem',
                position: 'sticky',
                top: 0,
                left: 0,
                background: 'bunker',

                '@media screen and(maxWidth : 1000px)': {
                    display: 'none'
                },
                center: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                h2: {
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: '600',
                    fontSize: '14px',
                    color: 'gray',
                    margin: '0',
                    padding: '0'
                }
            }
        },
        navBar: {
            NavWrapper: {
                height: '115px',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                zIndex: '100',
                background: 'bunker',
                boxShadow: '0px 0px 36px rgba(0, 211, 149, 0.66)',
                '@media screen and (max-width: 1000px)': {
                    height: '67px'
                }
            },
            Wrapper: {
                width: '85vw',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '@media screen and (max-width: 1000px)': {
                    width: '90vw'
                }
            },
            Logo: {
                display: 'flex',
                alignItems: 'center',
                height: '100%'
            },
            LogoImage: {
                color: 'sky',
                width: '90px',
                height: 'auto',
                '@media screen and (max-width: 1000px)': {
                    width: '60px',
                    marginRight: '0.5rem'
                }
            },
            LogoLink: {
                textDecoration: 'none',
                color: 'sky',
                fontFamily: 'var(--montserrat-alternates)',
                fontSize: '36px',
                padding: '0',
                margin: '0',
                '@media screen and (max-width: 1000px)': {
                    fontSize: '22px'
                }
            },
            MenuBars: {
                display: 'none',
                '@media screen and (max-width: 1000px)': {
                    display: 'block',
                    color: 'sky',
                    cursor: 'pointer',
                    width: '25px',
                    height: '25px'
                }
            },
            NavMenu: {
                display: 'flex',
                alignItems: 'center',
                svg: {
                    color: 'white',
                    fontSize: '20px',
                    marginRight: '0.5rem'
                },
                active: {
                    color: 'sky',
                    svg: {
                        color: 'sky',
                        stroke: 'sky'
                    }
                },
                '@media screen and (max-width: 1000px)': {
                    display: 'none'
                }
            },
            NavMenuLinks: {
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                padding: '0 1rem',
                height: '100%',
                cursor: 'pointer',
                textDecoration: 'none',
                fontWeight: '400',
                fontSize: '20px'
            },
            NavMenuLinksA: {
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                padding: '0 2rem',
                height: '100%',
                cursor: 'pointer',
                textDecoration: 'none',
                fontWeight: '400',
                fontSize: '20px',
                '&:last-of-type': {
                    paddingRight: 0
                }
            },
            Button: {
                borderRadius: '5px',
                background: 'bunker',
                padding: '12px 25px',
                border: '1px solid sky',
                boxShadow: '0px 0px 12px rgba(128, 255, 219, 0.36)',
                textDecoration: 'none',
                color: 'sky',
                fontSize: '14px',
                '@media screen and (max-width: 1000px)': {
                    display: 'none',
                    visibility: 'hidden'
                }
            }
        },
        footer: {

            FooterWrapper: {
                width: '100vw',
                minHeight: '23vh',
                background: 'bunker',
                boxShadow: '0px 0px 36px rgba(0, 211, 149, 0.23)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                position: 'relative'
            },

            Wrapper: {
                width: '85vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                margin: '0 auto',
                minHeight: 'calc(20vh - 18px)',
                '@media screen and (max-width: 1000px)': {
                    width: '90vw'
                }
            },
            LogoContainer: {
                width: '25%',
                '@media screen and (max-width: 1000px)': {
                    width: '100%',
                    marginTop: '1rem'
                }
            },

            Flex: {
                display: 'flex',
                alignItems: 'center'
            },

            LogoImage: {
                color: 'sky',
                width: '70px',
                height: 'auto',
                '@media screen and (max-width: 1000px)': {
                    width: '60px',
                    marginRight: '0.5rem'
                }
            },
            LogoLink: {
                textDecoration: 'none',
                color: 'sky',
                fontFamily: 'var(--montserrat-alternates)',
                fontSize: '24px',
                padding: '0',
                margin: '0'
            },

            Desc: {
                fontSize: '12px',
                color: 'gray',
                fontWeight: '400',
                '@media screen and (max-width: 1000px)': {
                    width: '80%'
                }
            },
            Copy: {
                color: 'white',
                fontSize: '8px',
                fontWeight: '500',
                '@media screen and (max-width: 1000px)': {
                    display: 'none'
                }
            },
            LinksContainer: {
                width: '60%',
                minHeight: '20vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                '@media screen and (max-width: 1000px)': {
                    width: '100%'
                }
            },

            Container: {
                width: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                '@media screen and (max-width: 1000px)': {
                    width: '100%'
                }
            },

            Content: {
                display: 'block',
                width: 'auto',
                '@media screen and (max-width: 1000px)': {
                    marginTop: '1rem',
                    width: '50%'
                }
            },

            Header: {
                fontWeight: '700',
                fontSize: '12px',
                color: 'white',
                margin: '0',
                padding: '0',
                marginBottom: '0.5rem'
            },

            LinksTo: {
                fontWeight: '400',
                textDecoration: 'none',
                fontSize: '12px',
                color: 'white',
                padding: '0',
                margin: '0.8rem 0',
                display: 'block',
                '@media screen and (max-width: 1000px)': {
                    margin: '0.5rem 0'
                }
            },

            LinksA: {
                fontWeight: '400',
                textDecoration: 'none',
                fontSize: '12px',
                color: 'white',
                padding: '0',
                margin: '0.8rem 0',
                display: 'flex',
                alignItems: 'center',
                svg: {
                    color: 'sky',
                    fontSize: '12px',
                    marginRight: '0.5rem'
                },
                '@media screen and (max-width: 1000px)': {
                    margin: '0.5rem 0'
                }
            },
            Line: {
                width: '100%',
                height: '2px',
                background: 'sky',
                opacity: '0.1',
                position: 'absolute',
                bottom: '18px',
                left: '0',
                '@media screen and (max-width: 1000px)': {
                    display: 'none'
                }
            },

            CopyMobile: {
                color: 'white',
                fontSize: '8px',
                fontWeight: '500',
                margin: '1rem 0',
                '@media screen and (min-width: 1000px)': {
                    display: 'none'
                }
            }
        },
        farmPool: {
            Item: {
                width: '100%',
                padding: '0 2rem',
                display: 'grid',
                gridTemplateColumns: '1.2fr repeat(2, 0.8fr) 1.2fr 1fr repeat(2, 0.7fr)',
                gridTemplateRows: '1fr',
                height: '75px',
                borderBottom: '1px solid #72828a15',
                left: {
                    marginLeft: '1rem'
                },
                image: {
                    height: '40px',
                    marginRight: '0.5rem'
                },
                /* h2,
  h3 {
    margin: '0',
    padding: '0',
  } */
                flexFirst: {
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%'
                },
                flex: {
                    display: 'flex',
                    alignItems: 'center',
                    img: {
                        marginRight: '0.5rem'
                    },
                    h3: {
                        fontSize: '12px',
                        color: 'gray',
                        fontWeight: '400'
                    },
                    h2: {
                        fontSize: '12px',
                        color: 'white',
                        fontWeight: '400'
                    }
                },
                block: {
                    display: 'block',
                    h3: {
                        color: 'gray',
                        fontSize: '12px',
                        marginBottom: '0.3rem',
                        fontWeight: '400'
                    },
                    h2: {
                        fontSize: '16px',
                        fontWeight: '400',
                        color: 'white'
                    }
                },
                center: {
                    textAlign: 'center'
                },
                centerMiddle: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                thin: {
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '400'
                },
                large: {
                    fontWeight: '600',
                    fontSize: '24px',
                    color: 'white'
                },
                end: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                },
                a: {
                    boxShadow: '0px 0px 12px rgba(128, 255, 219, 0.36)',
                    borderRadius: '5px',
                    padding: '12px 25px',
                    background: 'sky',
                    color: '#000',
                    fontWeight: '600',
                    fontSize: '14px',
                    textDecoration: 'none'
                },
                /* .height {
    height: '75px',
  } */
                flexColumn: {
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    h3: {
                        color: 'gray',
                        fontSize: '12px',
                        marginBottom: '0.3rem',
                        fontWeight: '400',
                        marginRight: '0.5rem'
                    },
                    h2: {
                        fontSize: '16px',
                        fontWeight: '400',
                        color: 'white'
                    }
                },
                margin: {
                    marginBottom: '0.5rem'
                },
                '@media screen and (max-width: 1000px)': {
                    display: 'none'
                }
            },

            Wrapper: {
                width: '85vw',
                margin: '0 auto',
                minHeight: '80vh',
                position: 'relative',
                '@media screen and (max-width: 1000px)': {
                    width: '90vw'
                }
            },

            Background: {
                position: 'absolute',
                bottom: '-30%',
                left: '10%',
                width: '80%',
                height: 'auto',
                pointerEvents: 'none'
            },

            Container: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '3rem 0',
                '@media screen and (max-width: 1000px)': {
                    margin: '2rem 0'
                }
            },

            Title: {
                color: 'sky',
                fontSize: '48px',
                fontWeight: 'bold',
                padding: '0',
                margin: '0',
                '@media screen and (max-width: 1000px)': {
                    fontSize: '42px'
                }
            },

            Description: {
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                fontWeight: '400',
                padding: '0',
                fontSize: '24px',
                margin: '0',
                marginTop: '1rem',
                span: {
                    background: 'white',
                    width: '68px',
                    height: '25px',
                    borderRadius: '15px',
                    color: 'dark',
                    fontSize: '24px',
                    fontWeight: '400',
                    marginLeft: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                '@media screen and (max-width: 1000px)': {
                    fontSize: '18px'
                }
            },

            CardContainer: {
                margin: '1rem 0 10rem 0',
                minHeight: '80vh'
            },

            SecondTitle: {
                fontSize: '28px',
                fontWeight: '400',
                margin: '0',
                padding: '0',
                marginBottom: '2rem',
                color: 'white'
            },

            Flex: {
                width: '100%',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                marginTop: '3rem',
                active: {
                    background: 'sky',
                    boxShadow: '0px 0px 12px rgba(128, 255, 219, 0.36)'
                }
            },

            Button: {
                width: '260px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'green',
                color: 'dark',
                fontSize: '16px',
                fontWeight: '700',
                borderRadius: '5px 5px 0px 0px',
                boxShadow: '0px -4px 20px rgba(255, 255, 255, 0.15)',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                '&:first-of-type': {
                    marginRight: '0.5rem'
                },
                '&:last-of-type': {
                    marginLeft: '0.5rem'
                }
            },

            InfoContainer: {
                width: '80vw',
                background: 'bunker',
                height: '55vh',
                borderRadius: '0px 5px 5px 5px',
                boxShadow: '0px 0px 12px rgba(128, 255, 219, 0.36)',
                position: 'relative',
                overflowY: 'scroll',
                '&::-webkit-scrollbar': {
                    width: '12px'
                },
                '&::-webkit-scrollbar-track': {
                    /* background: '#80ffdb15', wrong code*/
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'sky',
                    borderRadius: '50px'
                },
                '@media screen and (max-width: 1000px)': {
                    width: '100%'
                }
            },

            Header: {
                display: 'grid',
                gridTemplateColumns: '1.2fr repeat(2, 0.8fr) 1.2fr 1fr repeat(2, 0.7fr)',
                gridTemplateRows: '1fr',
                height: '55px',
                borderBottom: '1px solid #72828a15',
                margin: '0',
                padding: '0 2rem',
                position: 'sticky',
                top: '0',
                left: '0',
                background: 'bunker',

                '@media screen and (max-width: 1000px)': {
                    display: 'none'
                },
                center: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                h2: {
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: '600',
                    fontSize: '14px',
                    color: 'gray',
                    margin: '0',
                    padding: '0'
                }
            }
        }
    }
}
