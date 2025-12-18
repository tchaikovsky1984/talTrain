function Hijacker() {
  const onRC = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("RightClicked!");
  };

  return (
    <div className="h-[200px] w-[600px] bg-[#aaaaaa] border-black border-2" onContextMenu={onRC}>
    </div>
  );
}

export default Hijacker;
