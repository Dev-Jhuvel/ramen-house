import { useState } from "react";

export default function ImageHover({image, imageHover, alt}) {
  const [isHover, setIsHover] = useState(false);
  let img = isHover ? imageHover : image;
  return (
   <img
      src={img}
      className="size-full transition duration-500 ease-in-out rounded-2xl cursor-pointer"
      alt={alt}
      onMouseOver={()=>setIsHover(true)}
      onMouseOut={()=>setIsHover(false)}
      onClick={()=>setIsHover(!isHover)}
    />
  );
}
