var ForagerBee = function() {
  this.age = 10;
  this.job = "find pollen";
  this.color = "yellow";
  this.food = "jelly";
  this.canFly = true;
  this.treasureChest =  [];
};
ForagerBee.prototype.eat = function(){

};
ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
};
