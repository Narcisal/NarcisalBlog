import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Narcisal Blog',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Narcisal' },
      ],
      header: {
        links: [
          { label: '日記', href: '/diary/diary-2026-05-03' },
          { label: '工作筆記', href: '/notes/first-note' },
          { label: '紀事', href: '/events/first-event' },
        ],
      },
      sidebar: [
        { label: '日記', autogenerate: { directory: 'diary' } },
        { label: '工作筆記', autogenerate: { directory: 'notes' } },
        { label: '紀事', autogenerate: { directory: 'events' } },
      ],
    }),
  ],
});