/**
 * ==================================================
 * PORTFOLIO V2
 * FAQ Accordion Controller
 * ==================================================
 *
 * Handles:
 * - FAQ expand/collapse
 * - Smooth animations
 * - Accessibility
 *
 * ==================================================
 */


const FAQ = {


    items:[],


    /**
     * Initialize FAQ
     */
    init(){


        this.items =
            document.querySelectorAll(
                ".faq-item"
            );



        if(!this.items.length){

            return;

        }



        this.bindEvents();


    },



    /**
     * Bind FAQ events
     */
    bindEvents(){


        this.items.forEach(
            item=>{


                const button =
                    item.querySelector(
                        ".faq-question"
                    );


                const answer =
                    item.querySelector(
                        ".faq-answer"
                    );



                if(!button || !answer){

                    return;

                }



                button.setAttribute(
                    "aria-expanded",
                    "false"
                );



                button.addEventListener(
                    "click",
                    ()=>{


                        this.toggle(
                            item,
                            button,
                            answer
                        );


                    }
                );



            }
        );


    },



    /**
     * Toggle FAQ item
     */
    toggle(
        item,
        button,
        answer
    ){


        const active =
            item.classList.contains(
                "active"
            );



        this.closeAll();



        if(!active){


            item.classList.add(
                "active"
            );


            button.setAttribute(
                "aria-expanded",
                "true"
            );


            answer.style.maxHeight =
                answer.scrollHeight +
                "px";


        }


    },



    /**
     * Close all items
     */
    closeAll(){


        this.items.forEach(
            item=>{


                item.classList.remove(
                    "active"
                );



                const button =
                    item.querySelector(
                        ".faq-question"
                    );



                const answer =
                    item.querySelector(
                        ".faq-answer"
                    );



                if(button){

                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }



                if(answer){

                    answer.style.maxHeight =
                        null;

                }



            }
        );


    }


};





/**
 * Initialize after templates load
 */

document.addEventListener(
    "templatesLoaded",
    ()=>{


        FAQ.init();


    }
);