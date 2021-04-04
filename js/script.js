/**
 * BURGER SCRIPT
 */

// referenze
var btn = document.getElementById('button');
var burgerName = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var displayPrice = document.getElementById('price');
var coupon = document.getElementById('coupon');
var coupons = ['12354ABCDEF', '12354ABBCZF', '12354ABAFZX'];
var addBtn = document.getElementsByClassName('ingredient-add');

btn.addEventListener('click', function(){
    var name = burgerName.value.trim();
    // console.log(name);

    // errore
    if (name.length === 0) {
        alert('Inserisci correttamente il nome del tuo burger!');
    } else {
        // 1. aggiungere costo ingredienti
        var price = 50;
        
        for (var i = 0; i < ingredients.length; i++) {
            var ingredientCheck = ingredients[i]; 
            // console.log(ingredientCheck);

            if(ingredientCheck.checked === true) {
                console.log(ingredientCheck.value);
                // aggiornare il prezzo
                price += parseInt(ingredientCheck.value);
            }
        }
        console.log(price);

        // 2. coupon
        
        var couponCode = coupon.value;
        // console.log(couponCode);

        if(coupons.includes(couponCode)) {
            console.log('Codice corretto');

            // 20% sconto
           price -= price * 0.2; 
        }



        // 3. stampa il prezzo
        displayPrice.innerHTML = price.toFixed(2);

        
    }    
});


/**
 * ADD cliccabili
 */

for(var i = 0; i < addBtn.length; i++) {
    var add = addBtn[i];

    add.addEventListener('click', function(){
        console.log(this);
        console.log(this.previouseElementSibling);

        var thisCheckbox = this.previouseElementSibling;
        thisCheckbox.checked = !thisCheckbox.checked;
    })
}

