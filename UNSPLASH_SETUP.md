# Unsplash API Setup for Luxe Queer Magazine

This document explains how to set up and use the Unsplash API in the Luxe Queer Magazine project.

## Getting Unsplash API Keys

1. Create an account at [Unsplash Developers](https://unsplash.com/developers)
2. Register a new application
3. Once approved, you'll receive an Access Key and Secret Key

## Setting Up Environment Variables

1. In the `.env.local` file (already created), replace the placeholder values with your actual API keys:

```
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_actual_access_key_here
UNSPLASH_SECRET_KEY=your_actual_secret_key_here
```

2. Make sure `.env.local` is in your `.gitignore` file (it already is)

## Using the Unsplash API in Your Project

### Client-Side Components

For client-side components, use the `UnsplashImage` component:

```tsx
import { UnsplashImage } from '@/components/UnsplashImage';

// In your component:
<UnsplashImage 
  query="luxury-fashion" 
  alt="Luxury Fashion" 
  width={600} 
  height={800} 
  className="rounded-lg" 
/>
```

### Server-Side Components or API Routes

For server components or API routes, use the server-side function:

```tsx
import { fetchUnsplashImageServer } from '@/utils/unsplash';

// In your server component:
export default async function MyServerComponent() {
  const imageData = await fetchUnsplashImageServer('luxury-travel');
  
  if (!imageData) {
    return <div>Failed to load image</div>;
  }
  
  return (
    <div>
      <img src={imageData.url} alt="Luxury Travel" />
      <p>
        Photo by <a href={imageData.credit.link}>{imageData.credit.name}</a> on Unsplash
      </p>
    </div>
  );
}
```

## Usage Limits

Be aware of Unsplash API usage limits:
- 50 requests per hour
- 1,000 requests per day

For production use, consider implementing caching strategies to reduce API calls.

## Troubleshooting

If you encounter issues:

1. Check that your API keys are correctly set in `.env.local`
2. Verify that the environment variables are being loaded correctly
3. Check the browser console or server logs for error messages
4. Ensure you're not exceeding Unsplash's rate limits
