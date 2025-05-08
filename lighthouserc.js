export default {
    ci: {
      collect: {
        staticDistDir: './dist',
      },
      assert: {
        assertions: {
          'categories:performance': ['error', { minScore: 0.7 }],
        },
      },
    },
  };
  