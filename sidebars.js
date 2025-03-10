module.exports = {
  someSidebar: {
      Introduction: [
          'overview',
          'quick-start',
          'philosophy',
          'features',
          'demo',
          {
              Installation: [
                  'install-docker-compose',
                  'install-helm',
                  'install-manual'
              ]
          },
          'entities',
          'architecture'
      ],
      Usage: [
          'proj-branches',
          'stages',
          'schema',
          'schema-data',
          'secrets',
          'docker-executor',
          'lxd-executor',
          'notifications',
          'webhooks',
          'autoscale-in-cloud',
          {
              'Test Results': [
                  {
                      type: 'doc',
                      id: 'test-results-basics',
                      label: 'Basics'
                  },
                  {
                      type: 'doc',
                      id: 'test-results-tracking',
                      label: 'Tracking'
                  }
              ]
          },
          'tools',
          'kkci',
          'migration'
      ],
      'Testing Frameworks': [
          'tf-junit',
          'tf-pytest',
          'tf-robotframework'
      ],
      Administration: [
          'agents',
          'users',
          'storage'
      ],
      Guides: [
          'guide-intro',
          'guide-autoscale',
          'guide-webhooks',
          'guide-kubernetes'
      ],
      Contributing: [
          'contrib-kraken',
          'dev-guide',
          'contrib-docs',
      ],
      Reference: [
          'schema-ref',
          'server-api'
      ]
  },
};
