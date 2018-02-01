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
	// Testing: console.log(queryTerms);
	var flag = 0, found = -1;
	for(var i = 0; i < sentences.length; i++){
		for(var j = 0; j < queryTerms.length; j++){
			flag = 0;
			// Testing: console.log(sentences[i].toLowerCase().search(queryTerms[j]));
			if(sentences[i].toLowerCase().search(queryTerms[j]) == -1) {
				flag = 1;
				break;
			}
		}
		if(flag != 1){
			found = i;
			break;
		}
		// Testing: console.log('Not found in string '+i+'.');
	}	
	document.getElementById('answer').style.display = 'block'	
	document.getElementById('answer').innerHTML = '<p><strong>Answer: </strong>'+sentences[found]+'</p>';
}