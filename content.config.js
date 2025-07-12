import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        article: defineCollection({
            type: 'page',
            source: 'articles/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string().optional(),
                date: z.string()
            })
        }),
        project: defineCollection({
            type: 'page',
            source: 'projects/*.md'
            schema: z.object({
                title: z.string(),
                description: z.string().optional(),
                date: z.string()
            })
        })
    }
})