/**
 * ==================================================
 * PORTFOLIO V2
 * Lazy Loading Controller
 * ==================================================
 *
 * Handles:
 * - Image lazy loading
 * - Progressive loading
 * - Performance optimization
 *
 * ==================================================
 */


const LazyLoad = {


    images: [],



    /**
     * Initialize
     */
    init(){


        this.images =
            document.querySelectorAll(
                "img[data-src]"
            );



        if(!this.images.length){

            return;

        }



        this.observe();


    },





    /**
     * Setup observer
     */
    observe(){


        if(
            !("IntersectionObserver" in window)
        ){


            this.loadAll();


            return;

        }





        const observer =
            new IntersectionObserver(
                entries=>{


                    entries.forEach(
                        entry=>{


                            if(
                                entry.isIntersecting
                            ){


                                this.load(
                                    entry.target
                                );


                                observer.unobserve(
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





        this.images.forEach(
            image=>{


                observer.observe(
                    image
                );


            }
        );


    },





    /**
     * Load image
     */
    load(
        image
    ){


        const source =
            image.dataset.src;



        if(!source){

            return;

        }



        image.src =
            source;



        image.removeAttribute(
            "data-src"
        );



        image.classList.add(
            "loaded"
        );


    },





    /**
     * Fallback loading
     */
    loadAll(){


        this.images.forEach(
            image=>{


                this.load(
                    image
                );


            }
        );


    }


};





window.LazyLoad =
    LazyLoad;