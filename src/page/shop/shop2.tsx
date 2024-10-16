import React, { useEffect } from "react";

const InstagramFeed: React.FC = () => {
  const posts = [
    "https://www.instagram.com/p/DAvvHzkNJGb/?img_index=1",
    "https://www.instagram.com/p/DAYmHknNaGI/"
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {posts.map((link, index) => (
        <blockquote
          key={index}
          className="instagram-media"
          data-instgrm-permalink={link}
          data-instgrm-version="14"
          style={{ width: "100%", maxWidth: "540px" }}
        >
          <a href={link} target="_blank" rel="noopener noreferrer"></a>
        </blockquote>
      ))}
    </div>
  );
};

export default InstagramFeed;
