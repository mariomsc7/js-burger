/**
 * BURGER SCRIPT
 */

// referenze
var btn = document.getElementById('button');
var burgerName = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
console.log(ingredients);


btn.addEventListener('click', function () {
    var name = burgerName.value.trim();
    console.log(name);

    // errore
    if (name.length === 0) {
        alert('Inserisci correttamente il nome del tuo burger!');
    } else {
        // aggiungere costo ingredienti
        var price = 50;
        
        for (var i = 0; i < ingredients.length; i++) {
            var ingredientCheck = ingredients[i]; 
            // console.log(ingredientCheck);

            if(ingredientCheck.checked === true) {
                console.log(ingredientCheck.value);
            }
        }
    }
});