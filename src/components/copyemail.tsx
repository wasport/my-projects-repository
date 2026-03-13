'use client'; 

import { useState } from 'react';

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = "guasta.lucho@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      // Reset the "Copied!" message after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <button 
      onClick={handleCopy}
      className="hover:text-blue-400 transition-colors uppercase relative"
      title="Click to copy email"
    >
      {copied ? (
        <span className="text-green-400 animate-pulse">Copied!</span>
      ) : (
        "Gmail"
      )}
    </button>
  );
}