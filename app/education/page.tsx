/* eslint-disable @next/next/no-img-element */
"use client"
import { NextPage } from "next";
import styles from "./styles.module.css";
import PageCard from "@/components/StandardLayout/PageCard";
import { Col, Row } from "react-bootstrap";
import unimiLogo from "@/images/University_of_Milan_logo.png"
import epicodeLogo from "@/images/epicode.png"
import codingameLogo from "@/images/codingame.svg";
import udemyLogo from "@/images/Udemy-Logo.png";

const Education : NextPage = () => {
    return (
        <div>
            <PageCard type="title">
                <h2>Education and certifications</h2>
            </PageCard>
            <div className={styles.container}>
            <PageCard type="">
                <Row className={styles["education-container"]}>
                    <Col className={styles["education-col"]}>
                        <a 
                            href="https://www.unimi.it/" 
                            target="_blank" 
                            referrerPolicy="no-referrer" 
                            className={styles["img-container"]}
                        >
                            <img  
                                src={unimiLogo.src}
                                alt="University of Milan"
                                className={styles["education-img"]}
                            />
                        </a>
                    </Col>
                    <Col className={styles["education-col"]}>
                        <h3>Master&apos;s degree in philosophy</h3>
                        <p>Università degli studi di Milano</p>
                        <p>2019</p>
                    </Col>
                </Row>
            </PageCard>

            <PageCard type="">
                <Row className={styles["education-container"]}>
                    <Col className={styles["education-col"]}>
                        <a 
                            href="https://www.codingame.com" 
                            target="_blank" 
                            referrerPolicy="no-referrer"
                            className={styles["img-container"]}
                        >
                        <img  
                            src={codingameLogo.src} 
                            alt="CodinGame"
                            className={styles["education-img"]}
                        />
                        </a>
                    </Col>
                    <Col className={styles["education-col"]}>
                        <h3>Python Developer</h3>
                        <p>CodinGame</p>
                        <p>2019</p>
                    </Col>
                </Row>
            </PageCard>

            <PageCard type="">
                <Row className={styles["education-container"]}>
                    <Col className={styles["education-col"]}>
                        <a 
                            href="https://www.codingame.com" 
                            target="_blank" 
                            referrerPolicy="no-referrer"
                            className={styles["img-container"]}
                        >
                        <img  
                            src={codingameLogo.src} 
                            alt="CodinGame"
                            className={styles["education-img"]}
                        />
                        </a>
                    </Col>
                    <Col className={styles["education-col"]}>
                        <h3>Javascript Developer</h3>
                        <p>CodinGame</p>
                        <p>2020</p>
                    </Col>
                </Row>
            </PageCard>

            <PageCard type="">
                <Row className={styles["education-container"]}>
                    <Col className={styles["education-col"]}>
                        <a 
                            href="https://epicode.com/" 
                            target="_blank" 
                            referrerPolicy="no-referrer"
                            className={styles["img-container"]}
                        >
                        <img  
                            src={epicodeLogo.src} 
                            alt="Epicode School"
                            className={styles["education-img"]}
                        />
                        </a>
                    </Col>
                    <Col className={styles["education-col"]}>
                        <h3>ReactJS Developer</h3>
                        <p>Epicode school</p>
                        <p>2021</p>
                    </Col>
                </Row>
            </PageCard>

            <PageCard type="">
                <Row className={styles["education-container"]}>
                    <Col className={styles["education-col"]}>
                        <a 
                            href="https://epicode.com/" 
                            target="_blank" 
                            referrerPolicy="no-referrer"
                            className={styles["img-container"]}
                        >
                        <img  
                            src={epicodeLogo.src} 
                            alt="Epicode School"
                            className={styles["education-img"]}
                        />
                        </a>
                    </Col>
                    <Col className={styles["education-col"]}>
                        <h3>Java and Spring Developer</h3>
                        <p>Epicode school</p>
                        <p>2021</p>
                    </Col>
                </Row>
            </PageCard>

            <PageCard type="">
                <Row className={styles["education-container"]}>
                    <Col className={styles["education-col-img"]}>
                        <a 
                            href="https://www.udemy.com/" 
                            target="_blank" 
                            referrerPolicy="no-referrer"
                            className={styles["img-container"]}
                        >
                        <img  
                            src={udemyLogo.src} 
                            alt="Udemy"
                            className={styles["education-img"]}
                        />
                        </a>
                    </Col>
                    <Col className={styles["education-col"]}>
                        <h3>NextJS Developer</h3>
                        <p>Udemy</p>
                        <p>2022</p>
                    </Col>
                </Row>
            </PageCard>
            </div>
        </div>
    )
};

export default Education;