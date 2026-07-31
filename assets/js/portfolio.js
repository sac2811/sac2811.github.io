/**
 * ==================================================
 * PORTFOLIO V2
 * Portfolio Data Controller
 * ==================================================
 *
 * Handles:
 * - JSON portfolio loading
 * - Dynamic card rendering
 * - Category filtering
 *
 * ==================================================
 */


const Portfolio = {


    data:[],


    container:null,


    /**
     * Initialize portfolio
     */
    async init(){


        this.container =
            document.querySelector(
                ".portfolio-grid"
            );



        if(!this.container){

            return;

        }



        await this.loadProjects();


        this.renderProjects(
            this.data
        );


        this.initFilters();


    },



    /**
     * Load JSON data
     */
    async loadProjects(){


        try{


            const response =
                await fetch(
                    "assets/data/portfolio.json"
                );



            if(!response.ok){

                throw new Error(
                    "Portfolio data unavailable"
                );

            }



            this.data =
                await response.json();


        }

        catch(error){


            console.error(
                error
            );


            this.container.innerHTML = `

                <div class="portfolio-empty">

                    <p>
                    Unable to load projects.
                    </p>

                </div>

            `;


        }


    },



    /**
     * Render portfolio cards
     */
    renderProjects(projects){


        if(!projects.length){


            this.container.innerHTML = `

                <div class="portfolio-empty">

                    <p>
                    No projects found.
                    </p>

                </div>

            `;


            return;

        }



        this.container.innerHTML =
            projects
            .map(
                project =>
                this.createCard(project)
            )
            .join("");



        document.dispatchEvent(
            new CustomEvent(
                "portfolioRendered"
            )
        );


    },



    /**
     * Create card HTML
     */
    createCard(project){


        return `

        <article class="portfolio-card reveal">


            <div class="portfolio-image">


                <img
                    src="${project.image}"
                    alt="${project.title}"
                    loading="lazy"
                >


                <div class="portfolio-overlay">


                    <a
                        href="${project.url}"
                        class="portfolio-link"
                        target="_blank"
                        rel="noopener"
                        aria-label="View project"
                    >

                        ↗

                    </a>


                </div>


            </div>



            <div class="portfolio-content">


                <span class="portfolio-category">

                    ${project.category}

                </span>



                <h3>

                    ${project.title}

                </h3>



                <p>

                    ${project.description}

                </p>



                <div class="portfolio-tags">


                    ${
                        project.tags
                        .map(
                            tag =>
                            `
                            <span class="portfolio-tag">
                                ${tag}
                            </span>
                            `
                        )
                        .join("")
                    }


                </div>


            </div>


        </article>

        `;


    },



    /**
     * Category filters
     */
    initFilters(){


        const buttons =
            document.querySelectorAll(
                ".filter-btn"
            );



        if(!buttons.length){

            return;

        }



        buttons.forEach(
            button=>{


                button.addEventListener(
                    "click",
                    ()=>{


                        buttons.forEach(
                            btn =>
                            btn.classList
                            .remove(
                                "active"
                            )
                        );



                        button.classList.add(
                            "active"
                        );



                        const category =
                            button.dataset
                            .filter;



                        if(
                            category === "all"
                        ){


                            this.renderProjects(
                                this.data
                            );


                            return;


                        }



                        const filtered =
                            this.data.filter(
                                project =>
                                project.category
                                === category
                            );



                        this.renderProjects(
                            filtered
                        );


                    }

                );


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


        Portfolio.init();


    }
);