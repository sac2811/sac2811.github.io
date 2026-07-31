/**
 * ==================================================
 * PORTFOLIO V2
 * Utility Library
 * ==================================================
 *
 * Shared helper functions
 *
 * Vanilla JavaScript only
 *
 * ==================================================
 */


const Utils = {


    /**
     * Select one element
     */
    $(selector, parent=document){

        return parent.querySelector(
            selector
        );

    },



    /**
     * Select multiple elements
     */
    $$(selector, parent=document){

        return [
            ...parent.querySelectorAll(
                selector
            )
        ];

    },



    /**
     * Debounce
     */
    debounce(
        callback,
        delay=300
    ){


        let timer;


        return (...args)=>{


            clearTimeout(
                timer
            );


            timer =
                setTimeout(
                    ()=>{

                        callback(
                            ...args
                        );

                    },
                    delay
                );


        };


    },



    /**
     * Throttle
     */
    throttle(
        callback,
        limit=300
    ){


        let waiting=false;



        return (...args)=>{


            if(waiting){

                return;

            }



            callback(
                ...args
            );


            waiting=true;



            setTimeout(
                ()=>{

                    waiting=false;

                },
                limit
            );


        };


    },



    /**
     * Check if element visible
     */
    isVisible(element){


        if(!element){

            return false;

        }



        const rect =
            element.getBoundingClientRect();



        return (

            rect.top <
            window.innerHeight &&

            rect.bottom >
            0

        );


    },



    /**
     * Smooth scroll
     */
    scrollTo(
        target
    ){


        const element =
            typeof target === "string"

            ? document.querySelector(
                target
              )

            : target;



        if(!element){

            return;

        }



        element.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });


    },



    /**
     * Detect mobile device
     */
    isMobile(){


        return window.matchMedia(
            "(max-width:768px)"
        )
        .matches;


    },



    /**
     * Format date
     */
    formatDate(
        date
    ){


        return new Intl.DateTimeFormat(
            "en-US",
            {

                year:"numeric",

                month:"long",

                day:"numeric"

            }
        )
        .format(
            new Date(date)
        );


    },



    /**
     * Safe JSON parse
     */
    parseJSON(
        json,
        fallback={}
    ){


        try{


            return JSON.parse(
                json
            );


        }

        catch(error){


            return fallback;


        }


    },



    /**
     * Generate unique ID
     */
    uid(){


        return Date.now()
            .toString(36)
            +
            Math.random()
            .toString(36)
            .substring(2);


    }



};





/**
 * Make globally available
 */

window.Utils = Utils;