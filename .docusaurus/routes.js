import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', '5d6'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '670'),
    routes: [
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', '93c'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', '95c'),
            routes: [
              {
                path: '/en/docs/devops-sre',
                component: ComponentCreator('/en/docs/devops-sre', '9c4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/devops-sre/Git-Fundamentals',
                component: ComponentCreator('/en/docs/devops-sre/Git-Fundamentals', '3f2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/devops-sre/Git-Fundamentals/GitLab',
                component: ComponentCreator('/en/docs/devops-sre/Git-Fundamentals/GitLab', 'fa1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/devops-sre/Git-Fundamentals/GitLab/Gitlab CI CD Functions',
                component: ComponentCreator('/en/docs/devops-sre/Git-Fundamentals/GitLab/Gitlab CI CD Functions', '28d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/devops-sre/Git-Fundamentals/GitLab/Gitlab Package and Release',
                component: ComponentCreator('/en/docs/devops-sre/Git-Fundamentals/GitLab/Gitlab Package and Release', 'b13'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/devops-sre/Git-Fundamentals/GitLab/Gitlab Security Scanning',
                component: ComponentCreator('/en/docs/devops-sre/Git-Fundamentals/GitLab/Gitlab Security Scanning', '26f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/devops-sre/Git-Fundamentals/GitLab/Gitlab Workflow',
                component: ComponentCreator('/en/docs/devops-sre/Git-Fundamentals/GitLab/Gitlab Workflow', '89f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/devops-sre/Git-Fundamentals/GitLab/Introduction to Git and Version Control',
                component: ComponentCreator('/en/docs/devops-sre/Git-Fundamentals/GitLab/Introduction to Git and Version Control', 'a36'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/devops-sre/Git-Fundamentals/GitLab/Setting Up Your Organization',
                component: ComponentCreator('/en/docs/devops-sre/Git-Fundamentals/GitLab/Setting Up Your Organization', 'ebe'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Getting-started/introduction',
                component: ComponentCreator('/en/docs/Getting-started/introduction', '234'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Azure-Fundamentals',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Azure-Fundamentals', '65b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-901',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-901', '756'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-902',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-902', '163'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-903',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-903', 'd99'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-904',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-904', '78c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-905',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-905', '0f5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-906',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-906', 'd95'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-907',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-907', 'bb4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-908',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-908', '911'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-909',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-909', '2c9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-910',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-910', 'f4d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-911',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Azure-Fundamentals/AZ-911', '14e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator', '578'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks', 'e5a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1047',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1047', 'cbc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1048',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1048', '592'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1049',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1049', 'c00'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1050',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1050', 'c55'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1051',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1051', 'd0b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1052',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1052', '13d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1053',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1053', 'fa1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1054',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Configure-and-manage-virtual-networks/AZ-1054', 'd05'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources', 'a83'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1059',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1059', '340'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1060',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1060', '35b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1061',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1061', '158'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1062',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1062', '8bc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1063',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Deploy-and-manage-compute-resources/AZ-1063', 'f59'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage', '584'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1055',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1055', 'ecf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1056',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1056', 'fd6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1057',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1057', 'cb5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1058',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Implement-and-manage-storage/AZ-1058', '32e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance', '077'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1041',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1041', 'c6d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1042',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1042', 'cbd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1043',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1043', '7ba'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1044',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1044', 'c68'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1045',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1045', 'a26'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1046',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Manage-Identity-and-Governance/AZ-1046', 'db3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources', 'd1c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1064',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1064', '96b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1065',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1065', 'f93'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1066',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1066', 'fd1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1067',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1067', '91c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1068',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Administrator/Monitor-and-back-up-resources/AZ-1068', '4cb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Hands-On',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Hands-On', '2b6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Hands-On/Coming Soon 1',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Hands-On/Coming Soon 1', 'f43'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/Microsoft-Azure/Microsoft-Azure-Hands-On/Coming Soon 2',
                component: ComponentCreator('/en/docs/Microsoft-Azure/Microsoft-Azure-Hands-On/Coming Soon 2', '7ae'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/en/docs/others',
                component: ComponentCreator('/en/docs/others', '02c'),
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
    path: '/en/',
    component: ComponentCreator('/en/', 'd3c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
