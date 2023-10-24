import { Video } from "../../../components/common/Video";

import styles from "./styles.module.scss";

const LINK_VIDEO =
  "https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4";

const videoStyles = {
  base: styles.clip,
  play: styles.play,
  pause: styles.pause,
  replay: styles.replay,
};

export const VideoBlock = () => {
  return (
    <section className={styles.base}>
      <div className={styles.container}>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>HOW TO GET STARTED</h2>
          <p className={styles.description}>
            Bringing Your Virtual Reality Dreams to Life
          </p>
          <div className={styles.illumination} />
        </div>
        <Video
          src={LINK_VIDEO}
          width={1100}
          height={650}
          classNames={videoStyles}
          isNeedControls
        >
          <div className={styles.headerBlock}>
            <h4 className={styles.header}>VR Service</h4>
            <p className={styles.text}>How to get started</p>
          </div>
        </Video>
        <button className={styles.button}>GET STARTED</button>
      </div>
    </section>
  );
};
