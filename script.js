const sendBtN = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');


sendBtN.addEventListener('click', sendMsg)

function sendMsg() {
    let content = messageIn.value;

    if (content === '') {
        alert('please enter a valid value. Current value is empty')
    }
    else {
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}