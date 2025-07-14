import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        article: defineCollection({
            type: 'page',
            source: 'articles/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string().optional(),
                date: z.string().datetime(),
            })
        }),
        project: defineCollection({
            type: 'page',
            source: 'projects/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string().optional(),
                date: z.string().datetime().optional(),
                headerImage: z.string().optional(),
                carousel: z.array(z.object({
                    src: z.string(),
                    alt: z.string().optional(),
                    caption: z.string().optional()
                })).optional(),
                tags: z.array(z.string()).optional(),
            })
        })
    }
})