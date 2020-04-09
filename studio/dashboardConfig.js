export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e8f999dd1cb8d7c342bd250',
                  title: 'Sanity Studio',
                  name: 'colmenapp-sanity-studio',
                  apiId: 'e564e2b8-1221-428b-af09-aac0189ed375'
                },
                {
                  buildHookId: '5e8f999d1a46c78022de84d9',
                  title: 'Landing pages Website',
                  name: 'colmenapp-sanity',
                  apiId: 'b35cc306-612f-4308-a03e-b959b579e217'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/epicmagno/colmenapp-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://colmenapp-sanity.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
