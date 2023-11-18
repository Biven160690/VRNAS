import Image from "next/image";
import styles from "./styles.module.scss";
import { Team } from "../index";

export type Props = {
  team: Team[];
};

export const TemsBlock = ({ team }: Props) => {
  return (
    <div className={styles.base}>
      <div className={styles.titleBlock}>
        <div className={styles.description}>
          <div className={styles.title}>OUR TEAM</div>
          <div className={styles.subtitle}>
            <span>O</span>
            <span>u</span>
            <span>r</span>
            &nbsp;
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>f</span>
            <span>e</span>
            <span>s</span>
            <span>s</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>
            <span>a</span>
            <span>l</span>
            <span>s</span>
            &nbsp;
            <span>T</span>
            <span>e</span>
            <span>a</span>
            <span>m</span>
          </div>
        </div>
        <button className={styles.titleButton}>see all</button>
      </div>
      <div className={styles.teamList}>
        {team.map(({ firstName, img, lastName, role }, index) => {
          return (
            <div className={styles.card} key={index}>
              <Image
                src={`/pages/about/team/${img}.png`}
                width={274}
                height={370}
                alt={`${img}`}
                key={index}
              />
              <div className={styles.bg} />
              <div className={styles.userInfo}>
                <div className={styles.name}>
                  {firstName} {lastName}
                </div>
                <div className={styles.role}>{role}</div>
              </div>
            </div>
          );
        })}
      </div>
      <button className={styles.button}>see all</button>
    </div>
  );
};
