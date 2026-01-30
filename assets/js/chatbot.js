const predefinedQA = {
    "do you ship to my country": "Yes! We ship globally from the UAE to Russia, Europe, the USA, Africa, and Asia.",
    "jenbacher series you support": "We specialize in original parts for Jenbacher Type 3, 4, and 6 series engines.",
    "how to get a quote": "Please send your part numbers to info@MegaSolutionsUAE.com or click the WhatsApp icon for an instant response.",
    "are parts genuine": "We only supply 100% original OEM and Genuine Jenbacher components."
};
  
  function createChatUI() {
    const chatBtn = document.createElement("div");
    chatBtn.id = "chat-bubble";
    chatBtn.innerHTML = "💡";
    document.body.appendChild(chatBtn);
  
    const chatBox = document.createElement("div");
    chatBox.id = "chat-box";
    chatBox.innerHTML = `
      <div id="chat-header">Ask a Question <span id="chat-close">×</span></div>
      <div id="chat-messages"></div>
      <div id="chat-quick-questions"></div>
      <input type="text" id="chat-input" placeholder="Type your question..." />
    `;
    document.body.appendChild(chatBox);
  
    document.getElementById("chat-bubble").onclick = () => {
      chatBox.style.display = "block";
      chatBtn.style.display = "none";
      loadQuickQuestions();
    };
  
    document.getElementById("chat-close").onclick = () => {
      chatBox.style.display = "none";
      chatBtn.style.display = "block";
    };
  
    document.getElementById("chat-input").addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const input = e.target.value.trim().toLowerCase();
        if (input) handleUserInput(input);
        e.target.value = "";
      }
    });
  }
  
  function handleUserInput(input) {
    addMessage("You", input);
    const response = predefinedQA[input] || "Sorry, I don't understand that yet.";
    setTimeout(() => {
      addMessage("Bot", response);
    }, 500);
  }
  
  function addMessage(sender, message) {
    const chatMessages = document.getElementById("chat-messages");
    const msg = document.createElement("div");
    msg.className = sender === "Bot" ? "bot-msg" : "user-msg";
    msg.textContent = `${message}`;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  function loadQuickQuestions() {
    const quickDiv = document.getElementById("chat-quick-questions");
    quickDiv.innerHTML = "";
    Object.keys(predefinedQA).forEach(question => {
      const btn = document.createElement("button");
      btn.className = "quick-question";
      btn.textContent = question;
      btn.onclick = () => handleUserInput(question);
      quickDiv.appendChild(btn);
    });
  }
  
  window.onload = createChatUI;
  
