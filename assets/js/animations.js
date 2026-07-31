/* =====================================================
   DEVCRAFT PREMIUM PORTFOLIO

   Scroll Reveal Animation Engine

   ===================================================== */





class ScrollAnimator {



    constructor(){


        this.elements =
            document.querySelectorAll(
                "[data-animation]"
            );


        this.observer = null;


    }









    init(){



        if(
            !this.elements.length
        ){

            return;

        }



        this.createObserver();


        this.observeElements();



    }









    createObserver(){



        const options = {


            threshold:
                0.15,


            rootMargin:
                "0px 0px -80px 0px"



        };








        this.observer =
            new IntersectionObserver(
                entries => {



                    entries.forEach(
                        entry => {



                            if(
                                entry.isIntersecting
                            ){



                                entry.target
                                .classList
                                .add(
                                    "animate-active"
                                );



                                this.observer
                                .unobserve(
                                    entry.target
                                );



                            }



                        }
                    );



                },
                options
            );



    }









    observeElements(){



        this.elements
        .forEach(
            element => {



                this.observer
                .observe(
                    element
                );



            }
        );



    }



}









/*
    Initialize after templates
    have loaded
*/


document
.addEventListener(
    "templatesLoaded",
    ()=>{


        const animator =
            new ScrollAnimator();



        animator.init();



    }
);