import React,{useEffect,useState} from 'react'


export default function VideoModal({closeVideo}) {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeVideo(); 
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeVideo]);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className='videoModal'>
         <div
      style={{
        overflow: "hidden",
        position: "relative",
        cursor: "auto",
      }}
      onMouseMove={handleMouseMove}
    >
      <video
        src="/path/Cynergy-Showreel-Final.mp4"
        autoPlay
        onClick={closeVideo}
        loop
        controls
        style={{
          width: '100%',
          height:'100vh',
          objectFit: "cover",
        }}
        onLoadedMetadata={(e) => {
          e.target.volume = 0.25;
        }}
      />
     
    </div>
    </div>
  )
}
