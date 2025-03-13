const myForm = document.getElementById("PromptForm");
const responsesContainer = document.getElementById
("Responses Container");

myForm.addEventListener("submit",  sendChatRequest);

async function sendChatRequest(event){
    event.preventDefault()
    const userPrompt = event.target.promptInput.value
    console.log("prompt is",userPrompt)
    
    const response = await fetch("https://server-week-06-assignment.onrender.com/chat",{
       method:"POST",
       headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userPrompt})
    });
    
    const data = await response.json()
    console.log("The data recieved back is",data)

    const responseP = document.createElement("p")
    responseP.textContent = data 
    responsesContainer.appendChild(responseP);
}
