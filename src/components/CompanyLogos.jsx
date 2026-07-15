import { FadeIn, StaggerContainer, StaggerItem } from './Animations'

const companies = ['Vertex', 'Lumina', 'Aegis', 'Quantum', 'Nova', 'Zenith']

export default function CompanyLogos() {
  return (
    <section className="bg-[#0b1221] py-16 text-center border-t border-[#1c2a43]">
      <FadeIn direction="up">
        <h4 className="font-mono text-xs font-bold text-surface-variant uppercase tracking-[0.2em] mb-12 opacity-70">
          TRUSTED BY FORTUNE 500 LEADERS
        </h4>
      </FadeIn>
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <StaggerContainer className="flex flex-wrap justify-center gap-x-16 gap-y-10">
          {companies.map((company) => (
            <StaggerItem key={company} direction="up" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/5 rounded-md border border-white/10" />
              <span className="font-headline-md text-2xl font-bold text-surface-variant/80 tracking-tight">
                {company}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
