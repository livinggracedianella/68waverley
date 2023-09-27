// 1. Import utilities from 'astro:content'
// z refers to the Zod library - Zod readme can be found here: https://github.com/colinhacks/zod
import { z, defineCollection } from 'astro:content'
// Can move these elsewhere and import from there, e.g.: import {blogSchema, nesletterSchema} from '../schemas';
// Schemas are then defined with defineCollection({ schema: blogSchema }); etc.
// 2. Define your collection(s)
/*const profilesCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    })
})*/
const blogsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
})
//3. Export a single 'collections' object to register your collection(s)
//   This key should match your ocllection directory name in "src/content"
export const collections = {
  /*'profiles': profilesCollection,*/
  blogs: blogsCollection,
}
