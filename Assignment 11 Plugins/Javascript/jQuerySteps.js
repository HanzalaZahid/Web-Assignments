$(document).ready(()=>
{

    let form = $('#form');
    jQuery.validator.addMethod('pakistanPhone', function(value, element){
        return this.optional(element) || /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/.test(value);
    },"Enter Pakistan Phone Number");

    jQuery.validator.addMethod('strongPassword', function(value, element)
    {
        return this.optional(element) || /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);
    },"Password should contain at least 1 upper case letter, 1 lower case letter, 1 number or special character, 8 characters in length");

    jQuery.validator.addMethod('provinceRule', function(value, element)
    {
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
    },"Enter correct province/state");

    let validationSettings = {
        rules:
        {
            firstname:
            {
                required: true,
                lettersonly: true
            },
            lastname:
            {
                required: true,
                lettersonly: true
            },
            dob:
            {
                required: true
            },
            gender:
            {
                required: true
            },
            email:
            {
                required: true,
                email: true
            },
            phone:
            {
                required: true,
                pakistanPhone: true
            },
            password:
            {
                required: true,
                strongPassword: true
            },
            cpassword:
            {
                required: true,
                equalTo: "#password"
            },
            country:
            {
                required: true,
            },
            province:
            {
                required: true,
                provinceRule: true
            }
        },
        messages:
        {
            firstname:
            {
                required: 'First Name is Required',
                lettersonly: 'First Name can only contain letters'
            },
            lastname:
            {
                required: 'First Name is Required',
                lettersonly: 'First Name can only contain letters'
            },
            lastname:
            {
                required: 'Date of Birth is Required',
                // lettersonly: 'First Name can only contain letters'
            },
            gender:
            {
                required: 'Please Select your Gender',
                // lettersonly: 'First Name can only contain letters'
            },
            email:
            {
                required: "Please Enter your Email",
                email: "Please enter correct email"
            },
            phone:
            {
                required: "Phone number is Required",
            },
            password:
            {
                required: "Password is Required",
            },
            cpassword:
            {
                required: 'Please re-enter your password',
                equalTo: 'Pasword doesn\'t Match'
            },
            country:
            {
                required: "Country is Required",
            },
        }
    }


    form.validate(validationSettings);
    // STEPS CODE HERE1
    $('#step_form').steps(
        {
            headerTag: 'h3',
            bodyTag: 'section',
            autoFocus: true,
            startIndex:0,

            onStepChanging: function(event, currentIndex, newIndex)
            {
                return form.valid();
            },
            onFinishing: function(event, currentIndex)
            {
                return form.valid();
            },
            onFinished: function(event, currentIndex)
            {
                form.submit();
            },


            labels:
            {
                finish: 'Submit'
            }


            
        }
    );

})