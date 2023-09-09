import PageCard from "@/components/StandardLayout/PageCard";
import { NextPage } from "next";
import styles from "./styles.module.css";

const WorkExperience : NextPage = () => {
    return (
        <>
        <PageCard type="title">
            <h2>Work Experience</h2>
        </PageCard>
        <div className={styles["container"]}>
        <PageCard type="">
            <h3>Web Developer</h3>
            <p>
                <a href="https://business-changers.it/" target="_blank" referrerPolicy="no-referrer">
                    Business Changers
                </a>
            </p>
            <p>2022 - current</p>
            <p className={styles.desc}>Design and full-stack development of web applications.</p>
        </PageCard>

        <PageCard type="">
            <h3>Web Developer</h3>
            <p>Freelance</p>
            <p>2020 - 2022</p>
            <p className={styles.desc}>
                Project management; customer care; design and full-stack development of web applications.
            </p>
        </PageCard>

        <PageCard type="">
            <h3>High School Teacher</h3>
            <p>Various institutes</p>
            <p>2016 - 2019</p>
            <p className={styles.desc}>
                Math and philosophy teacher. <br/>
                This experience provided me with a valuable skill in the dev world: stoic patience.
            </p>
        </PageCard>
        </div>
        </>
    )
};

export default WorkExperience;