import { GoogleGenerativeAI } from "@google/generative-ai";
const chatHistory = [];
let pdfText;


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

      pdfMake.createPdf(document).download('nepos.pdf');
    }
    



async function run() {
  async function chatting() {
    const userResponse = document.createElement('span')
    userResponse.classList.add('userBubble');
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


// const API_KEY = "AIzaSyBOI0Y7S8O-AU3GMD1iwnKfQTK_5fabPkE";
// const API_KEY = "AIzaSyBxytF5KX3I5AvUV__KLML7zx9wu00hDoU";
// const API_KEY = "AIzaSyBmEeYaIKu-7nkdWCmsI5208WOdjkU3Prw";

// const API_KEY = "AIzaSyCJOhUe5BLoqPYB7BvMvOvVAvQWIKsNquM";





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
const parameters1 = 'Responde en español. Tu nombre será Nepos y eres un asistente para una pagina sobre reseñas de anime, series y peliculas que sabe todo sobre el tema y puede recomendar en base a los gustos del usuario. No debes usar nunca palabras lenguaje inapropiado y debes seguir los protocolos de seguridad de google/gemini para no generar una respuesta que pueda ser bloqueda por seguridad. Elimina cualquier contenido que pueda considerarse ofensivo, discriminatorio, violento, de odio, o que promueva actividades ilegales o dañinas.';

const parameters2 = 'Si te preguntan algo fuera del tema para el que estás diseñado, respondes a la pregunta, pero luego dejas claro para lo que fuiste entrenado. Tu respuesta no excedera 40 palabras. No uses negritas, cursiva ni italica para escribir. Si te hablan de romance o amor, di que no entiendes.';
chat.sendMessage(parameters1);
//chat.sendMessage(parameters2);


try {
    userPrompt.addEventListener('input', function() {
    prompt = userPrompt.value;
    });

    userPrompt.addEventListener('keydown', async function(event) {
      if (event.key === 'Enter' && prompt != '') {
        chatting();
        
          /* const userResponse = document.createElement('span')
          userResponse.classList.add('userBubble');
          userResponse.textContent=prompt;
          messages.appendChild(userResponse);

          console.log('User:', prompt);
          const result = await chat.sendMessage(prompt, parameters);
          const response = await result.response;
          const text = response.text();

          console.log('AI:', text);
          prompt = '';
          window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth'
          });

          const neposResponse = document.createElement('span')
          neposResponse.classList.add('neposBubble');
          neposResponse.textContent=text;
          messages.appendChild(neposResponse);

          console.log('AI:', text);
          prompt = '';
          window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth'
          }); */
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




pdfExport.addEventListener('click', () => {
  downloadPDF();
});






run();