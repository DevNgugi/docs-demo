/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  userGuide: [
    'intro',
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user-guide/getting-started',
        'user-guide/using-checkout',
        'user-guide/troubleshooting-guide',

        'user-guide/faq',
      ],
    }],
    
   devGuide: [{
      type: 'category',
      label: 'Developer Guide',
      items: [
        'developer-guide/integration-overview',
        'developer-guide/api-keys',
        'developer-guide/creating-payment-session',
        'developer-guide/frontend',
        'developer-guide/verifying-payment',
        'developer-guide/webhooks',
        'developer-guide/sandbox',
      ],
    },
  ]
  
};

export default sidebars;
