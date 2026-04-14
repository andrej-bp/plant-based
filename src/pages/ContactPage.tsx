import { Link } from 'react-router-dom'

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Contact Us
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
          We're here to help
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Whether you have a question about an order, need advice on caring for a plant,
          or just want to say hello — our team is happy to hear from you. We typically
          respond within one business day.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:support@plantbased.com"
            className="group flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">
                Email
              </p>
              <p className="mt-1 text-lg font-semibold text-neutral-900 transition group-hover:text-emerald-800">
                support@plantbased.com
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Best for order enquiries and detailed questions
              </p>
            </div>
          </a>

          <a
            href="tel:5551234567"
            className="group flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 16.352V17.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">
                Phone
              </p>
              <p className="mt-1 text-lg font-semibold text-neutral-900 transition group-hover:text-emerald-800">
                555-123-4567
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Available Mon–Fri, 9am–5pm EST
              </p>
            </div>
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
          <p className="text-sm font-semibold text-emerald-800">Before you reach out</p>
          <p className="mt-1 text-sm text-emerald-700">
            Many common questions about shipping, returns, and plant care are answered in
            our{' '}
            <Link to="/faq" className="underline underline-offset-2 hover:text-emerald-900">
              FAQ page
            </Link>
            . It's worth a quick look — you might find your answer instantly.
          </p>
        </div>
      </div>
    </main>
  )
}

export default ContactPage
