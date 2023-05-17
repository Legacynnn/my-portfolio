import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import {
  Container,
  Engine,
  IOptions,
  RecursivePartial,
} from 'tsparticles-engine'

interface ParticleProps {
  particlesOptions: RecursivePartial<IOptions>
  id: string
  className: string
}

const ParticlesComponent = ({
  particlesOptions,
  className,
  id,
}: ParticleProps) => {
  let isInitialized = false

  const particlesInit = useCallback(async (engine: Engine) => {
    if (!isInitialized) {
      await loadFull(engine)
      isInitialized = true
    }
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await container
    },
    [],
  )

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  )
}

export default ParticlesComponent
