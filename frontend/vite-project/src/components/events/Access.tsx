
function Access() {
  const handleParent = () => {
    console.log("Access Denied");
  };

  const handleChild = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Access Granted");
  }

  return (
    <div onClick={handleParent} className="h-[200px] w-[400px] border-2 border-black">
      <button onClick={handleChild} className="h-[40px] w-[40px] border-2 border-black text-[20px] font-extrabold font-[Helvetica]"> Click me </button>
    </div>
  );
}

export default Access;
