import { FadeIn, StaggerContainer, StaggerItem } from './Animations'

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Architecture review & precise requirement mapping.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Technical roadmap & long-term resource planning.',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'System design, topology & UI/UX prototyping.',
  },
  {
    num: '04',
    title: 'Develop',
    desc: 'Agile engineering sprints with rigorous code reviews.',
  },
  {
    num: '05',
    title: 'Deploy',
    desc: 'Zero-downtime automated cloud deployment.',
  },
  {
    num: '06',
    title: 'Support',
    desc: '24/7 proactive monitoring & SLA-backed support.',
  },
]

export default function ProcessGrid() {
  return (
    <section className="bg-[#0b1221] py-section-gap border-y border-[#1c2a43]">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <StaggerItem
              key={step.num}
              direction="up"
              className="bg-[#0f172a] rounded-2xl p-10 border border-[#1e293b] shadow-sm hover:border-[#38bdf8]/50 transition-colors duration-300"
            >
              <div className="font-display-lg text-6xl text-[#1e3a8a] font-bold opacity-80 mb-8">
                {step.num}
              </div>
              <h3 className="font-headline-lg text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="font-body-md text-[#94a3b8] leading-relaxed pr-4">
                {step.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
