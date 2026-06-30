function sendMessage() {

    let input =
    document.getElementById("user-input");

    let chatBox =
    document.getElementById("chat-box");

    let userMessage = input.value;

    chatBox.innerHTML +=
    "<p><b>You:</b> " + userMessage + "</p>";

    let botReply =
    "Thank you for contacting IntelligentApps.";

    chatBox.innerHTML +=
    "<p><b>Bot:</b> " + botReply + "</p>";

    input.value = "";
}
