import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const updateMobile = () => {
      setIsMobile(mql.matches)
    }
    
    mql.addEventListener("change", updateMobile)
    
    // Defer initialization to avoid synchronous state-setting warnings
    const timer = setTimeout(updateMobile, 0)
    
    return () => {
      mql.removeEventListener("change", updateMobile)
      clearTimeout(timer)
    }
  }, [])

  return !!isMobile
}

