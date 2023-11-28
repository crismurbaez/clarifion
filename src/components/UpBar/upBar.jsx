import React, { useState, useEffect } from 'react';
import s from './upBar.module.css';

const UpBar = () => {

    var [count, setCount] = useState(0);

    const datas = [
        {
            src: '/images/checkmark-starburst-20-regular.svg',
            alt: 'checkmark',
            text: '30-DAY SATISFACTION GUARANTEE'
        },
        {
            src: '/images/truck-light.svg',
            alt: 'truck',
            text: 'Free delivery on orders over $40.00'
        },
        {
            src: '/images/cards-heart-outline.svg',
            alt: 'heart',
            text: '50.000+ HAPPY CUSTOMERS'
        },
        {
            src: '/images/arrow-sync-checkmark-20-regular.svg',
            alt: 'arrow',
            text: '100% Money Back Guarantee'
        },
    ]

    // carousel functions-------------------
    const next = () => {
        var number = count;
        number += 1;
        if (number > datas.length - 1) {
            number -= 1
        }
        setCount(number);
    }

    const before = () => {
        var number = count;
        number -= 1;
        if (number < 0) {
            number += 1;
        }
        setCount(number);
    }
    // --------------------------------------

    return (
        <div >
            {/* desktop */}
            <div className={s.upbardesktop}>
                <div className={s.upbar}>
                    {
                        datas.map((data, index) => {
                            return (
                                <div className={s.data}>

                                    <img className={s.image} src={data.src} alt={data.alt} />
                                    <spam>{data.text}</spam>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* carousel movile */}
            <div className={s.upbarmovile}>
                <div className={s.upbar}>
                    <button id='before' className={s.layerleft} onClick={before}>
                        <img src="/images/Layer.png" alt="layer" />
                    </button>

                    <div className={s.data}>

                        <img className={s.image} src={datas[count].src} alt={datas[count].alt} />
                        <spam>{datas[count].text}</spam>

                    </div>
                    <button id='next' className={s.layerright} onClick={next}>
                        <img src="/images/Layer.png" alt="layer" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpBar;