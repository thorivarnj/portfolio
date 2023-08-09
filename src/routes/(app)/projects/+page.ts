import type { ProjectType } from "$lib/sanity/schemas/projectSchema"
import { client } from "$lib/utils/sanity"

export const load = async () => {
    const projects: Promise<Array<ProjectType>> = await client.fetch(/* groq */ `*[
        _type == "project"
    ]{
        ...
    }`).catch((error) => {
        throw new Error(error)
    })

    return { projects }
}