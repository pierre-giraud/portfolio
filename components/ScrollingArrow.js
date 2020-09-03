import React from "react";

function ScrollingArrow(){
    return (
        <a className={"arrow"} href={"#intro"}>
            <div className={"arrow-left"}/>
            <div className={"arrow-right"}/>
        </a>
    )
}

export default ScrollingArrow;

/*const transitionTime = ".15s";

const useStyles = makeStyles((theme) => ({
    arrow: {
        position: 'absolute',
        cursor: 'pointer',
        height: '80px',
        width: '80px',
        top: '50px',
        left: '50%',
        transition: 'transform .1s',
        '&:hover': {
            '&$arrowLeft': {
                '&:after': {
                    left: 0,
                }
            },
            '&$arrowRight:after': {
                right: 0,
            }
        },
        /*'&:hover &$arrowLeft:after': {
            left: 0
        },
        '&:active': {
            transform: 'scale(0.9)',
        }
    },
    arrowLeft: {
        position: 'absolute',
        backgroundColor: '#666',
        height: '6px',
        width: '70%',
        top: '50%',
        transform: 'rotate(40deg)',
        transformOrigin: 'top left',

        '&:after': {
            backgroundColor: '#fff',
            content: "''",
            height: '100%',
            position: 'absolute',
            top: 0,
            left: '100%',
            right: 0,
            transitionDelay: '0s',
            transition: `all ${transitionTime}`,
        }
    },
    arrowRight: {
        position: 'absolute',
        backgroundColor: '#666',
        height: '6px',
        width: '70%',
        left: '30%',
        top: '50%',
        transform: 'rotate(-40deg)',
        transformOrigin: 'top right',

        '&:after': {
            backgroundColor: '#fff',
            content: "''",
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: '100%',
            transitionDelay: '0s',
            transition: `all ${transitionTime}`,
        }
    },
}));*/