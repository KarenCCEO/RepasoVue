const app = new Vue({
    el: '#app',
    data:{
        //Variable que guarda un titulo 
        titulo:'Hola mundo con Vue',
        //Arreglo de varios strings 
        frutas:['Manzana', 'Pera', 'Platano'],
        //Objeto
        fruit:[
            {nombre:'Pera', cantidad: 0},
            {nombre:'Manzana', cantidad: 20},
            {nombre:'Platano', cantidad: 10}

        ]

    }

})