const game= document.getElementById("game");
const player1= document.getElementById("player1");
const player2= document.getElementById("player2");
const ball= document.getElementById("ball");
let play=false;
let end=true;
var map = [];
let vector=[10,10]
score1=0;
score2=0;
it=0;
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
},10)

function input(){

    var characterTop2 =parseInt(window.getComputedStyle(player2).marginTop);
    var characterTop1 =parseInt(window.getComputedStyle(player1).marginTop);

    if(map[87]){
        //console.log("a")
        if(characterTop1>0){
            player1.style.marginTop=(characterTop1-10)+ "px";
            }
        
       }
       if(map[83]){
        
            if(characterTop1<630){
            player1.style.marginTop=(characterTop1+10)+ "px";
        }
       }
    
       if(map[38]){
        //console.log("a")
        if(characterTop2>0){
            player2.style.marginTop=(characterTop2-10)+ "px";
            }
        
       }
       if(map[40]){
        
            if(characterTop2<630){
            player2.style.marginTop=(characterTop2+10)+ "px";
        }
       }
}
temp=true;
function updateBall(){
let x=parseInt(window.getComputedStyle(ball).marginLeft);
let y=parseInt(window.getComputedStyle(ball).marginTop);

if (y>=-25||y<-790){
    vector[1]=vector[1]*-1;

}
var characterTop1 =parseInt(window.getComputedStyle(player1).marginTop);
var characterTop2 =parseInt(window.getComputedStyle(player2).marginTop);
if(temp){
if ((x<100)&&(y>(-1*(800-characterTop1))&&y<((800-characterTop1-170)*-1))){
    vector[0]=vector[0]*-1;
    temp=false;
}
    else if(x>1370&&(y>(-1*(800-characterTop2))&&y<((800-characterTop2-170)*-1))){
        vector[0]=vector[0]*-1;
        vector[0]=vector[0]+1;
        temp=false;
}
}else{
    temp=true;
}
ball.style.marginLeft=(x+vector[0])+"px";
ball.style.marginTop=(y+vector[1])+"px";
if(x<40){
    rebuild();
    vector[0]=10;
    play=false;
    score2++;
    document.getElementById(2).innerHTML=score2;
    if(score2==7){
        end=true;
        document.getElementById("win").innerHTML="Player 2 wins!!!";
    }
}
if(x>1430){
    
    rebuild();
    vector[0]=-10;
    play=false;
    score1++;
    document.getElementById(1).innerHTML=score1;
    if(score1==7){
        end=true;
        document.getElementById("win").innerHTML="Player 1 wins!!!";
    }
}
}
function rebuild(){

    ball.style.marginTop="-400px";
    ball.style.marginLeft="740px";
    
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
           
            end=false;
            reset();
}}})

function reset(){
    score1=0;
    score2=0;
    document.getElementById("1").innerHTML=score1;
    document.getElementById("2").innerHTML=score2;
    document.getElementById("win").innerHTML="";

}