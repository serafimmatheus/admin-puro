import { InputHTMLAttributes } from "react";

interface AuthInputIProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeHolder: string;
  valor: any;
  onChange: (e: any) => void;
}

export default function AunthInput({
  label,
  valor,
  placeHolder,
  onChange,
  ...rest
}: AuthInputIProps) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeHolder}
        value={valor}
        {...rest}
      />
    </div>
  );
}
