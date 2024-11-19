'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FaqData {
    question: string;
    answer: string;
}const faq: FaqData[] = [
    {
      question: "از زمان ثبت سفارشی، چند روزه به دستم میرسه؟",
      answer: "به روش پست پیشتاز ۳ الی ۷ روزه، و با ارسال از طریق اتوبوس به ۲۴ تا ۴۸ ساعت محصول به دستتون میرسه. البته فقط ارسال به روش پست پیشتاز رایگانه!"
    },
    {
      question: "اگه گیکلبی رو گم کردیم چی؟",
      answer: "نگران نباشید! با اطمینان دوتا گیکلبی دیگه رو می‌تونید سفارش بدید؛ یعنی کلا ۴ عدد!"
    },
    {
      question: "گیکلبی به چه صورت شارژ میشه؟",
      answer: "شما باید یونیت اصلی که به دور گردنتون میندازین رو به مدت یک و نیم ساعت شارژ کنید که در مدل های مختلف بین ۳ تا ۸ ساعت شارژ نگه میداره."
    },
    {
      question: "میکروفون گیکلبی کجاست؟ و چطور میتونیم صحبت کنیم؟",
      answer: "سیمی جداگانه از یونیت اصلی خارج میشه که در راس سیم میکروفون کار گذاشته شده که شما میتونید آن را در زیر یقه لباس یا سر آستین لباس‌تون متصل کنید. و فقط کافیه با نفس کشیدن خودتون صحبت کنید! و در سمت مقابل صدای شما را واضح میشنوه."
    },
    {
      question: "در چه زمینه ای میشه از گیکلبی استفاده کرد؟",
      answer: "گیکلبی هم مثل تمام هندزفری های معمول در بازار، امکان مکالمه و موزیک گوش دادن با آن را دارید."
    },
    {
      question: "اگه گیکلبی تو گوشمون گیر کرد چی؟",
      answer: "درسته! اساسا گیکلبی تو گوش شما در حفره استخوان میانی گوش گیر میکنه و شما میتونین با ابزار باریکی که درون بسته ارسالی هست گیکلبی رو خارج کنید. (یا با هر ابزاری دیگه‌ای)"
    },
    {
      question: "سرمون رو تکون بدیم گیکلبی از گوشمون نمیفته؟",
      answer: "خیر. در حفره استخوان میانی گوش گیر میکنه و فقط با ابزار مخصوصش در میاد."
    },
    {
      question: "آیا گیکلبی (هندزفری دومیلیمتری) به گوش یا مغز ما آسیب میزنه؟",
      answer: "گیکلبی استاندارد های اتحادیه اروپا رو داره و با مجوز ساخته شده ولی تمام هندزفری ها اگر مصرف طولانی مدت داشته باشید به گوش و مغز شما آسیب وارد میکنند و نباید در مصرف آن افراط کنید. همانطور که مگنت هندزفری یا همون گیکلبی در حفره استخوان میانی گوش گیر میکنه و با پرده گوش شما فاصله داره."
    },
    {
      question: "آیا برای خرید لازم است از قبل در وبسایت ثبت‌نام کرده باشیم؟",
      answer: "خیر. شما با انتخاب و اضافه کردن محصولات به سبد خریدتان می‌توانید اطلاعات فردی و استان‌تان را کامل کنید و پرداخت را انجام دهید."
    },
    {
      question: "چطور هزینه سفارش را پرداخت کنم؟",
      answer: "تمامی کاربران می‌توانند از طریق درگاه بانکی با تمام کارت‌های عضو شبکه شتاب سفارش را به صورت اینترنتی پرداخت نمایند."
    }
  ];
  

const Faq = () => {
    const [active, setActive] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        if (active.includes(index)) {
            setActive(active.filter(i => i !== index));
        } else {
            setActive([...active, index]);
        }
    };

    return (
        <div className="p-6 max-w-6xl mx-auto rounded-lg">
            <h2 className="text-2xl font-bold text-end mb-6">سوالات متداول</h2>
            {faq.map((item, index) => (
                <div key={index} className="border-b py-4 ">
                    <div
                        className="flex justify-between cursor-pointer"
                        onClick={() => toggleItem(index)}
                    >
            <h3 className="text-lg font-semibold mr-4 text-right w-full flex justify-end">{item.question}</h3>
            <span
                            className={`flex items-center bg-black text-white justify-center w-8 h-8 rounded-full transition-transform duration-1000
                                 ease-in-out transform 
                                ${ active.includes(index) ? 'rotate-60' : 'rotate-0'
                            }`}
                        >
                            {active.includes(index) ? <FiChevronUp /> : <FiChevronDown />}
                        </span>
                    </div>
                    <div
                        className={`overflow-hidden  transition-all duration-500 ease-in-out ${
                            active.includes(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-15'
                        }`}
                    >
                        <p className="mt-4 text-right  text-gray-700">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
