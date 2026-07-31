/* =====================================================
   DEVCRAFT PREMIUM PORTFOLIO

   Dynamic Portfolio Loader

   ===================================================== */





class PortfolioLoader {



    constructor(){


        this.container =
            document.querySelector(
                "#portfolio-container"
            );


    }









    async init(){



        if(
            !this.container
        ){

            return;

        }





        try {



            const response =
                await fetch(
                    "assets/data/portfolio.json"
                );





            const projects =
                await response.json();





            this.render(
                projects
            );



        }
        catch(error){



            console.error(
                "Portfolio loading error:",
                error
            );


        }



    }









    render(projects){



        this.container.innerHTML =
            projects
            .map(
                project =>
                `


<div class="portfolio-card glass-card">



    <div class="portfolio-image">


        <img
		data-src="${project.image}"
		src="assets/images/placeholder.webp"
		alt="${project.title}"
		loading="lazy"
		>


    </div>





    <div class="portfolio-content">


        <span class="badge">

            ${project.category}

        </span>



        <h3>

            ${project.title}

        </h3>




        <p>

            ${project.achievement}

        </p>




        <div class="badges">


        ${
            project.technology
            .map(
                tech =>
                `
                <span class="badge">
                    ${tech}
                </span>
                `
            )
            .join("")
        }


        </div>


    </div>


</div>


`
            )
            .join("");



    }



}









document
.addEventListener(
    "templatesLoaded",
    ()=>{


        const portfolio =
            new PortfolioLoader();



        portfolio.init();



    }
);