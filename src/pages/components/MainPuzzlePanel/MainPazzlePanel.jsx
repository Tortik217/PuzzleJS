import {useOutletContext} from "react-router-dom";
import "./MainPuzzlePanel.css";

export default function MainPuzzlePanel() {

  const {count, imageSrc} = useOutletContext();
  let gridSize = Math.sqrt(Number(count));

  return (
      <div className="puzzles_wrapper d-flex flex-column gap-3">
        <h2 style={{textAlign: "center"}}>Main Puzzle Panel</h2>
        <div className="cards">
          
        </div>
        <div className="puzzles_inner" style={{gridTemplateColumns: `repeat(${gridSize}, 1fr)`}}>
          {Array.from({length: Number(count)}).map((_, i) => {

            let row = Math.floor(i / gridSize);
            let col = i % gridSize;
            const bgPosX = (col / (gridSize - 1)) * 100;
            const bgPosY = (row / (gridSize - 1)) * 100;

            return (
                <div
                    key={i}
                    className="puzzle_cell"
                    style={{
                      backgroundImage: `url(${imageSrc})`,
                      backgroundPosition: `${bgPosX}% ${bgPosY}%`,
                      backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                    }}
                >

                </div>
            )

          })}
        </div>
      </div>
  );
}
