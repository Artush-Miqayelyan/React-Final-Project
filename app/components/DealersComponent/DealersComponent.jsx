'use client'

import React, { useEffect, useState } from 'react';
import styles from './DealersComponent.module.css'

import Image from 'next/image';
import Link from 'next/link';

function DelaersComponent() {

    const [dealers, setDealers] = useState([])
    const [officialDealers, setOfficialDealers] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/users?UserType=OfficalDiller').then(res => res.json()).then(res => setOfficialDealers(res))
    }, [])

    useEffect(() => {
        fetch('http://localhost:4000/users?UserType=Diller').then(res => res.json()).then(res => setDealers(res))
    }, [])
    console.log(dealers, "add")
    return (
        <div className={styles.DealersComponent}>
            <h2>Official Dealers</h2>
            <div className={styles.OfficialDealers}>
                {officialDealers.map((current) => {
                    return <div key={current.id} className={styles.dealerCard}>
                        <div className={styles.DealerAvatar}>
                            <Link href={`/dealers/${current.username}`}>
                                <Image
                                    priority
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    objectFit="cover"
                                    className={styles.img}
                                    src={current.AvatarUrl}
                                    alt='offcial dealer'
                                />
                            </Link>

                        </div>
                        <div className={styles.DealerName}>
                            {current.username}
                        </div>
                    </div>
                })}
            </div>
            <h2>Dealers</h2>
            <div className={styles.Dealers}>
                {dealers.map((current) => {
                    return <div key={current.id} className={styles.dealerCard}>
                        <div className={styles.DealerAvatar}>
                            <Image
                                priority
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                objectFit="cover"
                                className={styles.img}
                                src={current.AvatarUrl}
                                alt='offcial dealer'
                            />
                        </div>
                        <div className={styles.DealerName}>
                            {current.username}
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default DelaersComponent;