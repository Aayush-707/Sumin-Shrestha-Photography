import { useState, useEffect } from 'react'

export const EventsElement = ({ number, title }) => {
        const [currentNumber, setCurrentNumber] = useState(0)
        const [isVisible, setIsVisible] = useState(false)
        const [elementRef, setElementRef] = useState(null)

        useEffect(() => {
            if (!elementRef) return

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true)
                    }
                },
                { threshold: 1 }
            )

            observer.observe(elementRef)
            return () => observer.disconnect()
        }, [elementRef, isVisible])

        useEffect(() => {
            if (!isVisible) return

            let startTime = null
            const duration = 4000
            const targetNumber = parseInt(number)

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp
                const progress = Math.min((timestamp - startTime) / duration, 1)

                const easeInOutCubic = progress < 0.5 
                    ? 4 * progress * progress * progress 
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2
                const currentValue = Math.floor(easeInOutCubic * targetNumber)
                
                setCurrentNumber(currentValue)

                if (progress < 1) {
                    requestAnimationFrame(animate)
                } else {
                    setCurrentNumber(targetNumber)
                }
            }

            requestAnimationFrame(animate)
        }, [isVisible, number])

        return (
            <div 
                ref={setElementRef}
                className='flex flex-col items-center gap-1 rounded'
            >
                <h1 className='xl:text-3xl lg:text-2xl text-xl font-bold text-[#C48F56] tabular-nums transition-all duration-200'>
                    {currentNumber}
                </h1>
                <h2 className='xl:text-[16px] lg:text-sm text-[12px] text-center whitespace-nowrap font-semibold'>
                    {title}
                </h2>
            </div>
        )
    }