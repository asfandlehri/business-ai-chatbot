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
        👤 ${userMessage}
    </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    input.value = "";

    let msg = userMessage.toLowerCase();
    let botReply = "";

    // SERVICES
    if(
        msg.includes("service") ||
        msg.includes("what do you do")
    ){
        botReply = `
        🚀 Our Services:

        • AI Chatbots
        • AI Agents
        • Business Automation
        • Website Development
        • Custom Web Applications
        • Lead Generation Bots
        • Customer Support Systems
        • API Integrations
        `;
    }

    // PRICING
    else if(
        msg.includes("pricing") ||
        msg.includes("price") ||
        msg.includes("cost") ||
        msg.includes("budget")
    ){
        botReply = `
        💰 Pricing depends on project requirements.

        Small Projects:
        $50 - $200

        Medium Projects:
        $200 - $1000

        Advanced AI Solutions:
        Custom Quote

        Contact me on Fiverr for an exact price.
        `;
    }

    // CHATBOTS
    else if(
        msg.includes("chatbot") ||
        msg.includes("chatbots")
    ){
        botReply = `
        🤖 We build:

        • Website Chatbots
        • Customer Support Bots
        • FAQ Bots
        • AI Assistants
        • Lead Generation Bots
        • GPT/Groq Powered Bots
        `;
    }

    // AI AGENTS
    else if(
        msg.includes("agent") ||
        msg.includes("ai agent")
    ){
        botReply = `
        🧠 AI Agents can:

        • Handle customer queries
        • Automate workflows
        • Process business tasks
        • Generate reports
        • Integrate with APIs
        • Work 24/7
        `;
    }

    // WEBSITE
    else if(
        msg.includes("website") ||
        msg.includes("web app")
    ){
        botReply = `
        🌐 Website Development Services:

        • Business Websites
        • Landing Pages
        • Portfolio Websites
        • AI Powered Websites
        • Custom Dashboards
        • Web Applications
        `;
    }

    // AUTOMATION
    else if(
        msg.includes("automation") ||
        msg.includes("automate")
    ){
        botReply = `
        ⚡ Business Automation:

        • Data Entry Automation
        • Customer Support Automation
        • Lead Management
        • Workflow Automation
        • AI Based Processes
        `;
    }

    // CYBER SECURITY
    else if(
        msg.includes("cyber") ||
        msg.includes("security")
    ){
        botReply = `
        🔐 Cyber Security Solutions:

        • Security Awareness Bots
        • AI Security Assistants
        • Security Training Systems
        • Threat Information Systems
        `;
    }

    // HEALTH
    else if(
        msg.includes("health") ||
        msg.includes("herbs")
    ){
        botReply = `
        🌿 Health Information AI:

        • Herbal Information Systems
        • Health Knowledge Assistants
        • Educational Health Chatbots
        `;
    }

    // CONTACT
    else if(
        msg.includes("contact") ||
        msg.includes("hire") ||
        msg.includes("fiverr")
    ){
        botReply = `
        📞 You can hire me through Fiverr.

        Fiverr Username:
        @intelligentapps

        Click the green Fiverr button above.
        `;
    }

    // GREETINGS
    else if(
        msg.includes("hi") ||
        msg.includes("hello") ||
        msg.includes("assalam") ||
        msg.includes("salam")
    ){
        botReply = `
        👋 Welcome to IntelligentApps!

        I can help you with:

        • AI Chatbots
        • AI Agents
        • Websites
        • Automation
        • Pricing
        • Fiverr Contact
        `;
    }

    // DEFAULT
    else{
        botReply = `
        🤖 Thanks for your message.

        I specialize in:

        • AI Chatbots
        • AI Agents
        • Business Automation
        • Websites
        • Custom AI Solutions

        Ask me about services, pricing, projects or automation.
        `;
    }

    chatBox.innerHTML += `
    <div class="bot-message" id="typing">
        ⏳ AI is typing...
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
            🤖 ${botReply}
        </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 800);
}

document.getElementById("user-input")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});
