/**
 * ==================================================
 * PORTFOLIO V2
 * MAIN APPLICATION CONTROLLER
 * ==================================================
 *
 * Architecture:
 *
 * index.html
 *
 *      |
 *      |
 *      ↓
 *
 * fetch templates/*.html
 *
 *      |
 *      |
 *      ↓
 *
 * Inject HTML
 *
 *      |
 *      |
 *      ↓
 *
 * Initialize modules
 *
 * ==================================================
 */


const App = {



    templates:{


        header:
        "templates/header.html",


        hero:
        "templates/hero.html",


        about:
        "templates/about.html",


        services:
        "templates/services.html",


        skills:
        "templates/skills.html",


        experience:
        "templates/experience.html",


        portfolio:
        "templates/portfolio.html",


        testimonials:
        "templates/testimonials.html",


        faq:
        "templates/faq.html",


        contact:
        "templates/contact.html",


        footer:
        "templates/footer.html"


    },






    /**
     * Initialize application
     */
    async init() {

		// Load HTML templates
		await TemplateLoader.loadAll();

		// Initialize UI modules
		if (window.Navigation) Navigation.init();

		if (window.Theme) Theme.init();

		if (window.Animations) Animations.init();

		if (window.Portfolio) await Portfolio.init();

		if (window.FAQ) FAQ.init();

		if (window.Contact) Contact.init();

		if (window.LazyLoad) LazyLoad.init();

		// Hide loader
		const loader = document.querySelector(".page-loader");

		if (loader) {
			loader.classList.add("hidden");

			setTimeout(() => loader.remove(), 500);
		}

	},






    /**
     * Load all HTML templates
     */
    async loadTemplates(){



        const entries =
            Object.entries(
                this.templates
            );



        await Promise.all(
			Object.entries(this.templates).map(([id, path]) =>
				this.loadTemplate(id, path)
			)
		);



    },






    /**
     * Fetch single template
     */
    async loadTemplate(
        id,
        path
    ){



        const container =
            document.getElementById(
                id
            );



        if(!container){

            return;

        }





        try{


            const response =
                await fetch(
                    path
                );



            if(!response.ok){


                throw new Error(
                    `Unable to load ${path}`
                );


            }





            container.innerHTML =
                await response.text();




        }
        catch(error){



            console.error(
                error
            );



            container.innerHTML =
            `
            <div class="template-error">

                Unable to load section.

            </div>
            `;


        }



    },






    /**
     * Notify modules
     */
    dispatchReadyEvent(){



        document.dispatchEvent(
            new Event(
                "templatesLoaded"
            )
        );



    },






    /**
     * Initialize dynamic modules
     */
    initializeModules(){



        if(window.Navigation){

            Navigation.init();

        }




        if(window.Theme){

            Theme.init();

        }




        if(window.Animations){

            Animations.init();

        }




        if(window.Portfolio){

            Portfolio.init();

        }




        if(window.FAQ){

            FAQ.init();

        }




        if(window.Contact){

            Contact.init();

        }




        if(window.LazyLoad){

            LazyLoad.init();

        }




    }


};






window.App = App;

document.addEventListener("DOMContentLoaded", async () => {
    await App.init();
});