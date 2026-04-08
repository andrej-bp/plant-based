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
  {
    question: 'How are plants packaged for shipping?',
    answer:
      'Each plant is secured in its nursery pot, wrapped in kraft paper to protect the foliage, and packed upright in a custom box with biodegradable padding. Larger plants are double-boxed. We include a care card with every order.',
  },
  {
    question: 'Do you ship during winter?',
    answer:
      'Yes, but with care. During periods of extreme cold we include a heat pack in the box and may hold shipments by a day or two to avoid weekend transit. If severe weather in your area makes safe delivery unlikely, we will contact you to reschedule.',
  },
  {
    question: 'Will my plant look exactly like the photo?',
    answer:
      'Photos show a representative plant of the variety. Because every plant is a living thing, size, shape, and leaf count will vary slightly. We always select the healthiest available specimen for your order.',
  },
  {
    question: 'Are pots included?',
    answer:
      'Plants are shipped in plain nursery grow pots. Decorative pots and planters are sold separately in our accessories section. Nursery pots are functional and perfectly fine to keep your plant in long-term.',
  },
  {
    question: 'My plant dropped leaves or looks stressed after arrival — is that normal?',
    answer:
      'Yes, this is common. Plants experience some stress during transit due to darkness, movement, and temperature changes. A few dropped or yellowed leaves are normal and not a sign of a damaged plant. Place it in a stable spot with appropriate light, water once the soil has dried out, and give it one to two weeks to adjust.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Currently we ship within the contiguous United States only. International shipping and Hawaii and Alaska delivery are not available at this time. We are working on expanding our shipping zones.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards (Visa, Mastercard, Amex, Discover), PayPal, Apple Pay, and Google Pay. All transactions are processed securely through encrypted checkout.',
  },
  {
    question: 'Can I modify or cancel my order after placing it?',
    answer:
      'Orders can be modified or cancelled within 2 hours of purchase. After that window, the order enters fulfilment and we cannot make changes. Contact us immediately at support@plantbased.com if you need to make a change.',
  },
  {
    question: 'Are your plants sustainably sourced?',
    answer:
      'Yes. We work exclusively with small-scale nurseries that use peat-free growing media, avoid systemic pesticides, and prioritise ethical propagation practices. We are committed to expanding our range of rare and unusual varieties grown from cuttings rather than imported from the wild.',
  },
  {
    question: 'Do you sell pots, soil, and other accessories?',
    answer:
      'Yes — our accessories range includes terracotta and ceramic pots, well-draining potting mixes, perlite, moisture meters, and plant care tools. Browse them alongside our plants in the Shop.',
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
