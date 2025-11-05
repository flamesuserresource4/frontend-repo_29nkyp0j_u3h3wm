import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI-Powered Retail Insights Platform',
    img: 'https://images.unsplash.com/photo-1557825835-70d97c4aa4ac?q=80&w=1200&auto=format&fit=crop',
    summary: 'Predictive demand forecasting and dynamic pricing to boost margins and reduce stockouts.',
  },
  {
    title: 'Custom E-Commerce Dashboard for SMEs',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    summary: 'Unified analytics for sales, marketing, and inventory with real-time insights.',
  },
  {
    title: 'Chatbot System for Healthcare Automation',
    img: 'https://images.unsplash.com/photo-1556157381-36a64e68f873?q=80&w=1200&auto=format&fit=crop',
    summary: 'HIPAA-aware patient triage and appointment scheduling with 24/7 support.',
  },
]

const testimonials = [
  {
    name: 'Alex Johnson',
    company: 'Nimbus Retail',
    quote:
      'Optivex delivered beyond expectations. Our analytics went from static to strategic—measurable impact in weeks.',
  },
  {
    name: 'Priya Singh',
    company: 'HealthFirst Clinic',
    quote:
      'The chatbot solution reduced wait times and improved patient satisfaction. Professional and fast.',
  },
  {
    name: 'Mateo Garcia',
    company: 'ShopSuite',
    quote:
      'Clean design, robust tech, and great communication. We finally have a dashboard our team loves to use.',
  },
]

export default function Showcase() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Case Studies */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-manrope"
          >
            Our Impact in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-base leading-7 text-gray-600"
          >
            A selection of recent projects showcasing measurable outcomes.
          </motion.p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <img src={p.img} alt="Case study" loading="lazy" className="h-44 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{p.summary}</p>
                <button className="mt-4 inline-flex items-center text-sm font-medium text-[#0077ff] hover:underline">
                  Read more →
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-24 max-w-3xl text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl font-manrope"
          >
            What Our Clients Say
          </motion.h3>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-sm leading-6 text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-gray-900">
                {t.name}
                <span className="ml-2 font-normal text-gray-500">• {t.company}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
