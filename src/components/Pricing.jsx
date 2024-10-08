import React from 'react'
import Plan from './PlanCard';

const Pricing = () => {
    const plans = [
        {
          planType: "Free",
          summary: "A starter plan for individuals.",
          pricePerMonth: "$10/month",
          list: ["1 project", "Basic support", "Access to community","Periodic updates"],
          arrow:'pi pi-arrow-right',
          button: "Sign Up",
          bg:'bg-black'
        },
        {
          planType: "Basic",
          summary: "A plan for professionals.",
          pricePerMonth: "$30/month",
          list: ["5 projects", "Priority support", "Access to community", "Advanced tools"],
          arrow:'pi pi-arrow-right',
          button: "Get Started",
           bg:'bg-orange-600'
        },
        {
          planType: "Pro",
          summary: "A comprehensive plan for large teams.",
          pricePerMonth: "Contact Us",
          list: ["Unlimited projects", "24/7 support", "Dedicated account manager", "Custom tools"],
          arrow:'pi pi-arrow-right',
          button: "Contact Us",
           bg:'bg-indigo-500/80'
          
        }
      ];
      
  return (
    <>
        <main className='px-10 py-10 flex justify-between flex-wrap'
        id='Pricing'>
            <section className='w-52'>
                <p className='text-5xl font-semibold pb-10'>Pricing and Plan</p>
            </section>
            <section className='grid lg:grid-cols-3 mx-auto  md:grid-cols-2 grid-cols-1 gap-5'> 
                {
                    plans.map((plan)=>(
                      <Plan
                      key={plan.planType}
                      planType={plan.planType}
                      pricePerMonth={plan.pricePerMonth}
                      list={plan.list}
                      arrow={plan.arrow}
                      button = {plan.button}
                      summary = {plan.summary}
                      bg={plan.bg}
                      />
                    ))
                }
            </section>
        </main>
    </>
  )
}

export default Pricing