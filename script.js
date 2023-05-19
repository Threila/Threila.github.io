var character=document.getElementById("character");
var block=document.getElementById("block");
var score=0;
var dead=false;
function jump(){
    if(character.classList !="animate"){
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate")
        
    },500)
}
}
var checkDead=setInterval(function(){
    var characterTop =parseInt(window.getComputedStyle(character).getPropertyValue ("top"));
    var blockLeft =parseInt(window.getComputedStyle(block).getPropertyValue ("left"));
    if(blockLeft<20 &&blockLeft>0 && characterTop>130){
        block.style.animationName="none"
        dead=true;
        alert("You loose!!\nYou got "+score+"points");
        restart();
    }
},10)

var points=setInterval(function(){
    if(!dead){
    score++;
    document.getElementById("score").innerHTML=score;
    }

},2000)

function restart(){
    dead=false;
    score=0;
    
    block.style.animationName="block";
}