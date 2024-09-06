let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById("chatContainer")
let userInputEl = document.getElementById("userInput")
let sendMsgBtnEl = document.getElementById("sendMsgBtn")

function sendMsg() {
    let sendmsgEl = userInputEl.value

    let msgEl = document.createElement("div")
    msgEl.classList.add("msg-to-chatbot-container")
    chatContainerEl.appendChild(msgEl)

    let userMsgEl = document.createElement("span")
    userMsgEl.textContent = sendmsgEl
    userMsgEl.classList.add("msg-to-chatbot")
    msgEl.appendChild(userMsgEl)

    userInputEl.value = ""
    getReplyFromChatbot()
}

function getReplyFromChatbot() {
    let lenghtOfChatbot = chatbotMsgList.length
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * lenghtOfChatbot) - 1]

    let MsgEl = document.createElement("div")
    MsgEl.classList.add("msg-from-chatbot-container")
    chatContainerEl.appendChild(MsgEl)

    let chatMsgEl = document.createElement("span")
    chatMsgEl.textContent = chatbotMsg
    chatMsgEl.classList.add("msg-from-chatbot")
    MsgEl.appendChild(chatMsgEl)
}
