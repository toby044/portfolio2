import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        article: defineCollection({
            type: 'page',
            source: 'articles/*.md',
            schema: z.object({
                date: z.string()
            })
        }),
        project: defineCollection({
            type: 'page',
            source: 'projects/*.md'
        })
    }
})