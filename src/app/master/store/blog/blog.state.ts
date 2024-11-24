import { blogmodel, Blogs } from './blog.model';

export const initialBlogState: Blogs = {
  blogList: [
    {
      id: 1,
      title: 'Angular',
      description: 'The web development framework for building modern apps.',
    },
    {
      id: 2,
      title: 'React',
      description:
        'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.',
    },
    {
      id: 3,
      title: 'javascript',
      description:
        'JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.',
    },
  ],
};
