import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/pages/components/Header/Header";

function Root() {
  const [imageSrc, setImageSrc] = useState(null);
  let fileInputRef = useRef();
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(null);

  function isChanged(index, value) {
    setActive(index);
    setCount(value);
  }

  useEffect(() => {
    const storedImage = localStorage.getItem("myImage");
    if (storedImage) {
      setImageSrc(storedImage);
    }
  }, []);

  function save() {
    const file = fileInputRef.current.files[0];
    if (file) {
      const src = URL.createObjectURL(file);
      setImageSrc(src);
      localStorage.setItem("myImage", src);
    }
  }

  return (
    <div className="main d-flex flex-column justify-content-center align-items-center">
      <div className="header">
        <Header />
      </div>
      <div className="d-flex flex-column align-start gap-2 p-4">
        <input type="file" ref={fileInputRef} className="btn btn-primary" />
        <h2 className="countOfPuzzles">Number of figures</h2>
        <div className="form d-flex flex-column justify-content-center gap-2">
          <div className="count  d-flex justify-content-center gap-2">
            {[9, 16, 25, 36, 49].map((num, index) => (
            <button
              key={index}
              onClick={() => isChanged(index, num)}
              className={`btn ${
                active === index ? "btn-success" : "btn-primary"
              }`}
            >
              {num}
            </button>
          ))}
          </div>
          <button className="btn btn-primary">Let's mix</button>
        </div>
      </div>
      <Outlet context={{ imageSrc, count }} />
    </div>
  );
}

export default Root;
