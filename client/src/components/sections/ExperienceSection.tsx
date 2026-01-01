import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior iOS Developer',
    company: 'Linkers IT (Shop My Influence)',
    location: 'Nabeul, Tunisia',
    period: 'Dec 2022 – Present',
    description: [
      'Led the technical evolution and redesign of complex iOS applications with emphasis on scalability and maintainability',
      'Took ownership of core application modules, contributing to long-term technical stability and performance',
      'Designed modular UIKit-based architectures with progressive SwiftUI integration',
      'Implemented advanced API integrations, real-time data synchronization, analytics, and third-party services',
      'Actively participated in technical decision-making, code reviews, and collaboration with product, design, and backend teams',
    ],
  },
  {
    title: 'iOS Developer',
    company: 'Altair Solution',
    location: 'Manouba, Tunisia',
    period: 'Jan 2020 – Oct 2022',
    description: [
      'Developed and maintained multiple iOS applications across various business domains',
      'Implemented authentication flows, secure payments, push notifications, and real-time features',
      'Refactored existing codebases to improve performance, stability, and code readability',
      'Collaborated across the full development lifecycle, from technical analysis to App Store publication',
    ],
  },
];

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="experience" className="relative py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Professional Experience
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            A track record of delivering high-quality iOS applications and technical leadership.
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={cardVariants}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center">
                <Briefcase size={20} className="text-blue-600" />
              </div>

              {/* Card content */}
              <motion.div
                className="ml-20 glass rounded-xl p-6 hover-lift"
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500">
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-gray-600 mt-2 md:mt-0 bg-blue-50 px-4 py-2 rounded-lg">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
