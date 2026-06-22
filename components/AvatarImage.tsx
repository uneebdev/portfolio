"use client";

import { useState } from "react";
import { User } from "lucide-react";

export default function AvatarImage() {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <span className="w-full h-full flex items-center justify-center">
        <User className="w-9 h-9 text-teal" strokeWidth={1.5} />
      </span>
    );
  }

  return (
    <img
      src="/avatar.png"
      alt="Uneeb Ahmed"
      className="w-full h-full object-cover"
      onError={() => setErrored(true)}
    />
  );
}
