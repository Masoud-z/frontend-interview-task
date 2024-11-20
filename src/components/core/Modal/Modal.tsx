import { ReactNode, useEffect, useRef, MouseEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  closeOnOutsideClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = "",
  children,
  footer,
  closeOnOutsideClick = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Disable scrolling on the page when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function handleOutsideClick(e: MouseEvent) {
    if (
      closeOnOutsideClick &&
      modalRef.current &&
      e.target === modalRef.current
    ) {
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={handleOutsideClick}
    >
      <div className="relative w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex justify-between px-6 py-3 border-b border-solid border-black">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✖
          </button>
        </div>
        <div className="p-6">{children}</div>
        {footer && (
          <div className="p-6 mt-4 border-t border-solid border-black">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
