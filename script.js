function quickReply(text){
    document.getElementById("user-input").value = text;
    sendMessage();
}

function sendMessage(){

    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");

    let userMessage = input.value.trim();

    if(userMessage === ""){
        return;
    }

    chatBox.innerHTML += `
    <div class="user-message">
        <div class="user-bubble">
            👤 ${userMessage}
        </div>
    </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    input.value = "";

    let msg = userMessage.toLowerCase();
    let botReply = "";

    if(msg.includes("services")){
        botReply = "🚀 We provide AI Chatbots, AI Agents, Website Development, Business Automation and Custom AI Solutions.";
    }
    else if(msg.includes("pricing")){
        botReply = "💰 Pricing depends on project requirements. Contact us on Fiverr for a custom quote.";
    }
    else if(msg.includes("chatbot")){
        botReply = "🤖 We build website chatbots, customer support bots, lead generation bots and AI business assistants.";
    }
    else if(msg.includes("automation")){
        botReply = "⚡ We automate repetitive business tasks, workflows and customer interactions using AI.";
    }
    else if(msg.includes("contact")){
        botReply = "📞 Please contact us through Fiverr messages and we will respond as soon as possible.";
    }
    else if(msg.includes("website")){
        botReply = "🌐 We can build business websites, landing pages and AI-powered web applications.";
    }
    else if(msg.includes("ai agent")){
        botReply = "🧠 AI Agents can perform tasks, answer questions and automate workflows for your business.";
    }
    else{
        botReply = "🤖 I can help you with Services, Pricing, AI Chatbots, AI Agents, Websites and Automation Solutions.";
    }

    chatBox.innerHTML += `
    <div class="bot-message" id="typing">
        <div class="bot-bubble typing">
            AI is typing...
        </div>
    </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {

        let typing = document.getElementById("typing");

        if(typing){
            typing.remove();
        }

        chatBox.innerHTML += `
        <div class="bot-message">
            <div class="bot-bubble">
                ${botReply}
            </div>
        </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 1000);
}

document.getElementById("user-input")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});
