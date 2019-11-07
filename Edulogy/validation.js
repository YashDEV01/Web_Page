function validate(e){
    var namePattern = /^[A-Za-z]{3,}$/
    var numPattern = /^[0-9]{10}$/
    var fname = document.querySelector("#fname").value;
    var lname = document.querySelector("#lname").value;
    var number = document.querySelector("#number").value;
    var message = document.querySelector("#message").value;
    var email = document.querySelector("#email").value;
    var msgPattern = /^[A-Za-z\.\,\!\?\-\ ]{20,300}$/
    var emailPattern = /^[A-Za-z0-9\.\_\-]{6,}\@+[A-Za-z0-9]{3,}\.+[A-Za-z]{2,}$/
    console.log(email)
    if(!namePattern.test(fname)){
        alert('Please enter a valid name');
        return false;
    }
    if(!namePattern.test(lname)){
        alert('Please enter a valid name');
        return false;
    }
    if(!numPattern.test(number)){
        alert('Please enter a valid mobile number');
    }
    if(!msgPattern.test(message)){
        alert('Invalid MEsage');
    }
    if(!emailPattern.test(email)){
        alert('Invalid email')
    }
}