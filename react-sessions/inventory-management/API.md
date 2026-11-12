# Inventory API Reference

Base URL: `http://localhost:5000/api/products`

All requests and responses use JSON. CORS is already on, so your Vite app can call it directly.

---

## The product object

```json
{
  "_id": "6af55391c9675f53dfe40d81",
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 499,
  "quantity": 25,
  "description": "2.4 GHz, USB receiver included",
  "createdAt": "2026-11-12T05:50:09.237Z",
  "updatedAt": "2026-11-12T05:50:09.237Z"
}
```

Things to notice:

- The id is **`_id`** (MongoDB), not `id`. Use `product._id` for the `key` and in URLs.
- `category` can only be one of: `Electronics`, `Stationery`, `Grocery`, `Clothing`, `Furniture`, `Other`.
- `price` must be more than 0. `quantity` cannot be negative.
- `description` is optional.

---

## Endpoints

### 1. Get all products

`GET /api/products`

Optional query params (you only need these if you want server side search, see the bonus in the guide):

| Param | Example | Meaning |
| --- | --- | --- |
| `search` | `?search=mouse` | name contains this text, not case sensitive |
| `category` | `?category=Grocery` | only this category |

Response `200`: an array of products, newest first.

```js
const res = await axios.get("http://localhost:5000/api/products");
console.log(res.data); // [ {...}, {...} ]
```

### 2. Get one product

`GET /api/products/:id`

Response `200`: a single product object.
Errors: `400` invalid id, `404` product not found.

### 3. Create a product

`POST /api/products`

Body:

```json
{
  "name": "Stapler",
  "category": "Stationery",
  "price": 120,
  "quantity": 15,
  "description": "Heavy duty"
}
```

Response `201`: the new product (with `_id`).
Errors `400` with a `message`, for example `Name is required`, `Price must be more than 0`, `Quantity cannot be negative`, or a wrong category.

Numbers sent as strings (`"120"`) are accepted and converted by the server, but it is a good habit to send real numbers.

### 4. Update a product

`PUT /api/products/:id`

Body: the fields you want to change. Sending all five fields is the easiest.

```json
{
  "name": "Stapler Pro",
  "category": "Stationery",
  "price": 150,
  "quantity": 15,
  "description": "Heavy duty"
}
```

Response `200`: the **updated** product.
Errors: `400` for bad values or bad id, `404` if not found.

### 5. Change stock (the + and - buttons)

`PATCH /api/products/:id/stock`

Body:

```json
{ "change": 1 }
```

`change` is a whole number. Use `1` for plus and `-1` for minus (any other whole number also works).

Response `200`: the updated product.
Error `400` with `Stock cannot go below 0` if the result would be negative. The server protects this, but you should also disable the minus button when quantity is 0.

### 6. Delete a product

`DELETE /api/products/:id`

Response `200`:

```json
{ "message": "Product deleted", "id": "6af55391c9675f53dfe40d81" }
```

Errors: `400` invalid id, `404` not found.

### 7. Stats (optional)

`GET /api/products/stats`

```json
{
  "totalProducts": 8,
  "totalUnits": 177,
  "totalValue": 61107,
  "lowStock": 3,
  "outOfStock": 1
}
```

"Low stock" means quantity between 1 and 5. "Out of stock" means 0.

You can use this for the summary cards, but there is a better exercise: calculate the same numbers yourself from the `products` array using `useMemo` (see Step 9 in the guide). Both ways are fine. Just know the difference.

---

## Error format

Every error comes back like this, with the right HTTP status:

```json
{ "message": "Price must be more than 0" }
```

With axios, a `400` or `404` does not return normally. It throws, and the message is at:

```js
catch (err) {
  const message = err.response?.data?.message || "Something went wrong";
}
```

This is the same `getErrorMessage` idea from `TaskContext`. If `err.response` is missing altogether, it means the server is not reachable (backend is off).

---

## Quick test without React

If something is not working in React, check the API on its own first. In a terminal:

```bash
curl http://localhost:5000/api/products
curl -X POST http://localhost:5000/api/products -H "Content-Type: application/json" -d "{\"name\":\"Test\",\"category\":\"Other\",\"price\":50,\"quantity\":4}"
```

Or use Postman / Thunder Client, whichever you used in the node sessions. If it works there but not in your app, the bug is in your React code.
