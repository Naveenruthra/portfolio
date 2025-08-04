# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

---

### **GitHub Pages Deployment Fix**

If your site is showing this README file after deployment, it means your GitHub Actions workflow is incorrect or not running for your branch.

**1. Check Your Deployment Branch**

The workflow below is configured to run ONLY on pushes to a branch named `parllex`. If you are using a different branch for deployment (e.g., `main` or `deploy`), you **must** edit the `.github/workflows/nextjs.yml` file and change the branch name.

Find this section:
```yaml
on:
  push:
    branches: ["parllex"] # <-- CHANGE THIS
```
And replace `"parllex"` with the name of your branch.

**2. Update Your Workflow File**

You must replace the entire content of your `.github/workflows/nextjs.yml` file with the code below. This will correctly build and deploy your Next.js static site.

```yaml
# Sample workflow for building and deploying a Next.js site to GitHub Pages
#
name: Deploy Next.js site to Pages

on:
  # Runs on pushes targeting the branch set below
  push:
    # ------------------------------------------------------------------
    # IMPORTANT: YOU MUST EDIT THIS LINE!
    #
    # Replace "parllex" with the name of the branch you are using for
    # GitHub Pages deployment (e.g., "main", "deploy", etc.).
    # ------------------------------------------------------------------
    branches: ["parllex"]

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
      - name: Detect Package Manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: ${{ steps.detect-package-manager.outputs.manager }}
      - name: Setup Pages
        uses: actions/configure-pages@v5
        # This action is used to configure GitHub Pages, but we are manually
        # handling the basePath in next.config.ts, which is more reliable.
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
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}
      - name: Build with Next.js
        run: ${{ steps.detect-package-manager.outputs.runner }} next build
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