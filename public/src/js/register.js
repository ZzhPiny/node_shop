define([
    "cryptoJs",
    "./index/home",
    // "./index/form"
    // "./containers/App"
    "./redux/index"
], function(CryptoJS, home, form, App){
    // home();
    $("#button").on('click', function(event) {
        // var hash = CryptoJS.MD5("Message");
        event.stopPropagation();
        var $userName = $('#userName').val();
        var $password = CryptoJS.MD5($('#password').val()).toString();
        // var $password = $('#password').val();
        $.post('/api/user/register', {
            userName: $userName,
            password: $password
        }).done(function(data) {
            if(data.code !== 0)
                return $('#button').after("<div>fail</div>");
            // window.location.href = "/users/index";
        });
    })


});
