import { useState } from "react";

function Modal() {
  const [show, setShow] = useState(true);

  const modalClick = (e: React.MouseEvent) => {
    setShow(false);
  }

  const block = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("blocked");
  }

  if (show) {
    return (
      <div className="bg-[#101f2a] w-full h-[900px] flex justify-center items-center" onClick={modalClick}>
        <div className="bg-[#aaaa88] w-[400px] h-[200px] border-black border-2" onClick={block}></div>
      </div>
    );
  }
  return (
    <div className="bg-[#101f2a] w-full h-[900px] flex justify-center items-center" onClick={modalClick}>
    </div>
  );
}

export default Modal;
