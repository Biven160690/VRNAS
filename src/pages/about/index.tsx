import { Title } from "@/components/common/Title";
import { AboutSection } from "./aboutSection";
import { Advantages } from "@/components/common/Advantages";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { aboutPage } from "../../graphql/queries/queries";
import { Loader } from "@/components/Loader";
import { useRouter } from "next/router";
import { Choose } from "@/components/common/Choose";
import styles from "./styles.module.scss";
import cx from "classnames";

import heroImg from "../../../public/pages/about/hero-choose-section.png";
import { TemsBlock } from "./team";
import {
  Advantage,
  Faq,
  TeamMember,
} from "@/graphql/__generated__/resolvers-types";
import { Partners } from "../../components/common/Partners";
import { FAQ } from "@/components/common/FAQ";

const chooseStyles = {
  base: styles.chooseBase,
  video: styles.chooseVideo,
};

export type Team = Omit<TeamMember, "contactInfo">;

export type AboutPage = {
  advantages: Advantage[];
  team: Team[];
  partners: string[];
  faq: Faq[];
};

const getTopUser = (team: Team[]) => [...team.slice(0, 4)];

export default function About() {
  const router = useRouter();

  const { data, loading, error } = useQuery<AboutPage>(aboutPage);

  if (loading) {
    return <Loader />;
  }

  if (error || !data) {
    router.push("/404");
    return;
  }

  const { advantages, team, partners, faq } = data;

  return (
    <div className={styles.main}>
      <Title title="About us" />
      <AboutSection />
      <div className={styles.advantegesContainer}>
        <div className={styles.advantegesContent}>
          <div className={styles.advantegesTitle}>WHY CHOOSE US</div>
          <div className={styles.advantegesText}>
            <span>Empowering</span>
            <span>Your</span>
            <span>Virtual</span>
            <span>Reality</span>
            <span>Experience</span>
          </div>
        </div>
        <Advantages />
      </div>
      <Choose
        advantages={advantages}
        heroImg={heroImg}
        classNames={chooseStyles}
      />
      <TemsBlock team={getTopUser(team)} />
      <section className={styles.partners}>
        <Partners partners={partners} />
      </section>
      <section className={styles.faq}>
        <FAQ faq={faq} amountQuestion={5} />
      </section>
    </div>
  );
}
