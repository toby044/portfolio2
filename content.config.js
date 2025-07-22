import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        article: defineCollection({
            source: 'article/*.md',
            type: 'page',
            schema: z.object({
                tags: z.array(z.string()),
                image: z.string(),
                date: z.date()
            })
        })
    }
})