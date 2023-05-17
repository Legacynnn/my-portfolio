import { m, LazyMotion, domAnimation } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
/* import { memoji, introduction } from '../Constants/constants' */
/* import ImageSlider from '../Components/elements/ImageSlider' */
import memoji1 from '../assets/memoji/memoji1.png'
import memoji2 from '../assets/memoji/memoji2.png'
import memoji3 from '../assets/memoji/memoji3.png'
import memoji4 from '../assets/memoji/memoji4.png'
import ImageSlider from '../components/elements/ImageSlider'

const text = [
  'Hello, it is a pleasure to have you here!',
  'My name is Daniel and I am a full-stack developer living in Brazil. My passion for web development started in 2021, when I started studying more about Javascript and ReactJS',
  'Since then, I have been constantly advancing and expanding my knowledge in this area. Currently course Software Engineering and work in a construction company in Brazil in the part of innovation and maintenance of an internal work control software, I use NestJS and NextJS as main tools',
  'I am very communicative and love to help people, I also like to actively participate in open source projects. Thanks in advance for visiting my portfolio and I hope you enjoy it',
]

const memoji = [memoji1, memoji2, memoji3, memoji4]

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Introduction" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: 'Poppins, sans-serif' }}
                className="text-grayscale-50 p-6 text-center flex flex-col gap-6"
              >
                <span className="text-primary-400">{text[0]}</span>
                <span>{text[1]}</span>
                <span>{text[2]}</span>
                <span>{text[3]}</span>
              </m.p>
            </LazyMotion>
          </div>
          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[100%] h-[300px] sm:h-[350px] flex justify-center items-center">
              <ImageSlider images={memoji} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
