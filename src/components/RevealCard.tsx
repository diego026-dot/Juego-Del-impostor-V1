import { useState } from "react";

import { RevealCardProps } from "@/types/index";

export default function RevealCard({ player, word }: RevealCardProps) {
    const [revealed, setRevealed] = useState(false);

    if (!player) return null;

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div
                onMouseDown={() => setRevealed(true)}
                onMouseUp={() => setRevealed(false)}
                onMouseLeave={() => setRevealed(false)}
                onTouchStart={() => setRevealed(true)}
                onTouchEnd={() => setRevealed(false)}
                className={`w-64 h-96 rounded-2xl shadow-xl flex items-center justify-center text-center select-none transition-all duration-300 cursor-pointer
                ${revealed ? "bg-slate-800" : "bg-indigo-600"}`}
            >
                {!revealed ? (
                    <p className="text-white font-semibold text-lg">
                        Mantén presionado
                    </p>
                ) : (
                    <div>
                        <p className="text-sm text-slate-400 mb-2">
                            Tu carta
                        </p>

                        {player.role === "impostor" ? (
                            <p className="text-red-400 text-2xl font-bold">
                                😈 IMPOSTOR
                            </p>
                        ) : (
                            <p className="text-emerald-400 text-2xl font-bold">
                                {word}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
