# AI Code Review App

A MERN-based web app that uses Google Gemini AI to review your code.  
Write code in the left editor, click **Review**, and get instant, detailed feedback!

---

## Features

- Live code editor with syntax highlighting
- AI-powered code review and suggestions
- Shimmer loading UI for smooth experience
- Responsive design for desktop, tablet, and mobile
- Built with React (frontend) and Express (backend)
- Secure API key management with `.env`

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-code-review-app.git
cd ai-code-review-app
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

- Create a `.env` file in the `Backend` folder:
  ```
  GOOGLE_GEMINI_KEY=your_google_gemini_api_key
  ```
- Start the backend server:
  ```bash
  npm start
  ```
  The backend runs on [http://localhost:3000](http://localhost:3000).

### 3. Frontend Setup

```bash
cd ../Frontend
npm install
```

- Create a `.env` file in the `Frontend` folder:
  ```
  VITE_API_URL=http://localhost:3000/api/getResponse
  ```
- Start the frontend server:
  ```bash
  npm run dev
  ```
  The frontend runs on [http://localhost:5173](http://localhost:5173).

---

## Usage

1. Write or paste your code in the left editor.
2. Click the **Review** button.
3. View the AI-generated review and suggestions on the right.

---

## Screenshot

![App Screenshot](./assets/screenshot.png)

---

## Tech Stack

- **Frontend:** React, react-simple-code-editor, PrismJS, react-markdown, highlight.js, axios, Vite
- **Backend:** Node.js, Express, @google/genai, dotenv, cors

---

## Environment Variables

- **Backend:**  
  `GOOGLE_GEMINI_KEY` — Your Google Gemini API key

- **Frontend:**  
  `VITE_API_URL` — Your backend API endpoint

---

## Responsive Design

Works seamlessly on desktop, tablet, and mobile devices.

---
