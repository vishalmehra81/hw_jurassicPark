const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
}

Park.prototype.canAddDino = function(dinosaur){
 this.dinoCollection.push(dinosaur);
}

Park.prototype.canRemoveDino = function(dinosaur){
    this.dinoCollection.pop(dinosaur);
   }

Park.prototype.perDayVisitors = function(park){
    let total = 0;
    for (const park of this.ticketPrice){
        total = park.this.ticketPrice.length();
    }
    return total;

}
module.exports = Park;