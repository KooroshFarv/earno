'use client';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormValues } from './schema';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // For flip animation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log('Form Data', data);
    setIsSubmitted(true); // Trigger the flip effect
  };

  return (
    <div className="container">
      <div className={`form-container ${isSubmitted ? 'flip' : ''}`}>
        {/* Form Side */}
        <div className="form-content">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input {...register('name')} placeholder="Name" />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
              <input {...register('email')} placeholder="Email" />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <textarea {...register('message')} placeholder="Message" />
              {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Thank You Side */}
        <div className="thank-you">
          <h1>Thank You!</h1>
          <p>Your message has been sent successfully.</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          perspective: 1000px;
        }

        .form-container {
          width: 100%;
          height: 400px;
          display: flex;
          transform-style: preserve-3d;
          transition: transform 1s ease-in-out;
        }

        .form-content,
        .thank-you {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
        }

        .form-content {
          background-color: black;
          color: white;
        }

        .thank-you {
          background-color: white;
          color: black;
          transform: rotateY(180deg);
        }

        .flip {
          transform: rotateY(180deg);
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        button {
          padding: 10px 20px;
          background-color: white;
          color: black;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: black;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
