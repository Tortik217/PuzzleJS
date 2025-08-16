import {useState, useEffect, useRef} from "react";
import {Outlet} from "react-router-dom";
import Header from "@/pages/components/Header/Header";

function Root() {
  const [imageSrc, setImageSrc] = useState(null);
  let fileInputRef = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedImage = localStorage.getItem("myImage");
    if (storedImage) {
      setImageSrc(storedImage);
    }
  }, []);

  function save() {
    localStorage.clear();
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
          <Header/>
        </div>
        <div className="d-flex flex-column align-start gap-2 p-4">
          <input type="file" ref={fileInputRef} className="btn btn-primary"/>
          <button onClick={save} className="btn btn-primary">Save</button>
          <h2 className="countOfPuzzles">Number of figures</h2>
          <div className="form d-flex justify-content-center gap-2">
            <button onClick={() => setCount(9)} className="btn btn-primary">9</button>
            <button onClick={() => setCount(16)} className="btn btn-primary">16</button>
            <button onClick={() => setCount(25)} className="btn btn-primary">25</button>
            <button onClick={() => setCount(36)} className="btn btn-primary">36</button>
            <button onClick={() => setCount(49)} className="btn btn-primary">49</button>
          </div>
        </div>
        <Outlet context={{imageSrc, count}}/>
      </div>
  );
}

export default Root;
