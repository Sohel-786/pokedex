export default {
    "ci": {
        collect: {
            staticDistDir: './dist',
            numberOfRuns: 3,
            url: ['http://localhost:8080'], // fallback default if not running autorun
          },
      "upload": {
        "target": "temporary-public-storage"
      }
    }
  }
  