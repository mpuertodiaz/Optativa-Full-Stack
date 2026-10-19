interface DispositivoElectronico{
    nombre:string;
    encendido:boolean;
    encender:()=>void;
    apagar:()=>void;
}

class Laptop implements DispositivoElectronico{
    encendido:boolean=false;

    constructor(public nombre:string,public modelo:string){
    }

    encender(){
        this.encendido=true;
        console.log("Portatil encendido");
    }

    apagar(){
        this.encendido=false;
        console.log("Portatil apagado");
    }

    abrirPrograma(programa:string){
        console.log("Abriendo "+programa);
    }
}

class Smartphone implements DispositivoElectronico{
    encendido:boolean=false;

    constructor(public nombre:string,public marca:string){
    }

    encender(){
        this.encendido=true;
        console.log("Movil encendido");
    }

    apagar(){
        this.encendido=false;
        console.log("Movil apagado");
    }

    llamar(numero:string){
        console.log("Llamando a "+numero);
    }
}

var portatil=new Laptop("Portatil","Lenovo");
var movil=new Smartphone("Galaxy","Samsung");

portatil.encender();
portatil.abrirPrograma("Word");
portatil.apagar();

movil.encender();
movil.llamar("600123456");
movil.apagar();
