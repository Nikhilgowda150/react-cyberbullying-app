import React, { useState, useRef } from "react";
import { ChatGroq } from "@langchain/groq";

// Initialize the LLM
const llm = new ChatGroq({
  apiKey: "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",
  model: "mixtral-8x7b-32768",
  temperature: 0,
  maxTokens: undefined,
  maxRetries: 2,
});

function HeroSection() {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi, I'm Billy, your Cyberbullying Support Chatbot. How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  // For controlling the position of the chatbox
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const isDragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  // The system message that is not shown in the UI but is sent to the model
  const systemInstructions = [
    { role: "system", content: "You are a CyberBullying Chatbot. Respond only to queries related to cyberbullying and mention the laws. Your name is Billy." }
  ];

  // Function to toggle the chat box
  const toggleChatBox = () => {
    setIsChatBoxOpen((prev) => !prev);
  };

  // Handle user input submission
  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add the user's message to the chat
    const newMessages = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);

    // Send the user's input along with system instructions to the LLM
    try {
      // Combine the system instructions and user messages
      const fullMessages = [...systemInstructions, ...newMessages];
      const aiMsg = await llm.invoke(fullMessages);

      // Add the AI response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: aiMsg.content },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Sorry, I couldn't process your request. Please try again." },
      ]);
    }

    // Clear the input field
    setUserInput("");
  };

  // Mouse event handlers to drag the chatbox
  const onMouseDown = (e) => {
    isDragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const onMouseMove = (e) => {
    if (isDragging.current) {
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  // Attach the mouse event listeners for drag functionality
  React.useEffect(() => {
    if (isChatBoxOpen) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
    }
  }, [isChatBoxOpen]);

  return (
    <>
      <section id="hero" className="bg-light py-5 text-center">
        <div className="container">
          <img
            src="https://logodix.com/logo/1743904.png"
            alt="Cyberbullying Illustration"
            className="img-fluid mb-4"
            style={{ maxWidth: "200px", height: "auto" }}
          />
          <h2 className="display-4">Your 24/7 Cyberbullying Support Chatbot</h2>
          <p className="lead">
            Here to help you navigate and report cyberbullying incidents.
          </p>
          <button
            id="chat-button"
            className="btn btn-primary btn-lg mt-3"
            onClick={toggleChatBox}
          >
            Chat Now
          </button>
        </div>
      </section>

      {/* Chat Box */}
      {isChatBoxOpen && (
        <div
          id="chat-box"
          className="chat-box"
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          onMouseDown={onMouseDown}  // Enable dragging
        >
          <div className="chat-header">
            <span>Support Bot</span>
            <button onClick={toggleChatBox} className="close-chat">
              &times;
            </button>
          </div>
          <div className="chat-content">
            {messages.map((msg, index) => (
              <p key={index} className={msg.role === "user" ? "user-message" : "bot-message"}>
                {msg.role === "user" ? "You: " : "Bot: "}
                {msg.content}
              </p>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button onClick={handleSendMessage} className="send-button">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroSection;
