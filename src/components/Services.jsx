import { motion } from 'framer-motion'
import { Brain, Globe, Smartphone, Bot, Cog, LineChart } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI & ML Solutions',
    desc: 'Predictive analytics, NLP, computer vision, and intelligent automation tailored to your goals.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'High-performance, responsive websites designed for conversion and scalability.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Cross-platform mobile and desktop applications with delightful user experiences.',
  },
  {
    icon: Bot,
    title: 'Chatbots & Agents',
    desc: 'AI-powered conversational systems that engage users and streamline support.',
  },
  {
    icon: Cog,
    title: 'Automation',
    desc: 'Integrations and workflows that remove busywork and speed up operations.',
  },
  {
    icon: LineChart,
    title: 'Data Analytics',
    desc: 'Dashboards and insights to track KPIs and make confident, data-driven decisions.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-manrope"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base leading-7 text-gray-600"
          >
            We merge creativity with intelligence to deliver scalable, modern solutions.
          </motion.p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3f4f6] text-[#0077ff]"><s.icon size={24} /></div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{s.desc}</p>
              <div className="mt-4 text-sm font-medium text-[#0077ff] opacity-0 transition-opacity group-hover:opacity-100">Learn more →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
