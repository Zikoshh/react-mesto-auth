import { useEffect, useRef } from "react";

function ImagePopup({ card, onClose }) {
  const popupRef = useRef();

  useEffect(() => {
    if (card) {
      document.addEventListener("keydown", handleEscClose);
    } else {
      document.removeEventListener("keydown", handleEscClose);
    }
  }, [card]);

  function handleOverlayClose(e) {
    if (e.target === popupRef.current) {
      onClose();
    }
  }

  function handleEscClose(e) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  return (
    <section
      ref={popupRef}
      className={`popup popup_type_full-image ${
        card ? "popup_opened_image" : ""
      }`}
      onMouseDown={handleOverlayClose}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="popup__image"
          src={`${card?.link}`}
          alt={`${card?.name}`}
        />
        <h2 className="popup__title popup__title_image">{`${card?.name}`}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
