'use client'

import { useState } from 'react'
import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'
import { ChevronDown, ChevronUp } from 'lucide-react'

const ServiceSection = () => {
  const networkingServices = serviceData.filter((service) => service.category === 'networking')
  const hackingServices = serviceData.filter((service) => service.category === 'hacking')
  const devServices = serviceData.filter((service) => service.category === 'development')

  const [openSection, setOpenSection] = useState<'networking' | 'hacking' | 'development'>(
    'networking',
  )

  const toggleSection = (section: typeof openSection) => {
    setOpenSection((prev) => (prev === section ? section : section))
  }

  return (
    <section id="services" className="my-14">
      <SectionHeading
        title="// Services / Offers:"
        subtitle="I offer a wide range of services, here are a few:"
      />

      {/* Networking & Security */}
      {networkingServices.length > 0 && (
        <div className="mb-6">
          <button
            onClick={() => toggleSection('networking')}
            className="text-accent mb-4 flex w-full items-center justify-between text-left text-xl font-semibold">
            Networking & Security
            {openSection === 'networking' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {openSection === 'networking' && (
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
              {networkingServices.map((service, index) => (
                <ServiceCard
                  key={`networking-${index}`}
                  icon={service.icon}
                  title={service.title}
                  shortDescription={service.shortDescription}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Ethical Hacking */}
      {hackingServices.length > 0 && (
        <div className="mb-6">
          <button
            onClick={() => toggleSection('hacking')}
            className="text-accent mb-4 flex w-full items-center justify-between text-left text-xl font-semibold">
            Ethical Hacking
            {openSection === 'hacking' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {openSection === 'hacking' && (
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
              {hackingServices.map((service, index) => (
                <ServiceCard
                  key={`hacking-${index}`}
                  icon={service.icon}
                  title={service.title}
                  shortDescription={service.shortDescription}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Software Development */}
      {devServices.length > 0 && (
        <div className="mb-6">
          <button
            onClick={() => toggleSection('development')}
            className="text-accent mb-4 flex w-full items-center justify-between text-left text-xl font-semibold">
            Software Development
            {openSection === 'development' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {openSection === 'development' && (
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
              {devServices.map((service, index) => (
                <ServiceCard
                  key={`dev-${index}`}
                  icon={service.icon}
                  title={service.title}
                  shortDescription={service.shortDescription}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default ServiceSection
