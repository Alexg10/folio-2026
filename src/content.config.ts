import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    role: z.array(z.string()),
    year: z.number().optional(),
    stack: z.array(z.string()),
    summary: z.string(),
    // Paths under /public. .mp4 / .webm files are rendered as looping videos.
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
