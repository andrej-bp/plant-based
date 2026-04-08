import { Link } from 'react-router-dom'

function RepottingGuidePage() {
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
          Repotting Basics
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Repotting gives your plant fresh soil, more room to grow, and a chance to check
          on root health. Done at the right time and in the right way, it's one of the most
          beneficial things you can do for a houseplant.
        </p>
      </div>

      <div className="mt-10 space-y-10 text-neutral-700">

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">When to repot</h2>
          <p className="mt-3 leading-relaxed">
            Most houseplants benefit from repotting every 12–18 months, but let the plant
            tell you when it's ready rather than following a strict schedule. The best time
            is early spring, just as the growing season begins, so the plant can quickly
            establish itself in its new container.
          </p>
          <p className="mt-3 leading-relaxed">
            Signs it's time to repot:
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Roots circling the bottom of the pot or growing out of drainage holes</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Water runs straight through without being absorbed</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Plant looks too large or top-heavy for its pot</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Growth has stalled despite good light and watering</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Soil degrades and compacts over time, losing its structure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Choosing the right pot</h2>
          <p className="mt-3 leading-relaxed">
            Go up only one pot size — typically 1 to 2 inches wider in diameter than the
            current pot. A pot that's too large holds excess moisture around the roots and
            dramatically increases the risk of root rot.
          </p>
          <p className="mt-3 leading-relaxed">
            Always choose a pot with drainage holes. Decorative pots without drainage can
            be used as a cachepot — simply place the nursery pot inside it.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { material: 'Terracotta', note: 'Breathable, dries quickly. Great for succulents and plants prone to overwatering.' },
              { material: 'Plastic', note: 'Retains moisture longer. Good for moisture-loving tropicals and beginners.' },
              { material: 'Ceramic', note: 'Heavy and stable. Glazed versions retain moisture similarly to plastic.' },
            ].map(({ material, note }) => (
              <div key={material} className="rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
                <p className="font-semibold text-neutral-900">{material}</p>
                <p className="mt-1 text-sm text-neutral-600">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Choosing the right soil</h2>
          <p className="mt-3 leading-relaxed">
            Standard potting mix works for most tropical houseplants, but adding perlite
            (about 20–30% of the mix) improves drainage and aeration. Succulents and cacti
            need a fast-draining cactus mix or a standard mix with at least 50% perlite or
            coarse sand. Orchids need a bark-based mix entirely their own.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Step-by-step repotting</h2>
          <ol className="mt-3 space-y-4 text-sm">
            {[
              { step: '1', title: 'Water the day before', desc: 'Moist soil holds together better and causes less root disturbance than dry soil.' },
              { step: '2', title: 'Remove the plant', desc: 'Tip the pot sideways and gently squeeze or tap the sides. Ease the root ball out — never yank from the stem.' },
              { step: '3', title: 'Loosen the roots', desc: 'Gently tease apart any tightly circling roots with your fingers. Trim any that are dead (black or mushy) with clean scissors.' },
              { step: '4', title: 'Add fresh soil', desc: 'Place a layer of fresh mix in the new pot. Set the plant so the base of the stem sits about an inch below the pot rim.' },
              { step: '5', title: 'Fill and firm', desc: 'Add soil around the sides and press gently to remove large air pockets. Don\'t pack it too tightly.' },
              { step: '6', title: 'Water thoroughly', desc: 'Water until it drains freely, then place in a bright spot out of direct sun for a week while the plant recovers.' },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-800">
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-neutral-900">{title}</p>
                  <p className="mt-0.5 text-neutral-600">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">After repotting</h2>
          <p className="mt-3 leading-relaxed">
            Some wilting or leaf drop in the week after repotting is normal — this is
            called transplant shock. Keep the plant in stable conditions (consistent
            temperature, no harsh direct sun) and avoid fertilising for at least 4–6 weeks.
            Fresh potting mix already contains nutrients, and feeding too soon can burn
            tender new roots.
          </p>
        </section>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="text-sm font-semibold text-emerald-800">Quick tip</p>
          <p className="mt-1 text-sm text-emerald-700">
            If a plant is thriving and flowering, don't repot it just because it's been a
            while. A slightly root-bound plant is often a happy one.
          </p>
        </div>

      </div>
    </main>
  )
}

export default RepottingGuidePage
