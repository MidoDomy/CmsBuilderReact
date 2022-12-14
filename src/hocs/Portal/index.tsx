import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, to }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted
  ? createPortal(children, 
    document.querySelector(to))
  : null
}

export default Portal;
