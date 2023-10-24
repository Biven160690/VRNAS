"use client";

import { homePage } from "../graphql/queries/queries";
import {
  Member,
  Service as ServiceData,
  Advantage,
  Testimonial,
  Pricing as PricingProps,
  Articles as ArticleProps,
} from "../graphql/__generated__/resolvers-types";

import { Video } from "../components/common/Video";

import styles from "./styles.module.scss";
import React from "react";
import { requestData } from "../utils/hoc/requestData";
import { Service } from "../components/common/Service";
import { Accordion } from "../components/common/Accordion";
import { Testimonials } from "../components/common/TestimonialBlock";
import { Pricing } from "../components/common/Pricing";
import { Partners } from "../components/common/Partners";
import { Articles } from "@/components/Articles";
import { Discover } from "./home/discover";
import { About } from "./home/about";
import { Subscribe } from "@/components/common/Subscribe";
import { Choose } from "./home/choose";
import { VideoBlock } from "./home/video";

export interface ClientsData {
  data: {
    clients: Member[];
    services: ServiceData[];
    advantages: Advantage[];
    testimonials: Testimonial[];
    pricing: PricingProps;
    partners: string[];
    articles: ArticleProps;
  };
}

const LINK_VIDEO =
  "https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4";

function Index({ data }: ClientsData) {
  const {
    clients,
    services,
    advantages,
    testimonials,
    pricing,
    partners,
    articles,
  } = data;

  return (
    <div className={styles.home}>
      <Discover clients={clients} />
      <About />
      <section className={styles.services}>
        <Service services={services} />
      </section>
      <Choose advantages={advantages} />
      <VideoBlock />
      <section className={styles.testimonials}>
        <Testimonials testimonials={testimonials} />
      </section>
      <section className={styles.pricing}>
        <Pricing pricing={pricing} />
      </section>
      <section className={styles.partners}>
        <Partners partners={partners} />
      </section>
      <section className={styles.articles}>
        <Articles articles={articles} />
      </section>
      <section className={styles.subscribe}>
        <Subscribe />
      </section>
    </div>
  );
}

const Home = requestData(Index, homePage);

export default Home;
