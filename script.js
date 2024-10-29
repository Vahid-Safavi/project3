const icon=document.getElementById("menu-icon");
const item=document.getElementById("item");

item.style.display="none";
icon.onclick=function(e){
if(item.style.display=="none"){
    item.style.display="block"
}else{
    item.style.display="none"
}
}