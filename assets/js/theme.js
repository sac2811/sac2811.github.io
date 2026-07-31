/* =====================================================
   DEVCRAFT PREMIUM PORTFOLIO

   Theme Switcher Controller

   ===================================================== */





class ThemeManager {



    constructor(){


        this.storageKey =
            "devcraft-theme";


        this.toggle =
            null;


    }









    init(){



        this.loadTheme();


        this.findToggle();


        this.bindEvents();



    }









    findToggle(){



        this.toggle =
            document.querySelector(
                "#theme-toggle"
            );



    }









    bindEvents(){



        if(
            !this.toggle
        ){

            return;

        }








        this.toggle
        .addEventListener(
            "click",
            ()=>{


                this.toggleTheme();



            }
        );



    }









    loadTheme(){



        const savedTheme =
            localStorage.getItem(
                this.storageKey
            );





        if(
            savedTheme
        ){



            document.documentElement
            .setAttribute(
                "data-theme",
                savedTheme
            );



        }



    }









    toggleTheme(){



        const current =
            document.documentElement
            .getAttribute(
                "data-theme"
            );





        const next =
            current === "light"
            ?
            "dark"
            :
            "light";







        document.documentElement
        .setAttribute(
            "data-theme",
            next
        );





        localStorage
        .setItem(
            this.storageKey,
            next
        );



    }



}









document
.addEventListener(
    "templatesLoaded",
    ()=>{


        const theme =
            new ThemeManager();



        theme.init();



    }
);