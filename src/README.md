# Firebase Studio - Next.js Portfolio

This is your Next.js portfolio, created in Firebase Studio. You can customize it by editing the files in the `src` directory, especially `src/app/page.tsx`.

---

## How to Deploy to GitHub Pages

Follow these steps to host your website on GitHub for free.

### Step 1: Push Your Code to GitHub

First, ensure your project code is in a GitHub repository and that you have pushed all the latest changes to your deployment branch (e.g., `master` or `production`).

### Step 2: Configure GitHub Actions for Deployment

The key to a successful deployment is the GitHub Actions workflow file.

1.  In your GitHub repository, navigate to the `.github/workflows/` directory. If it doesn't exist, you will create it.
2.  Create or open the file named `nextjs.yml`.
3.  **IMPORTANT**: Delete all content in that file and replace it with the **exact** code below. This workflow is specifically configured for a static Next.js export to GitHub Pages.

```yaml
# Sample workflow for building and deploying a Next.js site to GitHub Pages
#
# To get started with Next.js see: https://nextjs.org/docs/getting-started
#
name: Deploy Next.js site to Pages

on:
  # Runs on pushes targeting your deployment branch (e.g., master, main, or production)
  push:
    branches: ["master"] # <-- IMPORTANT: Change this to your deployment branch name if it's not "master"

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

### Step 3: Configure the Pages Source

1.  In your GitHub repository, go to the **"Settings"** tab.
2.  In the left sidebar, click on **"Pages"**.
3.  Under the "Build and deployment" section, ensure the **"Source"** is set to **"GitHub Actions"**.

### Step 4: See Your Site Live!

Pushing the new workflow file (or any new commit to your deployment branch) will trigger the deployment process.

1.  Click on the **"Actions"** tab in your repository.
2.  You will see a workflow running. It will take a few minutes to build and deploy your site.
3.  Once the workflow is complete (it shows a green checkmark), your site will be live!
4.  You can find the URL for your live site back in the **Settings > Pages** section. It should now display your portfolio correctly.
