document.write('Bonjour tout le monde...')
//Variable
let nombre1 = 10
const pi = 3.14
let nom = 'Capi'

console.log(nombre1)
console.log(pi)

document.write('<br/>' + nombre1)
document.write('<br/>'+pi)
document.write('<br/>'+nom + '<br/>')

const Capital = ["Conakry","Dakar","Paris"]
const valeur = [1,2,3,4,5]

document.write('<br/>' + Capital[0])
document.write('<br/>' + Capital[1])
document.write('<br/>' + Capital[2] + '<br/>')
//Objects
const personne = {
    Nom : 'Diallo',
    Prenom : 'Asmaou',
    Age : 21
}
document.write('<br/>' + personne.Nom)
document.write('<br/>' + personne.Prenom)
document.write('<br/>' + personne.Age + '<br/>')

//Les condition
if (personne.Nom == 'Diallo')
{
    document.write('<br/>' + "c'est Diallo")
}
else if(personne.Prenom == 'Diallo'){
        document.write('<br/>' + "c\est Asmaou")
}
else{
            document.write('<br/>' + "c\est  ni Asmaou ni Diallo")          

}
//Boucles
for(let i = 0; i<10; i++){
    document.write('<br/>'+i)
}
