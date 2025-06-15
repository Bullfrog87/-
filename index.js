import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { OpenAI } from "openai";

config(); // 載入 .env

const app = express();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());
app.use(express.static(".")); // 提供 index.html

app.post("/generate", async (req, res) => {
  const topic = req.body.topic || "你的主題";
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // 改這裡就好
      messages: [
        {
          role: "system",
          content: "你是一位能針對任何主題產生深度開放問答題的老師。",
        },
        {
          role: "user",
          content: `請根據「${topic}」這個主題，產生 5 個開放式問題，適合討論與思辨，用繁體中文。`,
        },
      ],
    });

    res.json({ questions: completion.choices[0].message.content });
  } catch (err) {
    console.error("OpenAI error:", err);
    res.status(500).json({ error: "產生問題失敗。" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`伺服器正在運行 http://localhost:${PORT}`);
});
