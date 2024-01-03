"use client";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Index({ index, title, setModal }) {

  const projectSlug = title.toLowerCase(); // Use the project title as the slug

  return (
    <Link href={`/projects/${projectSlug}`}>
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className={styles.project}
      >
        <span className="text-white gilroy">{title}</span>
        <p className="text-white gilroy">Design & Development</p>
      </div>
    </Link>
  );
}
