import React ,{use} from 'react';
import PricingCard from './PricingCard';
import Pri from './Pri';

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  // সেফটি চেক: যদি pricingData এর ভেতর pricing_plans থাকে তবে সেটি ব্যবহার করবে
  const plans = pricingData?.pricing_plans || [];

  return (
    
    <div className='mx-8 '>
       <h2 className='text-3xl font-bold mb-8'>Our Pricing Options</h2>
      <div className='grid md:grid-cols-3 gap-8'>  
      {plans.map(pricing => (
        <PricingCard key={pricing.id} pricing={pricing} />
      ))}
    </div>
    </div>
  );
};

export default PricingOptions;