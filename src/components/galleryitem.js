import React, { useCallback, useState } from "react"

function GalleryItem(props) {
  return (
    <div>
      <img src={props.image} alt={props.alt} />
    </div>
  )
}

export default GalleryItem
