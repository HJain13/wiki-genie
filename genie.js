var sentences = [];

function getPrecedingValue(match){
	return ' ' + match[match.length - 1];
}

function submit() {
	var ta = document.getElementById('content-ta');
	var processedContent = ta.value.replace(/\[\d\]/g, '').replace(/\. [a-z]/g,getPrecedingValue).replace(/[\n\r]/g, ' ');
	sentences = processedContent.split('. ');
	console.log(sentences);
	ta.style.display = 'none';
	document.getElementById('acceptedContent').innerText = processedContent;
	document.getElementById('submit-bttn').disabled = true;
	document.getElementById('question').style.display = 'block'
}

function cleared() {
	document.getElementById('content-ta').value = '';	
	document.getElementById('content-ta').style.display = 'block';
	document.getElementById('submit-bttn').disabled = false;	
	document.getElementById('acceptedContent').style.display = 'none';	
}

function genie(){
	var query = document.getElementById('query').value;
	var querySimplified = query.toLowerCase().replace(/is |what |the |when |does |why |where |was |were |are |who |of /g,'');
	var queryTerms = querySimplified.split(' ');
	var score, scores = [];
	for(var i = 0; i < sentences.length; i++){
		score = 0;
		for(var j = 0; j < queryTerms.length; j++){
			if(sentences[i].toLowerCase().search(queryTerms[j]) != -1) {
				score++;
			}
		}
		scores.push(score);
	}	

	var temp;
	//Sorting
	for(var i = 0; i < sentences.length-1; i++){
		for(var j = 0; j < sentences.length-i-1; j++){
			if(scores[j] < scores[j+1]){
				temp = scores[j]
				scores[j] = scores[j+1];
				scores[j+1] = temp;
				temp = sentences[j]
				sentences[j] = sentences[j+1];
				sentences[j+1] = temp;
			}
		}
	}

	document.getElementById('answer').style.display = 'block'	
	document.getElementById('answer').innerHTML = "<p><strong>Answer: </strong></p>";
	for(var i = 0; i < sentences.length; i++){
		if(i==0) document.getElementById('answer').innerHTML += '<p><strong>CR: '+scores[i]+'</strong>&nbsp;'+sentences[i]+'</p>'; 
		else document.getElementById('answer').innerHTML += '<p class="otherOptions"><strong>CR: '+scores[i]+'</strong>&nbsp;'+sentences[i]+'</p>'; 
	}
	// document.getElementById('answer').innerHTML = '<p><strong>Answer: </strong>'+sentences[found]+'</p>';
}