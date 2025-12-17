import { useState } from "react";

interface boxProps {
  x: number;
  setX: any;
  y: number;
  setY: any;
}

function Box(props: boxProps) {

  const [rgb, setRGB] = useState([255, 255, 255]);

  const style = { "margin": "0", "padding": "0", "height": "600px", "width": "600px", "border": "1px solid black", "backgroundColor": `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` };

  const handleMouse = (event: React.MouseEvent) => {
    event.preventDefault();
    const X = event.nativeEvent.offsetX;
    const Y = event.nativeEvent.offsetY;
    props.setX(X);
    props.setY(Y);
    setRGB([Math.round(X * 255 / 600), 0, Math.round(Y * 255 / 600)]);
  };

  return (
    <>
      <div style={style} onMouseMove={handleMouse} />
    </>
  );
}

export default Box;
