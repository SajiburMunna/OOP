function Car(color) {
this.color = color;
};
 
Car.prototype.getColor = function(){
console.log("“Color of the car is “"+this.color)
}
 
let mercedes = new Car("“Red”");
let honda=new Car("Green")
honda.getColor()

