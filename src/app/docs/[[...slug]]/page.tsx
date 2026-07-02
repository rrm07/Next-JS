import React from 'react'

async function Docs({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params
  const path = slug?.length ? slug.join('/') : 'home'

  return <h2>Welcome to the Docs Page for {path}</h2>
}

export default Docs