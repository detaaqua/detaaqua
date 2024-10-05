module.exports = {
    // other configurations...
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader', // Load markdown files as raw text
        },
      ],
    },
  };
  