import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center">
        {/* Flame Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 15 5.5 15 8.5C15 10.43 13.43 12 11.5 12C9.57 12 8 10.43 8 8.5C8 5.5 11 2 11 2" stroke="#E8601C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="d" values="M12 2C12 2 15 5.5 15 8.5C15 10.43 13.43 12 11.5 12C9.57 12 8 10.43 8 8.5C8 5.5 11 2 11 2; M12 3C12 3 16 6.5 16 9.5C16 11.43 14.43 13 12.5 13C10.57 13 9 11.43 9 9.5C9 6.5 12 3 12 3" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M12 22C16.4183 22 20 18.4183 20 14C20 11.5 18 9 18 9C18 9 16 11.5 16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 11.5 6 9 6 9C6 9 4 11.5 4 14C4 18.4183 7.58172 22 12 22Z" fill="#E8601C" />
          </svg>
        </motion.div>
        
        {/* Logo Text */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-4xl font-playfair font-bold text-text-light tracking-wider"
        >
          EMBER <span className="text-primary">&</span> SALT
        </motion.h1>
        
        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-[2px] bg-primary mt-6"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
