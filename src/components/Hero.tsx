// import { motion } from 'framer-motion';
// import { Download, ExternalLink, Code, Briefcase, Globe } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';

// export const Hero = () => {
//   const [text, setText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const roles = ['Java Full Stack Developer', 'Cloud-Native Architect', 'Microservices Specialist', 'DevSecOps Engineer'];

//   useEffect(() => {
//     const role = roles[currentIndex];
//     let charIndex = 0;
//     const typeInterval = setInterval(() => {
//       if (charIndex <= role.length) {
//         setText(role.slice(0, charIndex));
//         charIndex++;
//       } else {
//         clearInterval(typeInterval);
//         setTimeout(() => {
//           setCurrentIndex((prev) => (prev + 1) % roles.length);
//         }, 2000);
//       }
//     }, 100);

//     return () => clearInterval(typeInterval);
//   }, [currentIndex]);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0C12] bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: "url('/bgimage2.png')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

//       {/* Gradient lighting for depth */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.25 }}
//         transition={{ duration: 1 }}
//         className="absolute top-10 left-10 sm:top-20 sm:left-20 w-56 h-56 sm:w-96 sm:h-96 bg-[#F45D48] rounded-full blur-[120px]"
//       ></motion.div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.25 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-56 h-56 sm:w-96 sm:h-96 bg-[#6EE7B7] rounded-full blur-[120px]"
//       ></motion.div>

//       <div className="container mx-auto px-6 py-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//           {/* Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center lg:text-left order-2 lg:order-1"
//           >
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-[#6EE7B7] text-base sm:text-lg mb-3 sm:mb-4 font-['Inter']"
//             >
//               Hi, I'm
//             </motion.p>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-['Poppins'] text-white mb-4 sm:mb-6 leading-tight"
//             >
//               Sai Nikhil Pothuraju
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-xl sm:text-2xl md:text-3xl font-bold font-['Poppins'] text-[#F45D48] mt-2 mb-8 sm:mb-12 h-10 sm:h-12"
//             >
//               Building Scalable Cloud Solutions with {text}
//               <span className="animate-pulse">|</span>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-base sm:text-lg text-gray-300 dark:text-[#A1A1AA] mb-8 font-['Inter'] leading-relaxed max-w-2xl mx-auto lg:mx-0"
//             >
//               Java Full Stack Developer with 7+ years building cloud-native, event-driven, and distributed platforms across fintech, SaaS workflow automation, CPaaS messaging, and education systems.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex flex-wrap justify-center lg:justify-start gap-4"
//             >
//               <Link to="projects" smooth={true} duration={500} offset={-80}>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-6 sm:px-8 py-3 sm:py-4 bg-[#F45D48] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#F45D48]/50 transition-all duration-300 flex items-center gap-2 group"
//                 >
//                   View Projects
//                   <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//               </Link>

//               <motion.a
//                 href="/Sai_Nikhil_Resume.pdf"
//                 download
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-[#6EE7B7] hover:bg-[#6EE7B7]/20 transition-all duration-300 flex items-center gap-2 group"
//               >
//                 Download Resume
//                 <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* Profile Image with Floating Icons */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="order-1 lg:order-2 flex justify-center relative"
//           >
//             <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
//               {/* Rotating Glow */}
//               <motion.div
//                 animate={{ rotate: [0, 360] }}
//                 transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
//                 className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] blur-2xl opacity-40"
//               ></motion.div>

//               {/* Profile Image */}
//               <img
//                 src="/image.png"
//                 alt="Sai Nikhil Pothuraju"
//                 className="w-full h-full object-cover"
//               />
//               {/* Floating Icons */}
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
//                 className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 text-[#6EE7B7]"
//               >
//                 <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />
//               </motion.div>

//               <motion.div
//                 animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
//                 className="absolute top-1/3 -right-6 sm:-right-10 text-[#F45D48]"
//               >
//                 <Globe className="w-6 h-6 sm:w-8 sm:h-8" />
//               </motion.div>

//               <motion.div
//                 animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
//                 className="absolute bottom-0 -left-6 sm:-left-10 text-[#6EE7B7]"
//               >
//                 <Code className="w-6 h-6 sm:w-8 sm:h-8" />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };




import { motion } from 'framer-motion';
import { Download, ExternalLink, Code, Briefcase, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = ['Java Full Stack Developer', 'Cloud-Native Architect', 'Microservices Specialist', 'DevSecOps Engineer'];

  useEffect(() => {
    const role = roles[currentIndex];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= role.length) {
        setText(role.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  // Handle image error with proper TypeScript typing
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    console.error('Image failed to load at /image.png');
    target.src = 'https://via.placeholder.com/400x400/0D0C12/F45D48?text=Sai+Nikhil';
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0C12] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bgimage2.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Gradient lighting for depth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10 sm:top-20 sm:left-20 w-56 h-56 sm:w-96 sm:h-96 bg-[#F45D48] rounded-full blur-[120px]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-56 h-56 sm:w-96 sm:h-96 bg-[#6EE7B7] rounded-full blur-[120px]"
      ></motion.div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#6EE7B7] text-base sm:text-lg mb-3 sm:mb-4 font-['Inter']"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-['Poppins'] text-white mb-4 sm:mb-6 leading-tight"
            >
              Sai Nikhil Pothuraju
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold font-['Poppins'] text-[#F45D48] mt-2 mb-8 sm:mb-12 h-10 sm:h-12"
            >
              Building Scalable Cloud Solutions with {text}
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-gray-300 dark:text-[#A1A1AA] mb-8 font-['Inter'] leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Java Full Stack Developer with 7+ years building cloud-native, event-driven, and distributed platforms across fintech, SaaS workflow automation, CPaaS messaging, and education systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#F45D48] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#F45D48]/50 transition-all duration-300 flex items-center gap-2 group"
                >
                  View Projects
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-[#6EE7B7] hover:bg-[#6EE7B7]/20 transition-all duration-300 flex items-center gap-2 group"
              >
                Download Resume
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Rotating Glow */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] blur-2xl opacity-40"
              ></motion.div>

              {/* Profile Image - FIXED */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="/image.png"
                  alt="Sai Nikhil Pothuraju"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 text-[#6EE7B7]"
              >
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/3 -right-6 sm:-right-10 text-[#F45D48]"
              >
                <Globe className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-0 -left-6 sm:-left-10 text-[#6EE7B7]"
              >
                <Code className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};