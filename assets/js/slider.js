/* =====================================================
   DEVCRAFT PREMIUM PORTFOLIO

   Hero Slider Controller

   ===================================================== */





class HeroSlider {



    constructor(){


        this.slider =
            document.querySelector(
                ".hero-slider"
            );


        this.slides =
            document.querySelectorAll(
                ".hero-slide"
            );


        this.nextButton =
            document.querySelector(
                ".slider-next"
            );


        this.prevButton =
            document.querySelector(
                ".slider-prev"
            );


        this.dots =
            document.querySelectorAll(
                ".slider-dot"
            );


        this.current =
            0;


        this.timer =
            null;


    }









    init(){



        if(
            !this.slider ||
            !this.slides.length
        ){

            return;

        }





        this.showSlide(
            this.current
        );


        this.bindEvents();


        this.startAutoPlay();



    }









    bindEvents(){



        this.nextButton
        ?.addEventListener(
            "click",
            ()=>{


                this.next();



            }
        );








        this.prevButton
        ?.addEventListener(
            "click",
            ()=>{


                this.previous();



            }
        );








        this.dots
        .forEach(
            (dot,index)=>{


                dot
                .addEventListener(
                    "click",
                    ()=>{


                        this.showSlide(
                            index
                        );


                    }
                );


            }
        );








        this.slider
        .addEventListener(
            "mouseenter",
            ()=>{


                this.stopAutoPlay();



            }
        );








        this.slider
        .addEventListener(
            "mouseleave",
            ()=>{


                this.startAutoPlay();



            }
        );


    }









    showSlide(index){



        this.slides
        .forEach(
            slide=>{


                slide
                .classList
                .remove(
                    "active"
                );


            }
        );






        this.dots
        .forEach(
            dot=>{


                dot
                .classList
                .remove(
                    "active"
                );


            }
        );








        this.slides[index]
        ?.classList
        .add(
            "active"
        );








        this.dots[index]
        ?.classList
        .add(
            "active"
        );






        this.current =
            index;



    }









    next(){



        let nextSlide =
            this.current + 1;





        if(
            nextSlide >=
            this.slides.length
        ){


            nextSlide = 0;


        }





        this.showSlide(
            nextSlide
        );


    }









    previous(){



        let previousSlide =
            this.current - 1;





        if(
            previousSlide < 0
        ){


            previousSlide =
                this.slides.length - 1;


        }





        this.showSlide(
            previousSlide
        );


    }









    startAutoPlay(){



        this.stopAutoPlay();





        this.timer =
            setInterval(
                ()=>{


                    this.next();



                },
                5000
            );


    }









    stopAutoPlay(){



        if(
            this.timer
        ){


            clearInterval(
                this.timer
            );


        }



    }



}









/*
    Initialize after templates
    are loaded
*/


document
.addEventListener(
    "templatesLoaded",
    ()=>{


        const slider =
            new HeroSlider();



        slider.init();



    }
);