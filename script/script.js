
    //this reveals the Nutritional value when you click on the button
        

    function show_hide() {
        var x = document.getElementById("nutrition");
        if (x.style.display === "block") {
          //this will change the text inside the button from "show less" to "Nutritional value"
            document.getElementById('clickMe').innerText = 'Nutritional Value';
          x.style.display = "none";
        } else {
          //this will change the text inside the button from "Nutritional value" to "show less"
            document.getElementById('clickMe').innerText = 'Show Less';
          x.style.display = "block";
        }
      }
  

     