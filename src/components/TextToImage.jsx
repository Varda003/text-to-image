import React, { useState } from "react";

function TextToImage() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt) return;

    setLoading(true);
    setImage(null);

    try {
      const response = await fetch("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0", {
        method: "POST",
        headers: {
         Authorization: `Bearer ${process.env.REACT_APP_HUGGINGFACE_API_KEY}`,

          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl);
    } catch (err) {
      alert("Image generation failed. Please check your prompt or token.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 max-w-xl mx-auto text-center">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt like 'a flying robot in sunset'"
        className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
      />
      <button
        onClick={generateImage}
        disabled={loading || !prompt}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {image && (
        <div className="mt-6">
          <img src={image} alt="Generated" className="rounded-lg shadow-lg" />
         <a
  href={image}
  download="generated.png"
  className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-2"
>
  Download Image
</a>

        </div>
      )}
    </div>
  );
}

export default TextToImage;
