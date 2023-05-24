import "./index.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ReactElement, cloneElement, useState } from "react";

const InputField = ({ className = "", children, icon }: Props) => {
  const [focus, setFocus] = useState(false);
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);

  const content = React.Children.map(children, (child: ReactElement) => {
    return cloneElement(child, { onFocus, onBlur });
  });

  return (
    <div className={`input-field ${focus ? "focus" : ""} ${className}`}>
      {icon && <FontAwesomeIcon className="m-r-5" icon={icon} />}
      {content}
    </div>
  );
};

type Props = {
  className?: string;
  children: React.ReactNode;
  icon?: IconProp;
};

export default InputField;
