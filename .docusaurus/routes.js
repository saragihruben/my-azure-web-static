import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '470'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2c1'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '011'),
            routes: [
              {
                path: '/docs/devops-sre',
                component: ComponentCreator('/docs/devops-sre', '024'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Getting-started/introduction',
                component: ComponentCreator('/docs/Getting-started/introduction', '3d5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator', 'ec2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/AZ-1041',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/AZ-1041', '696'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/AZ-1042',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/AZ-1042', 'a2c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals', 'b4c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-901',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-901', '4f2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-902',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-902', '535'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Hands-On',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Hands-On', 'f67'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Hands-On/Coming Soon 1',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Hands-On/Coming Soon 1', '777'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Hands-On/Coming Soon 2',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Hands-On/Coming Soon 2', '99d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/others',
                component: ComponentCreator('/docs/others', '8ee'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
