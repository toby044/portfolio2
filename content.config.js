import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        articles: defineCollection({
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.string().or(z.date())
            })
        })
    }
})