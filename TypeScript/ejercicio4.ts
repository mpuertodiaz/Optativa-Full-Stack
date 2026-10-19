class Animal{
    private nombre:string;
    private edad:number;
    private tipo:string;

    constructor(nombre:string,edad:number,tipo:string){
        this.nombre=nombre;
        this.edad=edad;
        this.tipo=tipo;
    }

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string):void{
        this.nombre=nombre;
    }
    getEdad():number{
        return this.edad;
    }
    setEdad(edad:number):void{
        this.edad=edad;
    }
    getTipo():string{
        return this.tipo;
    }
    setTipo(tipo:string):void{
        this.tipo=tipo;
    }

    hacerRuido():void{
        console.log("Ruido");
    }
}

class Perro extends Animal{
    private raza:string;

    constructor(nombre:string,edad:number,raza:string){
        super(nombre,edad,"perro");
        this.raza=raza;
    }

    hacerRuido():void{
        console.log("Guau");
    }

    traerPelota():void{
        console.log(this.getNombre()+" trae la pelota");
    }
}

class Pajaro extends Animal{
    private color:string;

    constructor(nombre:string,edad:number,color:string){
        super(nombre,edad,"pajaro");
        this.color=color;
    }

    hacerRuido():void{
        console.log("Pio pio");
    }

    volar():void{
        console.log(this.getNombre()+" esta volando");
    }
}

var perro=new Perro("Toby",5,"Labrador");
var pajaro=new Pajaro("Piolin",2,"amarillo");

console.log(perro.getNombre()+" "+perro.getTipo());
perro.hacerRuido();
perro.traerPelota();

console.log(pajaro.getNombre()+" "+pajaro.getTipo());
pajaro.hacerRuido();
pajaro.volar();
