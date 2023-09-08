//@ts-nocheck
"use client"
import React, { useState } from 'react'
import { useSpring, useTrail, a, animated } from '@react-spring/web'
import styles from './styles.module.css';

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 110,
        height: open ? 100 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
        {trail.map(({ height, ...style }, index) => (
            <a.div key={index} className={styles.trailsText} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
        ))}
        </div>
    )
}

const HomeComponent = () =>  {
    const [open, set] = useState(true)
    return (
        <div className={styles.container} onClick={() => set(state => !state)}>
        <Trail open={open}>
            <span className={styles.title}>Hey,</span>
            <span className={styles.title}>I&apos;m <span className={styles["title-name"]}>Daniele</span></span>
            <span className={styles.subtitle}>and I&apos;m a web developer</span>
        </Trail>
        </div>
    )
}

export default HomeComponent;