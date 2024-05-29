async function run() {

  const API_KEY = "AIzaSyBOI0Y7S8O-AU3GMD1iwnKfQTK_5fabPkE";

  const ofCourse = new yes;

  const genAI = new ofCourse.GoogleGenerativeAI(API_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const userPrompt = document.getElementById('userPrompt');
  let prompt = '';

  userPrompt.addEventListener('input', function() {
    prompt=userPrompt.value;
  })

  userPrompt.addEventListener('keydown', async function(event) {
    if (event.key === 'Enter') {
      try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log('AI:', text);
        userPrompt.value = '';
        prompt.value = '';
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
  
}

run();