import { defineConfig } from 'sanity';
import { schemaTypes } from './schemas';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

// Actions available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

// Document types that should only have a single instance
const singletonTypes = new Set(['settings']);

// Sanity configuration
export default defineConfig({
    basePath: '/studio',
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    title: import.meta.env.VITE_SANITY_PROJECT_TITLE,
    plugins: [
        deskTool(),
        visionTool()
    ],
    schema: {
        types: schemaTypes,
    },
});
