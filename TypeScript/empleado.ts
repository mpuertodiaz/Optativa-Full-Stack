class Employee{
    private nombre:string;
    private apellido:string;
    private edad:number;
    private fechaInicio:Date;
    private fechaFin:Date|null;
    private profesion:string;

    constructor(nombre:string,apellido:string,edad:number,fechaInicio:Date,fechaFin:Date|null,profesion:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;
        this.profesion=profesion;
    }

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string):void{
        this.nombre=nombre;
    }
    getApellido():string{
        return this.apellido;
    }
    setApellido(apellido:string):void{
        this.apellido=apellido;
    }
    getEdad():number{
        return this.edad;
    }
    setEdad(edad:number):void{
        this.edad=edad;
    }
    getFechaInicio():Date{
        return this.fechaInicio;
    }
    setFechaInicio(fechaInicio:Date):void{
        this.fechaInicio=fechaInicio;
    }
    getFechaFin():Date|null{
        return this.fechaFin;
    }
    setFechaFin(fechaFin:Date|null):void{
        this.fechaFin=fechaFin;
    }
    getProfesion():string{
        return this.profesion;
    }
    setProfesion(profesion:string):void{
        this.profesion=profesion;
    }
}

var empleado1=new Employee("Paco","Garcia",45,new Date("2015-04-01"),new Date("2023-09-30"),"Fontanero");
var empleado2=new Employee("Paca","Lopez",30,new Date("2020-01-15"),null,"Programadora");

console.log(empleado1.getNombre()+" "+empleado1.getEdad());
console.log(empleado2.getNombre()+" "+empleado2.getEdad());
