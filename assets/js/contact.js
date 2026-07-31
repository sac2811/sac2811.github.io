/* =====================================================
   DEVCRAFT PREMIUM PORTFOLIO

   Contact Form Controller

   ===================================================== */





class ContactForm {



    constructor(){


        this.form =
            document.querySelector(
                "#contact-form"
            );


        this.messageBox =
            document.querySelector(
                ".form-message"
            );


    }









    init(){



        if(
            !this.form
        ){

            return;

        }



        this.bindEvents();



    }









    bindEvents(){



        this.form
        .addEventListener(
            "submit",
            event=>{


                event.preventDefault();



                this.submit();



            }
        );



    }









    validate(){



        const fields =
            this.form
            .querySelectorAll(
                "[required]"
            );





        let valid =
            true;





        fields
        .forEach(
            field=>{



                field
                .classList
                .remove(
                    "error"
                );



                if(
                    !field.value.trim()
                ){



                    field
                    .classList
                    .add(
                        "error"
                    );


                    valid =
                        false;


                }



            }
        );







        return valid;



    }









    async submit(){



        if(
            !this.validate()
        ){


            this.showMessage(
                "Please fill all required fields.",
                "error"
            );


            return;


        }








        const button =
            this.form
            .querySelector(
                "button[type='submit']"
            );





        if(button){


            button
            .disabled =
                true;


            button
            .innerHTML =
                "Sending...";


        }









        /*
            Future API endpoint:

            fetch(
              "/api/contact",
              {
                 method:"POST",
                 body:formData
              }
            )

        */






        await new Promise(
            resolve =>
            setTimeout(
                resolve,
                1200
            )
        );








        this.showMessage(
            "Thank you! Your message has been sent successfully.",
            "success"
        );







        this.form.reset();








        if(button){


            button
            .disabled =
                false;


            button
            .innerHTML =
                "Send Message";


        }



    }









    showMessage(
        text,
        type
    ){



        if(
            !this.messageBox
        ){

            return;

        }





        this.messageBox
        .className =
            `form-message ${type}`;



        this.messageBox
        .textContent =
            text;



    }



}









document
.addEventListener(
    "templatesLoaded",
    ()=>{


        const contact =
            new ContactForm();



        contact.init();



    }
);