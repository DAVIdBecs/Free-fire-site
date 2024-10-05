document.getElementById('sendButton').addEventListener('click', function() {
    const userId = document.getElementById('userId').value;
    if (userId) {
        const loading = document.getElementById('loading');
        const successMessage = document.getElementById('successMessage');
        
        loading.classList.remove('hidden');
        successMessage.classList.add('hidden');

        // Contagem regressiva de 10 segundos
        setTimeout(function() {
            loading.classList.add('hidden');
            successMessage.classList.remove('hidden');
        }, 10000);
    } else {
        alert('Por favor, insira um ID válido.');
    }
});
