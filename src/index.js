export default {
	async fetch(request, env, ctx) {
		return Response.json({
			region: request.cf.region,
			colo: request.cf.colo,
			country: request.cf.country,
			city: request.cf.city
		});
	},
};
