var RetiredForagerBee = function() {
  this.age = 40;
  this.job = "gamble"
  this.canFly = false;
  this.color = "grey";
  this.food = "jelly";
  this.treasureChest = [];
};
RetiredForagerBee.prototype.eat = function(){

};
RetiredForagerBee.prototype.forage = function(){
  return "I am too old, let me play cards instead";
};
RetiredForagerBee.prototype.gamble = function(treasure){
  this.treasureChest.push(treasure);
};
//need to push
