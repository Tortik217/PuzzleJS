import { useOutletContext } from "react-router-dom";
import "./MainPuzzlePanel.css";

export default function MainPuzzlePanel() {
  const { imageSrc } = useOutletContext();

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Main Puzzle Panel</h2>
      {/* {imageSrc && <img src={imageSrc} alt="From Root" width="800" />} */}
      <div className="divs d-flex flex-column gap-2">
        <div className="icon icon1 border border-primary" />
        <div className="icon icon2 border border-primary" />
        <div className="icon icon3 border border-primary" />
        <div className="icon icon4 border border-primary" />
        <div className="icon icon5 border border-primary" />
        <div className="icon icon6 border border-primary" />
        <div className="icon icon7 border border-primary" />
      </div>
    </div>
  );
}
