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
          { title: 'Explore Marketplace', href: '#', description:'Explore the marketplace, purchase policies, and pool liquidity', icon: 'bank' },
          { title: 'Blog and Press Room', href: '#', description:'Visit our blog and press room', icon: 'edit-03' },
          { title: 'Ecosystem', href: '#', description:'Learn how you can participate in our marketplace', icon: 'database-01' },
          { title: 'Documentation', href: '#', description:'Learn more about decentralized insurance and Neptune Mutual protocol', icon: 'file-code-01' },
          { title: 'Contact', href: '#', description:'Reach out to us via email or our community channels', icon: 'book-closed' },
        ]
      },
      {
        type: 'section',
        title: 'Company',
        links: [
          { title: 'About Us', href: '#', description:'Learn about our story and our mission statement', icon: 'flag-06' },
          { title: 'Grants and Bounties', href: '#', description:'Learn about our referral, ambassador, and distributor programs', icon: 'stars-02' },
          { title: 'Careers', href: '#', description:'We&apos;re always looking for talented people. Join our team!', icon: 'users-01' },
          { title: 'Security', href: '#', description:'View our platform audit reports. Learn about our bug bounty program.', icon: 'glasses-02' },
          { title: 'Legal', href: '#', description:'View our disclaimer, terms of service, and privacy policy', icon: 'folder' },
        ]
      }
      {
        type: 'section',
        title: 'From our Youtube Channel',
        videos: [
          { title: 'How to Purchase Cover Policy?', href: '#', description:'Learn how you can purchase policy and reduce your risk exposure', video_link: 'https://example.com', thumbnail: `https://via.placeholder.com/176x104` },
          { title: 'How to Provide Liquidity?', href: '#', description:'Learn how you can benefit from pooling the cover capital together with other users.', video_link: 'https://example.com', thumbnail: `https://via.placeholder.com/176x104` },
          { title: 'Reporting an Incident', href: '#', description:'how to report an incident when you believe a hack meets the parameters of the cover policy of the project in question.', video_link: 'https://example.com', thumbnail: `https://via.placeholder.com/176x104` },
        ]
      }
    ]
  },
]


