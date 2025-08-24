import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev'); // локально — без base

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/project_architecture_template',
      relative: true
    },
    prerender: { entries: ['*'] }
  }
};

export default config;
