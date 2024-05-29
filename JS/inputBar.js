const userPrompt = document.getElementById('userPrompt');
const maxLines=200;

 userPrompt.addEventListener('input', function() {

    if (this.scrollHeight<maxLines) {
        this.style.height=this.scrollHeight+'px';
    }
})

userPrompt.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        userPrompt.value = '';
        userPrompt.style.height = 'auto';
    }
});

