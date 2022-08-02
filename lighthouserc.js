module.exports = {
  ci: {
    collect: {
      settings: {
        onlyCategories: [
          'performance',
          'accessibility',
          'seo',
        ],
      },
      url: [
        'https://demo-phare.herokuapp.com/',
        'https://demo-phare.herokuapp.com/bieres-phares',
        'https://demo-phare.herokuapp.com/on-parle-de-nous',
      ],
    },
    upload: {
      serverBaseUrl: 'https://powerful-castle-27062.herokuapp.com',
      target: 'lhci',
      token: '39d48a12-e0d2-4b81-824e-19c26bc469b8',
    },
  },
};
