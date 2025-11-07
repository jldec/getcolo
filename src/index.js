export default {
  async fetch(request, env, ctx) {
    const timestamp = request.url.endsWith('?ts') ? new Date().toISOString() : null
    return Response.json({
      colo: request.cf.colo,
      city: request.cf.city,
      region: request.cf.region,
      country: request.cf.country,
      continent: request.cf.continent,
      timestamp
    })
  }
}
