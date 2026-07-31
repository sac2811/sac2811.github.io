/* =====================================================
   DEVCRAFT PREMIUM PORTFOLIO

   Animated Counter System

   ===================================================== */





class CounterAnimation {



    constructor(){


        this.counters =
            document.querySelectorAll(
                "[data-counter]"
            );


        this.started = false;


    }









    init(){



        if(
            !this.counters.length
        ){

            return;

        }



        this.observe();



    }









    observe(){



        const observer =
            new IntersectionObserver(
                entries => {



                    entries.forEach(
                        entry => {



                            if(
                                entry.isIntersecting &&
                                !this.started
                            ){



                                this.start();


                                this.started =
                                    true;



                            }



                        }
                    );



                },
                {

                    threshold:
                        0.5

                }
            );








        this.counters
        .forEach(
            counter => {


                observer.observe(
                    counter
                );


            }
        );


    }









    start(){



        this.counters
        .forEach(
            counter => {



                const target =
                    Number(
                        counter
                        .dataset
                        .counter
                    );



                this.animate(
                    counter,
                    target
                );



            }
        );



    }









    animate(
        element,
        target
    ){



        let current =
            0;



        const duration =
            2000;



        const increment =
            target /
            (
                duration /
                16
            );








        const update = ()=>{



            current +=
                increment;





            if(
                current <
                target
            ){



                element
                .textContent =
                    Math.floor(
                        current
                    );



                requestAnimationFrame(
                    update
                );



            }
            else{



                element
                .textContent =
                    target;



            }



        };







        update();



    }



}









/*
    Initialize after HTML templates
    are loaded
*/


document
.addEventListener(
    "templatesLoaded",
    ()=>{


        const counters =
            new CounterAnimation();



        counters.init();



    }
);