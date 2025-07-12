import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        article: defineCollection({
            type: 'page',
            source: 'articles/*.md'
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.date()
            }),
        }),
        project: defineCollection({
            type: 'page',
            source: 'projects/*.md'
        })
    }
})