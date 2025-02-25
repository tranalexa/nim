type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Fresno, California',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Stanford, California',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Meta',
    title: 'Incoming Software Engineering Intern',
    start: 'June 2025',
    end: 'Sept 2025',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Splunk',
    title: 'Software Engineering Intern',
    start: 'Jan 2025',
    end: 'Apr 2025',
    link: 'https://ibelick.com',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Coming Soon',
    description: 'Description',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Coming Soon',
    description:
      'Description',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'Coming Soon',
    description:
      'Description',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/tranalexa',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/alexaxtran',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/alexat',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/alexaxtran',
  },
]

export const EMAIL = 'alexatran@stanford.edu'

export const MUSIC = [
  {
    url: 'https://open.spotify.com/track/3K94Fd5ZQkPCW8wV6oyk22?si=5f2455fdf9574be2',
    src: '/wolf-alice.jpeg',
    alt: "Don’t Delete The Kisses - Wolf Alice",
  },
  {
    url: 'https://open.spotify.com/album/3IIJTTfYV4GU9ST4GbeGhg?si=Ho6qoSSnSR2z0z5sMPJdCQ',
    src: '/between-friends.jpeg',
    alt: 'we just need some time together - BETWEEN FRIENDS',
  },
  {
    url: 'https://open.spotify.com/track/0GKRhiIVPIXmsM5d7KcjcN?si=39c29f60c6a84126',
    src: '/palo-alto.jpeg',
    alt: 'Palo Alto Soundtrack',
  },
  {
    url: 'https://open.spotify.com/track/3T00mhdOYUuM5yiuPs3xhs?si=2a0e786ad8b540a5',
    src: '/san-frandisco.jpg',
    alt: 'San Frandisco - Dom Dolla',
  },
  {
    url: 'https://open.spotify.com/track/561pBFcFL2Pwb9HPO9tU8J?si=ff260c253cc9496d',
    src: '/places-to-be.jpeg',
    alt: 'places to be - Fred again..',
  },
  {
    url: 'https://open.spotify.com/track/0AIpGG5dxEgnAymhdJRSZ0?si=cbacbe29101f4404',
    src: '/champagne-coast.jpeg',
    alt: 'Champagne Coast - Blood Orange',
  },
];
