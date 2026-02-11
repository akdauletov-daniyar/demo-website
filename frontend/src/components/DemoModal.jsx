export default function DemoModal({ open, onClose, children }) {
    return (
        <div className={`modal-overlay${open ? ' open' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>
                {children}
            </div>
        </div>
    );
}
