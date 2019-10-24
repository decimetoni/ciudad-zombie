/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieConductor de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieConductor que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* ZombieConductor llama al constructor de Enemigo utilizando los parametros
  necesarios */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}
/* Completamos la creacion del objeto asignando su prototipo y la funcion
constructor para poder usarla con 'new' al crear nuevos Zombies Caminantes */

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;
ZombieConductor.prototype.atacar = function (jugador) {
  jugador.perderVida(5);
}


  /* Los movimientos estan basados en un numero aleatorio
  La direccion horizontal es siempre la misma y va ondulando verticalmente.
  Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
  ZombieConductor.prototype.mover = function() {
    /* Los movimientos estan basados en un numero aleatorio
    La direccion horizontal es siempre la misma y va ondulando verticalmente.
    Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
    if (this.direccion == 'h') {
      this.x -= this.velocidad;
    } else {
      //Sino, hace otro movimiento
      this.y += this.velocidad;
    }
  
    /* En esta parte lo que hacemos es invertir la direccion horizontal si
    toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
    velocidad lo que estamos haciendo es invertir su direccion.*/
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
      this.velocidad *= -1;
    }
    // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
      // this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
      this.velocidad *= -1;
    }
  }
