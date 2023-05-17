import ParticlesComponent from './AstronautParticles'
import { heroOptions } from './particleOptions'

const HeroParticles = () => {
  return (
    <div className="w-full h-screen">
      <ParticlesComponent
        id="hero-particles"
        className="w-full h-screen z-0"
        particlesOptions={heroOptions}
      />
    </div>
  )
}

export default HeroParticles
