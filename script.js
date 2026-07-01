function quickReply(text){
    document.getElementById("user-input").value = text;
    sendMessage();
}

function addBotMessage(message){

    const chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `
    <div class="bot-message">
        🤖 ${message}
    </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage(){

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userMessage = input.value.trim();

    if(userMessage === ""){
        return;
    }

    chatBox.innerHTML += `
    <div class="user-message">
        👤 ${userMessage}
    </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    input.value = "";

    const msg = userMessage.toLowerCase();

    let botReply = "";

    // SERVICES

    if(
        msg.includes("service") ||
        msg.includes("services")
    ){

        botReply = `
        We provide:

        • AI Chatbots
        • AI Agents
        • Web Applications
        • Business Automation
        • Custom AI Solutions
        • Website Development
        `;
    }

    // CHATBOTS

    else if(
        msg.includes("chatbot") ||
        msg.includes("chatbots")
    ){

        botReply = `
        I build:

        • Website Chatbots
        • Customer Support Bots
        • FAQ Bots
        • Lead Generation Bots
        • AI Powered Assistants
        • Custom Business Chatbots
        `;
    }

    // AI AGENTS

    else if(
        msg.includes("agent") ||
        msg.includes("ai agent")
    ){

        botReply = `
        AI Agents can:

        • Answer customer questions
        • Automate tasks
        • Manage workflows
        • Process business operations
        • Work 24/7 without breaks
        `;
    }

    // WEB APPS

    else if(
        msg.includes("website") ||
        msg.includes("web app") ||
        msg.includes("web application")
    ){

        botReply = `
        We build:

        • Business Websites
        • Landing Pages
        • Dashboards
        • AI Web Applications
        • Custom Portals
        • Client Management Systems
        `;
    }

    // AUTOMATION

    else if(
        msg.includes("automation") ||
        msg.includes("automate")
    ){

        botReply = `
        Automation Services:

        • Business Automation
        • Workflow Automation
        • Customer Support Automation
        • Data Processing
        • AI Powered Workflows
        `;
    }

    // PRICING

    else if(
        msg.includes("price") ||
        msg.includes("pricing") ||
        msg.includes("cost")
    ){

        botReply = `
        Pricing depends on your project requirements.

        Small Projects:
        $50 - $200

        Medium Projects:
        $200 - $1000

        Advanced Solutions:
        Custom Quote

        Contact me on Fiverr for details.
        `;
    }

    // CYBER SECURITY

    else if(
        msg.includes("cyber") ||
        msg.includes("security")
    ){

        botReply = `
        I have worked on Cyber Security Assistant projects that help users learn security concepts and best practices.
        `;
    }

    // HEALTH AI

    else if(
        msg.includes("health") ||
        msg.includes("herbs") ||
        msg.includes("herbal")
    ){

        botReply = `
        I have developed Herbs & Health AI projects focused on educational health and herbal information systems.
        `;
    }

    // NATURE BOT

    else if(
        msg.includes("nature") ||
        msg.includes("wildlife")
    ){

        botReply = `
        I have also built Nature Information Bots that provide information about wildlife, plants and nature related topics.
        `;
    }

    // PORTFOLIO

    else if(
        msg.includes("portfolio") ||
        msg.includes("project") ||
        msg.includes("projects")
    ){

        botReply = `
        Previous Projects:

        🤖 Business AI Chatbot

        🔐 Cyber Security Assistant

        🌿 Herbs & Health AI

        🌍 Nature Information Bot
        `;
    }

    // CONTACT

    else if(
        msg.includes("contact") ||
        msg.includes("hire") ||
        msg.includes("fiverr")
    ){

        botReply = `
        You can hire me through Fiverr.

        Username:
        @intelligentapps

        Click the "Hire Me On Fiverr" button above.
        `;
    }

    // GREETING

    else if(
        msg.includes("hello") ||
        msg.includes("hi") ||
        msg.includes("salam") ||
        msg.includes("assalam")
    ){

        botReply = `
        Welcome to IntelligentApps.

        I can help you with:

        • AI Chatbots
        • AI Agents
        • Web Applications
        • Automation
        • Portfolio Information
        • Pricing
        `;
    }

    // DEFAULT

    else{

        botReply = `
        Thanks for your message.

        I specialize in:

        • AI Chatbots
        • AI Agents
        • Web Applications
        • Automation Solutions

        Ask me about services, projects, pricing or AI solutions.
        `;
    }

    chatBox.innerHTML += `
    <div class="bot-message" id="typing">
        ⏳ AI is typing...
    </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {

        const typing = document.getElementById("typing");

        if(typing){
            typing.remove();
        }

        addBotMessage(botReply);

    }, 1000);
}

// ENTER KEY SUPPORT

document.getElementById("user-input")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});

// WELCOME MESSAGE

window.onload = function(){

    const chatBox = document.getElementById("chat-box");

    chatBox.scrollTop = chatBox.scrollHeight;

};
