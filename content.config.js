import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        article: defineCollection({
            type: 'page',
            source: 'articles/*.md'
        }),
        project: defineCollection({
            type: 'page',
            source: 'projects/*.md'
        })
    }
})