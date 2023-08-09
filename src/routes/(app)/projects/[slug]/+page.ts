import type { ProjectType } from "$lib/sanity/schemas/projectSchema";
import { client } from "$lib/utils/sanity";

export const load = async ({ params }) => {
    const project: Promise<ProjectType> = await client.fetch(/* groq */ `*[
        _type == "project"
        && slug.current == "${params.slug}"
    ]{
        ...
    }`)

    return { project };
}