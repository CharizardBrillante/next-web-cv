import { useSpring, UseSpringProps } from '@react-spring/web'
import { useEffect, useMemo } from 'react'

export const useMousePosition = (springProps?: UseSpringProps, springDeps?: readonly any[]) => {
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0, ...springProps }), springDeps)

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            api.start({ x: event.clientX, y: event.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return useMemo(() => ({x,y,}), [x, y])
}
