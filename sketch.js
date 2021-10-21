const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
var box3,box4,box5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(930,320,70,70);
    ground = new Ground(200,height,2000,20)
    pig1 = new Pig(820,320);
    log1 = new Log(815,250,300,PI/2);
    bird1 = new Bird(300,100);
    box3 = new Box(700,200,70,70);
    pig2 = new Pig(820,200);
    box4 = new Box(930,200,70,70)
    log2= new Log(815,150,350,PI/2);
    box5 = new Box(820,115,70,70);
    log3 = new Log(785 ,75,200,PI/2);
    log4 = new Log(885,75,200,PI/2)
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}