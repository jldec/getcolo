# getcolo
Tiny Cloudflare worker that returns its own instance-specific colo info as JSON.

https://getcolo.jldec.me

```json
$ curl -s https://getcolo.jldec.me | jq
{
  "colo": "DUB",
  "city": "Sandyford",
  "region": "Leinster",
  "country": "IE",
  "continent": "EU"
}
```
