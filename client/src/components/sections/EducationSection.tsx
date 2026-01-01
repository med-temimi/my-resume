import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: "Master's Degree",
    field: 'Software and Knowledge Engineering',
    school: 'ISIMED Tunisia',
    period: '2017 – 2019',
    icon: GraduationCap,
  },
  {
    degree: "Bachelor's Degree",
    field: 'Multimedia and Web Applications',
    school: 'ISIMED Tunisia',
    period: '2014 – 2017',
    icon: GraduationCap,
  },
];

const academicProjects = [
  {
    title: 'Blind Mode',
    description: 'Android launcher focused on accessibility for visually impaired users, leveraging machine learning and location-based services.',
    technologies: ['Android', 'Machine Learning', 'Location Services'],
  },
  {
    title: 'SMS Hub',
    description: 'Web-based platform for bulk SMS management with scheduling, reporting, and API integration.',
    technologies: ['Web Development', 'API Integration', 'Scheduling'],
  },
];

export default function EducationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="education" className="relative py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Education & Certifications
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            Formal education and academic projects that shaped my technical foundation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Degrees</h3>
            <div className="space-y-4">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass rounded-xl p-6 hover-lift"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg h-fit">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 font-semibold">
                          {edu.field}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {edu.school}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {edu.period}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Academic Projects */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Projects</h3>
            <div className="space-y-4">
              {academicProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-6 hover-lift"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg h-fit">
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {project.title}
                      </h4>
                      <p className="text-gray-700 text-sm mt-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
