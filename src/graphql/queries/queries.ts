import { gql } from '@apollo/client';

const homePage = gql`
    query HomePage {
        clients {
            img
        }

        services {
            additionalText
            description
            title
            img
        }

        advantages {
            description
            title
        }

        testimonials {
            comment
            firstName
            img
            lastName
            role
        }

        pricing {
            description {
                description
                title
            }
            priceContent {
                currentType
                periodGuarantee
                total
            }
        }

        partners

        articles {
            popular {
                articleId
                description
                img
                title
            }
            recent {
                articleId
                description
                img
                title
            }
        }
    }
`;

const aboutPage = gql`
    query AboutPage {
        advantages {
            description
            title
        }

        team {
            firstName
            img
            lastName
            role
        }
    }
`;

const clients = gql`
    query Clients {
        clients {
            img
        }
    }
`;

const advantages = gql`
    query Advantages {
        advantages {
            description
            title
        }
    }
`;

const articles = gql`
    query Articles {
        articles {
            popular {
                articleId
                description
                img
                title
            }
            recent {
                articleId
                description
                img
                title
            }
        }
    }
`;

const selectedArticle = gql`
    query SelectedArticle($value: Int!) {
        selectedArticle(value: $value) {
            authorContent {
                creationDate
                firstName
                lastName
            }
            description
            id
            img
            postTags
            socialPlatforms {
                link
                name
            }
            subtitle
            title
        }
    }
`;

const contactInfo = gql`
    query ContactInfo {
        contactInfo {
            option
            description
        }
    }
`;

const faq = gql`
    query FAQ {
        faq {
            description
            title
            type
        }
    }
`;

const offers = gql`
    query Offers {
        offers {
            description
            freeTrail
            plan
            priceContent {
                currentType
                periodGuarantee
                total
            }
            title
        }
    }
`;

const partners = gql`
    query Partners {
        partners
    }
`;

const pricing = gql`
    query Pricing {
        pricing {
            description {
                description
                title
            }
            priceContent {
                currentType
                periodGuarantee
                total
            }
        }
    }
`;

const services = gql`
    query Services {
        services {
            additionalText
            description
            title
            img
        }
    }
`;

const socialPlatforms = gql`
    query SocialPlatforms {
        socialPlatforms {
            link
            name
        }
    }
`;

const getContactInfo = gql`
    query GetContactInfo {
        socialPlatforms {
            link
            name
        }
        contactInfo {
            description
            option
        }
    }
`;

const team = gql`
    query Team {
        team {
            contactInfo {
                link
                name
            }
            firstName
            img
            lastName
            role
        }
    }
`;

const testimonials = gql`
    query Testimonials {
        testimonials {
            comment
            firstName
            img
            lastName
            role
        }
    }
`;

const blog = gql`
    query Blog {
        blog {
            cards {
                articleId
                description
                img
                title
            }
        }
    }
`;

export {
    clients,
    advantages,
    articles,
    blog,
    selectedArticle,
    contactInfo,
    faq,
    offers,
    partners,
    pricing,
    services,
    socialPlatforms,
    team,
    testimonials,
    getContactInfo,
    homePage,
    aboutPage,
};
