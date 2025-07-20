# Firebase Studio - Next.js Portfolio

This is your Next.js portfolio, created in Firebase Studio. You can customize it by editing the files in the `src` directory, especially `src/app/page.tsx`.

---

## How to Deploy to GitHub Pages

Follow these steps to host your website on GitHub for free.

### Step 1: Configure for Deployment

Before you push your code, you must configure the project for GitHub Pages.

1.  Open the `next.config.ts` file.
2.  Uncomment the `basePath` and `assetPrefix` lines.
3.  Replace `your-repo-name` with the name of your GitHub repository. For example, if your repository URL is `https://github.com/username/my-cool-site`, you would set `basePath: '/my-cool-site'` and `assetPrefix: '/my-cool-site/'`.
4.  Save the file.

This step is **critical** for your images and links to work on the live site.

### Step 2: Create a GitHub Repository

1.  Go to [GitHub](https://github.com) and log in.
2.  Click the **+** icon in the top-right corner and select **"New repository"**.
3.  Give your repository a name (e.g., `my-portfolio`).
4.  Make sure it's set to **Public**.
5.  Click **"Create repository"**.

### Step 3: Push Your Code to GitHub

After creating your project in Firebase Studio, you'll need to download the code and "push" it to your new GitHub repository.

1.  **Download Your Project**: Use the export or download feature in Firebase Studio to get a `.zip` file of your project.
2.  **Unzip the File**: Extract the contents of the zip file on your local machine.
3.  **Initialize Git and Push**:
    *   Open a terminal or command prompt and navigate into your project folder.
    *   Run the following commands one by one. Replace `<your-github-username>` and `<your-repository-name>` with your actual details.

    ```bash
    git init -b main
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.com/<your-github-username>/<your-repository-name>.git
    git push -u origin main
    ```

### Step 4: Configure GitHub Pages

1.  In your new GitHub repository, go to the **"Settings"** tab.
2.  In the left sidebar, click on **"Pages"**.
3.  Under the "Build and deployment" section, select **"GitHub Actions"** as the source. GitHub will automatically detect the Next.js configuration and suggest a workflow.
4.  Click **"Configure"** on the suggested "Next.js" workflow. This will open a new file `nextjs.yml` in the `.github/workflows` directory.
5.  **Commit the workflow file**. You can use the default commit message.

### Step 5: Final Deployment

Pushing the new workflow file will trigger the deployment process.

1.  Click on the **"Actions"** tab in your repository.
2.  You will see a workflow running. It will take a few minutes to build and deploy your site.
3.  Once the workflow is complete (it shows a green checkmark), your site will be live!
4.  You can find the URL for your live site back in the **Settings > Pages** section.

Your portfolio is now live for the world to see! Any new changes you `git push` to your `main` branch will automatically be deployed.
