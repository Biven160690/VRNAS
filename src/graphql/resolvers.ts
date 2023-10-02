import { data } from '../graphql/db';

const {
    clients,
    advantages,
    articles,
    blog,
    contactInfo,
    faq,
    offers,
    partners,
    pricing,
    services,
    socialPlatforms,
    team,
    testimonials,
} = data;

const resolvers = {
    Query: {
        clients: () => clients,
        advantages: () => advantages,
        articles: () => articles,
        blog: () => blog.cards,
        selectedArticle: (id: number) =>
            blog.articles.filter((article) => article.id === id),
        contactInfo: () => contactInfo,
        faq: () => faq,
        offers: () => offers,
        partners: () => partners,
        pricing: () => pricing,
        services: () => services,
        socialPlatforms: () => socialPlatforms,
        team: () => team,
        testimonials: () => testimonials,
    },
};

export default resolvers;
