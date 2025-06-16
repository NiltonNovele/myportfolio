'use client'

import { Testimonial } from '@/lib/types'
import { useRef, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import TestimonialCard from './TestimonialCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [activeCard, setActiveCard] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="testimonials" className="relative">
      <SectionHeading
        title="// About Me"
        subtitle="Here’s a glimpse into how I got into IT and what drives my passion for hacking, networking, and building real-world solutions."
      />

      {/* Arrows for large screens */}
      <div className="relative hidden items-center justify-between lg:flex">
        <button
          onClick={() => scroll('left')}
          className="bg-background/80 hover:bg-background absolute left-0 z-10 rounded-full p-2 shadow-md backdrop-blur">
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div
          ref={scrollRef}
          className="hide-scrollbar my-8 flex gap-8 overflow-x-auto scroll-smooth px-12">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={testimonial}
              handleActiveCard={() => setActiveCard(idx)}
            />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="bg-background/80 hover:bg-background absolute right-0 z-10 rounded-full p-2 shadow-md backdrop-blur">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile view without arrows */}
      <div className="hide-scrollbar my-8 flex gap-8 overflow-x-auto lg:hidden">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            testimonial={testimonial}
            handleActiveCard={() => setActiveCard(idx)}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-1 sm:hidden">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeCard ? 'bg-accent size-[12px]' : 'size-[10px] bg-white/50'
            } rounded-full`}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
