const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var girl;
var snow;

function preload() {
  bg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1100, 600);
  engine = Engine.create();
  world = engine.world;

  girl = new Girl(100, 500);
  snow = new Snow(50, 50);
}

function draw() {
  background(bg);

  girl.display();
  snow.display();
}