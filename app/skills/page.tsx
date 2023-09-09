/* eslint-disable @next/next/no-img-element */
import PageCard from "@/components/StandardLayout/PageCard";
import { NextPage } from "next";
import styles from "./styles.module.css"; 
import jsLogo from "../../src/images/javascript-logo.png";
import javaLogo from "../../src/images/java-logo.png";
import pyLogo from "../../src/images/pyLogo.png";
import reactLogo from "../../src/images/reactLogo.png";
import nextLogo from "../../src/images/nextLogo.png";
import springLogo from "../../src/images/springLogo.png";
import seleniumLogo from "../../src/images/seleniumLogo.png";
import postgreLogo from "../../src/images/postgreLogo.png";
import mongoLogo from "../../src/images/mongoLogo.png";

const SkillsPage : NextPage = () => {
    return (
        <>
        <PageCard type="title">
            <h2>Skills</h2>
        </PageCard>

        <div className={styles["container"]}>
            <PageCard type="">
                <h3>Languages</h3>
                <ul>
                    <li>
                        <img
                            src={jsLogo.src}
                            alt="JS logo"
                        />
                        <span>Javascript</span>
                    </li>
                    <li>
                        <img
                            src={javaLogo.src}
                            alt="Java logo"
                        />
                        <span>Java</span>
                    </li>
                    <li>
                        <img
                            src={pyLogo.src}
                            alt="Python logo"
                            className={styles.logo}
                        />
                        <span>Python</span>
                    </li>
                </ul>
            </PageCard>

            <PageCard type="">
                <h3>Frameworks</h3>
                <ul>
                    <li>
                        <img
                            src={reactLogo.src}
                            alt="React logo"
                            className={styles.logo}
                        />
                        <span>ReactJS</span>
                    </li>
                    <li>
                        <img
                            src={nextLogo.src}
                            alt="NextJS logo"
                            className={styles.logo}
                        />
                        <span>NextJS</span>
                    </li>
                    <li>
                        <img
                            src={springLogo.src}
                            alt="Spring logo"
                            className={styles.logo}
                        />
                        <span>Spring</span>
                    </li>
                    <li>
                        <img
                            src={seleniumLogo.src}
                            alt="Selenium logo"
                            className={styles.logo}
                        />
                        <span>Selenium</span>
                    </li>
                </ul>
            </PageCard>

            <PageCard type="">
                <h3>Databases</h3>
                <ul>
                    <li>
                        <img
                            src={postgreLogo.src}
                            alt="PostreSQL logo"
                            className={styles.logo}
                        />
                        <span>PostgreSQL</span>
                    </li>
                    <li>
                        <img
                            src={mongoLogo.src}
                            alt="MongoDB logo"
                        />
                        <span>MongoDB</span>
                    </li>
                </ul>
            </PageCard>
        </div>
        </>
    )
}

export default SkillsPage;