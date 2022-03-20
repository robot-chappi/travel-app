const path = require('path')


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      routeItems: allMongodbRoutesRouteItems {
        edges {
          node {
            id
          }
        }
      }
      bestRoutes: allMongodbRoutesBestRoutes {
        edges {
          node {
            id
          }
        }
      }
      economyRoutes: allMongodbRoutesEconomyRoutes {
        edges {
          node {
            id
          }
        }
      }
      companyNews: allMongodbNewsCompanyNews {
        edges {
          node {
            id
          }
        }
      }
      employeesNews: allMongodbNewsEmployeesNews {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  const pageTemplate = path.resolve('./src/templates/route-template.js')
  const pageTemplateTwo = path.resolve('./src/templates/news-company-template.js')
  const pageTemplateThree = path.resolve('./src/templates/news-employee-template.js')
  const pageTemplateFour = path.resolve('./src/templates/best-route-template.js')
  const pageTemplateFive = path.resolve('./src/templates/economy-route-template.js')
  for (const { node } of data.routeItems.edges) {
    createPage({
      path: `/route/${node.id}/`,
      component: pageTemplate,
      context: {
        id: node.id,
      },
    })
  }
  for (const { node } of data.companyNews.edges) {
    createPage({
      path: `/newscompany/${node.id}/`,
      component: pageTemplateTwo,
      context: {
        id: node.id,
      },
    })
  }
  for (const { node } of data.employeesNews.edges) {
    createPage({
      path: `/newsemloyee/${node.id}/`,
      component: pageTemplateThree,
      context: {
        id: node.id,
      },
    })
  }
  for (const { node } of data.bestRoutes.edges) {
    createPage({
      path: `/bestroutes/${node.id}/`,
      component: pageTemplateFour,
      context: {
        id: node.id,
      },
    })
  }
  for (const { node } of data.economyRoutes.edges) {
    createPage({
      path: `/economyroutes/${node.id}/`,
      component: pageTemplateFive,
      context: {
        id: node.id,
      },
    })
  }
}
