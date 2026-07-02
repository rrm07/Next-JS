export const dynamic = "force-static"; //always static
// export const dynamic = "force-dynamic"; //Always render on every request (like getServerSideProps).
export const revalidate = 10 //regenerate every 10 seconds

export async function GET() {
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Books" },
    { id: 3, name: "Clothing" },
    { id: 4, name: "Gamiing" },
  ];

  return Response.json(categories);
}

//caching does not work in dev mode, build it and test it
//caching only works in GET method
//also if we are using header(), cookies(), request object in GET, there also caching not supported

//In the App Router, Next.js tries to determine automatically whether a page should be:

// Static (generated once)
// Dynamic (generated on every request)
// for that we can use above config
//for force-static:
//Run the page during next build
// Generate HTML
// Serve that pre-generated HTML for all requests

// No server rendering on each request.

