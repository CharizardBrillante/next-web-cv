"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const EducationLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
        {/* <Parallax pages={3} style={{ top: '0', left: '0' }}>
            <ParallaxLayer offset={0} speed={2.5}>
                {children}
            </ParallaxLayer>
        </Parallax> */}
        {children}
        </div>
    );
}

export default EducationLayout;