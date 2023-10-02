import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Advantage = {
  __typename?: 'Advantage';
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Article = {
  __typename?: 'Article';
  authorContent: AuthorContent;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  img: Array<Scalars['String']['output']>;
  postTags: Array<Scalars['String']['output']>;
  socialPlatforms: Array<SocialPlatform>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ArticleCard = {
  __typename?: 'ArticleCard';
  articleId: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  img: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Articles = {
  __typename?: 'Articles';
  popular: Array<ArticleCard>;
  recent: Array<ArticleCard>;
};

export type AuthorContent = {
  __typename?: 'AuthorContent';
  creationDate: Scalars['Int']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export type Blog = {
  __typename?: 'Blog';
  articles: Array<Article>;
  cards: Array<ArticleCard>;
};

export type ContactInfo = {
  __typename?: 'ContactInfo';
  description: Scalars['String']['output'];
  option: Scalars['String']['output'];
};

export type Faq = {
  __typename?: 'FAQ';
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Member = {
  __typename?: 'Member';
  img: Scalars['String']['output'];
};

export type Offer = {
  __typename?: 'Offer';
  description: Array<Scalars['String']['output']>;
  freeTrail: Scalars['Int']['output'];
  plan: Scalars['String']['output'];
  priceContent: PriceContent;
  title: Scalars['String']['output'];
};

export type PriceContent = {
  __typename?: 'PriceContent';
  currentType: Scalars['String']['output'];
  periodGuarantee: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Pricing = {
  __typename?: 'Pricing';
  description: Array<PricingDescription>;
  priceContent: PriceContent;
};

export type PricingDescription = {
  __typename?: 'PricingDescription';
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ProgressDescription = {
  __typename?: 'ProgressDescription';
  amount: Scalars['Int']['output'];
  measurement: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  advantages: Array<Advantage>;
  articles: Articles;
  blog: Blog;
  clients: Array<Member>;
  contactInfo: Array<ContactInfo>;
  faq: Array<Faq>;
  offers: Array<Offer>;
  partners: Array<Scalars['String']['output']>;
  pricing: Pricing;
  selectedArticle?: Maybe<Array<Article>>;
  services: Array<Service>;
  socialPlatforms: Array<SocialPlatform>;
  team: Array<TeamMember>;
  testimonials: Array<Testimonial>;
};


export type QuerySelectedArticleArgs = {
  value: Scalars['Int']['input'];
};

export type Service = {
  __typename?: 'Service';
  additionalText: Scalars['String']['output'];
  description: Scalars['String']['output'];
  img: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type SocialPlatform = {
  __typename?: 'SocialPlatform';
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TeamMember = {
  __typename?: 'TeamMember';
  contactInfo: Array<SocialPlatform>;
  firstName: Scalars['String']['output'];
  img: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type Testimonial = {
  __typename?: 'Testimonial';
  comment: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  img: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Advantage: ResolverTypeWrapper<Advantage>;
  Article: ResolverTypeWrapper<Article>;
  ArticleCard: ResolverTypeWrapper<ArticleCard>;
  Articles: ResolverTypeWrapper<Articles>;
  AuthorContent: ResolverTypeWrapper<AuthorContent>;
  Blog: ResolverTypeWrapper<Blog>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ContactInfo: ResolverTypeWrapper<ContactInfo>;
  FAQ: ResolverTypeWrapper<Faq>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Member: ResolverTypeWrapper<Member>;
  Offer: ResolverTypeWrapper<Offer>;
  PriceContent: ResolverTypeWrapper<PriceContent>;
  Pricing: ResolverTypeWrapper<Pricing>;
  PricingDescription: ResolverTypeWrapper<PricingDescription>;
  ProgressDescription: ResolverTypeWrapper<ProgressDescription>;
  Query: ResolverTypeWrapper<{}>;
  Service: ResolverTypeWrapper<Service>;
  SocialPlatform: ResolverTypeWrapper<SocialPlatform>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TeamMember: ResolverTypeWrapper<TeamMember>;
  Testimonial: ResolverTypeWrapper<Testimonial>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Advantage: Advantage;
  Article: Article;
  ArticleCard: ArticleCard;
  Articles: Articles;
  AuthorContent: AuthorContent;
  Blog: Blog;
  Boolean: Scalars['Boolean']['output'];
  ContactInfo: ContactInfo;
  FAQ: Faq;
  Int: Scalars['Int']['output'];
  Member: Member;
  Offer: Offer;
  PriceContent: PriceContent;
  Pricing: Pricing;
  PricingDescription: PricingDescription;
  ProgressDescription: ProgressDescription;
  Query: {};
  Service: Service;
  SocialPlatform: SocialPlatform;
  String: Scalars['String']['output'];
  TeamMember: TeamMember;
  Testimonial: Testimonial;
}>;

export type AdvantageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Advantage'] = ResolversParentTypes['Advantage']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = ResolversObject<{
  authorContent?: Resolver<ResolversTypes['AuthorContent'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  img?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  postTags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  socialPlatforms?: Resolver<Array<ResolversTypes['SocialPlatform']>, ParentType, ContextType>;
  subtitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleCard'] = ResolversParentTypes['ArticleCard']> = ResolversObject<{
  articleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  img?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticlesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Articles'] = ResolversParentTypes['Articles']> = ResolversObject<{
  popular?: Resolver<Array<ResolversTypes['ArticleCard']>, ParentType, ContextType>;
  recent?: Resolver<Array<ResolversTypes['ArticleCard']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthorContent'] = ResolversParentTypes['AuthorContent']> = ResolversObject<{
  creationDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog']> = ResolversObject<{
  articles?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>;
  cards?: Resolver<Array<ResolversTypes['ArticleCard']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactInfo'] = ResolversParentTypes['ContactInfo']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  option?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FaqResolvers<ContextType = any, ParentType extends ResolversParentTypes['FAQ'] = ResolversParentTypes['FAQ']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = ResolversObject<{
  img?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OfferResolvers<ContextType = any, ParentType extends ResolversParentTypes['Offer'] = ResolversParentTypes['Offer']> = ResolversObject<{
  description?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  freeTrail?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  plan?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priceContent?: Resolver<ResolversTypes['PriceContent'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceContent'] = ResolversParentTypes['PriceContent']> = ResolversObject<{
  currentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  periodGuarantee?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PricingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pricing'] = ResolversParentTypes['Pricing']> = ResolversObject<{
  description?: Resolver<Array<ResolversTypes['PricingDescription']>, ParentType, ContextType>;
  priceContent?: Resolver<ResolversTypes['PriceContent'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PricingDescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingDescription'] = ResolversParentTypes['PricingDescription']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProgressDescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressDescription'] = ResolversParentTypes['ProgressDescription']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  measurement?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  advantages?: Resolver<Array<ResolversTypes['Advantage']>, ParentType, ContextType>;
  articles?: Resolver<ResolversTypes['Articles'], ParentType, ContextType>;
  blog?: Resolver<ResolversTypes['Blog'], ParentType, ContextType>;
  clients?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType>;
  contactInfo?: Resolver<Array<ResolversTypes['ContactInfo']>, ParentType, ContextType>;
  faq?: Resolver<Array<ResolversTypes['FAQ']>, ParentType, ContextType>;
  offers?: Resolver<Array<ResolversTypes['Offer']>, ParentType, ContextType>;
  partners?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  pricing?: Resolver<ResolversTypes['Pricing'], ParentType, ContextType>;
  selectedArticle?: Resolver<Maybe<Array<ResolversTypes['Article']>>, ParentType, ContextType, RequireFields<QuerySelectedArticleArgs, 'value'>>;
  services?: Resolver<Array<ResolversTypes['Service']>, ParentType, ContextType>;
  socialPlatforms?: Resolver<Array<ResolversTypes['SocialPlatform']>, ParentType, ContextType>;
  team?: Resolver<Array<ResolversTypes['TeamMember']>, ParentType, ContextType>;
  testimonials?: Resolver<Array<ResolversTypes['Testimonial']>, ParentType, ContextType>;
}>;

export type ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = ResolversObject<{
  additionalText?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  img?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SocialPlatformResolvers<ContextType = any, ParentType extends ResolversParentTypes['SocialPlatform'] = ResolversParentTypes['SocialPlatform']> = ResolversObject<{
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamMember'] = ResolversParentTypes['TeamMember']> = ResolversObject<{
  contactInfo?: Resolver<Array<ResolversTypes['SocialPlatform']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  img?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TestimonialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Testimonial'] = ResolversParentTypes['Testimonial']> = ResolversObject<{
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  img?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Advantage?: AdvantageResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  ArticleCard?: ArticleCardResolvers<ContextType>;
  Articles?: ArticlesResolvers<ContextType>;
  AuthorContent?: AuthorContentResolvers<ContextType>;
  Blog?: BlogResolvers<ContextType>;
  ContactInfo?: ContactInfoResolvers<ContextType>;
  FAQ?: FaqResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  Offer?: OfferResolvers<ContextType>;
  PriceContent?: PriceContentResolvers<ContextType>;
  Pricing?: PricingResolvers<ContextType>;
  PricingDescription?: PricingDescriptionResolvers<ContextType>;
  ProgressDescription?: ProgressDescriptionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  SocialPlatform?: SocialPlatformResolvers<ContextType>;
  TeamMember?: TeamMemberResolvers<ContextType>;
  Testimonial?: TestimonialResolvers<ContextType>;
}>;

