
var pos=0 , test , test_status , question , choice , choices , chA , chB , chC , correct=0;
// pos rakm index f array

var next = document.getElementById('next');

var questions = [
["what is 2+3 ?","3","2","5","C"],
["what is 2*3 ?","6","2","5","A"],
["what is 2+10 ?","3","12","5","B"],
["what is 6+3 ?","3","2","9","C"],
["what is 2+5 ?","7","2","5","A"],
["what is 4+4 ?","8","2","5","A"],
["what is 3*7 ?","3","21","5","B"],
["what is 2*2 ?","3","2","4","C"],
["what is 3+3 ?","3","2","6","C"],
["what is 5*5 ?","3","25","5","B"]
];

function getElement(x){
	return document.getElementById(x);
}


// Function to get 5  Random Questions From TenQuestion Array 
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

var fiveRandomQuestion = getRandom(questions , 5);



function nextQuestions(i)
{
    getElement("test_status").innerHTML = 'Question '+ (i+1) +' Of '+fiveRandomQuestion.length;
	question = fiveRandomQuestion[i][0];
	chA = fiveRandomQuestion[i][1];
	chB = fiveRandomQuestion[i][2];
	chC = fiveRandomQuestion[i][3];
	test.innerHTML = '<h5>'+question+'</h5>';
	test.innerHTML += '<input type="radio" name="choices" value="A">'+chA+'<br>';
	test.innerHTML += '<input type="radio" name="choices" value="B">'+chB+'<br>';
	test.innerHTML += '<input type="radio" name="choices" value="C">'+chC+'<br>';
}

function renderQuestion(){
	test = getElement("test");  // el3onsr ely h3rd feh elso2al
	if (pos >= fiveRandomQuestion.length) {
		test.innerHTML = '<h2>You Got '+correct+' Of '+fiveRandomQuestion.length+' Question Correct</h2>';
		getElement("test_status").innerHTML = 'Test Completed';
		pos=0;
		correct=0;
		next.style.display='none';
		skip.style.display='none';
		skipValues.style.display='none';
		document.querySelector('.timeCounter').style.display='none';
		return false;
	}
	if (pos == fiveRandomQuestion.length-1){
		next.innerText = 'Finish';
	}
	nextQuestions(pos);
	// test.innerHTML += '<button onclick="checkAnswer()">Submit Answer</button>'
}


listindexes= {};
function checkAnswer(){  // bt3ml check 3la a5tyarat elmost5dm
	choices = document.getElementsByName('choices'); // getElementsByName  btgeb kol el3naser ely feha attribute name
	for (var i = 0; i < choices.length ; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
			listindexes[pos+1] = choices[i].value;
		}
	}
	if (choice == fiveRandomQuestion[pos][4]) { // lw choice sawa ela5tyar elrab3 ely howa correct zawd correct 1
		correct++;
	}
	pos++;  // 3shan y8yr elso2al 
	renderQuestion();
}

window.addEventListener("load" , renderQuestion);


var skippedquestions = [];
var skip = document.getElementById("skip");
var skipValues = document.getElementById("skipValues");
var skipSpanshasfunc = [];
var skipSpans = [];
skip.addEventListener("click",function(){
	

	if (skippedquestions[pos] == undefined) {
		skippedquestions[pos] = pos;

	}
	skipValues.insertAdjacentHTML('beforeend',"<span class='skipSpans'>"+(skippedquestions[pos] + 1)+"</span>" )

	checkAnswer();
	console.log(questions[skippedquestions[pos]]);
	skipSpans = document.getElementsByClassName("skipSpans");
	for (var i = 0; i < skipSpans.length; i++) {
		//debugger;
		if(!skipSpanshasfunc[i])
		{

			skipSpans[i].addEventListener("click",skipfunc(pos-1,i));
			skipSpanshasfunc[i] = true;
		}

	}

});

var x; //tarek
function skipfunc(cur,i)
{   
	x=pos;
	
//x=pos-1;//tarek
	return function(){
		
		if(pos==4)
	{
		pos=cur;
		next.innerText = 'Next';
	}
		nextQuestions(cur);
		skipSpans[i].style.display = 'none';
		skippedquestions[i] = undefined;
		pos=x+1;
	}

	//pos=x;//tarek

} 


///////////////////////////////////


function countDown(secs,elem){
	var element = document.getElementById(elem);
	element.innerText = "Time-Left : " + secs + " s";
	if (secs < 1) {
		clearTimeout(timer);
		element.innerText = "Time Finish";
	}
	secs--;
	var timer = setTimeout('countDown('+ secs+',"'+elem+'")', 1000);
}

countDown(120, "status");