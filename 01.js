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

        ],
        nuevaFruta:'',
        nuevoNumero:0,
        total:0

    },
    //Metodo que guarda la informacion de un input detro de un arreglo
    methods:{
        agregarFruta(){
            //El metodo push guarda la informacion del on click dentro de el objeto fruit 
            this.fruit.push({
                nombre: this.nuevaFruta, cantidad:0

            });
            //Se agrega esta linea para poder eliminar el valor que queda guardado en el input 
            this.nuevaFruta='';
        },
        agregarNumero(){
            //El metodo push guarda la informacion del on click dentro de el objeto fruit 
            this.fruit.push({
                cantidad: this.nuevoNumero, nombre:'Fruta default'

            });
            //Se agrega esta linea para poder eliminar el valor que queda guardado en el input 
            this.nuevoNumero='';
            
        }
        },
        
        //suma todas las cantidades de las frutas
        computed:{
            sumarFrutas(){
                this.total=0;
                for(fruta of this.fruit){
                    this.total=this.total + fruta.cantidad;

                }
                return this.total;
            }

        }


    }

)