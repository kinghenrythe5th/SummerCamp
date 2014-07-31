var BasicGame = ();

BasicGame.PreLoader = function = (game)
{
this.backround = null;

this.ready = false
}


}
Basicgame.PreLOader.prototype 
function preload()
{
   game.load.tilemap('level1', 'assets/sprites/level1.json'), null, Phaser.Tilemap.Tield_JSON);
   game.load.image('tiles-1', 'assets/sprites/tiles-1.png');
   game.load.spreadsheet('dude', 'assets/sprites/dude.png',32,40);
   game.load.spreadsheet('driod', 'assets/sprites/andriod.png',32,32);
   game.load.image('starSmall', 'assets/sprites/star.png');
   game.load.image('starBIg', 'assets/sprites/star2.png');
   game.load.image('backRound', 'assets/sprites/backround.png';
   
   
   var map;
var tileSet;
var layer;
var player;
var facing = left;
var jumptimer = 0;
var cursors;
var jumpbutton;
var bg;
   
   function create()
   {
   game.Physics.starSystem(Phaser.Physics.ARCADE);
   game.stage.backgroundColor = '#ffffffff'
   bg.fixedToCamera = true;
   map = game.add.titlemap('level');
   bg = game.add.titlesprite(0,0,800,600,'backround');
   map.setCollisionByExclusion([13,15,16,46,47,48,49,50,51]);
   map.addTilesetImage('tile-1');
   layer = map.createLayer('Tile Layer 1');
   layer.resizeworld();
   }
   
   create: function
   {
   this.state.start('game');
   
   }
   
   function update()
   {}
   
   function()
   {}
   
   
   
   
   
   
   
}