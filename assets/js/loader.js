/* =====================================================
   DEVCRAFT PREMIUM PORTFOLIO

   Dynamic HTML Template Loader

   Replaces PHP Includes
   ===================================================== */



class TemplateLoader {



    constructor(){


        this.templates =
            document.querySelectorAll(
                "[data-template]"
            );


    }







    async loadTemplate(element){


        const file =
            element.getAttribute(
                "data-template"
            );



        if(!file){

            return;

        }






        try {



            const response =
                await fetch(file);





            if(!response.ok){


                throw new Error(
                    `Unable to load ${file}`
                );


            }







            const html =
                await response.text();





            element.innerHTML =
                html;






        }
        catch(error){



            console.error(
                "Template loading failed:",
                error
            );



            element.innerHTML =
            `

            <div class="template-error">

                Template unavailable

            </div>

            `;


        }



    }








    async loadAll(){


        const promises =
            Array.from(
                this.templates
            )
            .map(
                element =>
                this.loadTemplate(element)
            );



        await Promise.all(
            promises
        );



        this.initialize();



    }








    initialize(){


        document.dispatchEvent(
            new Event(
                "templatesLoaded"
            )
        );



    }



}









document.addEventListener(
"DOMContentLoaded",
()=>{


    const loader =
        new TemplateLoader();



    loader.loadAll();



});