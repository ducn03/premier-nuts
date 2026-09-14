# premier-nuts

## Structure

```text
index.html                         # Homepage entrypoint
pages/
	products.html                    # Full catalog entrypoint
	product-detail.html              # Product detail entrypoint
shared/
	styles.css                       # Shared design system and responsive UI
	site-shell.js                    # Shared header, footer, and mobile navigation
features/
	catalog/
		catalog.js                     # Catalog rendering and category filtering
		products.json                  # Catalog source of truth
	product-detail/
		product-detail.js              # Product detail rendering
assets/
	images/                          # Brand and static image assets
```

The HTML files remain at the project root as stable static entrypoints. Feature logic, shared UI, data, and assets are separated so backend integration can replace each feature's data layer without changing the page shell.