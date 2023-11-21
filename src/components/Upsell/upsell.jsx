import React from 'react';
import s from './upsell.module.css';


const Upsell = () => {
    // steps of frame four
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
            {/* FRAME ONE */}
            <div className={s.frameone}>
                <div><img src="/images/clarifion.png" alt="clarifion" /></div>
                <div>
                    <img src="/images/mcafee.svg" alt="mcafee" />
                    <img src="/images/norton.svg" alt="norton" />
                </div>
            </div>
            {/* FRAME TWO */}
            <div className={s.frametwo}>
                Wait ! Your Order In Progress
            </div>
            {/* FRAME THREE */}
            <div className={s.framethree}>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
            </div>
            {/* FRAME FOUR */}
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
            {/* FRAME FIVE */}
            <div className={s.framefive}>
                {/* section left frame five */}
                <div className={s.sectionleft}>
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
                {/* section right frame five */}
                <div className={s.sectionright}>
                    <div className={s.special}>
                        <span className={s.prominent}>
                            ONE TIME ONLY</span>
                        <span >
                            special price for 6 extra Clarifion for only </span>
                        <span className={s.prominent}>
                            $14 each</span>
                        <span >
                            ($84.00 total!)</span>
                    </div>
                    <div className={s.clarifion}>
                        <div className={s.imageclarifion}><img src="/images/image-removebg.png" alt="image" /></div>


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
                            <div className={s.commentproduct}>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
                        </div>
                    </div>
                    <div>
                        <div className={s.tickdetail}><img src="/images/tick-circle-blue.svg" alt="tick blue" />Negative Ion Technology may <b>help with allergens</b> </div>
                        <div className={s.tickdetail}> <img src="/images/tick-circle-blue.svg" alt="tick blue" />Designed for <b>air rejuvenation</b> </div>
                        <div className={s.tickdetail}> <img src="/images/tick-circle-blue.svg" alt="tick blue" /><b>Perfect for every room</b>  in all types of places.</div>
                    </div>
                    <div>
                        <img src="/images/Group%.svg" alt="símbolo %" />
                    </div>
                    <div></div>
                </div>
            </div>

        </div >
    );
};

export default Upsell;


// FRAME 12, AL LADO DE LA IMAGEN   LISTO!!!!!!!!!!!!!!!!!!!!
{/* <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{color: 'black', fontSize: 20, fontFamily: 'Manrope', fontWeight: '400', textTransform: 'capitalize', lineHeight: 28, wordWrap: 'break-word'}}>Clarifion Air Ionizer</div>
        <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{color: '#969696', fontSize: 16, fontFamily: 'Manrope', fontWeight: '600', textDecoration: 'line-through', textTransform: 'capitalize', wordWrap: 'break-word'}}>$180</div>
            <div style={{color: '#2C7EF8', fontSize: 22, fontFamily: 'Manrope', fontWeight: '600', textTransform: 'capitalize', lineHeight: 30.80, wordWrap: 'break-word'}}>$84</div>
        </div>
    </div>
    <div style={{width: 98, height: 18, position: 'relative'}}>
        <div style={{width: 18, height: 18, left: 0, top: 0, position: 'absolute', borderRadius: 16, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 14.89, height: 14.22, background: '#FFC000'}}></div>
        </div>
        <div style={{width: 18, height: 18, left: 20, top: 0, position: 'absolute', borderRadius: 16, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 14.89, height: 14.22, background: '#FFC000'}}></div>
        </div>
        <div style={{width: 18, height: 18, left: 40, top: 0, position: 'absolute', borderRadius: 16, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 14.89, height: 14.22, background: '#FFC000'}}></div>
        </div>
        <div style={{width: 18, height: 18, left: 60, top: 0, position: 'absolute', borderRadius: 16, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 14.89, height: 14.22, background: '#FFC000'}}></div>
        </div>
        <div style={{width: 18, height: 18, left: 80, top: 0, position: 'absolute', borderRadius: 16, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 14.89, height: 14.22, background: '#FFC000'}}></div>
        </div>
    </div>
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 16, height: 16, position: 'relative'}}>
            <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', background: '#E3EEFF', borderRadius: 9999}} />
            <div style={{width: 8.53, height: 8.53, left: 3.79, top: 3.79, position: 'absolute', background: '#2C7EF8', borderRadius: 9999}} />
        </div>
        <div style={{color: '#37465A', fontSize: 16, fontFamily: 'Manrope', fontWeight: '300', wordWrap: 'break-word'}}>12 left in Stock</div>
    </div>
    <div style={{width: 398, color: '#4D5254', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 22.40, wordWrap: 'break-word'}}>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
</div> */}


// DEBAJO DEL FRAME 12 LISTO!!!!!!!!!!!!!!!!!!!

{/* <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
        <div style={{width: 22, height: 22, position: 'relative'}}>
            <div style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 20, height: 14, left: 1, top: 4, position: 'absolute', border: '2.50px #2C7EF8 solid'}}></div>
                <div style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', opacity: 0}}></div>
            </div>
        </div>
        <div style={{width: 447}}><span style="color: '#4D5254', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'">Negative Ion Technology may</span><span style="color: '#4D5254', fontSize: 16, fontFamily: 'Manrope', fontWeight: '700', lineHeight: 25.60, wordWrap: 'break-word'"> help with allergens</span></div>
    </div>
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
        <div style={{width: 22, height: 22, position: 'relative'}}>
            <div style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 20, height: 14, left: 1, top: 4, position: 'absolute', border: '2.50px #2C7EF8 solid'}}></div>
                <div style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', opacity: 0}}></div>
            </div>
        </div>
        <div><span style="color: '#4D5254', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'">Designed for</span><span style="color: '#4D5254', fontSize: 16, fontFamily: 'Manrope', fontWeight: '700', lineHeight: 25.60, wordWrap: 'break-word'"> air rejuvenation</span></div>
    </div>
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
        <div style={{width: 22, height: 22, position: 'relative'}}>
            <div style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 20, height: 14, left: 1, top: 4, position: 'absolute', border: '2.50px #2C7EF8 solid'}}></div>
                <div style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', opacity: 0}}></div>
            </div>
        </div>
        <div><span style="color: '#4D5254', fontSize: 16, fontFamily: 'Manrope', fontWeight: '700', lineHeight: 25.60, wordWrap: 'break-word'">Perfect for every room</span><span style="color: '#4D5254', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'"> in all types of places.</span></div>
    </div>
</div> */}

// SAVE

{/* <div style={{width: '100%', height: '100%', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: '#EDF3FD', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 32, height: 32, position: 'relative'}}>
            <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', background: '#2C7EF8', borderRadius: 9999}} />
            <div style={{width: 19.20, height: 19.20, left: 6.40, top: 6.40, position: 'absolute'}}>
                <div style={{width: 19.20, height: 19.20, left: 0, top: 0, position: 'absolute', background: '#D9D9D9'}} />
                <div style={{width: 12.80, height: 12.80, left: 3.20, top: 3.20, position: 'absolute', background: 'white'}}></div>
            </div>
        </div>
        <div><span style="color: 'black', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 22.40, wordWrap: 'break-word'">Save </span><span style="color: '#2C7EF8', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 22.40, wordWrap: 'break-word'">53%</span><span style="color: 'black', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 22.40, wordWrap: 'break-word'"> and get </span><span style="color: '#2C7EF8', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 22.40, wordWrap: 'break-word'">6 extra Clarifision</span><span style="color: 'black', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 22.40, wordWrap: 'break-word'"> for only </span><span style="color: '#2C7EF8', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 22.40, wordWrap: 'break-word'">$14 Each</span><span style="color: 'black', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 22.40, wordWrap: 'break-word'">.</span></div>
    </div>
</div> */}

// BOTÓN VERDE

{/* <div style={{width: '100%', height: '100%', paddingLeft: 64, paddingRight: 64, paddingTop: 16, paddingBottom: 16, background: '#59AE43', borderRadius: 50, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 19.76, display: 'inline-flex'}}>
        <div style={{color: 'white', fontSize: 20, fontFamily: 'Manrope', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>Yes - Claim my discount</div>
        <div style={{width: 16, height: 0, background: 'white', border: '1.98px white solid'}}></div>
    </div>
</div> */}


// DEBAJO DEL BOTÓN VERDE

{/* <div style={{width: '100%', height: '100%', paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 4, border: '1px #CFCFCF solid', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
    <div style={{color: '#4D5254', fontSize: 12, fontFamily: 'Manrope', fontWeight: '400', textTransform: 'capitalize', lineHeight: 16.80, wordWrap: 'break-word'}}>Free shipping</div>
    <div style={{width: 16, height: 0, transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #CFCFCF solid'}}></div>
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
        <div style={{width: 12, height: 12, position: 'relative'}}>
            <div style={{width: 9, height: 5.50, left: 1.12, top: 5.50, position: 'absolute', border: '1.33px #696969 solid'}}></div>
            <div style={{width: 5, height: 4.50, left: 3.13, top: 1, position: 'absolute', border: '1.33px #696969 solid'}}></div>
        </div>
        <div style={{textAlign: 'center', color: '#4D5254', fontSize: 12, fontFamily: 'Manrope', fontWeight: '400', textTransform: 'capitalize', lineHeight: 18, wordWrap: 'break-word'}}>Secure 256-bit SSL encryption.</div>
    </div>
    <div style={{width: 16, height: 0, transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #CFCFCF solid'}}></div>
    <div style={{justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex'}}>
        <div style={{width: 24, height: 14, position: 'relative'}}>
            <div style={{width: 24, height: 14, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 24, height: 14, left: 0, top: 0, position: 'absolute', opacity: 0.07, background: 'black'}}></div>
                <div style={{width: 22.74, height: 12.83, left: 0.63, top: 0.58, position: 'absolute', background: 'white'}}></div>
                <div style={{width: 16.55, height: 4.67, left: 3.16, top: 4.67, position: 'absolute', background: '#142688'}}></div>
            </div>
        </div>
        <div style={{width: 24, height: 14, position: 'relative'}}>
            <div style={{width: 24, height: 14, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 24, height: 14, left: 0, top: 0, position: 'absolute', opacity: 0.07, background: 'black'}}></div>
                <div style={{width: 22.74, height: 12.83, left: 0.63, top: 0.58, position: 'absolute', background: '#5A31F4'}}></div>
                <div style={{width: 17.90, height: 6.55, left: 3.04, top: 3.73, position: 'absolute', background: 'white'}}></div>
            </div>
        </div>
        <div style={{width: 24, height: 14, position: 'relative'}}>
            <div style={{width: 24, height: 14, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 24, height: 14, left: 0, top: 0, position: 'absolute', opacity: 0.07, background: 'black'}}></div>
                <div style={{width: 22.74, height: 12.83, left: 0.63, top: 0.58, position: 'absolute', background: 'white'}}></div>
                <div style={{width: 6.30, height: 6.42, left: 8.84, top: 2.92, position: 'absolute', background: '#003087'}}></div>
                <div style={{width: 5.24, height: 5.72, left: 10.48, top: 4.84, position: 'absolute', background: '#3086C8'}}></div>
                <div style={{width: 4.11, height: 2.92, left: 10.99, top: 4.55, position: 'absolute', background: '#012169'}}></div>
            </div>
        </div>
        <div style={{width: 24, height: 14, position: 'relative'}}>
            <div style={{width: 24, height: 14, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 24, height: 14, left: 0, top: 0, position: 'absolute', opacity: 0.07, background: 'black'}}></div>
                <div style={{width: 22.74, height: 12.83, left: 0.63, top: 0.58, position: 'absolute', background: 'white'}}></div>
                <div style={{width: 8.84, height: 8.17, left: 5.05, top: 2.92, position: 'absolute', background: '#EB001B'}}></div>
                <div style={{width: 8.84, height: 8.17, left: 10.11, top: 2.92, position: 'absolute', background: '#FFC000'}}></div>
                <div style={{width: 3.79, height: 6.65, left: 10.11, top: 3.67, position: 'absolute', background: '#FF5F00'}}></div>
            </div>
        </div>
        <div style={{width: 24, height: 14, position: 'relative'}}>
            <div style={{width: 24, height: 14, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 24, height: 14, left: 0, top: 0, position: 'absolute', opacity: 0.07, background: 'black'}}></div>
                <div style={{width: 22.74, height: 12.83, left: 0.63, top: 0.58, position: 'absolute', background: 'white'}}></div>
                <div style={{width: 9.79, height: 6, left: 10.78, top: 4.24, position: 'absolute', background: '#5F6368'}}></div>
                <div style={{width: 2.76, height: 2.48, left: 6.08, top: 6.05, position: 'absolute', background: '#4285F4'}}></div>
                <div style={{width: 4.46, height: 2.15, left: 3.52, top: 7.03, position: 'absolute', background: '#34A853'}}></div>
                <div style={{width: 1.26, height: 2.38, left: 3.21, top: 5.33, position: 'absolute', background: '#FFC000'}}></div>
                <div style={{width: 4.48, height: 2.14, left: 3.52, top: 3.88, position: 'absolute', background: '#EA4335'}}></div>
            </div>
        </div>
        <div style={{width: 24, height: 14, position: 'relative'}}>
            <div style={{width: 23.68, height: 14, left: 0.16, top: 0, position: 'absolute', background: '#E4E4E4'}}></div>
            <div style={{width: 22.67, height: 13.07, left: 0.67, top: 0.47, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 4.73, height: 5.37, left: 3.16, top: 3.86, position: 'absolute', background: 'black'}}></div>
            <div style={{width: 11.33, height: 6.30, left: 9.45, top: 4.24, position: 'absolute', background: 'black'}}></div>
        </div>
        <div style={{width: 24, height: 14, position: 'relative'}}>
            <div style={{width: 24, height: 14, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 24, height: 14, left: 0, top: 0, position: 'absolute', opacity: 0.07, background: 'black'}}></div>
                <div style={{width: 22.74, height: 12.83, left: 0.63, top: 0.58, position: 'absolute', background: '#006FCF'}}></div>
                <div style={{width: 18.96, height: 4.48, left: 2.53, top: 4.67, position: 'absolute', background: 'white'}}></div>
            </div>
        </div>
    </div>
</div>
 */}


// No thanks, I don’t want this.
// color: '#F82C2C';
// fontSize: 18;
// fontFamily: 'Manrope';
// fontWeight: '500';
// textDecoration: 'underline';
// textTransform: 'uppercase';
// wordWrap: 'break-word'

// AL LADO DEL SELLO DORADO
{/* <div style={{width: '100%'}}><span style="color: '#4D5254', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 22.40, wordWrap: 'break-word'">If you are not completely thrilled with your Clarifion - We have a </span><span style="color: '#4D5254', fontSize: 16, fontFamily: 'Manrope', fontWeight: '700', lineHeight: 22.40, wordWrap: 'break-word'">30 day satisfaction guarantee</span><span style="color: '#4D5254', fontSize: 16, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 22.40, wordWrap: 'break-word'">. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</span></div>*/ }