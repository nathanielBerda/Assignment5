l=12;
array= new Array(l);
for(i=0;i<l; i++){
array[i]=i;
}
//array will be [0,1,2,3,4,5,6,7,8,9,10,11]

for(i=l;i<24;i++){
    var k="card"+i;
    card=document.getElementById(k);
    card.style.display="none";
}
//function to change the back of the card
var cover="cover1";
for(i=1;i<4;i++){
    u="t"+i;
document.getElementById(u).addEventListener('click',changeBackGround);
}
function changeBackGround(){//change the theme of the pair
    if(counter==1){//can not change the background in the middle of a pair
        alert("please finish the pair");
    }
    else{
    idd=this.id;
    i=idd.slice(1);
    console.log(i);
    cover=cover.slice(0,5);
    cover=cover+i;
    for(j=0;j<24;j++){
        k="card"+j;
        cardd=document.getElementById(k);
        if(cardd.getAttribute("found")=="no"){// change the background only for the pair that were not found
        console.log("hello");
        cardd.style.backgroundImage='url("./imgs/'+cover+'.jpg")';
        }
        else{continue;}

    }
    }
   
}


document.getElementById("changelev").addEventListener('click',levl);
function levl(){//User wants to change the difficulty. the value l will be assigned to the data value of the "il" of the radio.
    var levels = document.getElementsByClassName("ll");
	console.log(levels);
	for(var i=0; i<levels.length; i++){
		if(levels[i].checked){
		l=parseInt(levels[i].getAttribute("data-value"));
		}
	}
    console.log(l);
    yes();
}

Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}

array.shuffle();
//the array is now shuffled, for instance [0,11,8,4,6,2,1,3,10,5,7,9]


//set all the cards with the function click (even the hidden ones)
for(i=0; i<24; i++){
    var k="card"+i;
    card=document.getElementById(k);
    card.addEventListener("click",test);
}
counter=0; //counter will be 0 or 1 to know if it's the first or the second card picked
id1=30;
id2=30;
i1=30;
i2=30;
var pairleft=l/2; //how many cards left to find
wrong=0; //how many wrong attempts

function test(){
    
    if(this.getAttribute("found")=="yes"){
        alert("this card has been found");
    }
    else{
        if(counter==0){
        //it is the first card to pick in the pair
        var sound= new Audio('./sound/sound.wav');
        sound.play();
        id1=this.id; //will return card4 for instance
        card1=document.getElementById(id1);
        var i1 = id1.slice(4); // i=4 in this case
        j1= array[i1] //to have the new position after the shuffle
        card1.style.backgroundImage='url("./imgs/image'+j1+'.jpg")';
        counter=1;
        }
        else if(counter==1){
        //there have been an image selected already
        id2=this.id; //will return card4 for instance
         if(id1==id2){alert("you must chose another card");}
            else{
            card2=document.getElementById(id2);
            var i2 = id2.slice(4); // i2=4 in this case
            j2= array[i2] //to have the new position after the shuffle
            card2.style.backgroundImage='url("./imgs/image'+j2+'.jpg")';
            counter=0;
            if(Math.abs(j1-j2)==1&&(j2+j1-1)%4==0){
                //the pair matches
                pairleft--
                card1.setAttribute("found", "yes");
                card2.setAttribute("found", "yes");
                if(pairleft==0){
                
                setTimeout(function(){
                var sound2= new Audio('./sound/win.mp3');
                sound2.play();
                document.getElementById("won").style.display="block";
                document.getElementById("score").innerHTML="You won, but you made "+wrong+" mistakes, you can do better. Restart?"
                document.getElementById("bod").style.backgroundImage="url('http://bestanimations.com/Holidays/Fireworks/fireworks/ba-awesome-colorful-fireworks-animated-gif-image-s.gif')";
                }
                , 1000)
                
                }
                else{
                var sound3= new Audio('./sound/correct.mp3');
                sound3.play();
                //the 2 cards are same but the game is not finished
                }
            }
            else{
                 var wrongsound= new Audio('./sound/wrong.mp3');
                 wrongsound.play();
                for(i=0;i<l;i++){
                k="card"+i;
                card=document.getElementById(k);
                card.removeEventListener("click",test);
                }
                wrong=wrong+1;
                document.getElementById("wrong").innerHTML=wrong;
                    
                setTimeout(function(){
                card1.style.backgroundImage='url("./imgs/'+cover+'.jpg")';
                card2.style.backgroundImage='url("./imgs/'+cover+'.jpg")'; 
                    for(i=0;i<l;i++){
                    k="card"+i;
                    card=document.getElementById(k);
                    card.addEventListener("click",test);
                    }
                    
                    }
                , 1000);
                
                    
                }   
            }
            //the 2 cards are differents
            }
        //user is taking the second card
    }
}


rest=document.getElementById("restart");
rest.addEventListener("click",restart);

function restart(){//need to confirm to restart
    document.getElementById("confirm").style.display="block";
}

document.getElementById("no").addEventListener("click",noo);
document.getElementById("noo").addEventListener("click",noo)
function noo(){//user doesnt want to restart
    document.getElementById("confirm").style.display="none";
    document.getElementById("won").style.display="none";
}
document.getElementById("yes").addEventListener("click",yes);
document.getElementById("yess").addEventListener("click",yes);

function yes(){//User confirm to restart a new game. It can appear after clicking on the restart button; changing the difficulty; or after winning a game
    array= new Array(l);
    for(i=0;i<l; i++){
    array[i]=i;
    }
    var rest = new Audio("./sound/restart.mp3");
    rest.play();
    document.getElementById("confirm").style.display="none";//hide the confirmation box
    document.getElementById("won").style.display="none";//hide the won box
    wrong=0;
    document.getElementById("bod").style.backgroundImage="url('http://files.abovetopsecret.com/images/member/9ff8182b9086.gif')";//Put back the original background
    document.getElementById("wrong").innerHTML=wrong;
    array.shuffle();//new game means new position
    for(i=0;i<24;i++){
       var k="card"+i;
        card=document.getElementById(k);
        card.style.display="none";
    }
    for(i=0;i<l;i++){
       var k="card"+i;
        card=document.getElementById(k);
         card.style.backgroundImage='url("./imgs/'+cover+'.jpg")';
        card.setAttribute("found", "no");
        card.style.display="inline-block";
    }
    counter=0; //counter will be 0 or 1 to know if it's the first or the second card picked
    id1=30;//We initiate to a value different from [0--24] cause the ID if the card can not be one of them
    id2=30;
    i1=30;
    i2=30;
    pairleft=l/2;
    }


