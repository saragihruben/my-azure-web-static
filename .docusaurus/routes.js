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
    component: ComponentCreator('/docs', '103'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'acd'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7f9'),
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
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks', '817'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1047',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1047', '637'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1048',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1048', '0dd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1049',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1049', '8a7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1050',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1050', '234'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1051',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1051', '64d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1052',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1052', '612'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1053',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1053', 'd58'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1054',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1054', '835'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources', '98c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1050',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1050', '013'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1052',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1052', 'e3a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1060',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1060', '856'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1061',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1061', '679'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1063',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1063', 'f40'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage', '1e1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1056',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1056', '74d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1057',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1057', '424'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1058',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1058', '5b8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1065',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1065', 'b03'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance', 'e88'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1041',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1041', 'f04'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1042',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1042', '1a1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1043',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1043', 'd88'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1044',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1044', 'aff'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1045',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1045', 'f4c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1046',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1046', '042'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources', 'a33'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1064',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1064', 'd83'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1065',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1065', '89f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1066',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1066', '596'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1067',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1067', 'e16'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1068',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1068', '017'),
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
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-903',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-903', '20d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-904',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-904', '8e9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-905',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-905', '920'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-906',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-906', '410'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-907',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-907', '826'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-908',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-908', '595'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-909',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-909', 'b10'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-910',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-910', '0ec'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-911',
                component: ComponentCreator('/docs/Microsoft-Azure/Microsoft-Azure-Fundamentals/AZ-911', '29b'),
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
