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

        },
        {
            src: '/images/circle-green.svg',
            alt: 'circle',
            text: 'Step 2 : Checkout',
            srctick: '/images/tick-circle.svg',
            number: '',

        },
        {
            src: '/images/circle-blue.svg',
            alt: 'circle',
            text: 'Step 3 : Special Offer',
            srctick: '',
            number: '3',

        },
        {
            src: '/images/circle-border-blue.svg',
            alt: 'circle',
            text: 'Step 4 : Confirmation',
            srctick: '',
            number: '4',


        },
    ]

    return (
        <div className={s.upsell}>
            <div className={s.frameone}>
                <div><img src="/images/clarifion.png" alt="clarifion" /></div>
                <div>
                    <img src="/images/mcafee.svg" alt="mcafee" />
                    <img src="/images/norton.svg" alt="" />
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
                                    <div className={s.containertick}>
                                        {step.number === '' ?
                                            <img className={s.imagetick} src={step.srctick} alt={step.alt} />
                                            :
                                            <spam className={s.imagetick}>{step.number}</spam>
                                        }
                                    </div>

                                </div>
                                <div className={s.text} >{step.text}</div>
                            </div>
                        )
                    })
                }
                <div style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
                    <div style={{ width: 40, height: 40, position: 'relative' }}>
                        <div style={{ width: 40, height: 40, left: 0, top: 0, position: 'absolute', background: '#85BF55', borderRadius: 9999, border: '2px #85BF55 solid' }} />
                        <div style={{ width: 16, height: 16, left: 12, top: 12, position: 'absolute' }}>
                            <div style={{ width: 20, height: 16, left: -2, top: 0, position: 'absolute' }}>
                                <div style={{ width: 20, height: 14, left: 0, top: 1, position: 'absolute', border: '2.50px white solid' }}></div>
                                <div style={{ width: 16, height: 16, left: 2, top: 0, position: 'absolute', opacity: 0 }}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ color: 'black', fontSize: 20, fontFamily: 'Manrope', fontWeight: '400', textTransform: 'capitalize', lineHeight: 22, wordWrap: 'break-word' }}>Step 1 : Cart Review</div>
                </div>
            </div>
            <div className={s.framefive}></div>
        </div>
    );
};

export default Upsell;