//common function
function getValue(id, addValue){
    var getVal = document.getElementById(id).value;
    var valNumber = parseFloat(getVal);
    var totalValue = valNumber + addValue;
    document.getElementById(id).value = totalValue;
}
function getInnerText(id, addValue){
    var getVal = document.getElementById(id).innerText;
    var valNumber = parseFloat(getVal);
    var totalValue = valNumber + addValue;
    document.getElementById(id).innerText = totalValue;
    return totalValue;
}
function getNumber(id){
    var getId = document.getElementById(id).innerText;
    var getNumber = parseFloat(getId);
    return getNumber;
}

// product plus handeler
var plus = document.getElementById('plus');
plus.addEventListener('click', function(){

    getValue('product', 1);
    getInnerText('productAmount', 1219);
})


// product minus handeler
var minus = document.getElementById('minus');
minus.addEventListener('click', function(){
    
    getValue('product', -1);
    getInnerText('productAmount', -1219);
})

// cover plus handeler
var coverPlus = document.getElementById('coverPlus');
coverPlus.addEventListener('click', function(){
    
    getValue('cover', 1);
    getInnerText('coverAmount', 59);
})

// cover minus handeler
var coverMinus = document.getElementById('coverMinus');
coverMinus.addEventListener('click', function(){
    
    getValue('cover', -1);
    getInnerText('coverAmount', -59);

});


var totalProduct = getNumber('productAmount');
var totalCover = getNumber('coverAmount');

var productCover = totalProduct + totalCover;

getInnerText('subtotal', productCover);


