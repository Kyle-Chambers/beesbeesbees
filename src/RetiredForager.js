var RetiredForagerBee = function() {
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  var response = 'I am too old, let me play cards instead';
  return response;
}

RetiredForagerBee.prototype.gamble = function (value) {
  this.treasureChest.push(value);
}
