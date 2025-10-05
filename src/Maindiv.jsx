import LightRays from './Aurora';
import Shuffle from './Shuffle';
import DecryptedText from './DecryptedText';
import Rounded from './Rounded';

export default function Maindiv() {
    return (
        <div>
            <div className='relative'>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays "
                />
            </div>
            <div className=" absolute top-[40%]  left-[50%] -translate-x-[50%] -translate-y-[50%] lg:text-4xl font-bold text-white">

                <div>
                    <DecryptedText
                        text="Hello, This is"
                        animateOn="view"
                        revealDirection="center"
                    />
                </div>

            </div>
            <div className="absolute top-[50%]  left-[50%] -translate-x-[50%] -translate-y-[50%] lg:text-5xl font-bold text-white">
                <div>
                    <Shuffle
                    text="Noor A Alam"
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    
                />
                </div>
            </div>

            <div className="absolute top-[40%]  left-[50%] -translate-x-[50%] -translate-y-[50%] ">
                <div>
                    <Rounded />
                </div>
            </div>
        </div>
    )
}
