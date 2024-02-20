
	var questionAtDisplay;
	var option1;
	var option2;
	var option3;
	var option4;
	var choosedAnswer;
	var questionIndex = 0;
	var totalQuestion = questions.length;
	var score = 0;
	var min = 0;
	var taskTimer;
	var timer;
	var timeForEach = 45;
	var flag = 0;

	function taskTime(t){
		var setSec = t;
		//console.log(setSec)
		document.getElementById("task-time").innerHTML = "Hurry ! " + setSec;
		setSec--;
		taskTimer = setTimeout('taskTime('+setSec+')',1000);
		if(setSec < 0){
			clearTimeout(taskTimer);
			skip()
		}
	}

	function skip(){
		clearTimeout(taskTimer);
		questionIndex++;
		controller(questionIndex)
		$("#btn-skip").hide()
		setTimeout( function(){$("#btn-skip").show()},1000)
	}

	function Totaltime(sec,elem){
		var element = document.getElementById(elem);
		element.innerHTML = "Total time taken : " + min + " m :" + sec+" s";
		if(sec == 60) {
			min++;
			sec = 0;  
		}
		sec++;
		timer = setTimeout('Totaltime('+sec+',"'+elem+'")',1000);
	}

	$(document).ready(function(){
		$("#result").hide();
		$("#task-time").hide();
		$("#exam-on-going").hide();
		$("#button-next").hide();
		$("#btn-skip").hide();

		$("#start").click(function(){
				$("#start-id").hide();
				$("#task-time").show();
				$("#exam-on-going").show();
				$("#button-next").show();
				$("#btn-skip").show();

				Totaltime(0,"time");
				$("#result").hide();
				showQuestion("0");
		
				setTimeout( function(){$("#btn-skip").show()},1000)
		
				$("input[name = Option]").click(function(){
					choosedAnswer = document.querySelector('input[name="Option"]:checked').value	;
					console.log("choosedAnswer : "+choosedAnswer)
				})
			
				$("#button-next").click(function(){
					$("#btn-skip").hide()
					setTimeout( function(){$("#btn-skip").show()},1000)
					if (!choosedAnswer) {
						alert("choose any one option ")
					}
					else{
						document.querySelector('input[name="Option"]:checked').checked = false;
						questionIndex++;
						console.log("key : "+ questions[(questionIndex - 1)].answer )
						if(choosedAnswer == questions[(questionIndex - 1)].answer){
							clearTimeout(taskTimer);
							score += 5;
						}
						else{
							console.log("wrong")
						}
						controller(questionIndex);
		
					}
				})
				$("#btn-skip").click(function(){
					console.log("Skipped Question number "+(questionIndex+1))
					skip()
				})
			});
		});

	function controller(){

		if(questionIndex == totalQuestion) {
			$("#task-time").hide();
			clearTimeout(timer);
			$("#exam-on-going").hide()
			console.log("score : "+score)
			$("#result").show();
			document.getElementById("result").innerHTML = "Your score "+ score +" out of " + 5*totalQuestion;
			//$("#start-id").show();
			// alert("Your total score : "+score)
		}

		else{
			clearTimeout(taskTimer);
			showQuestion(questionIndex)
		}
	}

	function showQuestion(questionIndex){
		if(questionIndex > totalQuestion){
			return
		}
		else{
		taskTime(timeForEach)
		$("#display").html(questions[questionIndex].Quest);
		$("#Option1").html(questions[questionIndex].opt1);
		$("#Option2").html(questions[questionIndex].opt2);
		$("#Option3").html(questions[questionIndex].opt3);
		$("#Option4").html(questions[questionIndex].opt4);

		}
	}
