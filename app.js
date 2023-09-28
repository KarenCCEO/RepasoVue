const app= new Vue ({
    el: '#app',
    data:{
        titulo:'Generador de JOINS',
        tipo_tabla:"",
        tablas:[
            {nombre:'', columnas:[]}
        ],
        nuevaTabla:"",
        mensaje_error:''
    },
    methods:{
        agregarTabla(){
            if(this.nuevaTabla===""){
                this.mensaje_error="!Alto! agrega un nombre por favor :) "
            }else{
                this.tablas.push({
                    nombre: this.nuevaTabla,
                    columnas:[{nombre:"Columna_default", type:"Numero"}]
                });
                this.nuevaTabla="";
            }
          
        }
    }
})