"use client";
import Image from 'next/image';
import Head from 'next/head';
import styles from './onboarding.module.css';
import Link from 'next/link';

const iconPositions = [
  { id: "documents1", angle: 0 },
  { id: "fingerprint1", angle: 90 },
  { id: "graph1", angle: 180 },
  { id: "highway1", angle: 270 },
];

export default function OnBoarding() {
  const calculatePosition = (angle: number) => {
    const radians = (angle * Math.PI) / 180;
    const radius = 220;
    const x = 150 + radius * Math.cos(radians) - 50;
    const y = 150 + radius * Math.sin(radians) - 50;
    return { x, y };
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Onboarding</title>
      </Head>

      <main className={styles.main}>
        <Link href="pr4.github.io/login">
          <div className={styles.circle}>
            <div className={styles.iconsContainer}>
              {iconPositions.map((icon) => {
                const position = calculatePosition(icon.angle);
                return (
                  <Image
                    key={icon.id}
                    src={`./${icon.id}.png`}
                    alt={icon.id}
                    width={100}
                    height={100}
                    className={styles.icon}
                    style={{
                      position: "absolute",
                      top: position.y,
                      left: position.x,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </Link>
        <footer className={styles.footer}>
          Para la recuperación de clave de acceso al sistema, comuníquese con la
          Dirección de Tecnología Informática, área Departamento de Soporte.
        </footer>
      </main>
    </div>
  );
}
