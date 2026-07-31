/* =====================================================
   DEVCRAFT PREMIUM PORTFOLIO

   Image Lazy Loading Controller

   ===================================================== */





class LazyImageLoader {



    constructor(){


        this.images =
            document.querySelectorAll(
                "img[data-src]"
            );


        this.observer =
            null;


    }









    init(){



        if(
            !this.images.length
        ){

            return;

        }





        this.createObserver();


        this.observe();



    }









    createObserver(){



        this.observer =
            new IntersectionObserver(
                entries => {



                    entries.forEach(
                        entry => {



                            if(
                                entry.isIntersecting
                            ){



                                this.loadImage(
                                    entry.target
                                );



                                this.observer
                                .unobserve(
                                    entry.target
                                );



                            }



                        }
                    );



                },
                {

                    rootMargin:
                    "100px"

                }
            );


    }









    observe(){



        this.images
        .forEach(
            image=>{


                this.observer
                .observe(
                    image
                );


            }
        );


    }









    loadImage(image){



        const source =
            image.dataset.src;





        if(
            !source
        ){

            return;

        }







        image.src =
            source;





        image
        .removeAttribute(
            "data-src"
        );





        image
        .classList
        .add(
            "loaded"
        );


    }



}









document
.addEventListener(
    "templatesLoaded",
    ()=>{


        const lazyLoader =
            new LazyImageLoader();



        lazyLoader.init();



    }
);