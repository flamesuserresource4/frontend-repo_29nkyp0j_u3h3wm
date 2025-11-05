import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-manrope"
          >
            Let’s Build Something Great Together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base leading-7 text-gray-600"
          >
            We’d love to hear your ideas and show how AI can take your business further.
          </motion.p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="jane@company.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-[#0077ff] px-6 py-3 text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-50"
              >
                <Phone className="mr-2 h-4 w-4" /> Book a Call
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-50"
              >
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Chat
              </a>
            </div>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">Who We Are</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Optivex Solutions is a next-generation technology agency that merges creativity, intelligence, and innovation. We specialize in developing scalable digital solutions using AI and modern web technologies.
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div className="flex items-center"><Mail className="mr-2 h-4 w-4 text-[#0077ff]" /> hello@optivex.ai</div>
              <div className="flex items-center"><Phone className="mr-2 h-4 w-4 text-[#0077ff]" /> +1 (555) 123-4567</div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  )
}
