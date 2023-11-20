import React from 'react';
import s from './upBar.module.css';

const UpBar = () => {

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

    return (
        <div className={s.upbar}>
            {
                datas.map(data => {
                    return (
                        <div className={s.data}>
                            <img src={data.src} alt={data.alt} />
                            <spam>{data.text}</spam>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UpBar;