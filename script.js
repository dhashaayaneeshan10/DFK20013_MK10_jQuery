function login(){

    var username = $("#username").val();
    var password = $("#password").val();

    if(username === "" || password === ""){
        $("#loginPopup").popup("open");
    }
    else{
        $.mobile.changePage("#page2");
    }

}