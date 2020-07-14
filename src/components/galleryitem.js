import React from "react";

function GalleryItem(props) {
  return (
    <div className="gallery-image-container" style={props.style}>
      <img className="gallery-image " src={props.image} alt={props.alt} />
    </div>
  );
}

export default GalleryItem;
