function quickReply(text){
    document.getElementById("user-input").value = text;
    sendMessage();
}

function sendMessage(){

    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");

    let userMessage = input.value;

    if(userMessage.trim()===""){
        return;
    }

    chatBox.innerHTML += `<p><b>You:</b> ${userMessage}</p>`;

    let msg = userMessage.toLowerCase();
    let botReply = "";

    if(msg.includes("services")){
        botReply = "We provide AI Chatbots, AI Agents, Website Development and Business Automation.";
    }
    else if(msg.includes("pricing")){
        botReply = "Pricing depends on project requirements. Contact us for a custom quote.";
    }
    else if(msg.includes("chatbot")){
        botReply = "We build AI-powered website chatbots, customer support bots and business assistants.";
    }
    else if(msg.includes("automation")){
        botReply = "We automate repetitive business tasks using AI and workflow automation.";
    }
    else if(msg.includes("contact")){
        botReply = "Please contact us through Fiverr messages.";
    }
    else{
        botReply = "I can help with Services, Pricing, Chatbots, Automation and Contact information.";
    }

    setTimeout(() => {
        chatBox.innerHTML += `<p><b>AI Assistant:</b> ${botReply}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}

document.getElementById("user-input")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});
