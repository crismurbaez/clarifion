import React from 'react';
import s from './upsell.module.css';


const Upsell = () => {

    const steps = [

        {
            src: '/images/circle-green.svg',
            alt: 'circle',
            text: 'Step 1 : Cart Review',
            srctick: '/images/tick-circle.svg',
            number: '',
            style: null,
            styletext: null,

        },
        {
            src: '/images/circle-green.svg',
            alt: 'circle',
            text: 'Step 2 : Checkout',
            srctick: '/images/tick-circle.svg',
            number: '',
            style: null,
            styletext: null,

        },
        {
            src: '/images/circle-blue.svg',
            alt: 'circle',
            text: 'Step 3 : Special Offer',
            srctick: '',
            number: '3',
            stylenumber: { color: 'white' },
            styletext: { fontWeight: '700', color: 'black' },
        },
        {
            src: '/images/circle-border-blue.svg',
            alt: 'circle',
            text: 'Step 4 : Confirmation',
            srctick: '',
            number: '4',
            stylenumber: { color: '#2C7EF8' },
            styletext: null,
        },
    ]

    return (
        <div className={s.upsell}>
            <div className={s.frameone}>
                <div><img src="/images/clarifion.png" alt="clarifion" /></div>
                <div>
                    <img src="/images/mcafee.svg" alt="mcafee" />
                    <img src="/images/norton.svg" alt="norton" />
                </div>
            </div>
            <div className={s.frametwo}>
                Wait ! Your Order In Progress
            </div>
            <div className={s.framethree}>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
            </div>
            <div className={s.framefour}>
                {
                    steps.map(step => {
                        return (
                            <div className={s.step}>
                                <div className={s.tickcircle}>
                                    <img className={s.imagecircle} src={step.src} alt={step.alt} />
                                    {step.number === '' ?
                                        <img className={s.imagetick} src={step.srctick} alt={step.alt} />
                                        :
                                        <spam style={step.stylenumber} className={s.number}>{step.number}</spam>
                                    }
                                </div>
                                <div style={step.styletext} >{step.text}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={s.framefive}>
                <div className={s.sectionleft}>
                    <div><img className={s.imageoffer} src="/images/imageoffer.png" alt="imageoffer" /></div>
                    <div></div>
                </div>
                <div className={s.sectionright}></div>
            </div>

        </div>
    );
};

export default Upsell;