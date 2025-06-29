import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertChatMessageSchema, insertContactMessageSchema } from "@shared/schema";
import OpenAI from "openai";

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Chat with MohanBot
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: "Message is required" });
      }

      // Generate AI response about Mohankumar's portfolio
      const systemPrompt = `You are MohanBot, an AI assistant that knows everything about Mohankumar Palanisamy's professional journey. 

ABOUT MOHANKUMAR:
- Software Engineer at Ramco Systems (2022-Present)
- Freelance Developer (2020-2022)
- Computer Science Graduate (2020) with 7.22 CGPA
- Based in Chennai, Tamil Nadu, India

KEY PROJECTS:
1. IPO Data Pipeline: High-performance ETL pipeline with PySpark and Parquet, achieved 95% performance improvement
2. Quality Management Tool: Enterprise platform with Flask, REST API, and SQL for workflow automation
3. Real-time Review Dashboard: Interactive dashboard with React, Express, Kafka, and MongoDB for real-time data streaming

TECHNICAL SKILLS:
- Languages: Python, JavaScript, SQL
- Frontend: React.js, HTML5, CSS3, Tailwind CSS
- Backend: Node.js, Express.js, Flask
- Databases: MongoDB, SQL, PostgreSQL
- Big Data: PySpark, Kafka
- Tools: Docker, Git, REST APIs

AWARDS & RECOGNITION:
- Hi5 Award (2023) - Outstanding Performance at Ramco Systems
- Certificate of Appreciation (2024) - Excellence in Software Development
- Smart India Hackathon Finalist (2023)

CERTIFICATIONS:
- GIAC Python Coder (GUVI/IITM Research Foundation)
- Modern React Development (Udemy)
- Python Programming (SLA Institute)

Answer questions in a friendly, professional manner. Keep responses concise but informative. Use emojis sparingly. If asked about something not in this information, politely redirect to what you do know about Mohankumar.`;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        max_tokens: 300,
        temperature: 0.7,
      });

      const botResponse = completion.choices[0].message.content || "I'm sorry, I couldn't process that request.";

      // Save chat message to storage
      const chatMessage = await storage.saveChatMessage({
        message,
        response: botResponse
      });

      res.json({ response: botResponse });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Failed to process chat message" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ error: "Invalid contact form data" });
      }

      const contactMessage = await storage.saveContactMessage(result.data);
      
      res.json({ 
        message: "Contact message sent successfully!",
        id: contactMessage.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to send contact message" });
    }
  });

  // Get chat messages (for admin/debug purposes)
  app.get("/api/chat-history", async (req, res) => {
    try {
      const messages = await storage.getChatMessages();
      res.json(messages);
    } catch (error) {
      console.error("Chat history error:", error);
      res.status(500).json({ error: "Failed to fetch chat history" });
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Contact messages error:", error);
      res.status(500).json({ error: "Failed to fetch contact messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
