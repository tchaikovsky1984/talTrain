import { useEffect } from "react";

function Analytics() {
  useEffect(() => {
    const logClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      console.log(`[ANAL] Clicked on ${target.tagName} with class ${target.classList} and id ${target.id}`);
    }

    document.addEventListener("click", logClick);

    const rmEL = () => {
      document.removeEventListener("click", logClick);
    }

    return rmEL;
  }, []);

  return (<h1>Analytics Page</h1>);
}

export default Analytics;
