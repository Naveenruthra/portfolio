# Firebase Studio - Next.js Portfolio

This is your Next.js portfolio, created in Firebase Studio. You can customize it by editing the files in the `src` directory, especially `src/app/page.tsx`.

---

## How to Deploy to GitHub Pages

Follow these steps to host your website on GitHub for free. This guide assumes you are deploying from a specific branch (e.g., `production` or `main`).

### Step 1: Push Your Code to GitHub

First, ensure your project code is pushed to the correct branch (e.g., `production`) on your GitHub repository. Your project has already been configured for deployment.

### Step 2: Configure GitHub Pages & Actions

1.  In your GitHub repository, go to the **"Settings"** tab.
2.  In the left sidebar, click on **"Pages"**.
3.  Under the "Build and deployment" section, for the "Source", select **"GitHub Actions"**.
4.  GitHub may suggest a "Next.js" workflow. Click the **"Configure"** button. This will open an editor for a new file at `.github/workflows/nextjs.yml`.
    *   **Troubleshooting Tip:** If you see an error like "A file with the same name already exists," it means the `nextjs.yml` file was already created. Simply navigate to the `.github/workflows/` folder in your repository's code view, click on the `nextjs.yml` file, and click the pencil icon to edit it.

### Step 3: The Correct Workflow File

This is the most important step. **Delete the entire content** of the `nextjs.yml` file and **replace it with the code below**. This workflow is specifically configured for a static Next.js site.

```yaml
# Sample workflow for building and deploying a Next.js site to GitHub Pages.
#
# To get started with Next.js see: https://nextjs.org/docs/getting-started
#
name: Deploy Next.js site to Pages

on:
  # Runs on pushes targeting the production branch
  push:
    branches: ["production"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - name: Setup Pages
        uses: actions/configure-pages@v5
        with:
          # Automatically inject basePath in your next.config.js (or .mjs) file.
          #
          # You might need to update this script to find and replace your base path in your next.config.js file.
          static_site_generator: next
      - name: Restore cache
        uses: actions/cache@v4
        with:
          path: |
            .next/cache
          # Generate a new cache whenever packages or source files change.
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
          # If source files changed but packages didn't, rebuild from a prior cache.
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-
      - name: Install dependencies
        run: npm ci
      - name: Build with Next.js
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 4: See Your Site Live!

Committing the new workflow file will trigger the deployment.

1.  Click on the **"Actions"** tab in your repository.
2.  You will see a workflow running. It will take a few minutes to build and deploy your site.
3.  Once the workflow is complete (it shows a green checkmark), your site will be live!
4.  You can find the URL for your live site back in the **Settings > Pages** section.

Your portfolio is now live! Any new changes you `git push` to your designated `production` branch will automatically be deployed.
