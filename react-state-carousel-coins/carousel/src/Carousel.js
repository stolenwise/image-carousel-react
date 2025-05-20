import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    if (currCardIdx === total - 1) {
      setCurrCardIdx(0);
    } else
    setCurrCardIdx(currCardIdx + 1);
  }

  // Decrements currCardIdx state by 1
  function goBackward() {
    if (currCardIdx === 0) {
      setCurrCardIdx(total - 1);
    } else {
      setCurrCardIdx(currCardIdx - 1);
    }
  }
  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main" style={{ position: "relative", width: "fit-content", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
          style={{
            visibility: currCardIdx === 0 ? "hidden" : "visible",
            fontSize: "2rem",
            cursor: "pointer"
          }}
        />
        
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        
        <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
          style={{
            visibility: currCardIdx === total - 1 ? "hidden" : "visible",
            fontSize: "2rem",
            cursor: "pointer"
          }}
        />
      </div>
    </div>
  );
  
}

export default Carousel;
