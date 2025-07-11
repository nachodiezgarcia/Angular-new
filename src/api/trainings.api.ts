import client from "@/lib/client";
import type { Training } from "./model";



export const getTrainings = async (): Promise<Training[]> =>
    await client.getContentList<Training>({ contentType:"training" }); 