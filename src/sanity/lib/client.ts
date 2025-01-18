import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'pf1qb9pc',
  dataset:'production',
  apiVersion:'2025-01-13',
  // Set to false if statically generating pages, using ISR or tag-based revalidation
})
