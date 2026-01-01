import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, ArrowRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'temimi.muhamed@gmail.com',
    href: 'mailto:temimi.muhamed@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+216 96163640',
    href: 'tel:+21696163640',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tunisia (Open to international mobility)',
    href: '#',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/temimi-mohamed',
    href: 'https://linkedin.com/in/temimi-mohamed',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com',
    href: 'https://github.com',
  },
];

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="contact" className="relative py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity } as any}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass rounded-xl p-6 hover-lift text-center group"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg w-fit mx-auto mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {link.label}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                  {link.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="mailto:temimi.muhamed@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me an Email
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* Languages section */}
        <motion.div
          className="mt-16 pt-12 border-t border-white/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Languages
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { lang: 'Arabic', level: 'Native' },
              { lang: 'French', level: 'Fluent' },
              { lang: 'English', level: 'Fluent' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="glass rounded-xl p-6 text-center hover-lift"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.lang}
                </h4>
                <p className="text-gray-600">
                  {item.level}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
