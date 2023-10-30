'use client';
import React from 'react'
import styles from './style.module.css';
import Image from 'next/image';

export default function Index({ index, title, setModal }) {

    return (

        <div onMouseEnter={() => { setModal({ active: true, index }) }} onMouseLeave={() => { setModal({ active: false, index }) }} className={styles.project}>
            <h2 className='text-black catch'>{title}</h2>
            <p className='text-black'>Design & Development</p>
        </div>

    )
}