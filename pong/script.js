const game= document.getElementById("game");
const player1= document.getElementById("player1");
const player2= document.getElementById("player2");
const ball= document.getElementById("ball");
const part1= document.getElementById("part1");
const part2= document.getElementById("part2");
let play=false;
let end=true;
var map = [];
let vector=[10,10]
score1=0;
score2=0;
it=0;
height=window.innerHeight;
width=window.innerWidth;
paddleSize=height/4.7;
paddleWidth=width/50;
initialSpeed=width/200;
borderLeft=width/25+paddleSize-(width/13);
borderRight=width-width/25-paddleWidth-30;
console.log(width);
console.log(height);
initialStartup();
function initialStartup(){
    game.style.width=width+"px";
    game.style.height=height+"px";
    player1.style.height=paddleSize+"px";
    player2.style.height=paddleSize+"px";
    player2.style.width=paddleWidth+"px";
    player1.style.width=paddleWidth+"px";
    player1.style.marginTop=(height/2-paddleSize/2)+"px";
    player2.style.marginTop=(height/2-paddleSize/2)+"px";
    player1.style.marginLeft=width/25 +"px";
    player2.style.marginLeft=(width/2-width/25-paddleWidth) +"px";
    part1.style.height=height+"px";
    part2.style.height=height+"px";
    part1.style.width=width/2+"px";
    part2.style.width=width/2+"px";
    ball.style.marginLeft=width/2+"px";
    ball.style.marginTop=height/2*-1+"px";
    document.getElementById("win").style.marginTop=(height/2)*-1+"px";
    document.getElementById("win").style.marginLeft=width/2-500+"px";
    document.getElementById("points").style.marginTop=(height/2+height/4)*-1+"px";
    document.getElementById("points").style.marginLeft=width/2-200+"px";

}
onkeydown = onkeyup = function(e){
    
    e = e || event; 
    map[e.keyCode] = e.type == 'keydown'; 
}

var gameLoop=setInterval(function(){
    if(play){
    
    updateBall();
    }
},10)
var waitLoop=setInterval(function(){
    if(!end){
    if(!play){
    it++;
    }
    if(it==2){
        play=true;
        it=0;
    }
    }},500)


var paddleLoop=setInterval(function(){  
        input();
        if(height!=window.innerHeight||width!=window.innerWidth){
            height=window.innerHeight;
            width=window.innerWidth;
            paddleSize=height/4.7;
            paddleWidth=width/50;
            initialSpeed=width/200;
            borderLeft=width/25+paddleSize-(width/13);
            borderRight=width-width/25-paddleWidth-30;
            initialStartup();
        }
},10)

function input(){

    var characterTop2 =parseInt(window.getComputedStyle(player2).marginTop);
    var characterTop1 =parseInt(window.getComputedStyle(player1).marginTop);

    if(map[87]){
        //console.log("a")
        if(characterTop1>0){
            player1.style.marginTop=(characterTop1-initialSpeed)+ "px";
            }
        
       }
       if(map[83]){
        
            if(characterTop1<=(height-paddleSize-10)){
            player1.style.marginTop=(characterTop1+initialSpeed)+ "px";
        }
       }
    
       if(map[38]){
        //console.log("a")
        if(characterTop2>0){
            player2.style.marginTop=(characterTop2-initialSpeed)+ "px";
            }
        
       }
       if(map[40]){
        
            if(characterTop2<=(height-paddleSize-10)){
            player2.style.marginTop=(characterTop2+initialSpeed)+ "px";
        }
       }
}
temp=true;
function updateBall(){
let x=parseInt(window.getComputedStyle(ball).marginLeft);
let y=parseInt(window.getComputedStyle(ball).marginTop);

if (y>=(-1*height/23.175-10)||y<=-height){
    vector[1]=vector[1]*-1;

}
var characterTop1 =parseInt(window.getComputedStyle(player1).marginTop);
var characterTop2 =parseInt(window.getComputedStyle(player2).marginTop);
if(temp){
if ((x<borderLeft)&&(y>(-1*(height-characterTop1))&&y<((height-characterTop1-paddleSize)*-1))){
    vector[0]=vector[0]*-1;
    vector[0]=vector[0]+0.5;
    temp=false;
}
    else if(x>borderRight&&(y>(-1*(height-characterTop2))&&y<((height-characterTop2-paddleSize)*-1))){
        vector[0]=vector[0]*-1;
        vector[0]=vector[0]-0.5;
        temp=false;
}
}else{
    temp=true;
}
ball.style.marginLeft=(x+vector[0])+"px";
ball.style.marginTop=(y+vector[1])+"px";
if(x<borderLeft-(width/56,35)){
    rebuild();
    vector[0]=initialSpeed;
    play=false;
    score2++;
    document.getElementById(2).innerHTML=score2;
    if(score2==7){
        end=true;
        document.getElementById("win").innerHTML="Player 2 wins!!!";
        document.getElementById("win").addEventListener("touchstart",mobileStart);
    }
}
if(x>borderRight+(width/56,35)){
    
    rebuild();
    vector[0]=-1*initialSpeed;
    play=false;
    score1++;
    document.getElementById(1).innerHTML=score1;
    if(score1==7){
        end=true;
        document.getElementById("win").innerHTML="Player 1 wins!!!";
        document.getElementById("win").addEventListener("touchstart",mobileStart);
    }
}
}
function rebuild(){

    ball.style.marginLeft=width/2+"px";
    ball.style.marginTop=height/2*-1+"px";
    
    vector[1]=getRandomInt(10)+1;
    if(getRandomInt(2)==0){
        vector[1]=vector[1]*-1;
    }
    }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }
var mainLoop=setInterval(function(){
    if(end){
    
        if(map[32]){
            map[32]=false;
            end=false;
            reset();
}}})

function reset(){
    score1=0;
    score2=0;
    document.getElementById("1").innerHTML=score1;
    document.getElementById("2").innerHTML=score2;
    document.getElementById("win").innerHTML="";
    document.getElementById("win").removeEventListener("touchstart",mobileStart);

}


//touch


document.getElementById("win").addEventListener("touchstart",mobileStart);

function mobileStart(){
        map[32]=true;
        console.log("hallo");
}

part1.addEventListener("touchmove", function(e){
    i=0;
    while(e.touches[i].screenX>width/2){
        i++;
    }
    player1.style.marginTop=e.touches[i].screenY-paddleSize/2 +"px";
});


part2.addEventListener("touchmove", function(e){
    console.log(e.touches[0].screenY);
    
    i=0;
    while(e.touches[i].screenX<width/2){
        i++;
    }
    player2.style.marginTop=e.touches[i].screenY-paddleSize/2 +"px";
});