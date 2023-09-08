"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const StandardLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }}>
            <ParallaxLayer offset={0} speed={2.5}>
                {children}
            </ParallaxLayer>
        </Parallax>
    )

}

export default StandardLayout;