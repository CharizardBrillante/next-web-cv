//@ts-nocheck
"use client"

import Background from "@/components/Particles"
import Navbar from "@/components/navbar"
import './style.css'
import { useRouter } from "next/navigation"
import { motion, useAnimationControls } from "framer-motion";
import { Suspense, useCallback } from "react"
import { Inter } from "next/font/google";

export const metadata = {
    title: "Daniele Terracciano - Web CV",
    description: "Daniele Terracciano resume"
}


const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({children,}: {children: React.ReactNode}) => {
    const router = useRouter();
    const controls = useAnimationControls();

    const onRoute = useCallback((href: string) => async () => {
        await router.prefetch(href)
        await controls.start('exit')
        await router.push(href)
        await controls.set('hidden')
        await controls.start('enter')
    }, [router, controls])

    return (
    <html lang="en">
        <body>
        <div className={inter.className}>
            <div className="main-layout">
                <Suspense fallback={<p style={{color: 'white'}}> Ciao</p>} >
                <motion.main
                    animate={controls}
                    variants={{
                        hidden: { opacity: .3, x: "-100vw", y: 0 },
                        enter: { opacity: 1, x: 0, y: 0 },
                        exit: { opacity: .3, x: "100vw", y: 0 },
                    }}
                    transition={{ type: 'keyframes', duration: .6 }}
                >
                    {children}
                </motion.main>
                </Suspense>
            </div>

            <div className="nav-context">
                <Navbar onRoute={onRoute}/>
            </div>
            <Background/>
        </div>
        </body>
    </html>
    )
}

export default RootLayout;