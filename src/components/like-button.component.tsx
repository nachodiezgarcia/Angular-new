import { actions } from 'astro:actions';
import React, { useState, useEffect } from 'react';


export const Like: React.FC = () => {
    const [likes, setLikes] = useState<number>(0);

    useEffect(() => {
        //cargar los likes al montar el componente
        actions.getLikes().then((response) => {
            setLikes(response?.data?.like ?? 0);
        });
    }, [])
    const handleLike = async () =>{
        const results = await actions.addLikes();
        setLikes(results?.data?.like ?? 0);
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