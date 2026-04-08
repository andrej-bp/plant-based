import ProductGrid from '../components/ProductGrid'
import SectionHeader from '../components/SectionHeader'
import { products } from '../data/products'

function NewArrivalsPage() {
  const newestProducts = [...products].sort((a, b) => b.id - a.id).slice(0, 6)

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeader
        eyebrow="Just In"
        title="New arrivals this week"
        subtitle="Fresh additions selected for modern spaces, easy care, and all-day style."
      />

      <div className="mt-8 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
        <p className="text-sm text-neutral-600">
          These are the newest plants in our collection. Inventory updates weekly.
        </p>
      </div>

      <ProductGrid products={newestProducts} />
    </main>
  )
}

export default NewArrivalsPage
