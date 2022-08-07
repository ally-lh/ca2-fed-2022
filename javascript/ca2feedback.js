// bootstrap code that prevents the submit button from submitting when theres an invalid input.
(function () {
    'use strict' 
    //^^ only allows initialised variables to be used 
    const forms = document.querySelectorAll('.requires-validation')
    //to collect all the bootstrap elements from the form with the ^^ class
    Array.from(forms) // seperates the elements in the array one by one
      .forEach(function (form) { //for each element in the array, the function will run.
        form.addEventListener('submit', function (event) {//each element adds an event listener
          if (!form.checkValidity()) {//check.Validity is an inbuilt function to check if input is valid, if valid, it will return true 
            event.preventDefault() //stops the initial parent element's function from running, which in this case would be submitting the form
            event.stopPropagation() //prevents propagation of the same event from being called.
            //Propagation means bubbling up to parent elements or capturing down to child elements.
          }
          form.classList.add('was-validated') //adds the 'was-validated' class to the form for bootstrap 
        }, false) //false initialises userCapture:false which is bubbling. bubblying enables the event is first captured and handled by the function before propogating to outer elements.
      })
    }
    )()
//bootstrap code end