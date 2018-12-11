/// REGISTRATION AUTH

$('#createAccount').on('click', function(event){
    event.preventDefault();
    const user = {
        username: $("#username").val(),
        password: $("#userpass").val(),
        passwordConf: $("#userpassconf").val()
    }
    console.log(user);
    // alert('User Created! You may now log in.');
    $('.center-feed').append(`<div class="alert alert-success" role="alert">
    User account created! You may now log in.</div>`)
    $.post('/api/register', user, function(response){
        console.log(response);
    })
})



/// LOGIN AUTHENTICATION /////
$('#LoginAccount').on('click', function(event){
    event.preventDefault();
    const user = {
        username: $("#loginuser").val(),
        password: $("#loginpass").val()
    }

    $.post('/api/login', user, function(response){
        console.log(response);
        if (response.success == true) {
            window.location.href = '/login';
        } else {
            $('.center-feed').append(`<div class="alert alert-danger" role="alert">
            Invalid Username or Password. Please try again or register an account.</div>`)

            // alert('Invalid credentials. Please register.')
        }
    })



})

