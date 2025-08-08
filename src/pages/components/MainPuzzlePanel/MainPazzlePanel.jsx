import { useOutletContext } from "react-router-dom";

export default function MainPuzzlePanel() {
  const { imageSrc } = useOutletContext();

  return (
    <div>
      <h2 style={{textAlign: "center"}}>Main Puzzle Panel</h2>
      {imageSrc && <img src={imageSrc} alt="From Root" width="800" />}
    </div>
  );
}
