const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 35);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Diplodocus','herbivore',60);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 35);
  });

  it('should have a collection of dinosaurs', function(){
    const expected = [];
    assert.strictEqual(park.dinoCollection, expected)
  });
    
  it('should be able to add a dinosaur to its collection', function(){
    park.canAddDino(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.dinoCollection, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.canRemoveDino(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.dinoCollection, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day', function(){
    park.perDayVisitors(park);
    const expected = 1;
    assert.strictEqual(park.perDayVisitors(), expected)
  });

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
