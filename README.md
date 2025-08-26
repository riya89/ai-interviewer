
# Hi, I'm Riya 👋

💻 Software Engineer | 🚀 Enthusiastic about Agentic AI  
I enjoy building projects with **React, TypeScript, Python, and AI frameworks**, focusing on how agents can be applied for real-world problem solving. 


# Project Title

🚀 AI Interviewer

AI Interviewer is a mock interview simulator powered by AI Agents (via Vapi-AI and Gemini API).
It allows users to create customizable interviews based on skills, job role, number of questions etc. An AI agent then conducts the interview in real-time, giving the user a real interview-like experience.

After the session, the system generates detailed feedback on performance, helping candidates improve and prepare for real-world interviews.

🔗 Live App: https://ai-interviewer-9z2hx2c2a-riya89s-projects.vercel.app/sign-in



## Features

- 📝 Customizable Interviews:
    Choose skills, role, difficulty, number of questions to tailor your interview preparation.

- 🤖 AI-Powered Interviewer:
    Uses Vapi-AI agents and Google Gemini API to simulate conversations like a real interviewer.

- 📊 Performance Feedback:
    Get AI-generated, structured feedback on answers, confidence, and areas for improvement.
    Review past interviews to track progress over time.

- 🔄 Retake Interviews Anytime:
    Revisit and retake customized interview scenarios as many times as needed.

- 🔐 User Authentication:
    Secure login with Firebase Authentication, saving personalized interview history.



## Tech Stack

**Client:** Next.js (TypeScript), React, Tailwind CSS

**Server:** Vapi-AI (AI Interview Agent), Google Gemini (LLM API), Flask (backend services)

**Deployment:** Vercel



## Run Locally

Clone the project

```bash
  git clone https://github.com/riya89/ai-interviewer.git
```

Go to the project directory

```bash
  cd ai-interviewer
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_FIREBASE_API_KEY`=your_firebase_key

`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`=your_firebase_auth_domain

`GEMINI_API_KEY`=your_gemini_key

`VAPI_API_KEY`=your_vapi_key
