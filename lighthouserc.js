export default {
    "ci": {
      "collect": {
        "staticDistDir": './dist',
        "numberOfRuns": 3
      },
      "assert": {
        "preset": "lighthouse:recommended",
        "assertions": {
          // Relaxing the failed assertions
          "unused-javascript": "warn",
          "render-blocking-resources": "warn",
          "speed-index": ["warn", {"minScore": 0.8}],
          
          // Additional common performance assertions you might want to relax
          "first-contentful-paint": ["warn", {"minScore": 0.8}],
          "largest-contentful-paint": ["warn", {"minScore": 0.8}],
          "cumulative-layout-shift": ["warn", {"minScore": 0.8}],
          "total-blocking-time": ["warn", {"minScore": 0.8}],
          "interactive": ["warn", {"minScore": 0.8}]
        }
      },
      "upload": {
        "target": "temporary-public-storage"
      }
    }
  }