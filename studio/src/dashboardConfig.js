export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f560bde9e0e9705784f3ed5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gndv1n36',
                  apiId: 'b613b52e-53c7-4ac1-9a08-39432e35f321'
                },
                {
                  buildHookId: '5f560bdec1f09741f5159125',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-91xusfms',
                  apiId: 'e4227031-7528-46e1-affe-a419eb7021d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ashutosh3ojha2007/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-91xusfms.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
