var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","4175d585-8d5d-4962-bf4b-49ed2cf61e04","1549192b-d0a5-4be7-9cf6-1c504a3b00d9","f490789b-160a-4196-92f4-19ba2a0e74dc","9c81dcf2-661a-438c-9b14-1c5ab75cc56b","fdf7df2a-ec4b-4d7f-8b2b-17fb0601b7f9"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"gkbRJgSsl6_mU2BTvfsKRkGG6NfuY14y","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"0rsfAhNoHQNSXr_rhRDFY9aBmj.iGdft","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"o5FB2vBa74s6gEDWl4rGrWCSntjyIk_3","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"4175d585-8d5d-4962-bf4b-49ed2cf61e04":{"name":"space","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:38:15 UTC","pngLastModified":"2021-01-07 19:29:50 UTC","version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"1549192b-d0a5-4be7-9cf6-1c504a3b00d9":{"name":"Hero_2","categories":["retro"],"frameCount":1,"frameSize":{"x":216,"y":290},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:30:56 UTC","pngLastModified":"2021-01-05 19:31:37 UTC","version":"5_seoMXpsGqZet1Swazl7ivWw0x8iN9j","sourceUrl":null,"sourceSize":{"x":216,"y":290},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/1549192b-d0a5-4be7-9cf6-1c504a3b00d9.png"},"f490789b-160a-4196-92f4-19ba2a0e74dc":{"name":"enemy_1","categories":["retro"],"frameCount":1,"frameSize":{"x":385,"y":283},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:31:58 UTC","pngLastModified":"2021-01-05 19:31:42 UTC","version":"KpCgRTKx03gokZbOx3UQ94LKooyuP6eo","sourceUrl":"assets/api/v1/animation-library/gamelab/KpCgRTKx03gokZbOx3UQ94LKooyuP6eo/category_retro/retroship_07.png","sourceSize":{"x":385,"y":283},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/KpCgRTKx03gokZbOx3UQ94LKooyuP6eo/category_retro/retroship_07.png"},"9c81dcf2-661a-438c-9b14-1c5ab75cc56b":{"name":"enemy_2","categories":["retro"],"frameCount":1,"frameSize":{"x":385,"y":283},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:30:54 UTC","pngLastModified":"2021-01-05 19:31:14 UTC","version":"g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd","sourceUrl":"assets/api/v1/animation-library/gamelab/g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd/category_retro/retroship_08.png","sourceSize":{"x":385,"y":283},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd/category_retro/retroship_08.png"},"fdf7df2a-ec4b-4d7f-8b2b-17fb0601b7f9":{"name":"enemy_3","categories":["retro"],"frameCount":1,"frameSize":{"x":385,"y":283},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:30:51 UTC","pngLastModified":"2021-01-05 19:31:16 UTC","version":"xeIPZ6.OZe7MJt6hQhqB7MI2ErpJyNY2","sourceUrl":"assets/api/v1/animation-library/gamelab/xeIPZ6.OZe7MJt6hQhqB7MI2ErpJyNY2/category_retro/retroship_09.png","sourceSize":{"x":385,"y":283},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/xeIPZ6.OZe7MJt6hQhqB7MI2ErpJyNY2/category_retro/retroship_09.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var scene = createSprite(200,200);
 scene.setAnimation("space")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("Hero_2");
hero.scale=.2;
enemy1.setAnimation("enemy_1");
enemy1.scale=.1;
enemy2.setAnimation("enemy_2");
enemy2.scale=.1;
enemy3.setAnimation("enemy_3");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//fondo(b);

createEdgeSprites();

textSize(20);
fill("white");
text("Goals:"+goal,60,350);
  

textSize(20);
fill("white");
text("death:"+death,60,310);



hero.bounceOff(edges);
enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

if(keyDown("w")){
  hero.y=hero.y-3;
}

if(keyDown("s")){
  hero.y=hero.y+3;
}

if(keyDown("a")){
  hero.x=hero.x-3;
}

if(keyDown("d")){
  hero.x=hero.x+3;
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  hero.x=200;
  hero.y=350;
  death = death+1;
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
}
  
  
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
