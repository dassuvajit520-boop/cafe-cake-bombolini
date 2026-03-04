import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion } from 'motion/react';

export default function HeroImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateImage = async () => {
      // Check if we already generated and cached the image
      const cachedImage = localStorage.getItem('heroImage_v2_bomboloni');
      if (cachedImage) {
        setImageUrl(cachedImage);
        setLoading(false);
        return;
      }

      try {
        // Initialize Gemini API
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        
        // Generate the image
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'A stunning, high-resolution, photorealistic image of a freshly made Italian bomboloni dusted with powdered sugar and filled with rich cream, sitting on a clean white plate. To the right, a bouquet of soft purple lilac flowers. The background is a smooth, soft pastel cream and warm caramel gradient. Soft natural lighting, shallow depth of field, elegant minimalist plating, dreamy luxury café aesthetic.',
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "3:4",
            }
          }
        });

        // Extract the image from the response
        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            const url = `data:image/png;base64,${base64Data}`;
            setImageUrl(url);
            
            // Cache the image so we don't regenerate it on every reload
            try {
              localStorage.setItem('heroImage_v2_bomboloni', url);
            } catch (e) {
              console.warn('Could not save image to localStorage (might be too large)');
            }
            break;
          }
        }
      } catch (error) {
        console.error('Error generating image:', error);
        // Fallback image if generation fails
        setImageUrl('https://images.unsplash.com/photo-1626245353164-16a760595dce?q=80&w=1000&auto=format&fit=crop');
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, []);

  if (loading) {
    return (
      <div className="relative z-10 w-full h-full bg-brown-dark/5 animate-pulse rounded-[2rem] flex flex-col items-center justify-center border border-brown-dark/10 shadow-inner">
        <div className="w-12 h-12 border-4 border-caramel border-t-transparent rounded-full animate-spin mb-4"></div>
        <span className="text-brown-dark/60 font-medium font-serif italic">Baking fresh...</span>
      </div>
    );
  }

  return (
    <motion.img 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      src={imageUrl || 'https://images.unsplash.com/photo-1626245353164-16a760595dce?q=80&w=1000&auto=format&fit=crop'} 
      alt="Freshly made Italian bomboloni" 
      className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl shadow-brown-dark/10"
      style={{ objectPosition: 'center' }}
      referrerPolicy="no-referrer"
    />
  );
}
