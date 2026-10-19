class Almacen<T>{
    private elementos:T[]=[];

    agregarElemento(x:T):void{
        this.elementos.push(x);
    }

    obtenerElemento(posicion:number):T{
        return this.elementos[posicion];
    }

    listarElementos():void{
        for (var index = 0; index < this.elementos.length; index++) {
            console.log(this.elementos[index]);
        }
    }
}

var numeros=new Almacen<number>();
numeros.agregarElemento(10);
numeros.agregarElemento(25);
console.log(numeros.obtenerElemento(1));
numeros.listarElementos();

var nombres=new Almacen<string>();
nombres.agregarElemento("Paco");
nombres.agregarElemento("Paca");
console.log(nombres.obtenerElemento(0));
nombres.listarElementos();

var personas=new Almacen<object>();
personas.agregarElemento({nombre:"Paco",edad:20});
personas.agregarElemento({nombre:"Paca",edad:22});
console.log(personas.obtenerElemento(0));
personas.listarElementos();
