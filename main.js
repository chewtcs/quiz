function check(){

	var questao1 = document.quiz.questao1.value;
	var questao2 = document.quiz.questao2.value;
	var questao3 = document.quiz.questao3.value;
	var questao4 = document.quiz.questao4.value;
	var questao5 = document.quiz.questao5.value;
	
	var correct = 0;


		if(questao1== "Ele perdeu a braco direito"){
			correct++;
		}
		if (questao2== "Princesa Leia"){
			correct++;
		}
		if(questao3== "Sua mao direita"){
			correct++;
		}
		if(questao4== "Sua fe nos seus amigos"){
			correct++;
		}
		
		if(questao5== "Wookie"){
			correct++;
		}

	var messages = ["Bom Trabalho", "Okay, poderia ser melhor", "Voce realmente tem melhorar "];
	var pictures = ["img/tudo.gif","img/goodjob.gif","img/erroutudo.gif"];


	var range;

		if (correct < 1){
			range = 2;
		}
		if (correct > 0 && correct < 5){
			range = 1;

		}
		if (correct > 4){
			range = 0;
		}


	document.getElementById("after_submit").style.visibility= "visible";

	document.getElementById("message").innerHTML = messages[range];

	document.getElementById("number_correct").innerHTML = "Obteve: "+ correct +" Questoes corretas";
	document.getElementById("picture").src=pictures[range];



}