$(function() {
    //Check all password requeriments
    function check_password() {
        var password = this.value;
        var uppercase = new RegExp("^([\\w\\&\\*\\$\\#\\@]*[A-Z]+[\\w\\&\\*\\$\\#\\@]*)$");
        var lowercase = new RegExp('^([\\w\\&\\*\\$\\#\\@]*[a-z]+[\\w\\&\\*\\$\\#\\@]*)$');
        var number = new RegExp('^([\\w\\&\\*\\$\\#\\@]*[0-9]+[\\w\\&\\*\\$\\#\\@]*)$');
        var character = new RegExp('^(\\w*[\\&\\*\\$\\#\\@]+\\w*)$');
        //Verificar minimo de characteres
        if (password.length >= 8) {
            $(".mdl-hint-dynamic li.password-length i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.password-length i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.password-length i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.password-length i.fas").addClass("fa-times");
        }
        //Verificar uppercases
        if (uppercase.test(password)) {
            $(".mdl-hint-dynamic li.password-upper i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.password-upper i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.password-upper i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.password-upper i.fas").addClass("fa-times");
        }
        //Verificar lowercases
        if (lowercase.test(password)) {
            $(".mdl-hint-dynamic li.password-lower i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.password-lower i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.password-lower i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.password-lower i.fas").addClass("fa-times");
        }
        //Verificar numbers
        if (number.test(password)) {
            $(".mdl-hint-dynamic li.password-number i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.password-number i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.password-number i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.password-number i.fas").addClass("fa-times");
        }
        //Verificar characteres Especiales
        if (character.test(password)) {
            $(".mdl-hint-dynamic li.password-character i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.password-character i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.password-character i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.password-character i.fas").addClass("fa-times");
        }
    }
    //Check both passwords match
    function check_password_match() {
        var $password = $("#input_password");
        var input = this.value;
        //Minimum length
        if ($password.val() == input) {
            $(".mdl-hint-dynamic li.same-password i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.same-password i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.same-password i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.same-password i.fas").addClass("fa-times");
        }
    }
    //Check email format
    function check_email() {
        var input = this.value;
        var email = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (email.test(input)) {
            $(".mdl-hint-dynamic li.email-check i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.email-check i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.email-check i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.email-check i.fas").addClass("fa-times");
        }
    }
    $("#input_password").keyup(check_password);
    //Check passwords matches
    $("#input_password_again").keyup(check_password_match);
    //Email check
    $("#input_email").keyup(check_email);
    //Send Button
    var $send = $("#send-button");
    var $terms = $("#terms");
    var $form = $("#submit-form");
    $send.on("click", function(e){
        e.preventDefault();
        if ($terms.is(':checked')) {
            $form.submit();
        }
    });

});
