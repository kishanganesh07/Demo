import { motion, useInView, useSpring, useTransform, useScroll } from 'framer-motion'
import { useRef, useEffect } from 'react'

// Premium easing curve used in high-end design
const PREMIUM_EASE = [0.22, 1, 0.36, 1]

export function FadeIn({ children, delay = 0, direction = 'up', className = '', ...props }) {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction], scale: 0.98 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ 
        duration: 1.2, 
        delay, 
        ease: PREMIUM_EASE 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = '', delayChildren = 0.1, staggerChildren = 0.15, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', direction = 'up', ...props }) {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 },
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directions[direction], scale: 0.96, filter: 'blur(4px)' },
        visible: { 
          opacity: 1, 
          x: 0, 
          y: 0, 
          scale: 1,
          filter: 'blur(0px)',
          transition: { duration: 1.2, ease: PREMIUM_EASE } 
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedCounter({ value, suffix = '', prefix = '', className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const numValue = parseFloat(value.toString().replace(/[^0-9.]/g, '')) || 0
  
  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 20,
    mass: 1
  })
  
  const displayValue = useTransform(springValue, (current) => {
    if (Number.isInteger(numValue)) {
      return `${prefix}${Math.floor(current)}${suffix}`
    }
    return `${prefix}${current.toFixed(1)}${suffix}`
  })

  useEffect(() => {
    if (isInView) {
      springValue.set(numValue)
    }
  }, [isInView, numValue, springValue])

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  )
}

export function ParallaxImage({ src, alt, className = '', speed = 0.2 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  
  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img 
        src={src} 
        alt={alt}
        style={{ y, scale: 1.2 }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}

export function RevealText({ text, className = '', delay = 0 }) {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0, rotateZ: 5 }}
        whileInView={{ y: 0, opacity: 1, rotateZ: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.2, delay, ease: PREMIUM_EASE }}
      >
        {text}
      </motion.span>
    </span>
  )
}
