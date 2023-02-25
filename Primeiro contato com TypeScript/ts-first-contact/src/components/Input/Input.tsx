import { InputHTMLAttributes } from "react";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    label?: string;
    type: string
    func: (value: string) => void
}

const Input = ({ label, placeholder, type, func, ...rest}: iInputProps) => {
  return (
    <div className="inputs">
        {label && <label>{label}</label>}
        <input type={type} placeholder={placeholder} onChange={(e) => func(e.target.value)}/>
    </div>
  )
}

export default Input