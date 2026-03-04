import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generate() {
  try {
    console.log("Generating image...");
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [
          {
            text: 'A stunning, high-resolution, photorealistic image of a caramel flan pudding dessert topped with a swirl of whipped cream and mini chocolate chips, sitting on a clean white plate. To the right, a bouquet of soft purple lilac flowers. The background is a smooth, soft pastel cream and warm caramel gradient. Soft natural lighting, shallow depth of field, elegant minimalist plating, dreamy luxury café aesthetic.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "3:4",
          imageSize: "1K"
        }
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true });
        }
        fs.writeFileSync(path.join(publicDir, 'hero.png'), buffer);
        console.log('Image generated and saved to public/hero.png');
        break;
      }
    }
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

generate();
