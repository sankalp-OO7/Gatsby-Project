// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// import { Box, Text } from '@chakra-ui/react'; // Assuming you're using Chakra UI
// import '../../styles/home/Home7.module.css'; // Import the CSS file

// // Custom hook for parallax effect
// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// // Media component to handle both image and video with parallax effect
// function Media({ id, text, type, src }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (
//     <section className="parallax-image-section">
//       <Box ref={ref} className="parallax-image-container" position="relative" mb={8}>
//         {type === 'image' ? (
//           <motion.img 
//             src={src}
//             alt={`Media ${id}`}
//             style={{ y }}
//             className="parallax-image"
//           />
//         ) : (
//           <motion.video 
//             src={src}
//             style={{ y }}
//             className="parallax-video"
//             autoPlay
//             loop
//             muted
//           />
//         )}
//         <motion.h2 className="parallax-image-text" style={{ y }}>
//           {`#00${id}`}
//         </motion.h2>
//         <Box className="text-overlay" position="absolute" bottom="20px" left="20px">
//           <Text color="white" fontSize="xl">{text}</Text>
//         </Box>
//       </Box>
//     </section>
//   );
// }

// // Main component
// export default function ParallaxSection() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   // Define your media data here
//   const mediaData = [
//     { id: 1, text: 'Text for Image 1', type: 'image', src: '/1.jpg' },
//     { id: 2, text: 'Text for Video 2', type: 'video', src: '/2.mp4' },
//     { id: 3, text: 'Text for Image 3', type: 'image', src: '/3.png' },
//     { id: 4, text: 'Text for Video 4', type: 'video', src: '/4.mp4' },
//     { id: 5, text: 'Text for Image 5', type: 'image', src: '/5.webp' },
//   ];

//   return (
//     <></>
//     // <Box className="parallax-section">
//     //   {mediaData.map((media) => (
//     //     <Media key={media.id} id={media.id} text={media.text} type={media.type} src={media.src} />
//     //   ))}
//     //   <motion.div 
//     //     className="progress"
//     //     style={{
//     //       scaleX,
//     //     }}
//     //   />
//     // </Box>
//   );
// }
