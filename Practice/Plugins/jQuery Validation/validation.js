$(document).ready(()=>{
    jQuery.validator.addMethod('strongPassword', (value, element)=>{
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
    },"Please Enter Strong Password")
    $('#testForm').validate({
        rules:
        {
            firstname:
            {
                required: true,
                lettersonly: true,
                // nowhitespace: true
            },
            lastname:
            {
                required: true,
                lettersonly: true
            },
            email:
            {
                required: true,
                email: true
            },
            password:
            {
                required: true,
                strongPassword: true
            },
            c_password:
            {
                required: true,
                equalTo: '#password'
            },
        },
        highlight: 
        element => {$(element).addClass('redError'); $(element).addClass('redborder')},
        unhighlight: 
        element => {$(element).removeClass('redError'); $(element).removeClass('redborder')},
        messages:
        {
            firstname:
            {
                required: "Required",
                lettersonly: "Only Letters are allowed"
            },
            lastname:
            {
                required: "Required",
                lettersonly: "Only Letters are allowed"
            },
            email:
            {
                required: "Email required",
                email: "No email Found"
            },
            c_password:
            {
                equalTo: "Passwords donot match"
            }
        }
    })
})