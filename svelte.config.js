import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');
const repo = 'project_architecture_template'; // <-- замени на имя твоего репозитория

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : `/${repo}`,
    },
    prerender: { entries: ['*'] },
  },
};
