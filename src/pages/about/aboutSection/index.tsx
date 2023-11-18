import { Video } from "@/components/common/Video";

import styles from "./styles.module.scss";

const LINK_VIDEO =
  "https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4";

export const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.description}>
        <h3 className={styles.title}>
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
          <span>U</span>
          <span>S</span>
        </h3>
          <h2 className={styles.subtitle}>
            Bringing Your Vision to Life: Learn About VRNas
          </h2>
        <p className={styles.text}>
          VRNas is a leading provider of VR services for education,
          entertainment, architecture, and events. Our mission is to bring the
          power of virtual reality to everyone, allowing them to explore new
          worlds, learn in new ways, and experience events in a whole new light.{" "}
          <br /> Our team consists of experienced VR developers, designers, and
          technicians who are passionate about VR and dedicated to delivering
          the highest quality work. We use the latest VR hardware and software
          to create immersive, interactive experiences that are tailored to your
          specific needs. <br /> From initial consultation to final delivery, we
          are committed to providing exceptional customer service. Our goal is
          to ensure that you are completely satisfied with every aspect of your
          VR experience.
        </p>
      </div>
      <div className={styles.bg}>
        <div className={styles.hero} />
        <div className={styles.illumination} />
        <div className={styles.video}>
          <Video src={LINK_VIDEO} width={198} height={128} />
        </div>
      </div>
    </section>
  );
};
