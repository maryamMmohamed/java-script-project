function countDown(secs,elem){
	var element = document.getElementById(elem);
	element.innerHTML = "<h2>please wait</h2>" + secs + "<h4>seconds</h4>";	
	if (secs < 1) {
	    clearTimeout(timer);
	    element.innerHTML = "<h2 style='color:#e42a3f;padding-top:25px;'>Test Loaded</h2>";    //#e42a3f    #477ae5   #012ab2
	    element.innerHTML += '<a style="color:#fff;font-size:16px;" href="quizPage.html" class="btn">Start Test</a>';
    }
secs--;
var timer = setTimeout('countDown('+ secs+',"'+elem+'")', 1000);
}

countDown(5, "status");