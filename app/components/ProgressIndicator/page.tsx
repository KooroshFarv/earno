import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaTruck, FaCreditCard, FaCheckCircle } from 'react-icons/fa';

const ProgressIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { label: 'بررسی سبد خرید', icon: <AiOutlineShoppingCart />, completed: currentStep > 1 },
    { label: 'اطلاعات ارسال', icon: <FaTruck />, completed: currentStep > 2 },
    { label: 'نحوه پرداخت', icon: <FaCreditCard />, completed: currentStep > 3 },
    { label: 'پایان خرید', icon: <FaCheckCircle />, completed: currentStep === 4 },
  ];

  return (
    <div className="flex items-center justify-center mt-32">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: step.completed ? 1.2 : 1, 
            }}
            transition={{ duration: 0.5 }}
            className={`${
              step.completed ? 'bg-black text-white' : 'bg-gray-300 text-black'
            } rounded-full w-12 h-12 flex items-center justify-center`}
          >
            {step.icon}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              color: step.completed ? '#000' : '#000', 
            }}
            transition={{ duration: 0.5 }}
            className="ml-2"
          >
            {step.label}
          </motion.p>

   
          {index < steps.length - 1 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: step.completed ? '64px' : '32px', 
              }}
              transition={{ duration: 0.5 }}
              className={`h-1 ${
                step.completed ? 'bg-black' : 'bg-gray-300'
              } mx-2`}
            ></motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
