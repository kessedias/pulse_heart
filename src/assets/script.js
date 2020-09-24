console.log("❤️❤️❤️Eu te adoro, Ane ❤️❤️❤️");
console.log("Você mora aqui -> ❤️");
$(document).ready(function() {
    $(document).keypress(function(e) {
        if (e.wich == 13 || e.keyCode == 13) {
            $(".phrase").text("Quer namorar comigo?");
            $(".phrase").addClass("phrase-animation");
        }
    });
});