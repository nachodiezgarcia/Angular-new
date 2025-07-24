export async function getDogFact() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return "Dogs can learn more than 1000 words. 🐶";
}