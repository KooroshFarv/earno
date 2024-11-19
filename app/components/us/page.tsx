'use client'
import React from 'react';
import ShippingIcon from '../icons/shipping.svg';
import QualityIcon from '../icons/quality.svg';
import PaymentIcon from '../icons/payment.svg';
import ChoiceIcon from '../icons/choice.svg';
import SupportIcon from '../icons/support.svg';

const WhyUs = () => {
  return (
    <div className="py-12 bg-gray">
      <h2 className="text-center font-bold text-2xl mb-8">Why Choose Us</h2>
      <div className="flex justify-around text-center max-w-5xl mx-auto gap-20">
        
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="font-semibold text-lg mb-2">ارسال به سراسر کشور</h3>
          <p className="text-gray-600">ارسال فوری</p>
        </div>
        
        <div className="flex flex-col items-center">

          {/* <QualityIcon className="h-12 w-12 mb-4" /> */}

          <h3 className="font-semibold text-lg mb-2">خرید مطمئن</h3>
          <p className="text-gray-600">تضمین اصالت</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4">💳</div>
          <h3 className="font-semibold text-lg mb-2">درگاه پرداخت</h3>
          <p className="text-gray-600">پرداخت ایمن</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4">🎧</div>
          <h3 className="font-semibold text-lg mb-2">انتخاب راحت</h3>
          <p className="text-gray-600">تنوع محصولات</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="font-semibold text-lg mb-2">پشتیبانی مشتریان</h3>
          <p className="text-gray-600">پشتیبانی 24/7</p>
        </div>
        
      </div>
    </div>
  );
}

export default WhyUs;
