'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock as ClockIcon } from 'lucide-react';

export const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit'
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="flex items-center gap-2 text-sm text-gray-500"
      whileHover={{ scale: 1.05 }}
    >
      <ClockIcon className="w-4 h-4" />
      <span>{time}</span>
    </motion.div>
  );
}; 