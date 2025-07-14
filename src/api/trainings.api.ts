import client from "@/lib/client";
import type { Lesson, Training, TrainingWithLessons } from "./model";

export const getLessons = async (ids: string[]): Promise<Lesson[]> =>
    client.getContentList<Lesson>({
        contentType: "lesson",
        id: { in: ids }
});

export const getTrainings = async (): Promise<TrainingWithLessons[]> => {
    const trainings = await client.getContentList<Training>({ contentType: "training" });
    const trainingWithLessons = await Promise.all(
        trainings.map(async (training) => {
                const lessons = await getLessons(training.lessons);
                return {
                    ...training,
                    lessons
                }
            }        
        )
    );
    return trainingWithLessons;
}