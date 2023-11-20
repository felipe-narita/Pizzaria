menuListArray = ["Pizza Vegetariana",
"Pizza de frango",
"Pizza Portuguesa",
"Pizza Quatro Queijos",
"Pizza de Calabresa",
"Pizza Extravaganza"]


function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuLitArray.lenght;i++){
    htmldata=htmldata+ menuLitArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.ort();
htmldata=""
for(var i=0;i<menuLIstArray.lenght;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem()
}