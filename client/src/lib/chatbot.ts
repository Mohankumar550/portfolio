export const chatbotResponses = {
  projects: "I've worked on several exciting projects! My key projects include an IPO Data Pipeline with PySpark (95% performance improvement), a Quality Management Tool with Flask, and a Real-time Review Dashboard using React and Kafka. Which one interests you most?",
  
  awards: "I've been recognized with several awards: Hi5 Award for outstanding performance, Certificate of Appreciation for excellence in software development, and I was also a Smart India Hackathon Finalist. I'm also certified as a GIAC Python Coder from GUVI/IITM!",
  
  skills: "My technical skills span across full-stack development! I specialize in Python, React.js, Node.js, PySpark, Kafka, MongoDB, Docker, and Flask. I love working with data pipelines and real-time systems. What specific technology would you like to know about?",
  
  experience: "I have 4+ years of experience in software development. Started as a freelance developer (2020-2022) working on Python automation, then joined Ramco Systems in 2022 where I've been building enterprise-scale solutions and winning awards for my contributions!",
  
  education: "I graduated with a B.Tech in Computer Science with 7.22 CGPA in 2020. I've also completed certifications in Modern React (Udemy), GIAC Python Coder (GUVI/IITM), and Python Programming (SLA Institute).",
  
  default: "That's a great question! I'm here to help you learn about Mohankumar's journey as a software engineer. You can ask me about his projects, awards, skills, experience, or education. What would you like to know more about?"
};

export function generateLocalResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('project')) {
    return chatbotResponses.projects;
  } else if (lowerMessage.includes('award')) {
    return chatbotResponses.awards;
  } else if (lowerMessage.includes('skill') || lowerMessage.includes('tech')) {
    return chatbotResponses.skills;
  } else if (lowerMessage.includes('experience')) {
    return chatbotResponses.experience;
  } else if (lowerMessage.includes('education')) {
    return chatbotResponses.education;
  } else {
    return chatbotResponses.default;
  }
}
