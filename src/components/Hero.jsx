import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-manrope"
            >
              Powering the Future with Intelligent Digital Solutions.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600 max-w-xl"
            >
              We build AI-powered apps, websites, and data systems that accelerate business growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#0077ff] px-6 py-3 text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get a Free Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-gray-900 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Explore Our Services
              </a>
            </motion.div>
          </div>

          {/* Spline scene */}
          <div className="relative h-[380px] w-full sm:h-[480px] lg:h-[560px]">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* soft gradient glows */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
      {/* subtle divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  )
}
