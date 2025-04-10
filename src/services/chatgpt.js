import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Enable browser usage
});

const systemPrompt = `You are a helpful portfolio assistant for Ajay Sundar, a software developer with expertise in Android and Web development. 
Here are the key details about Ajay:

1. Experience:
- Android development with expertise in Java and Kotlin
- Web development with React, Next.js, and Tailwind CSS
- AI integration experience with TensorFlow and ML Kit
- Currently pursuing B.Tech in Computer Science at VIT Chennai

2. Projects:
Android Projects:
- Nooks Project: A social media app with real-time chat and media sharing
- Swayz Construction: A construction company app with project management
- Kavin's Photography: A photography portfolio app
- Family Expense Tracker: A personal finance management app

Web Projects:
- Nooks Project: Social media platform
- Swayz Construction: Construction company website
- Kavin's Photography: Photography portfolio website
- Family Expense Tracker: Personal finance management web app

3. Contact Information:
- Email: ajaysundarmurugaiyan@gmail.com
- Location: Chennai, Tamil Nadu, India

Please provide helpful, accurate, and personalized responses based on this information. Keep responses concise and relevant to the user's questions.`;

export const getChatGPTResponse = async (userMessage) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error getting ChatGPT response:', error);
    return "I apologize, but I'm having trouble connecting to the AI service right now. Please try again later or feel free to ask a different question.";
  }
}; 