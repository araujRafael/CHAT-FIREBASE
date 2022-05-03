import React, { SVGProps, useEffect, useState } from 'react';

// import { Container } from './styles';
type SVG_TYPE = SVGProps<SVGSVGElement>;
const LogOut: React.FC = ({ ...props }: SVG_TYPE) => {
  const [rest, setRest] = useState({})
  useEffect(() => {
    let currentObj: any = { ...props }
    for (let prop in currentObj) {
      let newKey = prop.replace("data-", '')
      currentObj[newKey] = currentObj[prop]
      delete currentObj[prop]
    }
    setRest(currentObj);
  }, [])

  return (
    <svg {...rest} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
  )
}

export default LogOut;