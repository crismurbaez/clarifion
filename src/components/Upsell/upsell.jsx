import React from 'react';
import s from './upsell.module.css';


const Upsell = () => {

    const steps = [

        {
            src: '/images/circle-green.svg',
            alt: 'circle',
            text: 'Step 1 : Cart Review',

        },
        {
            src: '/images/circle-green.svg',
            alt: 'circle',
            text: 'Step 2 : Checkout',

        },
        {
            src: '/images/circle-blue.svg',
            alt: 'arrow',
            text: 'Step 3 : Special Offer',

        },
        {
            src: '/images/circle-border-blue.svg',
            alt: 'checkmark',
            text: 'Step 4 : Confirmation',


        },
    ]

    return (
        <div className={s.upsell}>
            <div className={s.frameone}></div>
            <div className={s.frametwo}>
                Wait ! your order in progress
            </div>
            <div className={s.framethree}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
            </div>
            <div className={s.framefour}>
                {
                    steps.map(step => {
                        return (
                            <div className={s.step}>
                                <img src={step.src} alt={step.alt} />
                                <spam>{step.text}</spam>
                            </div>
                        )
                    })
                }
            </div>
            <div className={s.framefive}></div>
        </div>
    );
};

export default Upsell;