var calculate = function () {
	var totalscore=0;
	var questions1 = document.getElementsByClassName("question1space");
	for(var i=0; i<questions1.length; i++){
		if(questions1[i].checked){
		totalscore=totalscore + parseInt(questions1[i].getAttribute("data-value"));
		}
	}
	var questions2 = document.getElementsByClassName("question2space");
	
	for(var i=0; i<questions2.length; i++){
		if(questions2[i].checked){
		totalscore=totalscore + parseInt(questions2[i].getAttribute("data-value"));
		}
	}
	var questions3 = document.getElementsByName("question3");
	for(var i=0; i<questions3.length; i++){
		if(questions3[i].checked){
		totalscore=totalscore + parseInt(questions3[i].getAttribute("data-value"));
		}
	}
	var questions4 = document.getElementById("numbercountries").value;
	if(questions4>18){
		totalscore=totalscore+3;
	}
	else if(questions4>11){
		totalscore=totalscore +2;
	}
	else if(questions4>7){
		totalscore++;
	}
	else{
		totalscore;
	}
	
	var questions5= document.getElementById("fader").value;

	totalscore= totalscore+ parseInt(questions5);
	var percent=Math.floor(totalscore/15*100);

	if(totalscore<5){
	document.getElementById('score').innerHTML="Your score is "+percent+"%. <br/>There is obviously something wrong here, maybe it's time for you to go out of your confort zone and explore the world, take some risk, you'll see that life is better than a straight line. <br/><br/><img class ='imageanswer' src='https://i.ytimg.com/vi/VxMrnn1iBwY/maxresdefault.jpg'> <audio autoplay> <source src='./audio/LOTR.mp3' type='audio/mpeg'</audio>";
	}
	else if(totalscore<8){
	document.getElementById('score').innerHTML="Your score is "+percent+"%. <br/>You don't like to have an adventurous life, but you don't like too boring too. Maybe you can add a little bit of crazy in your life?<br/><br/><img class ='imageanswer' src='https://hollywoodsubliminals.files.wordpress.com/2011/12/freemasonry-the-matrix-the-red-or-blue-pill.jpg?w=840&h=344'><audio autoplay> <source src='./audio/HereComes.mp3' type='audio/mpeg'</audio>";
	}
	else if(totalscore<12){
	document.getElementById('score').innerHTML="Your score is "+percent+"%. <br/>You like adventure, for sure, do not change anything!<br/><br/><img class ='imageanswer' src='http://images.pocketgamer.co.uk/FCKEditorFiles//temple-run-spin-off-3.jpg'><audio autoplay> <source src='./audio/Indiana.mp3' type='audio/mpeg'</audio>";
	}
	else{
	document.getElementById('score').innerHTML="Your score is "+percent+"%. <br/>You are really adventurous, it's very good, but be careful with your life, it's precious<br/><br/><img class ='imageanswer' src='https://i1.wp.com/www.nerdlikeyou.com/wp-content/uploads/2014/03/the-wolverine-bullet-train-jump.jpg?resize=600%2C249'> <audio autoplay> <source src='./audio/TakeOn.mp3' type='audio/mpeg'</audio>";
	}	
	
	
	var res = document.getElementById('score');
	res.style.display ='inline-block';
	
		
}

	var start = function () {
	var res = document.getElementById('main');
	res.style.display ='none';
}