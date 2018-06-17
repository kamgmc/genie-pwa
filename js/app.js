$(function() {
    var $pass = $("#input_pass");
    $pass.keyup(function () {
        var pass = this.value;
        var mayuscula = new RegExp("^([\\w\\&\\*\\$\\#\\@]*[A-Z]+[\\w\\&\\*\\$\\#\\@]*)$");
        var minuscula = new RegExp('^([\\w\\&\\*\\$\\#\\@]*[a-z]+[\\w\\&\\*\\$\\#\\@]*)$');
        var numero = new RegExp('^([\\w\\&\\*\\$\\#\\@]*[0-9]+[\\w\\&\\*\\$\\#\\@]*)$');
        var caracter = new RegExp('^(\\w*[\\&\\*\\$\\#\\@]+\\w*)$');
        //Verificar minimo de caracteres
        if (pass.length > 8) {
            $(".mdl-hint-dynamic li.pass-length i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.pass-length i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.pass-length i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.pass-length i.fas").addClass("fa-times");
        }
        //Verificar Mayusculas
        if (mayuscula.test(pass)) {
            $(".mdl-hint-dynamic li.pass-upper i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.pass-upper i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.pass-upper i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.pass-upper i.fas").addClass("fa-times");
        }
        //Verificar Minusculas
        if (minuscula.test(pass)) {
            $(".mdl-hint-dynamic li.pass-lower i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.pass-lower i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.pass-lower i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.pass-lower i.fas").addClass("fa-times");
        }
        //Verificar Numeros
        if (numero.test(pass)) {
            $(".mdl-hint-dynamic li.pass-number i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.pass-number i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.pass-number i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.pass-number i.fas").addClass("fa-times");
        }
        //Verificar Caracteres Especiales
        if (caracter.test(pass)) {
            $(".mdl-hint-dynamic li.pass-char i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.pass-char i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.pass-char i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.pass-char i.fas").addClass("fa-times");
        }
    });
    var $pass_rep = $("#input_pass_rep");
    $pass_rep.keyup(function () {
        var pass_rep = this.value;
        //Verificar minimo de caracteres
        if ($pass.val() == pass_rep) {
            $(".mdl-hint-dynamic li.pass-same i.fas").removeClass("fa-times");
            $(".mdl-hint-dynamic li.pass-same i.fas").addClass("fa-check");
        }
        else {
            $(".mdl-hint-dynamic li.pass-same i.fas").removeClass("fa-check");
            $(".mdl-hint-dynamic li.pass-same i.fas").addClass("fa-times");
        }
    });
});
