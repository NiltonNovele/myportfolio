'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import Ellipse from './Ellipse'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({ roles: ['FULL-STACK DEVELOPER', 'Ethical Hacker', 'SOLOPRENEUR'] })

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">
              Hi - I'm Nilton Novele
            </span>
            <span className="text-accent block text-[1.75rem] font-bold">{role}</span>
          </h1>

          <h2 className="text-neutral mt-3">
            Harnessing my skills in Ethical Hacking, Security & Networking, and Software Development
            to shape the future.
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="mailto:nilton.novele@gmail.com"
              aria-label="Connect with me"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]">
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/nilton-novele-82211821b/"
              aria-label="View LinkedIn Profile"
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src="/me.png"
              alt="Nilton Novele - Ethical Hacker"
              className="object-contain p-7"
              width={500}
              height={200}
            />

            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
