import { useEffect, useRef, useState } from 'react'

interface Props {
  distance?: string
  externalRef?: React.MutableRefObject<null> | null
  once?: boolean
}

export const useNearScreen = ({ distance = '100px', externalRef, once = true }: Props) => {
  const [isNearScreen, setShow] = useState(false)
  const elementRef = useRef(null)
  
  useEffect(() => {

    const element = externalRef ? externalRef.current : elementRef.current

    const onChange = (entries: any[], observer: any) => {
      const el = entries[0]
      
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    })
    element && observer.observe(element)

  }, [])
  return {
    isNearScreen,
    elementRef
  }
}
