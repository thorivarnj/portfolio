import type { PortableText } from "@portabletext/svelte"
import type { ImageSchemaType } from "sanity"
import { defineField, } from "sanity"

export type ProjectType = {
    _type: string
    title: string
    priority: number
    slug: SlugType
    description: string
    image: ImageSchemaType
    altText: string
    liveLink: string
    githubLink: string
    expandedInfo: [ ImageSchemaType | PortableText ]
}


type SlugType = {
    current: string
    _type: 'slug'
}

export const project = () =>
    defineField({
        name: 'project',
        type: 'document',
        title: 'Prosjekt',
        fields: [title(), slug(), priority(), description(), image(), liveLink(), githubLink(), expandedInformation()],
    })

const priority = () =>
    defineField({
        name: 'priority',
        type: 'number',
        title: 'Prioritet'
    })

const title = () =>
    defineField({
        name: 'title',
        type: 'string',
        title: 'Tittel',
        validation: (Rule) => Rule.required()
    })

const slug = () =>
    defineField({
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: (input: string) => input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .slice(0, 200)
        },
        validation: (Rule) => Rule.required()
    })

const description = () =>
    defineField({
        name: 'description',
        type: 'string',
        title: 'Beskrivelse',
        validation: (Rule) => Rule.required()
    })

const image = () =>
    defineField({
        title: 'Image',
        name: 'image',
        type: 'image',
        options: {
            hotspot: true // <-- Defaults to false
        },
        fields: [altText()],
        validation: (Rule) => Rule.required()
    })

const altText = () =>
    defineField({
        name: 'alt',
        type: 'string',
        title: 'Alternativ Tekst',
        validation: (Rule) => Rule.required()
    })

const liveLink = () =>
    defineField({
        name: 'liveLink',
        type: 'string',
        title: 'Link to live Project'
    })

const githubLink = () =>
    defineField({
        name: 'githubLink',
        type: 'string',
        title: 'Link to GitHub Reposotory',
        validation: (Rule) => Rule.required()
    })

const expandedInformation = () =>
    defineField({
        name: 'expandedInfo',
        type: 'array',
        title: 'Expanded Information',
        of: [image(), expandedText()]
    })

const expandedText = () =>
    defineField({
        name: 'expandedText',
        type: 'object',
        title: 'Text Block',
        fields: [text()]
    })

const text = () =>
    defineField({
        name: 'text',
        type: 'array',
        title: 'Text',
        of: [blockText()]
    })


const blockText = () =>
    defineField({
        name: 'textBlock',
        type: 'block'
    })


