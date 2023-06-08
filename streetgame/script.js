character= document.getElementById("character");
game= document.getElementById("game");
var ins="";
level=0;
initialSetup2();



document.addEventListener('keypress', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    if(name=="w"){
        console.log("hello World");
        upDown(1);
        
    }
    if(name=="a"){
        console.log("hello World");
        leftRight(1);

    }
    if(name=="s"){
        console.log("hello World");
        upDown(-1);

    }
    if(name=="d"){
        console.log("hello World");
        leftRight(-1);

    }
  }, false);

  function upDown(top){
    var characterTop =parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if((characterTop<750 &&characterTop>0) || (characterTop==750 && top==1)||(characterTop==0 && top==-1) ){
    console.log(characterTop);
    character.style.top=(characterTop-(50*top))+"px";
    }
    if(characterTop==0 && top==1){
        character.style.top=750+"px";
        initialSetup();
        level++;
        document.getElementById("score").innerHTML=level;

    }
  }


  function leftRight(left){
    var characterLeft =parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if((characterLeft<1350 &&characterLeft>0) || (characterLeft==1350 && left==1)||(characterLeft==0 && left==-1) ){
    console.log(characterLeft);
    character.style.left=(characterLeft-(50*left))+"px";
    }
  }
  function initialSetup(){
    ins="";
    var spawn=Array(14);
    
    for(var i=0;i<14;i++){
        var mobile= Math.floor(Math.random() * 3);
        switch(mobile) {
            case 0:
                spawn[i]="<div class='car mov'></div>";
              break;

            case 1:
                spawn[i]="<div class='bus mov'></div>";
              break;
              
            default:
                spawn[i]="<div class='train mov'></div>";
          } 
    }
    for(var i=0;i<14;i++){
        ins=ins.concat(spawn[i]);

    }
    document.getElementById("blocks").innerHTML=ins;
    console.log(ins);


  }
  function initialSetup2(){
    ins="";
    var spawn=Array(14);
    
    for(var i=0;i<14;i++){
      var train= Math.floor(Math.random() * 10);
      if(train==1){
        spawn[i]="<div class='train mov'></div>";
      }else{
        var number= Math.floor(Math.random() * 3+2);
        var temp="";
        for(var a=0;a<number;a++){
          var mobile= Math.floor(Math.random() * 2);
          switch(mobile) {
            case 0:
                temp=temp+"<div class='car mov'></div>";
              break;

            case 1:
              temp=temp+"<div class='car mov'></div>";
              break;
              

        }
      }
      spawn[i]="<div class='sort'>"+temp+"</div>"
    }
    }
    for(var i=0;i<14;i++){
        ins=ins.concat(spawn[i]);

    }
    document.getElementById("blocks").innerHTML=ins;
    console.log(ins);

    var movDings=document.getElementsByClassName("mov");
    for(var i=0;i<movDings.length;i++){
    movDings[i].animationDuration="0.5s";
        
}
  }
  var trainMov=setInterval(function(){
    var trains=document.getElementsByClassName("train");
    for(var i=0;i<trains.length;i++){
    if(trains[i].classList !="animate"){
        trains[i].classList.add("animate");
        setTimeout(function(){
            trains[i].classList.remove("animate");
            
        },1001)

        console.log("idk")
    }
  }
  },4000)
//moveDown2();
  function moveDown(){
    var cbts=document.getElementsByClassName("mov");
    console.log(cbts);
    for(var item of cbts){
        var then=item.style.top;
        console.log(then);

    }

  }

  function moveDownOne(item){
    
    //item.style.characterTop=

  }
  function moveDown2(){
    console.log(ins);
    newLayer="<div class='car mov'></div>"
    ins=newLayer.concat(ins);
    document.getElementById("blocks").innerHTML=ins;

  }
  var isDead = setInterval(function(){


    
  },10)