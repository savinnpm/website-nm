export const data = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Blog',
    href: '#'
  },
  {
    title: 'Careers',
    href: '#'
  },
  {
    title: 'Resources',
    children: [
      {
        type: 'section',
        title: 'Resources',
        links: [
          { title: 'Explore Marketplace', href: '#', icon: 'bank' },
          { title: 'Blog and Press Room', href: '#', icon: 'edit-03' },
          { title: 'Ecosystem', href: '#', icon: 'database-01' },
          { title: 'Documentation', href: '#', icon: 'file-code-01' },
          { title: 'Contact', href: '#', icon: 'book-closed' },
        ]
      },
      {
        type: 'section',
        title: 'Company',
        links: [
          { title: 'About Us', href: '#', icon: 'flag-06' },
          { title: 'Grants and Bounties', href: '#', icon: 'stars-02' },
          { title: 'Careers', href: '#', icon: 'users-01' },
          { title: 'Security', href: '#', icon: 'glasses-02' },
          { title: 'Legal', href: '#', icon: 'folder' },
        ]
      }
    ]
  },
]


