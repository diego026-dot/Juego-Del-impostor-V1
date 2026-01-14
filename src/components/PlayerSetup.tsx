import { useState } from "react";

export default function PlayerSetup({ setPlayers, players, onStart }) {

    const [input, setInput] = useState("")

    const addPlayer = () => {
        setPlayers(prev => [...prev, input.trim()]);
        setInput("")
    }

    return (
        <>

            <div className="flex gap-50">

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-center">👥 Jugadores</h2>

                    <div className="flex gap-5">

                        <input
                            type="text"
                            value={input}
                            className="bg-slate-700 rounded-xl p-4 text-sm text-slate-300 text-center w-75"
                            onChange={(e) => setInput(e.target.value)}
                        ></input>

                        <button
                            className="bg-slate-700 rounded-xl p-4 text-sm text-slate-300 text-center w-10"
                            onClick={() => addPlayer()}
                        >
                            +
                        </button >

                    </div>


                    <button
                        onClick={onStart}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-xl py-2 font-semibold"
                    >
                        Comenzar juego
                    </button>

                    <div className="text-center">
                        {players.map(s => (
                            <div
                                className="mt-5 uppercase font-bold bg-slate-700 w-full"
                                key={s}
                            >
                                {s}
                            </div>
                        ))}
                    </div>
                </div>

            </div>



        </>

    );
}