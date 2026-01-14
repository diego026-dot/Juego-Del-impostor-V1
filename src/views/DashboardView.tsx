import PlayerSetup from "@/components/PlayerSetup";
import RevealCard from "@/components/RevealCard";
import { useState } from "react";
import { items } from "@/types";

export default function App() {
  const [phase, setPhase] = useState("setup");
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [word, setWord] = useState("");
  const [playersRoles, setPlayersRoles] = useState([]);



  const resetGame = () => {
    setPhase("setup");
    setCurrentPlayer(0);
    setWord("");
    setPlayersRoles([]);
  };

  const startGame = () => {
    if (players.length < 2) return;

    const randomWord = items[Math.floor(Math.random() * items.length)];
    const impostorIndex = Math.floor(Math.random() * players.length);

    const playersWithRoles = players.map((name, index) => ({
      name,
      role: index === impostorIndex ? "impostor" : "civil",
    }));

    setWord(randomWord);
    setPlayersRoles(playersWithRoles);
    setCurrentPlayer(0);
    setPhase("reveal");
  };

  const nextPlayer = () => {
    setCurrentPlayer(prev => {
      if (prev + 1 >= players.length) {
        setPhase("discussion");
        return prev;
      }
      return prev + 1;
    });
  };

  return (
    <div className="min-h-screen w-full flex justify-center bg-slate-900 text-white pt-8">
      <div className="w-full max-w-md h-[90vh] mx-auto rounded-3xl overflow-hidden bg-slate-900">


        {/* TARJETA */}
        <div className="flex items-center justify-center">
          {phase === "reveal" && (
            <RevealCard
              player={playersRoles[currentPlayer]}
              word={word}
            />
          )}
        </div>

        {/* PANEL */}
        <div className="bg-slate-850 rounded-xl p-4 sm:p-6">
          {phase === "setup" && (
            <PlayerSetup
              setPlayers={setPlayers}
              players={players}
              onStart={startGame}
            />
          )}

          {phase === "reveal" && (
            <div className="space-y-4">
              <p className="text-center text-slate-400">
                Jugador {currentPlayer + 1} de {playersRoles.length}
              </p>

              <p className="text-center text-2xl font-bold">
                {playersRoles[currentPlayer]?.name}
              </p>

              <button
                onClick={nextPlayer}
                className="w-full py-3 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-xl"
              >
                Siguiente jugador
              </button>
            </div>
          )}

          {phase === "discussion" && (
            <div className="space-y-4">
              <p className="text-center text-2xl font-semibold">
                🗣️ ¡Discusión!
              </p>

              <button
                onClick={resetGame}
                className="w-full py-3 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-xl"
              >
                Reiniciar juego
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}
