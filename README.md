# Chat con OpenAI

Este proyecto es una simulación básica de un chat con inteligencia artificial usando la API de OpenAI. El frontend está hecho con HTML y JavaScript puro, y el backend con Node.js y Express.

## 📘 English version
[Click here to see English version](README.en.md)

---
## 🛠️ Requisitos

- Node.js (https://nodejs.org)

## 🚀 Instrucciones

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/openai-chat.git
```

2. Crea un archivo `.env` dentro de la carpeta `backend` con tu clave secreta de OpenAI:

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

3. Instala las dependencias del backend:

```bash
cd openai-chat/backend
npm install
```

4. Inicia el servidor:

```bash
npm start
```

5. Abre el archivo `frontend/index.html` en tu navegador para usar el chat.

## ⚠️ Seguridad

**No subas tu archivo `.env` a GitHub.** Ya está incluido en `.gitignore` para proteger tu clave secreta.

## 📁 Estructura

```
openai-chat/
├── backend/
│   ├── .env (no incluido)
│   ├── server.js
│   ├── package.json
│   └── .gitignore
├── frontend/
│   └── index.html
```
