import client from "@/lib/client";
import type { Lesson, Training } from "./model";



export const getTrainings = async (): Promise<Training[]> =>
    await client.getContentList<Training>({ contentType:"training" });





export const getLessons = async (ids: string[]): Promise<Lesson[]> =>
    client.getContentList<Lesson>({
        contentType: "lesson",
        id: { in: ids }
});
