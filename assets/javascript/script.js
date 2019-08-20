var slices = ['plain','peperoni','ziti','grandma']

var pizza = document.getElementById('pizza');

for(var i =0; i<slices.length;i++){
  var newSlice =document.createElement('p');
  newSlice.textContent = slices[i];
  pizza.appendChild(newSlice);
}
