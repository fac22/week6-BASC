# Subcomfy

This is an exclusive, members-only subscription service for your homeware dreams: cushions, socks, jams and a goblin. Create an account and start shopping!

## A Project by

- Co-authored-by: Adriana <82960475+aaadriana@users.noreply.github.com>
- Co-authored-by: Barbara <77367593+0bubbles0@users.noreply.github.com>
- Co-authored-by: cemalokten <60609268+cemalokten@users.noreply.github.com>
- Co-authored-by: Sasha <59370143+cerealenjoyer@users.noreply.github.com>

## Acceptance Criteria

- [x] Server-rendered with Next.js
- [x] Hosted on Vercel
- [x] Data stored in ElephantSQL Postgres
- [x] Homepage with product listings
- [x] Individual product pages, containing:
  - [x] Quantity/colour/variant pickers

### Stretch criteria

- [x] “Add to basket” button on product pages
- [x] Basket page showing all saved items
- [x] Basket contents persisted for future visits
- [x] Filter products by category
- [] Sort products by price
- [] “Featured” products on homepage

## Planning

### Database

![Database Graph](/image/pillows-db.png)

### Components

![Components Graph](/image/pillows-components.png)

### Page Design

![Page Graph](/image/pillows-pages.png)
![Basket Page Graph](/image/pillows-basket.png)

## Instructions

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
