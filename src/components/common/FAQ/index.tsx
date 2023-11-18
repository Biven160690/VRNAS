import { Faq } from "@/graphql/__generated__/resolvers-types";
import { Accordion } from "../Accordion";
import styles from "./styles.module.scss";
import React from "react";

export type Props = {
  faq: Faq[];
  amountQuestion?: number;
};

export type Advantages = {
  description: string;
  title: string;
}[];

const getFAQData = (faq: Faq[], amountQuestion: number = faq.length) =>
  faq.toSpliced(0, amountQuestion).reduce((acc, { description, title }) => {
    acc.push({ description, title });
    return acc;
  }, [] as Advantages);

export const FAQ = ({ faq, amountQuestion }: Props) => {
  const [filterdData, setFilterifData] = React.useState<Advantages>(() =>
    getFAQData(faq, amountQuestion)
  );

  return (
    <div className={styles.base}>
      <div className={styles.content}>
        <div className={styles.title}>FAQ</div>
        <div className={styles.subtitle}>Frequently Asked Questions</div>
        <div className={styles.text}>
          At VRNas, we want to make sure that you have all the information you
          need to make informed decisions about our VR services. Here are some
          of the most common questions we receive:
        </div>
      </div>
      <div className={styles.illumination} />
      <Accordion advantages={filterdData} />
    </div>
  );
};
