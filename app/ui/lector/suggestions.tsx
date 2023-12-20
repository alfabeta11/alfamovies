import { getRecommendations } from "@/app/lib/data"
import Gallery from "../gallery";

export default async function Suggestions({id, type}: {id: number, type: string}) {
    const recommendations = await getRecommendations(id, type);
    // console.log(recommendations);
    return (
        <>
            <Gallery medias={recommendations} />
        </>
    )
};
