import { motion } from 'framer-motion';

export function BackgroundLayers() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-dr-void select-none">
      {/* Aurora light layer 1 - Cyan glow in top-left */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-dr-cyan/10 blur-[120px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Aurora light layer 2 - Rose glow in middle-right */}
      <motion.div
        className="absolute top-[20%] -right-[15%] w-[70vw] h-[70vw] rounded-full bg-dr-rose/8 blur-[150px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Aurora light layer 3 - Violet/Indigo glow in bottom-left */}
      <motion.div
        className="absolute -bottom-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-dr-violet/8 blur-[130px]"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 50, -20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Aurora light layer 4 - Amber soft glow top-right */}
      <motion.div
        className="absolute top-[-10%] left-[45%] w-[45vw] h-[45vw] rounded-full bg-dr-amber/5 blur-[110px]"
        animate={{
          x: [0, -20, 20, 0],
          y: [0, 20, -10, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle Grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70"
      />

      {/* High-end Subtle noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.018] bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
