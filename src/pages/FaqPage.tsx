import SectionHeader from '../components/SectionHeader'

const faqItems = [
  {
    question: 'How long does shipping take?',
    answer:
      'Standard delivery takes 3-5 business days. Expedited delivery is available at checkout for most regions.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'If your plant arrives damaged or unhealthy, contact us within 7 days with a photo and order number for a replacement or refund.',
  },
  {
    question: 'Do you offer gift cards?',
    answer:
      'Yes. Digital gift cards are available year-round in multiple amounts and are emailed immediately after purchase.',
  },
  {
    question: 'How often do you receive new products?',
    answer:
      'We restock popular plants weekly and add new seasonal varieties twice per month.',
  },
  {
    question: 'Do you have a loyalty program?',
    answer:
      'Yes. Plant Points members earn rewards on every order, get early access to drops, and receive birthday perks.',
  },
  {
    question: 'What if my plant is not thriving after delivery?',
    answer:
      'Our support team can help with care guidance. Send photos and details about light and watering, and we will suggest a recovery plan.',
  },
]

function FaqPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything customers ask most, from shipping and returns to rewards and restocks."
      />

      <div className="mt-8 space-y-4">
        {faqItems.map((item) => (
          <article
            key={item.question}
            className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-neutral-900">{item.question}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{item.answer}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

export default FaqPage
