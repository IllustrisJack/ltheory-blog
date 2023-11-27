# How to create a blog post
- Fire up a development server
- Create a markdown file in `src/content/posts/`
- Start the file with the metadata:

```yaml
---
published: true
postNumber: 6
author: 'Author'
title: 'Title'
description: 'A post about the Limit Theory Redux'
---
```

- Adjust everything to your needs accordingly
- If you are not "registered" as an author yet:
- Edit `src/content/authors.json` and add your data.
- Now write your post in markdown
- Once you are done open a pull-request & profit :)

# Nuxt 3
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup
Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server
Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm generate
```

Locally preview production build:

```bash
# pnpm
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
