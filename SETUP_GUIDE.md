# Setup Guide - HairCare AI Project

## Prerequisites

Before you begin, make sure you have the following installed:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - This will also install `npm` (Node Package Manager)
   - Verify installation by running in terminal:
     ```powershell
     node --version
     npm --version
     ```

## Step-by-Step Setup Instructions

### Step 1: Navigate to Project Directory

Open PowerShell or Command Prompt and navigate to the project folder:

```powershell
cd "C:\Users\PIRTHIVIRAJ\Downloads\haircareai-main\haircareai-main"
```

### Step 2: Install Dependencies

Install all required packages:

```powershell
npm install
```

This will install all dependencies listed in `package.json`. This may take a few minutes.

### Step 3: Set Up Environment Variables

The project requires Supabase configuration. Create a `.env` file in the root directory:

1. Create a new file named `.env` in the project root
2. Add the following variables (you'll need to get these from your Supabase project):

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

**How to get Supabase credentials:**
- If you have a Supabase project: Go to your Supabase dashboard → Settings → API
- If you don't have a Supabase project: You'll need to create one at https://supabase.com

**Note:** The project appears to use Supabase project ID `ipclhpknygataahqhqum` (from `supabase/config.toml`). You may need to contact the project owner for the credentials or set up your own Supabase instance.

### Step 4: Start the Development Server

Run the development server:

```powershell
npm run dev
```

The application will start and be available at:
- **Local:** http://localhost:8080
- **Network:** The terminal will show the network URL

### Step 5: Open in Browser

Open your web browser and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server (with hot-reload)
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Troubleshooting

### Issue: "npm is not recognized"
**Solution:** Node.js is not installed or not in your PATH. Install Node.js from https://nodejs.org/

### Issue: Port 8080 is already in use
**Solution:** The port is already occupied. You can:
- Stop the other application using port 8080
- Or modify `vite.config.ts` to use a different port

### Issue: Supabase connection errors
**Solution:** 
- Verify your `.env` file exists and has correct values
- Make sure the Supabase URL and key are correct
- Check that your Supabase project is active

### Issue: Module not found errors
**Solution:** 
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

## Project Structure

- `src/` - Source code
- `src/components/` - React components
- `src/pages/` - Page components
- `src/integrations/supabase/` - Supabase client configuration
- `public/` - Static assets
- `supabase/` - Supabase configuration and migrations

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **Supabase** - Backend (database, auth, etc.)
- **React Router** - Routing

## Need Help?

If you encounter any issues:
1. Check that all prerequisites are installed
2. Verify environment variables are set correctly
3. Ensure you're in the correct directory
4. Check the terminal for error messages
