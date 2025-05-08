export default {
    "ci": {
      "assert": {
        "assertions": {
          "categories:performance": ["error", { "minScore": 0.7 }],
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
  