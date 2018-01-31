function submit() {
	var ta = document.getElementById('content-ta');
	var sentences = [];
	sentences = ta.value.replace(/\[.*\]/g, '').split('. ');
	console.log(sentences);
	ta.style.display = 'none';
	document.getElementById('acceptedContent').innerText = ta.value;
	document.getElementById('submit-bttn').disabled = true;
	document.getElementById('question').style.display = 'block'
}

function cleared() {
	document.getElementById('content-ta').value = '';	
	document.getElementById('content-ta').style.display = 'block';
	document.getElementById('submit-bttn').disabled = false;	
	document.getElementById('acceptedContent').style.display = 'none';
}