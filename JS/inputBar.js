const userText = document.getElementById('userPrompt');
const maxLines=200;

userText.addEventListener('input', function() {

    if (this.scrollHeight<maxLines) {
        this.style.height=this.scrollHeight+'px';
    }
})

userText.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        userText.value = '';
        userText.style.height = 'auto';
    }
});

