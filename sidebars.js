/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  "": [
    {
      type: 'doc',
      id: 'introduction', // ✅ match the id in frontmatter
      label: 'Introduction',
    },
    {
      type: "doc",
      id: "others",
      label: "Others",
    },
    {
      type: "category",
      label: "My Azure Cloud Computing",
      collapsible: false,
      items: [

            {
              type: "category",
              label: "Azure-Fundamentals",
              collapsible: true,
              items: [
                "Microsoft-Azure/Azure-Fundamentals/AZ-901",
                "Microsoft-Azure/Azure-Fundamentals/AZ-902",
                "Microsoft-Azure/Azure-Fundamentals/AZ-903",
                "Microsoft-Azure/Azure-Fundamentals/AZ-904",
                "Microsoft-Azure/Azure-Fundamentals/AZ-905",
                "Microsoft-Azure/Azure-Fundamentals/AZ-906",
                "Microsoft-Azure/Azure-Fundamentals/AZ-907",
                "Microsoft-Azure/Azure-Fundamentals/AZ-908",
                "Microsoft-Azure/Azure-Fundamentals/AZ-909",
                "Microsoft-Azure/Azure-Fundamentals/AZ-910",
                "Microsoft-Azure/Azure-Fundamentals/AZ-911",
              ],
            },
            
            {
              type: "category",
              label: "Microsoft-Azure-Administrator",
              collapsible: true,
              items: [
                {
                  type: "category",
                  label: "01-Manage-Identity-and-Governance",
                  collapsible: true,
                  items: [
                    "Microsoft-Azure/Microsoft-Azure-Administrator/01-Manage-Identity-and-Governance/AZ-1041",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/01-Manage-Identity-and-Governance/AZ-1042",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/01-Manage-Identity-and-Governance/AZ-1043",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/01-Manage-Identity-and-Governance/AZ-1044",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/01-Manage-Identity-and-Governance/AZ-1045",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/01-Manage-Identity-and-Governance/AZ-1046",
                  ],
                },

                {
                  type: "category",
                  label: "02-Configure-and-manage-virtual-networks",
                  collapsible: true,
                  items: [
                    "Microsoft-Azure/Microsoft-Azure-Administrator/02-Configure-and-manage-virtual-networks/AZ-1047",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/02-Configure-and-manage-virtual-networks/AZ-1048",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/02-Configure-and-manage-virtual-networks/AZ-1049",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/02-Configure-and-manage-virtual-networks/AZ-1050",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/02-Configure-and-manage-virtual-networks/AZ-1051",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/02-Configure-and-manage-virtual-networks/AZ-1052",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/02-Configure-and-manage-virtual-networks/AZ-1053",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/02-Configure-and-manage-virtual-networks/AZ-1054",
                  ],
                },
                

                {
                  type: "category",
                  label: "03-Implement-and-manage-storage",
                  collapsible: true,
                  items: [
                    "Microsoft-Azure/Microsoft-Azure-Administrator/03-Implement-and-manage-storage/AZ-1055",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/03-Implement-and-manage-storage/AZ-1056",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/03-Implement-and-manage-storage/AZ-1057",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/03-Implement-and-manage-storage/AZ-1058",
                  ],
                },

                {
                  type: "category",
                  label: "04-Deploy-and-manage-compute-resources",
                  collapsible: true,
                  items: [
                    "Microsoft-Azure/Microsoft-Azure-Administrator/04-Deploy-and-manage-compute-resources/AZ-1059",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/04-Deploy-and-manage-compute-resources/AZ-1060",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/04-Deploy-and-manage-compute-resources/AZ-1061",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/04-Deploy-and-manage-compute-resources/AZ-1062",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/04-Deploy-and-manage-compute-resources/AZ-1063",
                  ],
                },
                
                {
                  type: "category",
                  label: "05-Monitor-and-back-up-resources",
                  collapsible: true,
                  items: [
                    "Microsoft-Azure/Microsoft-Azure-Administrator/05-Monitor-and-back-up-resources/AZ-1064",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/05-Monitor-and-back-up-resources/AZ-1065",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/05-Monitor-and-back-up-resources/AZ-1066",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/05-Monitor-and-back-up-resources/AZ-1067",
                    "Microsoft-Azure/Microsoft-Azure-Administrator/05-Monitor-and-back-up-resources/AZ-1068",
                  ],
                },

                
              ],
            },


            {
              type: "category",
              label: "Microsoft-Azure-Hands-On",
              collapsible: true,
              items: [
                "Microsoft-Azure/Microsoft-Azure-Hands-On/Coming Soon 1",
                "Microsoft-Azure/Microsoft-Azure-Hands-On/Coming Soon 2",
              ],
            },

      ],
    },

    {
      type: "category",
      label: "Devops & SRE",
      collapsible: false,
      items: [
            
            {
              type: "category",
              label: "GitHub",
              collapsible: true,
              items: [
                {
                  type: "category",
                  label: "Coming Soon 1",
                  collapsible: true,
                  items: [
                    "Git-Fundamentals/GitHub/example1/Coming Soon 1",
                  ],
                },

                {
                  type: "category",
                  label: "Coming Soon 2",
                  collapsible: true,
                  items: [
                    "Git-Fundamentals/GitHub/example2/Coming Soon 2",
                  ],
                },

                
              ],
            },
            
            {
              type: "category",
              label: "GitLab",
              collapsible: true,
              items: [

                {
                  type: "category",
                  label: "Introduction to Git and Version Control",
                  collapsible: true,
                  items: [
                    "Git-Fundamentals/GitLab/02-Introduction to Git and Version Control",
                  ],
                },

                {
                  type: "category",
                  label: "Gitlab Workflow",
                  collapsible: true,
                  items: [
                    "Git-Fundamentals/GitLab/03-Gitlab Workflow",
                  ],
                },

                {
                  type: "category",
                  label: "Setting Up Your Organization",
                  collapsible: true,
                  items: [
                    "Git-Fundamentals/GitLab/04-Setting Up Your Organization",
                  ],
                },

                {
                  type: "category",
                  label: "Gitlab CI CD Functions",
                  collapsible: true,
                  items: [
                    "Git-Fundamentals/GitLab/05-Gitlab CI CD Functions",
                  ],
                },

              
                {
                  type: "category",
                  label: "Gitlab Package and Release",
                  collapsible: true,
                  items: [
                    "Git-Fundamentals/GitLab/06-Gitlab Package and Release",
                  ],
                },
                
                {
                  type: "category",
                  label: "Gitlab Security Scanning",
                  collapsible: true,
                  items: [
                    "Git-Fundamentals/GitLab/07-Gitlab Security Scanning",
                  ],
                },

              ],
            },
      ],
    },
  ],
};
