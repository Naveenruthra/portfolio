# Firebase Studio - Next.js Portfolio

This is your Next.js portfolio, created in Firebase Studio. You can customize it by editing the files in the `src` directory, especially `src/app/page.tsx`.

---

## How to Deploy to GitHub Pages

Follow these steps to host your website on GitHub for free. This guide assumes you are deploying from a specific branch (e.g., `production` or `main`).

### Step 1: Configure for Deployment

Before you push your code, you must configure the project for GitHub Pages. This is a one-time setup.

1.  Open the `next.config.ts` file.
2.  Uncomment the `basePath` and `assetPrefix` lines.
3.  Replace `your-repo-name` with the name of your GitHub repository. For example, if your repository URL is `https://github.com/username/my-cool-site`, you would set `basePath: '/my-cool-site'` and `assetPrefix: '/my-cool-site/'`.
4.  Save the file.

This step is **critical** for your images and links to work correctly on the live site.

### Step 2: Create a GitHub Repository

If you haven't already, create a repository on GitHub.

1.  Go to [GitHub](https://github.com) and log in.
2.  Click the **+** icon in the top-right corner and select **"New repository"**.
3.  Give your repository a name (e.g., `my-portfolio`).
4.  Make sure it's set to **Public**.
5.  Click **"Create repository"**.

### Step 3: Push Your Code to GitHub

After creating your project, you'll need to download the code and "push" it to your new GitHub repository.

1.  **Download Your Project**: Use the export or download feature in Firebase Studio to get a `.zip` file of your project.
2.  **Unzip the File**: Extract the contents of the zip file on your local machine.
3.  **Initialize Git and Push**:
    *   Open a terminal or command prompt and navigate into your project folder.
    *   Run the following commands one by one. Replace `<your-github-username>`, `<your-repository-name>`, and `<your-branch-name>` (e.g., `production` or `main`) with your actual details.

    ```bash
    git init -b <your-branch-name>
    git add .
    git commit -m "Initial commit for deployment"
    git remote add origin https://github.com/<your-github-username>/<your-repository-name>.git
    git push -u origin <your-branch-name>
    ```

### Step 4: Configure GitHub Pages & Actions

1.  In your GitHub repository, go to the **"Settings"** tab.
2.  In the left sidebar, click on **"Pages"**.
3.  Under the "Build and deployment" section, for the "Source", select **"GitHub Actions"**.
4.  GitHub may suggest a "Next.js" workflow. Click the **"Configure"** button. This will create a new file at `.github/workflows/nextjs.yml`.
5.  **IMPORTANT:** You must edit this new workflow file to deploy from your chosen branch.
    *   Find the `on:` section in the `nextjs.yml` file. It will look something like this:
        ```yaml
        on:
          push:
            branches: ["main"]
          pull_request:
            branches: ["main"]
        ```
    *   Change `"main"` to your deployment branch name (e.g., `"production"`):
        ```yaml
        on:
          push:
            branches: ["production"] # Changed from "main"
          pull_request:
            branches: ["production"] # Changed from "main"
        ```
6.  Click **"Commit changes..."** to save the workflow file to your repository.

### Step 5: See Your Site Live!

Committing the new workflow file will trigger the first deployment.

1.  Click on the **"Actions"** tab in your repository.
2.  You will see a workflow running. It will take a few minutes to build and deploy your site.
3.  Once the workflow is complete (it shows a green checkmark), your site will be live!
4.  You can find the URL for your live site back in the **Settings > Pages** section.

Your portfolio is now live! Any new changes you `git push` to your designated `production` branch will automatically be deployed.
