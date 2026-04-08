import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={`${import.meta.env.BASE_URL}${product.imageUrl.replace(/^\//, '')}`}
        alt={product.name}
        className="h-56 w-full object-cover"
        loading="lazy"
      />
      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-emerald-700">
              {product.category}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-neutral-900">{product.name}</h3>
          </div>
          <p className="text-lg font-semibold text-neutral-900">${product.price}</p>
        </div>

        <ul className="flex flex-wrap gap-2 text-xs font-medium text-neutral-700">
          <li className="rounded-full bg-neutral-100 px-3 py-1">Size: {product.size}</li>
          <li className="rounded-full bg-neutral-100 px-3 py-1">Light: {product.light}</li>
          <li className="rounded-full bg-neutral-100 px-3 py-1">
            {product.petSafe ? 'Pet Safe' : 'Not Pet Safe'}
          </li>
        </ul>

        <button
          type="button"
          className="w-full rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
