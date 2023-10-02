import { gql } from 'graphql-tag';

const typeDefs = gql`
    type Query {
        clients: [Member!]!
        services: [Service!]!
        advantages: [Advantage!]!
        testimonials: [Testimonial!]!
        pricing: Pricing!
        partners: [String!]!
        articles: Articles!
        socialPlatforms: [SocialPlatform!]!
        contactInfo: [ContactInfo!]!
        faq: [FAQ!]!
        team: [TeamMember!]!
        blog: Blog!
        offers: [Offer!]!
        selectedArticle(value: Int!): [Article!]
    }

    type Member {
        img: String!
    }

    type Service {
        title: String!
        description: String!
        additionalText: String!
        img: String!
    }

    type Advantage {
        title: String!
        description: String!
    }

    type Testimonial {
        firstName: String!
        lastName: String!
        role: String!
        img: String!
        comment: String!
    }

    type Pricing {
        description: [PricingDescription!]!
        priceContent: PriceContent!
    }

    type PricingDescription {
        title: String!
        description: String!
    }

    type PriceContent {
        total: Int!
        currentType: String!
        periodGuarantee: Int!
    }

    type SocialPlatform {
        name: String!
        link: String!
    }

    type ContactInfo {
        option: String!
        description: String!
    }

    type FAQ {
        title: String!
        description: String!
        type: String!
    }

    type TeamMember {
        firstName: String!
        lastName: String!
        role: String!
        img: String!
        contactInfo: [SocialPlatform!]!
    }

    type ProgressDescription {
        amount: Int!
        measurement: String!
    }

    type Offer {
        plan: String!
        priceContent: PriceContent!
        title: String!
        description: [String!]!
        freeTrail: Int!
    }

    type Service {
        title: String!
        description: String!
    }

    type Articles {
        popular: [ArticleCard!]!
        recent: [ArticleCard!]!
    }

    type ArticleCard {
        img: String!
        title: String!
        description: String!
        articleId: Int!
    }

    type Article {
        id: Int!
        title: String!
        subtitle: String!
        authorContent: AuthorContent!
        img: [String!]!
        description: String!
        postTags: [String!]!
        socialPlatforms: [SocialPlatform!]!
    }

    type AuthorContent {
        firstName: String!
        lastName: String!
        creationDate: Int!
    }

    type Blog {
        cards: [ArticleCard!]!
        articles: [Article!]!
    }
`;

export default typeDefs;
