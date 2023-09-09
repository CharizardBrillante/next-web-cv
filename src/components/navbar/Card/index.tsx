/* eslint-disable @next/next/no-img-element */
import * as React from 'react'

import styles from './styles.module.css';
import Link from 'next/link';
import { RiHomeFill, RiFolderFill, RiBookOpenFill, RiBriefcase4Fill, RiBookmark3Fill, RiBarChartFill } from 'react-icons/ri';

interface CardProps {
    src: string
    link: string
    index: number
    onRoute: any
}
interface IconProps {
    index: number
    
}
const ChoseIcon = ({index} : IconProps) => {
    const icons = [
        <RiBookOpenFill size={30} className={styles["nav-icon"]} key={0}/>,
        <RiBriefcase4Fill size={30} className={styles["nav-icon"]} key={1}/>,
        <RiBarChartFill size={30} className={styles["nav-icon"]} key={2}/>,
        <RiFolderFill size={30} className={styles["nav-icon"]} key={3}/>,
        <RiBookmark3Fill size={30} className={styles["nav-icon"]} key={4}/>,
        null,
        <RiHomeFill size={30} className={styles["nav-icon"]} key={5}/>,
    ]

    return icons[index];
}
export const Card = ({ src, link, index, onRoute } : CardProps) => (
    <a className={styles["nav-btn"]} onClick={onRoute(link)}>
    <span className={styles.card}>
        <img className={styles["card-blur"]} src={src} alt="" />
        <img className={styles["card-img"]} src={src} alt="" />
        <ChoseIcon index={index}/>
    </span>
    </a>
)
