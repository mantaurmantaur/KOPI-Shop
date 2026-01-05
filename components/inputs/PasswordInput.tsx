import { useState } from "react";
interface PasswordInputProps {
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  className = "",
  placeholder = "Password",
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return(
    
  )
};
