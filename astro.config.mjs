import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Narcisal Blog',
      customCss: ['./src/styles/global.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Narcisal' },
      ],
      sidebar: [
        { label: '日記', autogenerate: { directory: 'diary' } },
        { label: '工作筆記', autogenerate: { directory: 'notes' } },
        { label: '紀事', autogenerate: { directory: 'events' } },
      ],
    }),
  ],
});