function calculate(){
    var Petrol_Price_Per_Litre = document.getElementById('petrol_price').value;

    var Litre = document.getElementById('litres').value;

    var Total_Price = Petrol_Price_Per_Litre * Litre 

    document.getElementById('petrol_purchased').innerHTML =  "DHS" + Total_Price;
    
}