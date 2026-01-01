import { motion } from 'framer-motion';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left: Text content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About Me
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                I'm an experienced iOS Developer with strong expertise in designing, developing, and maintaining high-quality native applications within the Apple ecosystem. With over 4 years of professional experience, I've built and shipped multiple apps to the App Store.
              </p>
              <p>
                My specialization lies in performance optimization, concurrency patterns, API-driven architectures, and delivering exceptional user experiences. I'm highly proficient in Swift and UIKit, with hands-on experience integrating SwiftUI in hybrid architectures.
              </p>
              <p>
                I thrive in international agile environments, with a strong focus on code quality, stability, maintainability, and user experience. I'm passionate about mentoring junior developers and making technical decisions that balance business needs with engineering excellence.
              </p>
              <p>
                Currently based in Tunisia and open to international mobility, I'm always excited to collaborate on innovative projects and contribute to building world-class iOS applications.
              </p>
            </div>
          </motion.div>

          {/* Right: Accent elements */}
          <motion.div
            className="relative h-96 hidden md:block"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 glass rounded-2xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 113, 227, 0.1)',
                  '0 0 40px rgba(168, 85, 247, 0.2)',
                  '0 0 20px rgba(0, 113, 227, 0.1)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center"
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  4+
                </div>
                <p className="text-gray-700 font-semibold">Years of iOS Development</p>
                <p className="text-gray-500 text-sm mt-2">Shipped 10+ apps to App Store</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
