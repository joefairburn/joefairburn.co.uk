import React, { useCallback, useState } from "react"
import { useSpring, animated as a, config } from "react-spring"
import { Keyframes } from "react-spring/renderprops"

import { useMediaPredicate } from "react-media-hook"

function Modal(props) {
  const [modalHiddenState, setModalHiddenState] = useState(false)

  const biggerThan600 = useMediaPredicate("(min-width: 600px)")

  const modalBackgroundAnimation = useSpring({
    config: { duration: 200 },
    opacity: props.modalIsHidden ? 0 : 1,
    from: { opacity: 0 },
    reverse: modalHiddenState,
    onRest: () => {
      console.log("dsa")
      if (modalHiddenState === true) {
        setModalHiddenState(false)
        props.closeModal()
      }
    },
  })

  const modalAnimation = useSpring({
    config: { mass: 1, tension: 210, friction: 21 },
    top: props.modalIsHidden && biggerThan600 ? 2000 : 0,
    height: props.modalIsHidden && biggerThan600 ? "0%" : "90%",
    width: props.modalIsHidden && biggerThan600 ? "0%" : "70%",
    from: { top: 2000, height: "0%", width: "0%" },
    reverse: biggerThan600 && modalHiddenState,
  })

  const clickToClose = () => setModalHiddenState(true)

  return !props.modalIsHidden ? (
    <div className={"modal-container"}>
      <a.div className="modal" style={modalAnimation}>
        <div className="modal-header">
          <div className="modal-title-container">
            <h1 className="modal-title">{props.title}</h1>
          </div>
          <div className="modal-x-container">
            <div className="modal-x" onClick={clickToClose} />
          </div>
        </div>
        <div className="modal-body">{props.children}</div>
      </a.div>
      <a.div
        className={"modal-background"}
        style={modalBackgroundAnimation}
        onClick={clickToClose}
      />
    </div>
  ) : (
    <div></div>
  )
}

export default Modal
