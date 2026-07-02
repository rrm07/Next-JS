import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // const reqHeaders = new Headers(request.headers)
  // console.log(reqHeaders.get("Authorization"))
  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log(theme);

  const cookiesData = await cookies();
  cookiesData.set("resultsPerPage", "20");
  console.log(cookiesData.get("resultsPerPage"));

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
