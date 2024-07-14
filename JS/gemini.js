import { GoogleGenerativeAI } from "@google/generative-ai";
let chatHistory = [];
let pdfText;
let searchIndex=0;

  function downloadPDF() {

    for (let i = 0; i < chatHistory.length; i++) {
      if (i%2==0) {
        chatHistory[i]="Usuario: "+ chatHistory[i];
      } else {
        chatHistory[i]="Nepos: "+chatHistory[i];
      }
      }
      const finalText = chatHistory.join("\n\n");
      const document = {
        content: [
          { text: finalText, style: 'normal' } 
        ],
        styles: {
          style: { fontSize: 12, font: 'times' }
        }
      };
      if (chatHistory.length>0) {
        pdfMake.createPdf(document).download('nepos.pdf');
      } else {
        console.log("No messages to export");
      }
      
    }
    
    function findMessage() {
      try {
        let found=[];
        let searchText=searchInput.value;
        chatHistory.forEach(message => {
          if (message.includes(searchText)){
            found.push(chatHistory.findIndex(messageF => messageF.includes(message)));
          }
        });
        let index=found.length-1-searchIndex;
        if (index<found.length) {
          let matches= document.getElementsByClassName('message');
          let Y1 = window.scrollY;
          if (matches[found[0]]) {
            matches[found[0]].scrollIntoView();
          }
          
          let Y2 = window.scrollY;
          if (Y1>Y2){
            window.scrollBy(0, -200);
          }
          if (Y1<Y2){
            window.scrollBy(0, 200);
          }
          if (Y1=Y2){
            window.scrollBy(0, 0);
          }
          if (matches[found[index]].classList.contains('userBubble')) {
            matches[found[index]].classList.add('focusU');
            setTimeout(() => {
              matches[found[index]].classList.remove('focusU');
            }, 2100);
          } else {
            matches[found[index]].classList.add('focusN');
            setTimeout(() => {
              matches[found[index]].classList.remove('focusN');
            }, 2100);
          }
          console.log(found);
        } else {
          console.log("out of match array");
          searchIndex--;
        }
          
        
      } catch (error) {
        console.log("not found", "\n", error);
      }

      
      
    }




// const API_KEY = "AIzaSyBOI0Y7S8O-AU3GMD1iwnKfQTK_5fabPkE";
// const API_KEY = "AIzaSyBxytF5KX3I5AvUV__KLML7zx9wu00hDoU";
// const API_KEY = "AIzaSyBmEeYaIKu-7nkdWCmsI5208WOdjkU3Prw";

const API_KEY = "AIzaSyCJOhUe5BLoqPYB7BvMvOvVAvQWIKsNquM";



const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const chat = model.startChat({
    history: [
    {
        role: "user",
        parts: [{ text: "Busco contenido de estos generos." }],
    },
    {
        role: "model",
        parts: [{ text: "Un gusto conocerte. ¿En qué puedo ayudarte?" }],
    },
    ],
    generationConfig: {
    maxOutputTokens: 100,
    },
});
const userPrompt = document.getElementById('userPrompt');
const messages =document.getElementById('messages');
const sendButton = document.getElementById('sendButton');
let prompt = '';
const parameters1 = 'Responde en español. Tu nombre será Nepos y eres un asistente para una pagina sobre reseñas de anime, series y peliculas que sabe todo sobre el tema y puede recomendar en base a los gustos del usuario. No debes usar nunca palabras lenguaje inapropiado y debes seguir los protocolos de seguridad de google/gemini para no generar una respuesta que pueda ser bloqueda por seguridad. Elimina cualquier contenido que pueda considerarse ofensivo, discriminatorio, violento, de odio, o que promueva actividades ilegales o dañinas. Tu respuesta no excedera 40 palabras.';

const parameters2 = 'Si te preguntan algo fuera del tema para el que estás diseñado, respondes a la pregunta, pero luego dejas claro para lo que fuiste entrenado. Tu respuesta no excedera 40 palabras. No uses negritas, cursiva ni italica para escribir. Si te hablan de romance o amor, di que no entiendes.';
chat.sendMessage(parameters1);
// chat.sendMessage(parameters2);


async function run() {
  async function chatting() {
    const userResponse = document.createElement('span')
    userResponse.classList.add('userBubble');
    userResponse.classList.add('message');
    userResponse.textContent=prompt;
    messages.appendChild(userResponse);
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
  
    console.log('User:', prompt);
    chatHistory.push(prompt);
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
  
    
    const neposResponse = document.createElement('span')
    neposResponse.classList.add('neposBubble');
    neposResponse.classList.add('message');
    neposResponse.textContent=text;
    messages.appendChild(neposResponse);
  
    console.log('AI:', text);
    chatHistory.push(text);
    prompt = '';
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
  }


try {
    userPrompt.addEventListener('input', function() {
      prompt = userPrompt.value;
    });

    userPrompt.addEventListener('keydown', async function(event) {
      if (event.key === 'Enter' && prompt != '') {
        chatting();
      }
    });

    sendButton.addEventListener('click', async function() {
      if (prompt != ''){
        chatting();
      }
    })

} catch (error) {
    console.error('Error:', error);
}
}

const pdfExport = document.getElementById('pdfExport');
pdfExport.addEventListener('click', () => {
  downloadPDF();
});

/* const find = document.getElementById('find');
find.addEventListener('click', () => {
  findMessage();
}); */

const newChat = document.getElementById('newChat');
newChat.addEventListener('click', () => {
  location.reload();
});


const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  searchIndex=0;
  findMessage();
});
const btnN = document.getElementById('btnN');
btnN.addEventListener('click', function() {
  searchIndex++;
  findMessage();
});
const btnP = document.getElementById('btnP');
btnP.addEventListener('click', function() {
  if (searchIndex>0) {
    searchIndex--;
    findMessage();
  }
});

run();