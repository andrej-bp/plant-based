import { Link } from 'react-router-dom'

function LightGuidePage() {
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
          Finding the Right Light
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Light is food for plants. Matching a plant to the right spot in your home is the
          single biggest factor in whether it thrives or slowly declines.
        </p>
      </div>

      <div className="mt-10 space-y-10 text-neutral-700">

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Understanding light levels</h2>
          <p className="mt-3 leading-relaxed">
            Plant labels often use terms like "bright indirect" or "low light" — but what
            do these actually mean in a real home? Here's a practical breakdown.
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
              <p className="font-semibold text-neutral-900">Bright direct light</p>
              <p className="mt-1 text-sm text-neutral-600">
                Sunlight falling directly on the plant. South- or west-facing windowsills.
                Ideal for cacti, succulents, and many herbs.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
              <p className="font-semibold text-neutral-900">Bright indirect light</p>
              <p className="mt-1 text-sm text-neutral-600">
                Bright room but no direct sun on the leaves — a few feet from a sunny
                window, or filtered through a sheer curtain. The sweet spot for most
                tropical houseplants.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
              <p className="font-semibold text-neutral-900">Medium light</p>
              <p className="mt-1 text-sm text-neutral-600">
                A well-lit room without direct sun. Several feet from a window. Good for
                Pothos, Pilea, and Peace Lilies.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
              <p className="font-semibold text-neutral-900">Low light</p>
              <p className="mt-1 text-sm text-neutral-600">
                Far from windows, or in rooms with north-facing windows. Few plants
                genuinely thrive here — but ZZ Plants, Cast Iron Plants, and Snake Plants
                can tolerate it.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Reading your space</h2>
          <p className="mt-3 leading-relaxed">
            Window direction matters more than window size. In the northern hemisphere,
            south-facing windows get the most light year-round. East-facing windows
            get gentle morning sun. West-facing windows get strong afternoon sun. North-facing
            windows receive little to no direct sun.
          </p>
          <p className="mt-3 leading-relaxed">
            Light intensity also drops sharply with distance. A plant one metre from a
            window gets dramatically less light than one sitting right on the sill — even
            if they're in the same room.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Signs your plant needs more light</h2>
          <p className="mt-3 leading-relaxed">
            Plants communicate light stress visually. If you notice any of the following,
            try moving your plant closer to a window.
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Leggy, stretched stems reaching toward the window</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Pale or washed-out leaf colour</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Smaller leaves than normal</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Very slow growth even in the growing season</li>
            <li className="flex gap-2"><span className="text-emerald-600">→</span> Variegated plants losing their pattern (reverting to all-green)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Signs of too much light</h2>
          <p className="mt-3 leading-relaxed">
            Too much direct sun scorches leaves, especially on plants adapted to forest
            floors. Look for bleached patches, crispy brown edges, or a washed-out
            appearance. Move the plant back from the window or add a sheer curtain to
            diffuse the light.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Seasonal changes</h2>
          <p className="mt-3 leading-relaxed">
            The angle and intensity of sunlight changes significantly between summer and
            winter. A spot that works perfectly in summer might not provide enough light in
            December. Consider moving plants closer to windows in autumn, and rotating them
            every few weeks so all sides receive even light.
          </p>
        </section>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="text-sm font-semibold text-emerald-800">Quick tip</p>
          <p className="mt-1 text-sm text-emerald-700">
            If you're unsure about a spot, a cheap light meter app on your phone gives a
            surprisingly accurate reading of foot-candles or lux.
          </p>
        </div>

      </div>
    </main>
  )
}

export default LightGuidePage
