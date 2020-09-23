 console.log("chegou no js")

 $(".text").click(function() {
     console.log("cliquei");
 })

 $(document).ready(function() {
     $(document).keypress(function(e) {
         if (e.wich == 13 || e.keyCode == 13) {
             $(".phrase").text("Uma frase aqui");
         }
     });
 });