console.log (" ***  taller LogIn ***");


//**************************************************************** */

 localStorage.setItem('nombreUsuario', 'Batman')

 usuSave = localStorage.getItem('nombreUsuario')



//*************************************************************** */

registrar.addEventListener ('', ()=>{

    // ir y vericar si existe dato en el local storage si no le inserta elemento al arrelgo  ....
    if(localStorage.getItem('lhobies') == null) {
        arrayHobies.push(selectHobbie.value);
    } 
      else { // si existen datos crea el arrelgo con lo que esta guardado y le agraga el nuevo elemento 
        arrayHobies = JSON.parse(localStorage.getItem('lhobies'));
        arrayHobies.push(selectHobbie.value);
      
      }   
      
      //---- convierte en json y lo sube al local storage 
      let hobbiesGuardados = JSON.stringify(arrayHobies);
      localStorage.setItem('lhobies',hobbiesGuardados);


    
    imprimraArray();

})

//-------------------------------- imprimiendo lo que tre de memoria 
const imprimraArray = () =>{
    let cadenaHobies = "";

    if(localStorage.getItem('lhobies') != null) {

      let hobbiesGuardados =  JSON.parse(localStorage.getItem('lhobies'));
    //console.log (hobbiesGuardados)
    //console.log (typeof(hobbiesGuardados))
    
   
     for (let hobie of hobbiesGuardados) {
         cadenaHobies = cadenaHobies + hobie + " ";
     }

    } else {
        cadenaHobies = "NO EXISTEN DATOS GUARDADOS"
    }
     
     listaHobbies.innerText = cadenaHobies;
}

const borrarUltimoHobie = () =>{
    let cadenaHobies = "";
   
    
    if(localStorage.getItem('lhobies') != null) {
        
        let arregloHobies =  JSON.parse(localStorage.getItem('lhobies'));
        arregloHobies.pop();
        let hobbiesGuardados = JSON.stringify(arregloHobies);
        localStorage.setItem('lhobies', hobbiesGuardados)

    }
    imprimraArray();

}

llenarSelect();
imprimraArray();

borrarHobie.addEventListener('click',borrarUltimoHobie);