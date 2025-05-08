export default {
    "ci": {
      "collect": {
        "staticDistDir": "./dist"
      },
      "assert": {
        "preset": "lighthouse:recommended",
        "assertions": {
          "categories:performance": ["error", { "minScore": 0.7 }],
          "categories:accessibility": ["warn", { "minScore": 0.7 }],
          "categories:best-practices": ["warn", { "minScore": 0.7 }],
          "categories:seo": ["warn", { "minScore": 0.7 }]
        }
      }
    }
  }
  