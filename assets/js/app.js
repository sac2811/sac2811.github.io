/* =====================================================
   DEVCRAFT PREMIUM PORTFOLIO

   Main Application Controller

   ===================================================== */



class DevCraftApp {



    constructor(){


        this.header = null;

        this.menuButton = null;

        this.navMenu = null;

        this.backToTop = null;


    }








    init(){



        this.cacheElements();


        this.bindEvents();


        this.updateYear();


        this.removeLoader();



    }








    cacheElements(){



        this.header =
            document.querySelector(
                "header"
            );



        this.menuButton =
            document.querySelector(
                ".menu-toggle"
            );



        this.navMenu =
            document.querySelector(
                ".nav-menu"
            );



        this.backToTop =
            document.querySelector(
                "#back-to-top"
            );


    }








    bindEvents(){



        this.mobileMenu();


        this.headerScroll();


        this.smoothScroll();


        this.backToTopAction();


        this.contactForm();



    }









    /* ===============================
       Mobile Menu
       =============================== */


    mobileMenu(){



        if(
            !this.menuButton ||
            !this.navMenu
        ){

            return;

        }






        this.menuButton
        .addEventListener(
            "click",
            ()=>{


                this.menuButton
                .classList
                .toggle(
                    "active"
                );



                this.navMenu
                .classList
                .toggle(
                    "active"
                );



            }
        );








        document
        .querySelectorAll(
            ".nav-link"
        )
        .forEach(
            link=>{


                link
                .addEventListener(
                    "click",
                    ()=>{


                        this.menuButton
                        .classList
                        .remove(
                            "active"
                        );



                        this.navMenu
                        .classList
                        .remove(
                            "active"
                        );


                    }
                );


            }
        );


    }









    /* ===============================
       Sticky Header
       =============================== */


    headerScroll(){



        window
        .addEventListener(
            "scroll",
            ()=>{


                if(
                    window.scrollY > 50
                ){


                    this.header
                    ?.classList
                    .add(
                        "scrolled"
                    );


                }
                else{


                    this.header
                    ?.classList
                    .remove(
                        "scrolled"
                    );


                }



            }
        );


    }









    /* ===============================
       Smooth Navigation
       =============================== */


    smoothScroll(){



        document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            anchor=>{


                anchor
                .addEventListener(
                    "click",
                    event=>{


                        const target =
                            document
                            .querySelector(
                                anchor
                                .getAttribute(
                                    "href"
                                )
                            );



                        if(target){


                            event.preventDefault();



                            target
                            .scrollIntoView({

                                behavior:
                                "smooth"


                            });


                        }


                    }
                );


            }
        );


    }









    /* ===============================
       Back To Top
       =============================== */


    backToTopAction(){



        if(
            !this.backToTop
        ){

            return;

        }






        window
        .addEventListener(
            "scroll",
            ()=>{


                if(
                    window.scrollY > 600
                ){


                    this.backToTop
                    .classList
                    .add(
                        "show"
                    );


                }
                else{


                    this.backToTop
                    .classList
                    .remove(
                        "show"
                    );


                }



            }
        );








        this.backToTop
        .addEventListener(
            "click",
            ()=>{


                window
                .scrollTo({

                    top:0,

                    behavior:
                    "smooth"


                });


            }
        );


    }









    /* ===============================
       Dynamic Year
       =============================== */


    updateYear(){



        const year =
            document
            .querySelector(
                "#current-year"
            );



        if(year){


            year.textContent =
                new Date()
                .getFullYear();


        }



    }









    /* ===============================
       Loader
       =============================== */


    removeLoader(){



        setTimeout(
            ()=>{


                document
                .body
                .classList
                .add(
                    "page-loaded"
                );



            },
            800
        );


    }









    /* ===============================
       Contact Form
       =============================== */


    contactForm(){



        const form =
            document
            .querySelector(
                "#contact-form"
            );



        if(!form){

            return;

        }






        form
        .addEventListener(
            "submit",
            event=>{


                event.preventDefault();



                alert(
                    "Thank you! Your message has been received."
                );



                form.reset();



            }
        );


    }



}









/*
   Initialize after templates
   are injected
*/


document
.addEventListener(
    "templatesLoaded",
    ()=>{


        const app =
            new DevCraftApp();



        app.init();



    }
);