import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalHelper = ({ closeModal, styles, children }) => {

    const closeBackground = e => {
        if (e.target.id === "modal") {
            closeModal()
        }
    }

    return (
        <div title="modal" id="modal" onClick={closeBackground} className="detailsModal">
            <div
                style={styles}
                className="detailsModal__container"
            >
                <div onClick={closeModal} className="detailsModal__close">
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                {children}
            </div>
        </div>
    );
};

export default ModalHelper;
