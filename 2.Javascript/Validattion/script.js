function isName(name) {
    name = name.trim();
    if (!name) {
        document.getElementById('nameError').innerHTML = 'Please Enter your name'
    } else {
        document.getElementById('nameError').innerHTML = ''
    }
}

function isEmail(email) {
    email = email.trim()
    if (!email) {
        document.getElementById('emailError').innerHTML = 'Please Enter your Email'
    }else{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
        document.getElementById('emailError').innerHTML = 'Invalid Email Format'
        }else{
        document.getElementById('emailError').innerHTML = ''
        }
    }
}
function isPhoneNumber(phone){
phone = phone.trim();
if(!phone){
    document.getElementById('phoneError').innerHTML = 'Please Enter your Phone'
}else{
    const digitsOnly = phone.replace(/\D/g, '');
    const phoneRegex = /^(\+91|0)?[6789]\d{9}$/;
    if(!phoneRegex.test(digitsOnly)){
    document.getElementById('phoneError').innerHTML = 'Invalid Phone Number'
    }else{
    document.getElementById('phoneError').innerHTML = ''
    }
}}


function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    isName(name)
    isEmail(email)
    isPhoneNumber(mobile)

}