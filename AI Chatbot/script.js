const API_KEY = 'AIzaSyAqj6vOmJXr_WgS-rMX1wFwbzsGdf5X2hI';

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const chatMessages = document.getElementById('chat-messages');

const userInput = document.getElementById('user-input');

const sendButton = document.getElementById('send-button');

async function generateResponse(prompt){
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: prompt 
                        }
                    ]
                }
            ]
        })
    });

    if(!response.ok) {
        throw new Error('Failed to generate response');
    }

    const data = await response.json();
    console.log(data, '-----data--------');
    return data.candidates[0].content.parts[0].text;
}

// function cleanMarkdown(text){
//     return text
//         .replace(/#{1,6}\s?/g, '')
//         .replace(/\*\*/g, '')
//         .replace(/\n{3,}/g, '\n\n')
//         .trim();
// }
function renderMarkdown(text) {
    if (typeof marked !== 'undefined') {
        return marked.parse(text);
    }
    return text; // Fallback to plain text if marked.js is not loaded
}

function addMessage(message, isUser){
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = isUser ? 'user.png' : 'bot.png';
    profileImage.alt = isUser ? 'User' : 'Bot';

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;

    // Use innerHTML for bot messages to properly render Markdown
    if (isUser) {
        messageContent.textContent = message;
    } else {
        messageContent.innerHTML = renderMarkdown(message);
    }
    
    messageElement.appendChild(profileImage);
    messageElement.appendChild(messageContent);

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleUserInput() {
    const userMessage = userInput.value.trim();

    if (userMessage) {
        addMessage(userMessage, true);

        userInput.value = '';

        sendButton.disabled = true;
        userInput.disabled = true;

        try{
            const botMessage = await generateResponse(userMessage);
            addMessage(botMessage, false);
        } catch(error){
            console.error('Error: ', error);
            addMessage('Sorry, I encountered an error. Please try again!');
        } finally {
            sendButton.disabled = false;
            userInput.disabled = false;
            userInput.focus();
        }
    }
}

const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.12/marked.min.js';
script.onload = () => console.log('Markdown parser loaded');
document.head.appendChild(script);

sendButton.addEventListener('click', handleUserInput);

userInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserInput();
    }
});