import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'

function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-14 text-center">
        <p className="text-lg text-neutral-600">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-900">
          ← Back to Shop
        </Link>
      </main>
    )
  }

  const lightDescriptions: Record<string, string> = {
    Low: 'Thrives in low light — ideal for rooms with limited natural light or north-facing windows.',
    Medium: 'Prefers medium, indirect light — a few feet from a bright window is perfect.',
    Bright: 'Loves bright indirect light — best placed near a sunny window with filtered sun.',
  }

  const sizeDescriptions: Record<string, string> = {
    Small: 'Compact size — great for desks, shelves, and windowsills.',
    Medium: 'Mid-size plant — suits side tables, plant stands, and floor corners.',
    Large: 'Statement size — designed to anchor a room as a focal point.',
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <Link
        to="/shop"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition"
      >
        ← Back to Shop
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
          <img
            src={`${import.meta.env.BASE_URL}${product.imageUrl.replace(/^\//, '')}`}
            alt={product.name}
            className="h-full max-h-[520px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            {product.category}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-neutral-600">{product.description}</p>

          <p className="mt-6 text-3xl font-semibold text-neutral-900">${product.price}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-800">
              {product.size}
            </span>
            <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-800">
              {product.light} Light
            </span>
            <span className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
              product.petSafe
                ? 'border-emerald-100 bg-emerald-50 text-emerald-800'
                : 'border-red-100 bg-red-50 text-red-700'
            }`}>
              {product.petSafe ? 'Pet Safe' : 'Not Pet Safe'}
            </span>
          </div>

          <button
            type="button"
            className="mt-8 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Add to Cart
          </button>

          <div className="mt-10 space-y-3 border-t border-neutral-100 pt-8">
            <div className="flex gap-3">
              <span className="w-20 shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400 pt-0.5">Light</span>
              <p className="text-sm text-neutral-600">{lightDescriptions[product.light]}</p>
            </div>
            <div className="flex gap-3">
              <span className="w-20 shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400 pt-0.5">Size</span>
              <p className="text-sm text-neutral-600">{sizeDescriptions[product.size]}</p>
            </div>
            <div className="flex gap-3">
              <span className="w-20 shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400 pt-0.5">Pets</span>
              <p className="text-sm text-neutral-600">
                {product.petSafe
                  ? 'This plant is non-toxic and safe for cats and dogs.'
                  : 'This plant is toxic if ingested. Keep out of reach of pets and small children.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductPage
