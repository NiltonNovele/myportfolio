import { Project } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="projects">
      {/* --- Skill Bar Metrics --- */}
      <div className="mb-10">
        <h3 className="mb-4 text-xl font-semibold">Skills</h3>
        <div className="space-y-4">
          {[
            {
              label: 'Ethical Hacking',
              subLabel: 'Web app, network & vulnerability testing',
              value: 97,
            },
            {
              label: 'Network and Security',
              subLabel: 'Configuration, firewalls, secure deployments',
              value: 92,
            },
            {
              label: 'Software development',
              subLabel: 'Full-stack apps, APIs, automation',
              value: 87,
            },
            {
              label: 'English - Native',
              subLabel: 'Fluent speaking, writing, technical docs',
              value: 99,
            },
            {
              label: 'Portuguese - Native',
              subLabel: 'Fluent speaking, writing, professional context',
              value: 99,
            },
            { label: 'Afrikaans - Basic', subLabel: 'Conversational understanding', value: 58 },
          ].map(({ label, subLabel, value }) => (
            <div key={label}>
              <div className="mb-1">
                <div className="flex justify-between text-sm font-medium">
                  <span>{label}</span>
                  <span>{value}%</span>
                </div>
                <p className="text-muted mt-0.5 text-xs">{subLabel}</p>
              </div>
              <div className="bg-secondary h-2 w-full rounded">
                <div className="bg-accent h-2 rounded" style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Soft Skills --- */}
      <div className="mb-10">
        <h3 className="mb-4 text-xl font-semibold">Soft Skills</h3>
        <ul className="grid list-inside list-disc grid-cols-1 gap-2 text-sm sm:grid-cols-2">
          <li>Problem Solving</li>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Adaptability</li>
          <li>Time Management</li>
          <li>Attention to Detail</li>
          <li>Critical Thinking</li>
        </ul>
      </div>

      {/* --- Why Work With Me --- */}
      <div className="mb-10">
        <h3 className="mb-4 text-xl font-semibold">Why Work With Me</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-secondary border-border rounded-xl border p-5">
            <h4 className="text-accent mb-2 text-base font-semibold">Versatile Skillset</h4>
            <p className="text-primary-content text-sm">
              From full-stack development to ethical hacking, I bring a broad technical foundation
              that fits various needs.
            </p>
          </div>
          <div className="bg-secondary border-border rounded-xl border p-5">
            <h4 className="text-accent mb-2 text-base font-semibold">Results-Driven</h4>
            <p className="text-primary-content text-sm">
              I build solutions that focus on real-world impact—optimized, secure, and
              user-friendly.
            </p>
          </div>
          <div className="bg-secondary border-border rounded-xl border p-5">
            <h4 className="text-accent mb-2 text-base font-semibold">Reliable & Collaborative</h4>
            <p className="text-primary-content text-sm">
              I value communication, meet deadlines, and thrive in both solo and team environments.
            </p>
          </div>
        </div>
      </div>
      <SectionHeading
        title="// Projects"
        subtitle="I have done countless projects, here are a my most recent ones: "
      />

      {/* --- Existing Project Cards --- */}
      <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.priority} data={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
