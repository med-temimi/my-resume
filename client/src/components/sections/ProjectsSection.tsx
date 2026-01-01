import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'GPS Tunisie',
    description: 'iOS fleet tracking application featuring real-time location updates, trip history management, background services, and operational alerts.',
    technologies: ['Swift', 'UIKit', 'MapKit', 'CoreLocation', 'Firebase'],
    highlights: ['Real-time tracking', 'Background services', 'Trip history', 'Operational alerts'],
  },
  {
    title: 'Wajd Care',
    description: 'Healthcare iOS application supporting online consultations, appointment scheduling, secure payments, and notification systems.',
    technologies: ['Swift', 'SwiftUI', 'Firebase', 'Apple Pay', 'Push Notifications'],
    highlights: ['Online consultations', 'Appointment scheduling', 'Secure payments', 'Notifications'],
  },
  {
    title: 'Amala',
    description: 'iOS application for booking professional cleaning services for homes and offices in the Gulf, enabling quick and reliable scheduling of qualified personnel.',
    technologies: ['Swift', 'UIKit', 'REST APIs', 'CoreData', 'Stripe'],
    highlights: ['Service booking', 'Personnel management', 'Payment integration', 'Scheduling'],
  },
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            A selection of iOS applications I have designed, developed, and shipped to the App Store.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group glass rounded-xl overflow-hidden hover-lift"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              {/* Project card header with gradient */}
              <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity duration-300"
                />
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Key Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View project button */}
                <motion.button
                  className="w-full mt-4 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
