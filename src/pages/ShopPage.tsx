import { useMemo, useState } from 'react'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import SectionHeader from '../components/SectionHeader'
import { products } from '../data/products'

function ShopPage() {
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')

  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category))],
    [],
  )

  const filteredProducts = useMemo(() => {
    const byCategory =
      category === 'All'
        ? products
        : products.filter((product) => product.category === category)

    return [...byCategory].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'name') return a.name.localeCompare(b.name)
      return b.featuredScore - a.featuredScore
    })
  }, [category, sort])

  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeader
          eyebrow="Freshly Curated"
          title="Plants picked for every room and routine"
          subtitle="Thoughtful, low-maintenance greens that arrive healthy, styled, and ready to thrive."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {['Low Light Picks', 'Pet-Friendly Favorites', 'Statement Plants'].map((label) => (
            <article
              key={label}
              className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">
                {label}
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                Modern planters, clear care cards, and doorstep delivery.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeader
          eyebrow="Shop The Collection"
          title="House plants and succulents"
          subtitle="Filter by plant type and sort by your preferred style and price point."
        />

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setCategory(option)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  category === option
                    ? 'bg-emerald-700 text-white'
                    : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 text-sm font-medium text-neutral-700">
            Sort by
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </label>
        </div>

        <ProductGrid products={filteredProducts} />
      </section>

      <section className="bg-emerald-900/95 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 text-emerald-50 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-emerald-200">
              Plant Tips + Drops
            </p>
            <h3 className="mt-2 text-3xl font-semibold">Get 10% off your first order</h3>
            <p className="mt-2 text-emerald-100">
              Seasonal arrivals, styling ideas, and easy care guides.
            </p>
          </div>
          <form className="flex w-full max-w-md gap-2" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-emerald-700 bg-emerald-950/60 px-4 py-3 text-emerald-50 placeholder:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="rounded-xl bg-emerald-300 px-5 py-3 font-semibold text-emerald-900 transition hover:bg-emerald-200"
            >
              Join
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ShopPage
