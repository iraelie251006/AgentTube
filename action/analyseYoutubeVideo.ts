import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData: FormData) {
    const url = formData.get("url")?.toString();
    if (!url) return;

    const videoId = "abc"; // TODO
    if(!videoId) return

    // redirect to new post
    redirect(`/video/${videoId}/analysis`)
}