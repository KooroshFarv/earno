'use client'
import React from 'react';
import ProgressIndicator from '../ProgressIndicator/page';
import {useRouter} from 'next/navigation'

const PaymentPage = () => {
    const router = useRouter();
  return (
    <div>
      <ProgressIndicator currentStep={3} />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl mb-6 text-right">نحوه پرداخت</h1>
        {/* Add payment form or details here */}
      </div>

<button
  onClick={() => router.push('/components/Confirmation')}
  className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
>
  ادامه به اطلاعات ارسال
</button>
    </div>
  );
};

export default PaymentPage;