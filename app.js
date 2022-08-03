const app= new Vue ({
    el: '#app',
    data:{
        titulo:'Gym con vue',
        tareas:[
            {nombre:'programar'}
        ],
        nuevaTarea:''
    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado:false
            });
            this.nuevaTarea="";
        }
    }
})