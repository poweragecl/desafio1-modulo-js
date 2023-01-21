//input fields
const quantityInput = document.querySelector('.select-quantity');
const colorInput = document.querySelector('.select-color');
const priceInput = document.querySelector('.price');
const calculate = document.querySelector('.calculate');

//output fields
const cartFinalPrice = document.querySelector('.final-price-amount');
const cartFinalQuantity = document.querySelector('.final-quantity-amount');
const cartFinalColor = document.querySelector('.color-swatch');


//Event Listener button Calcular Total
calculate.addEventListener('click',() => {

    //Assigning variables into function scope - then reformating
    let total = quantityInput.value * priceInput.textContent.split(".").join("");
    let totalLocaleString = total.toLocaleString("es-CL", {style: "decimal", currency: "CLP", miniumFractionDigits: 0 });

    //Replacing contents to print
    cartFinalColor.style.background = colorInput.value;
    cartFinalQuantity.textContent = quantityInput.value;
    cartFinalPrice.textContent = '$' + totalLocaleString;

});


//Changing image on change (extra)
colorInput.addEventListener('change', () => {
    let images = document.querySelectorAll('.item-image');
    let activeVal = colorInput.value;

    //looping on images to detect same attribute as the color input
    images.forEach(image => {
        let att = image.getAttribute('data-attribute');
        
        //toggle the class active if the attribute equals the input
        if(att === activeVal){
            image.classList.toggle('active');
        }else{
            image.classList.toggle('active');
        }

    });
})