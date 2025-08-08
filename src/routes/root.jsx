import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/pages/components/Header/Header";

export default function Root() {
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef();

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
        <Header />
      </div>
    <div className="d-flex flex-column align-start gap-2 p-4">
      <input type="file" ref={fileInputRef} className="btn btn-primary" />
      <button onClick={save} className="btn btn-primary">Save</button>
    </div>
      <Outlet context={{ imageSrc }} />
    </div>
  );
}
