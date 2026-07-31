/**
 * ==================================================
 * PORTFOLIO V2
 * Template Loader
 * ==================================================
 *
 * Loads reusable HTML sections dynamically using
 * native JavaScript fetch()
 *
 * No frameworks
 * No dependencies
 *
 * ==================================================
 */


const TemplateLoader = {

    /**
     * Template directory location
     */
    basePath: "templates/",


    /**
     * Templates to load
     *
     * key:
     *  DOM container ID
     *
     * value:
     *  template filename
     */
    templates: {

        header: "header.html",

        hero: "hero.html",

        about: "about.html",

        services: "services.html",

        skills: "skills.html",

        experience: "experience.html",

        portfolio: "portfolio.html",

        testimonials: "testimonials.html",

        faq: "faq.html",

        contact: "contact.html",

        footer: "footer.html"

    },


    /**
     * Load single template
     */
    async loadTemplate(container, file){


        const element =
            document.getElementById(container);


        if(!element){

            console.warn(
                `Template container missing: ${container}`
            );

            return;

        }



        try{


            const response =
                await fetch(
                    `${this.basePath}${file}`
                );



            if(!response.ok){

                throw new Error(
                    `Failed loading ${file}`
                );

            }



            const html =
                await response.text();



            element.innerHTML = html;



        }

        catch(error){


            console.error(
                "Template loading error:",
                error
            );


            element.innerHTML = `
                <div class="template-error">
                    Unable to load ${file}
                </div>
            `;


        }


    },



    /**
     * Load all templates
     */
    async loadAll(){


        const promises =
            Object.entries(this.templates)
            .map(
                ([container,file]) =>
                    this.loadTemplate(
                        container,
                        file
                    )
            );



        await Promise.all(promises);



        document.dispatchEvent(
            new CustomEvent(
                "templatesLoaded"
            )
        );


    },
	
	async hideLoader() {
		const loader = document.querySelector(".page-loader");

		if (!loader) return;

		loader.classList.add("hidden");

		setTimeout(() => loader.remove(), 500);
	}


};



/**
 * Start loader
 */

window.TemplateLoader = TemplateLoader;