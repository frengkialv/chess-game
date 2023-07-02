import { useEffect, useState } from "react";
import "./App.css";
import Outside from "./components/outside";
import { gameSubject, initGame, resetGame } from "./Game";
import Board from "./Board";

function App() {
  const [boards, setBoards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showLayerNewGame, setShowLayerNewGame] = useState(false);
  const [result, setResult] = useState();
  const [turn, setTurn] = useState("w");

  useEffect(() => {
    initGame();
    const subscribe = gameSubject.subscribe((game) => {
      setBoards(game.board);
      setIsGameOver(game.isGameOver);
      setTurn(game.turn);
      setResult(game.result);
    });

    return () => subscribe.unsubscribe();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#312e2b] text-justify">
      {isGameOver && (
        <div className="relative z-10">
          <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-50">
            <div className="flex h-full w-full flex-col content-center items-center justify-center">
              <h2 className="p-2.5 font-sans text-7xl text-white">GAME OVER</h2>
              <h2 className="p-2.5 font-sans text-3xl text-white">{result}</h2>
              <button
                className="mt-3 flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-md border border-gray-300 bg-[#ebecd0] px-4 py-3 font-medium text-[#375619]"
                onClick={() => resetGame()}
              >
                New Game
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="popover__wrapper mb-1">
          <button
            className="popover__title w-fit cursor-pointer gap-2 whitespace-nowrap rounded-md border border-gray-300 bg-[#ebecd0] px-4 py-1 font-medium text-[#273d11]"
            onClick={() => setShowLayerNewGame(true)}
          >
            New Game
          </button>
          {showLayerNewGame && (
            <Outside onClick={() => setShowLayerNewGame(false)}>
              <div className="popover__content mt-8 rounded">
                <p className="popover__message text-white">Start a new game?</p>
                <div className="mt-2 flex justify-center gap-x-2">
                  <button
                    className="rounded-md bg-[#494745] px-4 py-1 font-medium text-white"
                    onClick={() => setShowLayerNewGame(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="rounded-md bg-[#92c15a] px-4 py-1 font-medium text-white"
                    onClick={() => {
                      resetGame();
                      setShowLayerNewGame(false);
                    }}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </Outside>
          )}
        </div>

        <div className={`${isGameOver && "blur-sm"} h-[600px] w-[600px]`}>
          <Board boards={boards} />
        </div>

        <div className="text-end text-2xl text-white">
          {turn === "w" ? "White" : "Black"} Turn
        </div>
      </div>
    </div>
  );
}

export default App;
