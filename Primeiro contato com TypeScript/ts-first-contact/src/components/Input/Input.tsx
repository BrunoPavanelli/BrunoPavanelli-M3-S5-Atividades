import { InputHTMLAttributes } from "react";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    label?: string;
}

const Input = ({ label, placeholder, ...rest}: iInputProps) => {
  return (
    <div>
        {label && <label>{label}</label>}
        <input type="text" placeholder={placeholder}/>
    </div>
  )
}

export default Input