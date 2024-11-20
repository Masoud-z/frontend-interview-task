import { ReactNode } from "react";
import { ToastType } from "../../../core/dto/Toast";
import { CrossIcon, ExclamationIcon, TickIcon } from "../../../core/icons";
import useStore from "../../../store/useStore";

interface ToastProps {
  message: string;
  type: ToastType;
  id: number;
  index: number;
}

const typeStyles: Record<ToastType, string> = {
  success: "border-green-500",
  error: "border-red-500",
  warning: "border-yellow-500",
};

const typeIcon: Record<ToastType, ReactNode> = {
  success: <TickIcon />,
  error: <CrossIcon />,
  warning: <ExclamationIcon />,
};

const Toast: React.FC<ToastProps> = ({ message, type, id, index }) => {
  const removeToast = useStore((state) => state.removeToast);

  return (
    <div
      style={{ bottom: `${index * 7.2 + 2.2}rem` }}
      className={`sticky left-[73%] w-[26rem] max-w-[26rem] p-3 h-28 max-h-28 border-4 border-solid font-bold rounded-lg overflow-clip bg-white dark:bg-gray-800 ${typeStyles[type]}`}
    >
      <div className="flex justify-end">
        <button
          className="text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={() => removeToast(id)}
          aria-label="Close modal"
        >
          ✖
        </button>
      </div>
      <div className="flex justify-start items-start gap-2">
        {typeIcon[type]}
        <span className="max-w-[340px]">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
