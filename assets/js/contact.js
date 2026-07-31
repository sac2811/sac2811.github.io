/**
 * ==================================================
 * PORTFOLIO V2
 * Contact Form Controller
 * ==================================================
 *
 * Handles:
 * - Form validation
 * - User feedback
 * - Submission preparation
 *
 * Ready for:
 * - PHP API
 * - Laravel API
 * - WordPress AJAX
 *
 * ==================================================
 */


const ContactForm = {


    form:null,



    /**
     * Initialize contact form
     */
    init(){


        this.form =
            document.querySelector(
                "#contactForm"
            );



        if(!this.form){

            return;

        }



        this.bindEvents();


    },



    /**
     * Bind submit event
     */
    bindEvents(){


        this.form.addEventListener(
            "submit",
            event=>{


                event.preventDefault();


                this.submit();


            }
        );


    },



    /**
     * Submit handler
     */
    submit(){


        const formData =
            new FormData(
                this.form
            );



        const name =
            formData.get(
                "name"
            )
            .trim();



        const email =
            formData.get(
                "email"
            )
            .trim();



        const message =
            formData.get(
                "message"
            )
            .trim();



        if(
            !name ||
            !email ||
            !message
        ){


            this.showMessage(
                "Please fill all required fields.",
                "error"
            );


            return;

        }



        if(
            !this.validateEmail(
                email
            )
        ){


            this.showMessage(
                "Please enter a valid email address.",
                "error"
            );


            return;

        }



        this.setLoading(
            true
        );



        /*
            Production integration point

            Example:

            fetch("/contact.php",{
                method:"POST",
                body:formData
            })

        */



        setTimeout(
            ()=>{


                this.setLoading(
                    false
                );


                this.showMessage(
                    "Thank you! Your message has been sent.",
                    "success"
                );


                this.form.reset();



            },
            1200
        );


    },



    /**
     * Email validation
     */
    validateEmail(email){


        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email);


    },



    /**
     * Show message
     */
    showMessage(
        text,
        type
    ){


        let box =
            this.form.querySelector(
                ".form-message"
            );



        if(!box){

            return;

        }



        box.textContent =
            text;



        box.className =
            `form-message ${type}`;



        setTimeout(
            ()=>{


                box.className =
                    "form-message";


            },
            5000
        );


    },



    /**
     * Loading state
     */
    setLoading(state){


        const button =
            this.form.querySelector(
                "button[type='submit']"
            );



        if(!button){

            return;

        }



        if(state){


            button.disabled =
                true;


            button.dataset.text =
                button.textContent;


            button.textContent =
                "Sending...";


        }

        else{


            button.disabled =
                false;


            button.textContent =
                button.dataset.text ||
                "Send Message";


        }


    }


};

window.ContactForm = ContactForm;