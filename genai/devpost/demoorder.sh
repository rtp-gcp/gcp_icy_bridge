source .benv


curl https://connect.squareupsandbox.com/v2/orders \
  -X POST \
  -H 'Square-Version: 2023-08-16' \
  -H "Authorization: Bearer ${SQUARE_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d '{
    "idempotency_key": "8d35c1ce-ac4a-4268-9e5c-87476376cd16",
    "order": {
      "location_id": "LJ8735SVX0PAN",
      "state": "OPEN"
    }
  }'

