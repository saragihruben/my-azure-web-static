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
      type: "category",
      label: "Getting Started",
      collapsible: false,
      items: [
        "Getting-started/introduction",
      ],
      position: 1, // Ensure it stays at the top
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
          label: "sub1",
          collapsible: true,
          items: [
            {
              type: "category",
              label: "Microsoft Azure Fundamentals",
              collapsible: true,
              items: [
                "Microsoft Azure/Microsoft Azure Fundamentals/AZ-901",
                "Microsoft Azure/Microsoft Azure Fundamentals/AZ-902",
              ],
            },
            {
              type: "category",
              label: "Microsoft Azure Administrator",
              collapsible: true,
              items: [
                "Microsoft Azure/Microsoft Azure Administrator/AZ-1041",
                "Microsoft Azure/Microsoft Azure Administrator/AZ-1042",
              ],
            },
            {
              type: "category",
              label: "Microsoft Azure Hands-On",
              collapsible: true,
              items: [
                "Microsoft Azure/Microsoft Azure Hands-On/Comming Soon 1",
                "Microsoft Azure/Microsoft Azure Hands-On/Comming Soon 2",
              ],
            },
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
          label: "sub1",
          collapsible: true,
          items: [
            {
              type: "category",
              label: "Devops",
              collapsible: true,
              items: [
                "devops-sre/devops-sre",
              ],
            },
          ],
        },
      ],
    },
  ],
};
