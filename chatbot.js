const predefinedQA = {
    "what products do you sell": "We sell original Jenbacher Gas Engine spare parts.",
    "where are you located": "We are based in the UAE and ship worldwide.",
    "how to contact you": "You can contact us via WhatsApp by clicking Whatsapp icon on bottom of any page or from contact page, or Call at +971 56 624 0969, or you can reach us via our Email: info@MegaSolutionsUAE.com",
    "do you offer original jenbacher parts": "Yes, all our parts are 100% original and authentic.",
  };
  
  function createChatUI() {
    const chatBtn = document.createElement("div");
    chatBtn.id = "chat-bubble";
    chatBtn.innerHTML = "💬";
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
  
