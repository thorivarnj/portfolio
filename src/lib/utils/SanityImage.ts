
import { client } from '$lib/utils/sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { Image, ImageSchemaType } from 'sanity'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function sanityImageLink(source: ImageSchemaType): string {
    return builder.image(source).width(960).height(540).url() as unknown as string
}

export { sanityImageLink }
