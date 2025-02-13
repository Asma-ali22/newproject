// import { createClient } from 'next-sanity'




// export const client = createClient({
//   projectId:'pf1qb9pc',
//   dataset:'production',
//   apiVersion:'2025-01-13',
//   useCdn:true,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN='skETmoy89cs80Zx5WKfksp8SDERMWJuwLpQG3i9IdlLK9B18ndqemI6RyPmzIM0HxU5osUkVLB8j2OAP13XPfiSor9bNSDr3ECnYDwFPweF4fxsGKp4agr1ewvYdlbG5lw6WWMxrNbuto6Kea9Hkfw9aOQxbP23zU36zcXW3F2eX4gCBhGlq',
  
  // Set to false if statically generating pages, using ISR or tag-based revalidation
  import imageUrlBuilder from '@sanity/image-url';
  import { createClient } from '@sanity/client';
  
  const client = createClient({
    projectId: 'pf1qb9pc',
    dataset: 'production',
    apiVersion:'2025-01-13',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN='skETmoy89cs80Zx5WKfksp8SDERMWJuwLpQG3i9IdlLK9B18ndqemI6RyPmzIM0HxU5osUkVLB8j2OAP13XPfiSor9bNSDr3ECnYDwFPweF4fxsGKp4agr1ewvYdlbG5lw6WWMxrNbuto6Kea9Hkfw9aOQxbP23zU36zcXW3F2eX4gCBhGlq',
    useCdn: true,
  });
  
  const builder = imageUrlBuilder(client);
  
  function urlFor(source:any) {
    return builder.image(source);
  }

