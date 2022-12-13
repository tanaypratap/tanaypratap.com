import { useState, useEffect } from "react";

export default function Custom404() {
    const [text, setText] = useState("Loading...")
    
    useEffect(() => {
        setTimeout(() => {
            setText("404 | Page Not Found");
        }, 2000)
    }, [])

    return <div className="loading-content">
        <h1>{text}</h1>
    </div>
  }