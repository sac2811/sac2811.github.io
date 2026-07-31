/**
 * ==================================================
 * PORTFOLIO V2
 * Navigation Controller
 * ==================================================
 *
 * Handles:
 * - Mobile menu
 * - Sticky header
 * - Active navigation
 * - Dynamic templates
 *
 * ==================================================
 */


const Navigation = {


    header:null,

    menuButton:null,

    nav:null,



    /**
     * Initialize navigation
     */
    init(){


        this.header =
            document.querySelector(
                ".header"
            );


        this.menuButton =
            document.querySelector(
                ".menu-toggle"
            );


        this.nav =
            document.querySelector(
                ".nav"
            );



        if(!this.header){

            return;

        }



        this.bindEvents();


        this.handleScroll();


    },



    /**
     * Bind events
     */
    bindEvents(){



        if(this.menuButton){


            this.menuButton.addEventListener(
                "click",
                ()=>{


                    this.toggleMenu();


                }

            );


        }



        document.addEventListener(
            "click",
            event=>{


                const link =
                    event.target.closest(
                        ".nav-link"
                    );



                if(link){


                    this.closeMenu();


                    this.setActive(
                        link
                    );


                }


            }

        );



        document.addEventListener(
            "keydown",
            event=>{


                if(event.key === "Escape"){


                    this.closeMenu();


                }


            }

        );



        window.addEventListener(
            "scroll",
            ()=>{


                this.handleScroll();


                this.highlightSection();


            }

        );


    },



    /**
     * Mobile menu toggle
     */
    toggleMenu(){


        if(!this.nav ||
           !this.menuButton){

            return;

        }



        this.nav.classList.toggle(
            "active"
        );


        this.menuButton.classList.toggle(
            "active"
        );


        const expanded =
            this.menuButton.classList
            .contains("active");



        this.menuButton
        .setAttribute(
            "aria-expanded",
            expanded
        );


    },



    /**
     * Close mobile menu
     */
    closeMenu(){


        if(this.nav){

            this.nav.classList.remove(
                "active"
            );

        }



        if(this.menuButton){

            this.menuButton.classList.remove(
                "active"
            );

        }


    },



    /**
     * Sticky header
     */
    handleScroll(){


        if(!this.header){

            return;

        }



        if(window.scrollY > 50){


            this.header.classList.add(
                "scrolled"
            );


        }

        else{


            this.header.classList.remove(
                "scrolled"
            );


        }


    },



    /**
     * Active menu item
     */
    setActive(link){


        document
        .querySelectorAll(
            ".nav-link"
        )
        .forEach(item=>{


            item.classList.remove(
                "active"
            );


        });



        link.classList.add(
            "active"
        );


    },



    /**
     * Highlight current section
     */
    highlightSection(){


        const sections =
            document.querySelectorAll(
                "main section"
            );


        const scrollPosition =
            window.scrollY + 150;



        sections.forEach(
            section=>{


                const top =
                    section.offsetTop;


                const height =
                    section.offsetHeight;



                if(
                    scrollPosition >= top &&
                    scrollPosition <
                    top + height
                ){


                    const id =
                        section.getAttribute(
                            "id"
                        );



                    const link =
                        document.querySelector(
                            `.nav-link[href="#${id}"]`
                        );



                    if(link){

                        this.setActive(
                            link
                        );

                    }


                }


            }

        );


    }


};

window.Navigation = Navigation;