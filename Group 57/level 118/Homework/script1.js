function changeText() {
    const word = document.getElementById('text')
    word.textContent = 'hello,DOM!'
}
addEventListener('click',changeText)