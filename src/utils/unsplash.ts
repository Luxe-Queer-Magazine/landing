/**
 * Utility functions for interacting with the Unsplash API
 */

// Basic fetch function for Unsplash API
export async function fetchUnsplashImage(query: string) {
  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
  
  if (!accessKey) {
    console.error('Unsplash API key is missing');
    return null;
  }
  
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&client_id=${accessKey}`
    );
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.urls.regular;
  } catch (error) {
    console.error('Error fetching from Unsplash:', error);
    return null;
  }
}

// Function to get multiple random images
export async function fetchUnsplashImages(query: string, count: number = 1) {
  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
  
  if (!accessKey) {
    console.error('Unsplash API key is missing');
    return [];
  }
  
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&count=${count}&client_id=${accessKey}`
    );
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.map((item: any) => item.urls.regular);
  } catch (error) {
    console.error('Error fetching from Unsplash:', error);
    return [];
  }
}

// Server-side function (can use secret key if needed)
export async function fetchUnsplashImageServer(query: string) {
  // This function would be used in server components or API routes
  // It could use the secret key for more privileged operations if needed
  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
  
  if (!accessKey) {
    console.error('Unsplash API key is missing');
    return null;
  }
  
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&client_id=${accessKey}`
    );
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      url: data.urls.regular,
      credit: {
        name: data.user.name,
        username: data.user.username,
        link: data.links.html
      }
    };
  } catch (error) {
    console.error('Error fetching from Unsplash:', error);
    return null;
  }
}
