import React from 'react';

const PricingCard = ({ pricing }) => {
    // console.log(pricing); // ডাটা চেক করার জন্য

    return (
        <div className='bg-white text-neutral-800 p-6 rounded-xl shadow-lg border border-gray-200'>
            <div>
                <h2 className='text-gray-500 uppercase text-sm font-bold'>{pricing?.type}</h2>
                <div className='mt-2'>
                    <h3 className='font-semibold text-xl'>{pricing?.title}</h3>
                    <p className='text-gray-400 text-sm'>{pricing?.subtitle}</p>
                </div>
            </div>

            <div className='mt-2'>
                <h3 className='text-3xl font-bold'>${pricing?.price}</h3>
                <p className='text-gray-500 text-sm'>{pricing?.unit}</p>
            </div>

            {/* সরাসরি li ব্যবহার করা হয়েছে যাতে Features এরর না দেয় */}
            <ul className='text-neutral-700 space-y-2 my-4'>
                {
                    pricing?.features?.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                            <span className="text-blue-500 font-bold">✓</span> {feature}
                        </li>
                    ))
                }
            </ul>
            

            <button className='w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
                {pricing?.button_text || 'Select Plan'}
            </button>
        </div>
    );
};

export default PricingCard;


//    <div className='flex mx-8 mt-2'>
//             <div className='flex flex-col bg-white text-black p-6 gap-2 rounded-xl shadow-lg '>
//                 <h2 className=' text-gray-500 uppercase '>{pricing?.type}</h2>

//                  <div className='mt-2'>
//                     <h3 className='font-semibold text-xl'>{pricing?.title}</h3>
//                     <p className='text-gray-500'>{pricing?.subtitle}</p>
//                 </div>

//                 <div className='mt-2'>
//                     <h3 className='text-3xl font-bold text'>$ <span>{pricing?.price}</span></h3>
//                     <p className='text-gray-500'>{pricing?.unit}</p>
//                 </div>

//                <ul className='text-neutral-700'>
//                 {
//                     pricing?.features.map((feature, index) => <Features key={index} feature={feature}></Features>)
//                 }
//                </ul>
//                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'>{pricing?.button_text}</button>

//             </div>
//         </div>