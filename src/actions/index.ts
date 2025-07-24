import { defineAction } from "astro:actions";
import type { likeResponse } from "./model";
import { addLikes, getLikes } from "./repository";




export const server = {
    addLikes: defineAction<likeResponse>({
        async handler() {
            return { like : await addLikes() }
        }
    }),
    getLikes: defineAction<likeResponse>({
        async handler() {
            return { like: await getLikes() }
        }
    })
}