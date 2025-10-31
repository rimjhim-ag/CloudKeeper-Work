
function Product(name, price,category){
      this.name = name;
      this.price = price;
      this.category = category;
       

}


Product.prototype.getDiscountedPrice = function(price){
            var productPrice = Number(price);
             var percent = 10;
           

            var discountedvalue = (productPrice * percent )/100;

            discountedvalue.toFixed(2);

           

            result  = productPrice - discountedvalue;


             
            return result;
}



var Product1 = new Product("Earphones", "2000", "Electronics" );
var Product2 = new Product("Curtains", "20000", "Home Essentials" );
var Product3 = new Product("T-Shirt", "2000", "Clothing" );
var Product4 = new Product("Video Game", "10000", "Games" );


var ProductList = [];
ProductList.push(Product1);
ProductList.push(Product2);
ProductList.push(Product3);
ProductList.push(Product4);



function setCostliestProduct(product){
     
 
      var costly = document.createElement("h1");
      costly.id = "para";


      var max = 0;


      for(var item of product){
          
             if(item.price > max){
                  max = item.price;
             }

            
      }




      costly.innerText = `Price of costliest product is ${max}`


     document.body.appendChild(costly);
      
      
       
};


setCostliestProduct.call(null, ProductList);
 


(function setProductData(ProductList){

    var container = document.createElement("div");
    container.id = "container"

      ProductList.forEach(element => {
            var newCard = document.createElement("div");
            newCard.className = "product-item"

         newCard.innerHTML = 
  "<h1>" + element.name + "</h1>" +
  "<ul>" +
  "<li>Price: " + element.price + "</li>" +
  "<li>Discounted Price: " + element.getDiscountedPrice(element.price) + "</li>" +
  "<li>Category: " + element.category + "</li>" +
  "</ul>";

    container.appendChild(newCard);
      });

     document.body.appendChild(container);

    


})(ProductList);



var cards = document.getElementsByClassName("product-item");

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", function() {
     cards[i].style.transform = "scale(1.05)";  // slightly bigger
      cards[i].style.cursor = "pointer";
   
  });

  cards[i].addEventListener("mouseout", function() {
     cards[i].style.transform = "scale(1)"; 
  });
}












