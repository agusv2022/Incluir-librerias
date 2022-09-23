

(async () => {
  const {value:ciudad} = await Swal.fire({
    
    

	title:'Antes de continuar!',
	 text:'elija su ciudad',


	input:'select',
	inputPlaceholder:'Dublin',

	 inputOptions:{
  dublin:'Dublin',
  galway:'Galway',
  cork:'Cork'
}
	


  });
  if (ciudad){
   Swal.fire({
     title:`Ha elegido ${ciudad}
     `
     
   })
  }
})()


  
  