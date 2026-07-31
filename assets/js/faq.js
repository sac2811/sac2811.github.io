/* =====================================================
   DEVCRAFT PREMIUM PORTFOLIO

   FAQ Accordion Controller

   ===================================================== */





class FAQAccordion {



    constructor(){


        this.items =
            document.querySelectorAll(
                ".faq-item"
            );


    }









    init(){



        if(
            !this.items.length
        ){

            return;

        }



        this.bindEvents();



    }









    bindEvents(){



        this.items
        .forEach(
            item=>{



                const button =
                    item.querySelector(
                        ".faq-question"
                    );





                if(!button){

                    return;

                }






                button
                .addEventListener(
                    "click",
                    ()=>{


                        this.toggle(
                            item
                        );


                    }
                );



            }
        );


    }









    toggle(activeItem){



        this.items
        .forEach(
            item=>{



                if(
                    item !== activeItem
                ){



                    item
                    .classList
                    .remove(
                        "active"
                    );



                }



            }
        );







        activeItem
        .classList
        .toggle(
            "active"
        );



    }



}









/*
    Initialize after templates load
*/


document
.addEventListener(
    "templatesLoaded",
    ()=>{


        const faq =
            new FAQAccordion();



        faq.init();



    }
);