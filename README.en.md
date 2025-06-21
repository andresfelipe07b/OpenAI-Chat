
# Chat with OpenAI

This project is a basic simulation of a chat with artificial intelligence using the OpenAI API. The frontend is built with pure HTML and JavaScript, and the backend with Node.js and Express.

## 🛠️ Requirements

- Node.js (https://nodejs.org)

## 🚀 Instructions

1. Clone this repository:

```bash
git clone https://github.com/andresfelipe07b/OpenAI-Chat.git
```

2. Create a `.env` file inside the `backend` folder with your OpenAI secret key:

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

3. Install the backend dependencies:

```bash
cd openai-chat/backend
npm install
```

4. Start the server:

```bash
npm start
```

5. Open the `frontend/index.html` file in your browser to use the chat.

## ⚠️ Security

**Do not upload your `.env` file to GitHub.** It's already included in `.gitignore` to protect your secret key.

## 📁 Structure

```
openai-chat/
├── backend/
│   ├── .env (not included)
│   ├── server.js
│   ├── package.json
│   └── .gitignore
├── frontend/
│   └── index.html
```
