import React, { useState, useEffect } from 'react';

export const Like: React.FC = () => {
    const [likes, setLikes] = useState<number>(0);
    useEffect(() => {
        const likesKept = localStorage.getItem("likes"); //cargar los likes desde localStorage al montar el componente
        if (likesKept) {
            setLikes(parseInt(likesKept, 10)); //base decimal del 0-9 :) por eso 10
        }
    }, [])
    const handleLike = () =>{
        const likesNow = likes+1;
        setLikes(likesNow);
        localStorage.setItem("likes", likesNow.toString());
    }
    return(
        <button
        onClick={handleLike}
        style={{
            fontSize: "1.5rem",
            border: "none",
            background: "transparent",
            cursor: "pointer"
        }}
        >
            ❤️ {likes}
        </button>
    );
};