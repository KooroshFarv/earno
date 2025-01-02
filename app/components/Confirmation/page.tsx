'use client'
import ProgressIndicator from "../ProgressIndicator/page";

const ConfirmationPage = () => {
    return (
      <div>
        <ProgressIndicator currentStep={4} />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl mb-6 text-right">پایان خرید</h1>
          <p>سفارش شما با موفقیت ثبت شد. با تشکر از خرید شما.</p>
        </div>
      </div>
    );
  };
  
  export default ConfirmationPage;