"use client";

import { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched images:", data);
        setImages(data);
      })
      .catch((err) => console.error("Failed to load images:", err));
  }, []);

  return (
    <div className="p-4">
      {images.length === 0 ? (
        <p className="text-blue-500 text-center mt-10">Loading, one moment...</p>
      ) : (
        <div className="masonry">
          {images.map((item, index) => (
            <div
              key={index}
              className="masonry-item cursor-pointer shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              onClick={() => window.open(item.url, "_blank")}
            >
              <img src={item.image} alt={`Image ${index}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
