import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">Let's Connect</h3>
          <h4 className="text-accent text-2xl font-bold md:text-3xl">I'd love to help</h4>
          <p className="text-neutral mt-8">From secure networks to smart software — I do it all.</p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <a
            href="mailto:nilton.novele@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> contact@niltonnovele.com <p style={{ fontSize: '9px' }}>(click me)</p>
          </a>
          <a
            href="tel:+92 3123456789"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> +27 (76) 191-5804
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
