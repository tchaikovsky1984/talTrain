import { useEffect, useState } from "react";

function GQL() {
  const [chara, setChar] = useState({});

  useEffect(() => {
    const query = `
      query {
        character(id: 1){
          id
          name
          image
        }
      }`;

    fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((res) => { console.log(res); return res.json(); })
      .then((data: any) => { setChar(data); console.log(chara); });
  }, [])

  if (!chara)
    return <h1>Could not return character</h1>;

  return (
    <div className="flex flex-col justify-evenly items-center">
      <h1>{(chara as any)["data"]["character"]["name"]}</h1>
      <img src={(chara as any)["data"]["character"]["image"]} alt=":(" />
    </div>
  );
}

export default GQL;
