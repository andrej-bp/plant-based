import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(52,211,153,0.18),_transparent_50%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-16 md:grid-cols-2 md:pt-20">
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
            House Plants Delivered
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-6xl">
            Bring life to every corner of your home.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-neutral-600">
            Plant Based delivers hand-selected house plants and sculptural succulents,
            styled for modern spaces and simple routines.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#catalog"
              className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Shop Plants
            </a>
            <Link
              to="/care-guides"
              className="rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
            >
              Explore Care Guides
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=1200&q=80"
            alt="Collection of house plants on a modern shelf"
            className="h-[430px] w-full rounded-3xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-emerald-100 bg-white p-4 shadow-lg">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-700">This Week</p>
            <p className="mt-1 text-2xl font-semibold text-neutral-900">Free Pot Upgrade</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
