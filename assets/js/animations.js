/**
 * ==================================================
 * PORTFOLIO V2
 * Animation Controller
 * ==================================================
 *
 * Handles:
 * - Scroll reveal animations
 * - Skill progress bars
 * - Number counters
 *
 * Vanilla JavaScript only
 *
 * ==================================================
 */


const Animations = {


    observer:null,



    /**
     * Initialize animations
     */
    init(){


        this.initReveal();


        this.initSkills();


        this.initCounters();


    },



    /**
     * Reveal elements on scroll
     */
    initReveal(){


        const elements =
            document.querySelectorAll(
                ".reveal, .reveal-left, .reveal-right"
            );



        if(!elements.length){

            return;

        }



        this.observer =
            new IntersectionObserver(

                entries=>{


                    entries.forEach(
                        entry=>{


                            if(entry.isIntersecting){


                                entry.target
                                .classList
                                .add(
                                    "active"
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

                    threshold:.15

                }

            );



        elements.forEach(
            element=>{


                this.observer.observe(
                    element
                );


            }

        );


    },



    /**
     * Animate skill progress bars
     */
    initSkills(){


        const skills =
            document.querySelectorAll(
                ".skill-progress"
            );



        if(!skills.length){

            return;

        }



        const observer =
            new IntersectionObserver(

                entries=>{


                    entries.forEach(
                        entry=>{


                            if(entry.isIntersecting){


                                const value =
                                    entry.target
                                    .dataset
                                    .progress;



                                entry.target.style.width =
                                    `${value}%`;



                                observer.unobserve(
                                    entry.target
                                );


                            }


                        }

                    );


                },

                {

                    threshold:.5

                }

            );



        skills.forEach(
            skill=>{


                observer.observe(
                    skill
                );


            }

        );


    },



    /**
     * Animate statistics counters
     */
    initCounters(){


        const counters =
            document.querySelectorAll(
                "[data-counter]"
            );



        if(!counters.length){

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


                                this.animateCounter(
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

                    threshold:.6

                }

            );



        counters.forEach(
            counter=>{


                observer.observe(
                    counter
                );


            }

        );


    },



    /**
     * Counter animation
     */
    animateCounter(element){


        const target =
            Number(
                element.dataset.counter
            );



        let current = 0;



        const duration = 1500;


        const increment =
            target /
            (duration / 16);



        const update = ()=>{


            current += increment;



            if(current < target){


                element.textContent =
                    Math.floor(current);



                requestAnimationFrame(
                    update
                );


            }

            else{


                element.textContent =
                    target;


            }


        };



        update();


    }


};





/**
 * Initialize after templates load
 */

document.addEventListener(
    "templatesLoaded",
    ()=>{


        Animations.init();


    }
);