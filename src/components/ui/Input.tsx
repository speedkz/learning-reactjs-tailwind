import { Fragment } from "react";
import * as Icon from "react-feather";

interface InputProps {
  className?: string;
  placeholder?: string;
  prependIcon?: string;
  appendIcon?: string;
  size?: number;
  bg?: string;
  onSubmit?: (value: string) => void;
}

const Input = ({
  className = "",
  placeholder,
  prependIcon,
  appendIcon,
  size = 16,
  bg = "bg-gray-100",
  onSubmit,
}: InputProps) => {
  const PrependIconComponent = prependIcon ? Icon[prependIcon] : Fragment;
  const AppendIconComponent = appendIcon ? Icon[appendIcon] : Fragment;
  const handleKeyDown = (e) => {
    if (e.code === "Enter" && onSubmit) onSubmit(e.target.value);
  };
  return (
    <div className={"relative block " + className}>
      {prependIcon && (
        <div className="absolute left-4 inset-y-0 flex items-center text-slate-500">
          <PrependIconComponent size={size} />
        </div>
      )}
      <input
        onKeyDown={(e) => handleKeyDown(e)}
        className={
          "px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm text-slate-500 w-full" +
          (!!prependIcon ? " pl-10" : "") +
          (!!appendIcon ? " pr-10" : "") +
          " " +
          bg
        }
        placeholder={placeholder}
      />
      {appendIcon && (
        <div className="absolute right-4 inset-y-0 flex items-center text-slate-500">
          <AppendIconComponent size={size} />
        </div>
      )}
    </div>
  );
};

export default Input;
