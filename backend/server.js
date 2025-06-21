import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: message },
          {
            role: "system",
            content: "Eres un asistente experto en programación. Siempre que incluyas código, utiliza bloques de código Markdown con triple backtick (```), e indica el lenguaje (ej. ```js, ```html). Asegúrate de que las respuestas sean claras, explicadas y con formato legible."
        }],
      }),
    });

    const data = await response.json();
    res.json(data.choices[0].message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al conectarse con OpenAI" });
  }
});

app.listen(3500, () => console.log("Servidor corriendo en http://localhost:3500"));
