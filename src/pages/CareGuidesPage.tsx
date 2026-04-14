import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const guides = [
  {
    title: 'Watering 101',
    text: 'Water when the top inch of soil is dry. Most plants prefer consistency over volume.',
    to: '/care-guides/watering',
  },
  {
    title: 'Finding The Right Light',
    text: 'Place succulents in bright indirect light. Most house plants prefer medium, filtered light.',
    to: '/care-guides/light',
  },
  {
    title: 'Repotting Basics',
    text: 'Repot every 12-18 months into a pot 1-2 inches wider with well-draining soil.',
    to: '/care-guides/repotting',
  },
  {
    title: 'Picking the Right Pot Size',
    text: 'The right pot size keeps roots healthy and watering predictable — going too big is a common mistake.',
    to: '/care-guides/pot-size',
  },
]

function CareGuidesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeader
        eyebrow="Care Guides"
        title="Keep your plants thriving"
        subtitle="Simple, practical routines for healthy roots, strong growth, and stress-free plant care."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.title}
            to={guide.to}
            className="group rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-semibold text-neutral-900">{guide.title}</h3>
            <p className="mt-3 text-sm text-neutral-600">{guide.text}</p>
            <p className="mt-4 text-sm font-medium text-emerald-700 transition group-hover:text-emerald-900">
              Read guide →
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default CareGuidesPage
