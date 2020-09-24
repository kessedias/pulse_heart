$(document).ready(function() {
    $(document).keypress(function(e) {
        if (e.wich == 13 || e.keyCode == 13) {
            $(".phrase").text("Uma frase aqui");
            $(".phrase").addClass("phrase-animation");
        }
    });
});