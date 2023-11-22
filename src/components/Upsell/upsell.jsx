import React from 'react';
import s from './upsell.module.css';


const Upsell = () => {
    // steps of frame four
    const steps = [

        {
            src: '/images/circle-green.svg',
            alt: 'circle',
            step: 'Step 1 : ',
            text: 'Cart Review',
            srctick: '/images/tick-circle.svg',
            number: '',
            style: null,
            styletext: null,

        },
        {
            src: '/images/circle-green.svg',
            alt: 'circle',
            step: 'Step 2 : ',
            text: 'Checkout',
            srctick: '/images/tick-circle.svg',
            number: '',
            style: null,
            styletext: null,

        },
        {
            src: '/images/circle-blue.svg',
            alt: 'circle',
            step: 'Step 3 : ',
            text: 'Special Offer',
            srctick: '',
            number: '3',
            stylenumber: { color: 'white' },
            styletext: { fontWeight: '700', color: 'black' },
        },
        {
            src: '/images/circle-border-blue.svg',
            alt: 'circle',
            step: 'Step 4 : ',
            text: 'Confirmation',
            srctick: '',
            number: '4',
            stylenumber: { color: '#2C7EF8' },
            styletext: null,
        },
    ]

    return (
        <div className={s.upsell}>
            {/* FRAME ONE */}
            {/* images logo */}
            <div className={s.frameone}>
                <div >
                    <img className={s.clarifionlogo}
                        src="/images/clarifion.png"
                        alt="clarifion" />
                </div>
                <div className={s.topimages}>
                    <img className={s.clarifionlogo} src="/images/mcafee.svg" alt="mcafee" />
                    <img className={s.clarifionlogo} src="/images/norton.svg" alt="norton" />
                </div>
            </div>
            {/* FRAME TWO */}
            {/* title */}
            <div className={s.frametwo}>
                Wait ! Your Order In Progress
            </div>
            {/* FRAME THREE */}
            {/* subtitle */}
            <div className={s.framethree}>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
            </div>
            {/* FRAME FOUR */}
            {/* steps */}
            <div className={s.framefour}>
                {
                    steps.map(st => {
                        return (
                            <div className={s.step}>
                                <div className={s.tickcircle}>
                                    <img className={s.imagecircle} src={st.src} alt={st.alt} />
                                    {st.number === '' ?
                                        <img className={s.imagetick} src={st.srctick} alt={st.alt} />
                                        :
                                        <spam style={st.stylenumber} className={s.number}>{st.number}</spam>
                                    }
                                </div>
                                <div style={st.styletext} className={s.steptext} >{st.step}</div>
                                <div style={st.styletext} >{st.text}</div>
                            </div>
                        )
                    })
                }
            </div>
            {/* FRAME FIVE */}
            {/* sections */}
            <div className={s.framefive}>
                {/* left section frame five */}
                <div className={s.leftsection}>
                    <div><img className={s.imageoffer} src="/images/imageoffer.png" alt="imageoffer" /></div>
                    <div className={s.customersection}>
                        <div className={s.customer}>
                            <div><img src="/images/customerkent.png" width={48} height={48} alt="image customer" /></div>
                            <div className={s.customernivel}>
                                <img src="/images/Stars.svg" alt="image stars" />
                                <div className={s.datecustomer}>
                                    <div className={s.customername}>Kent T.</div>
                                    <img className={s.imageverify} src="/images/verifygreen.svg" alt="verify green" />
                                    <div className={s.verify}>Verified Customer</div>
                                </div>
                            </div>


                        </div>
                        <div className={s.comment}>“As soon as the Clarifions arrived I put one in my bedroom.
                            This was late in the afternoon. When I went to the bedroom in the evening it
                            smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</div>
                    </div>
                </div>
                {/* right section frame five */}
                <div className={s.rightsection}>
                    <div className={s.special}>
                        <span className={s.prominent}>
                            ONE TIME ONLY</span>
                        <span >
                            &nbsp;Special price for 6 extra Clarifion for only&nbsp;</span>
                        <span className={s.prominent}>
                            $14 each&nbsp;</span>
                        <span >
                            ($84.00 total!)</span>
                    </div>
                    <div className={s.clarifion}>
                        <div className={s.imageclarifion}><img className={s.imageclarifion} src="/images/image-removebg.png" alt="image" /></div>
                        <div className={s.detail}>
                            <div className={s.title}>
                                <div>Clarifion Air Ionizer</div>
                                <div className={s.price}>
                                    <div className={s.deprecatedprice} >$180</div>
                                    <div className={s.validprice}>$84</div>
                                </div>
                            </div>
                            {/* stars */}
                            <div><img src="/images/Stars.svg" alt="images stars" /></div>
                            <div className={s.stock}>
                                {/* blue boton */}
                                <div style={{ width: 16, height: 16, position: 'relative' }}>
                                    <div style={{ width: 16, height: 16, left: 0, top: 0, position: 'absolute', background: '#E3EEFF', borderRadius: 9999 }} />
                                    <div style={{ width: 8.53, height: 8.53, left: 3.79, top: 3.79, position: 'absolute', background: '#2C7EF8', borderRadius: 9999 }} />
                                </div>

                                <div>12 left in Stock</div>
                            </div>
                            <div className={s.commentproductdesktop}>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
                        </div>
                    </div>
                    <div className={s.commentproductmovile}>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
                    <div className={s.ticklist}>
                        <div className={s.tickdetail}><img src="/images/tick-circle-blue.svg" alt="tick blue" />Negative Ion Technology may <b>help with allergens</b> </div>
                        <div className={s.tickdetail}> <img src="/images/tick-circle-blue.svg" alt="tick blue" />Designed for <b>air rejuvenation</b> </div>
                        <div className={s.tickdetail}> <img src="/images/tick-circle-blue.svg" alt="tick blue" /><b>Perfect for every room</b>  in all types of places.</div>
                    </div>
                    <div className={s.percentage}>
                        <div><img src="/images/percentage.svg" alt="símbolo %" /></div>

                        <div className={s.save}>
                            <span>Save &nbsp;</span>
                            <span className={s.colorsave}> 53% &nbsp;</span>
                            <span> and get &nbsp;</span>
                            <span className={s.colorsave}> 6 extra Clarifision &nbsp;</span>
                            <span> for only &nbsp;</span>
                            <span className={s.colorsave}> $14 Each.</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button className={s.buttonyes}>
                                <div>Yes - Claim my discount</div>
                                <img src="/images/arrow.svg" alt="arrow" />
                            </button>
                        </div>
                        <div className={s.free}>
                            <div>Free shipping</div>
                            <img src="/images/Line2.svg" alt="line" />
                            <img src="/images/lock2.svg" alt="lock" />
                            <div>Secure 256-bit SSL encryption.</div>
                            <img src="/images/Line2.svg" alt="line" />
                            <div>
                                <img src="/images/visa.svg" alt="visa" />
                                <img src="/images/shop-pay.svg" alt="shop-pay" />
                                <img src="/images/paypal.svg" alt="paypal" />
                                <img src="/images/mastercard.svg" alt="mastercard" />
                                <img src="/images/gpay.svg" alt="gpay" />
                                <img src="/images/apple-pay.svg" alt="apple" />
                                <img src="/images/amex.svg" alt="amex" />
                            </div>
                        </div>
                        <div className={s.nothanks}>
                            No thanks, I don’t want this.
                        </div>
                    </div>
                    <div className={s.satisfaction}>
                        <div className={s.imagesatisfaction}><img src="/images/satisfaction.png" alt="satisfaction" /></div>

                        <div>If you are not completely thrilled with your
                            Clarifion - We have a <b>30 day satisfaction guarantee</b> .
                            Please refer to our return policy at the bottom of the page
                            for more details. Happy Shopping!</div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Upsell;

