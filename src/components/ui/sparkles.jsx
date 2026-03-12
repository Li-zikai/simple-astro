import { useEffect, useRef } from "react"

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

export function SparklesCore({
  className = "",
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 1200,
  particleColor = "#FFFFFF",
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext("2d")

    if (!context) {
      return undefined
    }

    let animationFrameId = 0
    let particles = []

    const createParticle = (width, height) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: randomBetween(minSize, maxSize),
      alpha: randomBetween(0.2, 0.9),
      alphaSpeed: randomBetween(0.003, 0.012),
      velocityX: randomBetween(-0.08, 0.08),
      velocityY: randomBetween(-0.18, -0.04),
    })

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      const area = rect.width * rect.height
      const count = Math.max(60, Math.min(220, Math.floor(area / particleDensity)))
      particles = Array.from({ length: count }, () => createParticle(rect.width, rect.height))
    }

    const render = () => {
      const width = canvas.width / (window.devicePixelRatio || 1)
      const height = canvas.height / (window.devicePixelRatio || 1)

      context.clearRect(0, 0, width, height)
      context.fillStyle = background
      context.fillRect(0, 0, width, height)

      for (const particle of particles) {
        particle.x += particle.velocityX
        particle.y += particle.velocityY
        particle.alpha += particle.alphaSpeed

        if (particle.alpha >= 1 || particle.alpha <= 0.15) {
          particle.alphaSpeed *= -1
        }

        if (particle.y < -6 || particle.x < -6 || particle.x > width + 6) {
          Object.assign(particle, createParticle(width, height * 0.9))
          particle.y = randomBetween(height, height + 12)
        }

        context.beginPath()
        context.fillStyle = particleColor
        context.globalAlpha = Math.max(0, Math.min(1, particle.alpha))
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fill()
      }

      context.globalAlpha = 1
      animationFrameId = window.requestAnimationFrame(render)
    }

    resize()
    render()

    const resizeObserver = new ResizeObserver(() => {
      resize()
    })

    resizeObserver.observe(canvas)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
    }
  }, [background, maxSize, minSize, particleColor, particleDensity])

  return <canvas ref={canvasRef} className={className} />
}
