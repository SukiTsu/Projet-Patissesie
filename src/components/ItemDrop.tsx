import React, { useEffect, useState } from "react";
import "../assets/style/global/styleMouvement.css"

type Leaf = {
    id: number;
    left: number;
    top: number;
};

const ItemDrop: React.FC = () => {
    const [leaves, setLeaves] = useState<Leaf[]>([]);

    useEffect(() => {
        const createLeaf = () => {
            const id = Date.now();
            const newLeaf: Leaf = {
                id,
                left: Math.random() * window.innerWidth, // Position horizontale aléatoire
                top: window.scrollY, // Position verticale basée sur le scroll actuel
            };

            setLeaves((prevLeaves) => [...prevLeaves, newLeaf]);

            // Supprimer la feuille après 5s
            setTimeout(() => {
                setLeaves((prevLeaves) => prevLeaves.filter((leaf) => leaf.id !== id));
            }, 5000);
        };

        const interval = setInterval(createLeaf, 1000); // Une feuille toutes les secondes

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="seasonal">
            {leaves.map((leaf) => (
                <div
                    key={leaf.id}
                    className="itemDrop"
                    style={{
                        left: `${leaf.left}px`,
                        top: `${leaf.top}px`,
                    }}
                />
            ))}
        </div>
    );
};

export default ItemDrop;
