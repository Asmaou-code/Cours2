const val= document.getElementById('c').textContent
console.log(val

)


//Modification du contenu d'un element HTM
//document.getElementById('c').innerHTML='88'
function compte(){
    let val1 = document.getElementById('c').textContent
    val1++
    document.getElementById('c').innerHTML= val1
if (val1==5){
document.getElementById('a').innerHTML= "C'est 5"
}
else if(val1==10){
    document.getElementById('a').innerHTML= "C'est 10"
}

    
}
