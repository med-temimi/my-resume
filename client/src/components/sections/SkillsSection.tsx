import { motion } from 'framer-motion';
import { Code2, Zap, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    skills: ['Swift', 'UIKit', 'SwiftUI', 'Combine', 'async/await'],
  },
  {
    title: 'iOS Technologies',
    icon: Zap,
    skills: ['CoreData', 'MapKit', 'Apple Pay', 'Auto Layout', 'GCD'],
  },
  {
    title: 'Backend & Data',
    icon: Database,
    skills: ['REST APIs', 'Firebase', 'Firestore', 'Realtime DB', 'FCM'],
  },
  {
    title: 'Tools & Practices',
    icon: Wrench,
    skills: ['Xcode', 'Git/GitHub', 'XCTest', 'Instruments', 'TestFlight'],
  },
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            A comprehensive toolkit of technologies and practices that enable me to build high-quality iOS applications.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="group glass hover-lift rounded-xl p-6 cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -8 }}
              >
                <div className="mb-4 p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg w-fit">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
