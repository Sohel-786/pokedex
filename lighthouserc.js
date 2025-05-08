export default {
    "ci": {
        collect: {
            staticDistDir: './dist',
            numberOfRuns: 3,
            url: ['http://localhost:8080'], // fallback default if not running autorun
          },
      "assert": {
        "assertions": {
          'categories:performance': ['error', { minScore: 0.6 }],
          "categories:accessibility": ["warn", { "minScore": 0.7 }],
          "categories:best-practices": ["warn", { "minScore": 0.7 }],
          "categories:seo": ["warn", { "minScore": 0.7 }]
        }
      },
      "upload": {
        "target": "temporary-public-storage"
      }
    }
  }
  