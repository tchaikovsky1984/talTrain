import { useState } from "react";

function News() {
  const [blown, setBlown] = useState(false);

  if (blown) {
    throw new Error();
  }

  const explode = (e: React.MouseEvent) => {
    setBlown(true);
  }

  return (
    <div className="flex-col justify-center items-start flex border-2 border-black h-[200px] w-[200px]">
      <h1>News</h1>
      <button className="border-2" onClick={explode}>Explode me</button>
    </div>
  );
}

export default News;
