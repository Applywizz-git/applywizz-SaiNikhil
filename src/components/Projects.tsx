import { motion, useInView } from 'framer-motion';

import { useRef, useState } from 'react';

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);





  const projects = [
    {
      title: 'Cloud-Native Banking Platform',
      description:
        'Built a payment orchestration layer using Spring Boot, Spring Cloud, Kafka, Redis, and AWS Lambda to route transactions efficiently and improve settlement speed. Applied CQRS and event-sourcing with Kafka Streams and PostgreSQL to maintain consistent audit trails. Delivered secure REST and GraphQL APIs using Spring Boot, OpenAPI, and OAuth2/JWT, enabling downstream teams to integrate new banking features with fewer defects.',
      tech: ['Spring Boot', 'Kafka', 'Redis', 'AWS Lambda', 'GraphQL', 'OAuth2'],
      image:
        '/banking_platform.png',
    },
  ];



  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white dark:bg-[#0D0C12] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 to-[#F45D48]/5 dark:from-[#6EE7B7]/10 dark:to-[#F45D48]/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold font-['Poppins'] text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl group"
              >
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold font-['Poppins'] text-gray-900 dark:text-white mb-4"
                >
                  {projects[currentIndex].title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-['Inter'] leading-relaxed"
                >
                  {projects[currentIndex].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-3 mb-6"
                >
                  {projects[currentIndex].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-[#F45D48]/10 to-[#6EE7B7]/10 dark:from-[#F45D48]/20 dark:to-[#6EE7B7]/20 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4"
                >

                </motion.div>
              </div>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  );
};
