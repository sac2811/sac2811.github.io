/**
 * ==================================================
 * PORTFOLIO V2
 * SEO Enhancement Controller
 * ==================================================
 *
 * Handles:
 * - Dynamic metadata
 * - Canonical URLs
 * - Schema helpers
 * - Copyright year
 *
 * ==================================================
 */


const SEO = {


    /**
     * Initialize SEO features
     */
    init(){


        this.updateYear();


        this.setCanonical();


        this.updateSchema();


    },





    /**
     * Update copyright year
     */
    updateYear(){


        const year =
            document.querySelector(
                "#currentYear"
            );



        if(year){


            year.textContent =
                new Date()
                .getFullYear();


        }


    },





    /**
     * Add canonical URL
     */
    setCanonical(){


        let canonical =
            document.querySelector(
                "link[rel='canonical']"
            );



        if(!canonical){


            canonical =
                document.createElement(
                    "link"
                );


            canonical.rel =
                "canonical";


            document.head.appendChild(
                canonical
            );


        }



        canonical.href =
            window.location.href.split(
                "#"
            )[0];


    },





    /**
     * Update structured data
     */
    updateSchema(){


        const schema =
            document.querySelector(
                "#developer-schema"
            );



        if(!schema){

            return;

        }



        const data = {


            "@context":
                "https://schema.org",


            "@type":
                "Person",


            "name":
                "Portfolio Developer",


            "jobTitle":
                "PHP Laravel WordPress Developer",


            "description":
                "Professional web developer specializing in PHP, Laravel, WordPress and WooCommerce solutions.",


            "knowsAbout":[

                "PHP",

                "Laravel",

                "WordPress",

                "WooCommerce",

                "MySQL",

                "JavaScript"

            ]


        };



        schema.textContent =
            JSON.stringify(
                data,
                null,
                2
            );


    },





    /**
     * Update meta description
     */
    updateDescription(
        description
    ){


        let meta =
            document.querySelector(
                "meta[name='description']"
            );



        if(meta){


            meta.content =
                description;


        }


    },





    /**
     * Update title
     */
    updateTitle(
        title
    ){


        if(title){


            document.title =
                title;


        }


    }


};





window.SEO =
    SEO;





/**
 * Initialize after DOM ready
 */

document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        SEO.init();


    }
);