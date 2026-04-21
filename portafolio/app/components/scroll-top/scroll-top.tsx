import React from "react";
import styles from "./scroll-top.module.css";
import Link from "next/link";

export default function ScrollTop() {
    return (
        <Link href="#home" className={styles.scrollTop} id="scroll-top">
            <i className="fas fa-arrow-up"></i>
        </Link>
    );
}
