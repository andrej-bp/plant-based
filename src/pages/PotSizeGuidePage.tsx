import { Link } from 'react-router-dom'

function PotSizeGuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <Link
        to="/care-guides"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition"
      >
        ← Back to Care Guides
      </Link>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Care Guides
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
          Picking the Right Pot Size
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Pot size affects how quickly soil dries out, how much room roots have to grow,
          and ultimately how healthy your plant stays. Getting it right is simpler than
          it sounds.
        </p>
      </div>

      <div className="mt-10 space-y-10 text-neutral-700">

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">The golden rule: go up one size at a time</h2>
          <p className="mt-3 leading-relaxed">
            When repotting, choose a new pot that is 1 to 2 inches wider in diameter than
            the current one. It's tempting to jump to a much larger pot to give the plant
            "room to grow", but this backfires. Excess soil around the roots holds moisture
            the plant can't use, creating consistently wet conditions that lead to root rot.
          </p>
          <p className="mt-3 leading-relaxed">
            Small, incremental sizing lets the roots fill the pot at a healthy pace and
            gives you much better control over watering.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">How to measure pot size</h2>
          <p className="mt-3 leading-relaxed">
            Pot sizes are measured by the diameter across the top opening, not the base.
            A "6-inch pot" is 6 inches wide at the rim. When comparing pots, always measure
            at the top — the shape of the pot (tapered, straight-sided, bowl) affects
            actual volume significantly even at the same stated size.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Signs your plant has outgrown its pot</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Roots circling the inside of the pot or escaping through drainage holes</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Water passes straight through the pot without being absorbed</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> The plant tips over easily because it's top-heavy</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Growth has visibly slowed despite good light and regular watering</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> You're watering much more frequently than before</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Signs your pot is too large</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Soil stays wet for a week or more after watering</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Yellowing lower leaves despite not overwatering on a schedule</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> A musty or sour smell coming from the soil</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Slow growth — roots focus on filling space rather than supporting foliage</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Sizing by plant type</h2>
          <p className="mt-3 leading-relaxed">
            Not all plants have the same preference. Here's a rough guide:
          </p>
          <div className="mt-4 space-y-3">
            {[
              {
                label: 'Fast-growing tropicals',
                examples: 'Monstera, Pothos, Philodendron',
                note: 'Enjoy being repotted into a pot 2 inches wider each time. They fill space quickly and appreciate the room.',
              },
              {
                label: 'Succulents & cacti',
                examples: 'Echeveria, Aloe, Lithops',
                note: 'Prefer a snug fit — go up just 1 inch at a time, or even keep them in the same pot and refresh the soil instead.',
              },
              {
                label: 'Slow growers',
                examples: 'ZZ Plant, Snake Plant, Jade Plant',
                note: 'Tolerate and often prefer being slightly root-bound. Repot only when clearly necessary, going up 1 inch at a time.',
              },
              {
                label: 'Large statement plants',
                examples: 'Bird of Paradise, Rubber Plant, Fiddle Leaf Fig',
                note: 'Once they reach a mature size, you can top-dress with fresh soil instead of repotting to avoid disturbing large root systems.',
              },
            ].map(({ label, examples, note }) => (
              <div key={label} className="rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
                <p className="font-semibold text-neutral-900">{label}</p>
                <p className="mt-0.5 text-xs text-emerald-700">{examples}</p>
                <p className="mt-2 text-sm text-neutral-600">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Depth matters too</h2>
          <p className="mt-3 leading-relaxed">
            Most houseplants have shallow root systems and do better in wider, shallower
            pots than in tall, deep ones. Deep pots hold a large volume of soil at the
            bottom that roots may never reach, keeping that lower layer perpetually moist.
            Succulents and herbs in particular thrive in wide, shallow containers.
          </p>
          <p className="mt-3 leading-relaxed">
            Plants with deep taproots — like some palms or large fruiting plants — are the
            exception and benefit from a taller pot to accommodate downward root growth.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Always check for drainage</h2>
          <p className="mt-3 leading-relaxed">
            Regardless of size, always use a pot with at least one drainage hole. Without
            drainage, excess water accumulates at the bottom and creates anaerobic
            conditions that rot roots over time — no matter how carefully you water. If you
            love a decorative pot without holes, use it as a cachepot and place the plant's
            nursery pot inside it.
          </p>
        </section>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="text-sm font-semibold text-emerald-800">Quick tip</p>
          <p className="mt-1 text-sm text-emerald-700">
            When in doubt, go smaller. A slightly tight pot is far easier to recover from
            than one that's too large.
          </p>
        </div>

      </div>
    </main>
  )
}

export default PotSizeGuidePage
