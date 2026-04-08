import { Link } from 'react-router-dom'

function WateringGuidePage() {
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
          Watering 101
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Overwatering is the number one cause of houseplant death. Getting watering right
          isn't about following a rigid schedule — it's about reading your plant and its
          environment.
        </p>
      </div>

      <div className="mt-10 space-y-10 text-neutral-700">

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">The finger test</h2>
          <p className="mt-3 leading-relaxed">
            Before you water, push your finger about an inch into the soil. If it feels
            moist, wait. If it feels dry, it's time to water. For succulents and cacti,
            let the soil dry out completely between waterings. For tropical houseplants like
            Monsteras or Pothos, water once the top inch is dry.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Overwatering vs. underwatering</h2>
          <p className="mt-3 leading-relaxed">
            Both look similar at first — drooping leaves, yellowing — but the causes are
            opposite. Check the soil before adjusting. Overwatered plants have soggy, dark
            soil and may develop root rot. Underwatered plants have bone-dry, pulling-away
            soil and crispy leaf edges.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-800">Signs of overwatering</p>
              <ul className="mt-2 space-y-1 text-sm text-red-700">
                <li>• Yellow, mushy leaves</li>
                <li>• Soggy or smelly soil</li>
                <li>• Mold on soil surface</li>
                <li>• Brown, soft stem base</li>
              </ul>
            </div>
            <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-800">Signs of underwatering</p>
              <ul className="mt-2 space-y-1 text-sm text-amber-700">
                <li>• Crispy, brown leaf tips</li>
                <li>• Wilting despite good light</li>
                <li>• Soil pulling away from pot</li>
                <li>• Slow or stunted growth</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">How to water properly</h2>
          <p className="mt-3 leading-relaxed">
            Water slowly and evenly across the entire soil surface until water drains freely
            from the bottom of the pot. This ensures the full root zone gets moisture. Empty
            the saucer after 30 minutes so roots don't sit in standing water.
          </p>
          <p className="mt-3 leading-relaxed">
            Use room-temperature water when possible. Cold water can shock tropical plants.
            If your tap water is heavily chlorinated, leaving it in an open container
            overnight lets most of the chlorine evaporate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Seasonal adjustments</h2>
          <p className="mt-3 leading-relaxed">
            Most houseplants grow actively in spring and summer and slow down in autumn and
            winter. Reduce watering frequency in the cooler months — your plant isn't
            drinking as much and the soil stays moist longer. A plant that needed water
            every 7 days in summer might only need it every 14 days in winter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Pot and soil matter too</h2>
          <p className="mt-3 leading-relaxed">
            Terracotta pots are porous and dry out faster — great for succulents, trickier
            for moisture-loving plants. Plastic and glazed ceramic retain water longer.
            Well-draining soil with perlite or bark mixed in prevents compaction and helps
            excess water escape, reducing root rot risk significantly.
          </p>
        </section>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="text-sm font-semibold text-emerald-800">Quick tip</p>
          <p className="mt-1 text-sm text-emerald-700">
            A watering schedule is a starting point, not a rule. Check the soil — not the
            calendar.
          </p>
        </div>

      </div>
    </main>
  )
}

export default WateringGuidePage
