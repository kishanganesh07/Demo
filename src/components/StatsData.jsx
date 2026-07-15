import { FadeIn, StaggerContainer, StaggerItem } from './Animations'

const stats = [
  { value: '1192+', label: 'PROJECTS DELIVERED' },
  { value: '45+', label: 'COUNTRIES SERVED' },
  { value: '97%', label: 'CLIENT RETENTION' },
  { value: '$248M', label: 'CLIENT ROI GENERATED' },
]

export default function StatsData() {
  return (
    <section className="bg-[#0b1221] py-24 border-y border-[#1c2a43]">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} direction="up" className="flex flex-col items-center">
              <span className="font-display-lg text-6xl text-[#3bbcf5] font-light tracking-tighter mb-4">
                {stat.value}
              </span>
              <span className="font-body-md text-xs font-bold text-surface-variant uppercase tracking-widest opacity-80">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
