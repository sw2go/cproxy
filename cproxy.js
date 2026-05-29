export default {
  async fetch(request) {
    const url = new URL(request.url).searchParams.get("url");
    if (!url) return new Response("Missing ?url= parameter", { status: 400 });

    const response = await fetch(url);
    return new Response(response.body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      }
    });
  }
};
