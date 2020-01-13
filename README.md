# 301-practice-3
# 1- How long is the array returned by .map()? .filter()?
the .map is returend the same length of the old array,the .filter returend an array with less length of the old one 
# 2- What does the following code do:
$('button#primary').on('click', function() {
  placeOrder(shoppingCartItems);
});
when we click on the button with the id =primary the function with the placeOrder is gonna executed 
# 3- Write a function that takes an array of names as an argument and outputs each name in uppercase to the console.
let names=['dania','rahaf','haithem']
function people(name){
  name.forEach(val=>{
    console.log(val.toUpperCase())
  })
};
people(names);