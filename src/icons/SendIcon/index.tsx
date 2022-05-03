import React, { SVGProps, useEffect, useState } from "react";

// import { Container } from './styles';

type SVG_TYPE = SVGProps<SVGSVGElement>;
const SendIcon: React.FC = ({ ...props }: SVG_TYPE) => {
  const [rest, setRest] = useState({});
  useEffect(() => {
    let currentObj: any = { ...props };
    for (let prop in currentObj) {
      let newKey: any = prop.replace("data-", "");
      currentObj[newKey] = currentObj[prop];
      delete currentObj[prop];
    }
    setRest(currentObj);
  }, []);
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
  );
};

export default SendIcon;
