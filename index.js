


/* En la búsqueda de encontrar que realizar para el proyecto final, decidí continuar con una aplicación de turnos. El objetivo es poder capturar datos del usuario, además que se sugiera al usuario a elegir antes una ciudad en este caso mediante un Sweet alert.
Debería poder crear distintos objetos para luego asignar a ese usuario su cita correspondiente, luego de cumplir con las validaciones. 

De momento estas librerías me han ayudado a encontrar algo de claridad para el futuro éxito del proyecto. */
class Contacto  {
    constructor(nombre, correo , edad){
       this.nombre = nombre;
       this.correo = correo;
       this.edad = edad;
    }

    
}

















/* interaaccion con html*/
class Interfaz{
  /*   utilizando el nuvo obbejto contacto */
    addContacto(contacto){
        const listadecontacto = document.getElementById('lista-prod');
        const element = document.createElement('div'); /*creacion de div y
         dentro de este div agrego el obejto contacto para luego verlo en panatalla */
        element.innerHTML = `
                <div class ="tarjeta">
                        <div class="tarjeta-cuerpo">

        
                                        <strong class="text-danger">Nombre</strong>:${contacto.nombre}
                                        <strong class="text-danger">Correo</strong>:${contacto.correo}
                                        <strong class="text-danger">Edad</strong>:${contacto.edad}
                                        <a href="/" class="btn btn-danger">Delete</a>

                        </div>

                </div>
        
        
        `;

      /*   insetar elemento  */
      listadecontacto.appendChild(element);



    }

borrar(element){
        if (element.name === "Delete") {
       element.parentElement.parentElement.parentElement.remove();
       this.showMessage("Product Deleted Succsssfully", "success");
     }
   }
   
menSajes(message, cssClass){
  const div = document.createElement("div");
     div.className = `alert alert-${cssClass}`;
     div.appendChild(document.createTextNode(message));
      const container = document.querySelector(".container");
     const app = document.querySelector("#app");
 container.insertBefore(div, app);
   
 }

}
/* 
mostrarTurnos(turnos) {
        const citaDispo = document.getElementById("lista-prod");
        const element = document.createElement("div");
        element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>Su cita</strong>: ${cita} 
                    </div>
                </div>
            `;
        productList.appendChild(element);
      }
} */


/* class Turnos {
    constructor(dia, horario , direccion){
        this.dia = dia;
        this.horario = horario;
        this.direccion = direccion;
     }
 
} */
                                                   
















 /*   EVENTOSSSS del  Dom */

/* luego de insertar y guardar despues del submit */

/* Captura */
                               /*   cpaturar los datos del form y ver el valor con value */                                                                                                                       
document.getElementById('formulario-prod').addEventListener('submit', function(e) 
{
const nombre = document.getElementById('nombre').value;
 const correo = document.getElementById('correo').value;
 const edad = document.getElementById('edad').value;

 console.log(nombre,correo,edad); 

 /* utiizando class contacto para guradar el contacto en otro objeto*/
  const contacto = new Contacto (nombre, correo, edad); 

  const interfaz =  new Interfaz();
 interfaz.addContacto(contacto);    /* onjeto dentro de onejeto  */
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  e.preventDefault();


}); /* cuando ocurra el submit ejecutar esta function 
captura  */


/* const cita = {
    dia: '20-11-22',
    horario: '10:30am',
    direccion: "Albarizas 9"
  };
 */
  document.getElementById('lista-prod').addEventListener('click', function(e){
    const interfaz = new Interfaz();
  
    interfaz.borrar(e.target);
    e.preventDefault();
  });

/* document.getElementById('form-2').addEventListener('submit',function(e){ */
  /*   if (ciudad) === "Dublin"{
  const dia = document.getElementById('dia').value;
 const horario = document.getElementById('horario').value;
 const direccion = document.getElementById('direccion').value; */
    

/*  console.log(dia,horario,direccion);  */

 /* utiizando class Turnos para guradar el contacto en otro objeto*/
 /*  const turnos = new Turnos (dia, horario, direccion); 

  const interfaz =  new Interfaz();
 interfaz.addContacto(contacto);  */   /* onjeto dentro de onejeto  */
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
 /*  e.preventDefault();)} */


