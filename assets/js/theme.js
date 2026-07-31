/**
 * ==================================================
 * PORTFOLIO V2
 * Theme Manager
 * ==================================================
 *
 * Features:
 * - Dark / Light mode
 * - LocalStorage persistence
 * - System preference detection
 * - Dynamic theme toggle support
 *
 * ==================================================
 */


const ThemeManager = {


    storageKey:
        "portfolio-theme",



    /**
     * Initialize theme system
     */
    init(){


        const savedTheme =
            localStorage.getItem(
                this.storageKey
            );



        if(savedTheme){


            this.apply(
                savedTheme
            );


        }

        else{


            const prefersLight =
                window.matchMedia(
                    "(prefers-color-scheme: light)"
                ).matches;



            this.apply(
                prefersLight
                ? "light"
                : "dark"
            );


        }



        this.bindEvents();


    },



    /**
     * Apply selected theme
     */
    apply(theme){


        if(theme === "light"){


            document.body.classList.add(
                "light"
            );


        }

        else{


            document.body.classList.remove(
                "light"
            );


        }



        localStorage.setItem(
            this.storageKey,
            theme
        );



        document.dispatchEvent(
            new CustomEvent(
                "themeChanged",
                {

                    detail:{
                        theme
                    }

                }
            )
        );


        this.updateIcon(
            theme
        );


    },



    /**
     * Toggle theme
     */
    toggle(){


        const isLight =
            document.body.classList.contains(
                "light"
            );



        this.apply(
            isLight
            ? "dark"
            : "light"
        );


    },



    /**
     * Attach toggle button
     */
    bindEvents(){


        document.addEventListener(
            "click",
            event=>{


                const button =
                    event.target.closest(
                        "[data-theme-toggle]"
                    );



                if(!button){

                    return;

                }



                this.toggle();


            }

        );


    },



    /**
     * Update toggle icon
     */
    updateIcon(theme){


        const buttons =
            document.querySelectorAll(
                "[data-theme-toggle]"
            );



        buttons.forEach(
            button=>{


                button.innerHTML =
                    theme === "light"
                    ? "🌙"
                    : "☀️";


                button.setAttribute(
                    "aria-label",
                    theme === "light"
                    ? "Enable dark mode"
                    : "Enable light mode"
                );


            }
        );


    }


};





/**
 * Start theme manager
 */

document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        ThemeManager.init();


    }
);