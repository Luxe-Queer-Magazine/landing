const fs = require('fs');
const path = require('path');

// Create a simple routes manifest if it doesn't exist
const outDir = path.join(__dirname, 'out');
const routesManifestPath = path.join(outDir, 'routes-manifest.json');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const routesManifest = {
  version: 3,
  basePath: "",
  pages404: true,
  redirects: [],
  headers: [],
  dynamicRoutes: [],
  staticRoutes: [
    {
      page: "/",
      regex: "^/(?:/)?$",
      routeKeys: {},
      namedRegex: "^/(?:/)?$"
    }
  ],
  dataRoutes: []
};

fs.writeFileSync(routesManifestPath, JSON.stringify(routesManifest, null, 2));
console.log('Routes manifest created at', routesManifestPath);

// Create a simple prerender-manifest.json file
const prerenderManifestPath = path.join(outDir, 'prerender-manifest.json');
const prerenderManifest = {
  version: 4,
  routes: {
    "/": {
      initialRevalidateSeconds: false,
      srcRoute: null,
      dataRoute: ""
    }
  },
  dynamicRoutes: {},
  notFoundRoutes: []
};

fs.writeFileSync(prerenderManifestPath, JSON.stringify(prerenderManifest, null, 2));
console.log('Prerender manifest created at', prerenderManifestPath);
