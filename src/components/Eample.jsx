import user1 from '../images/two free.jpg'
import user2 from '../images/three free.jpg'

const posts = [
    {
      id: 1,
      title: 'A fantastic service that has made my life',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Client', href: '#' },
      author: {
        name: 'Vivek Sharma',
        role: 'Startup-Founder',
        href: '#',
        imageUrl:
          'https://img.freepik.com/premium-photo/image-25-year-old-indian-man-that-is-smiling-camera_878783-7217.jpg',
      },
    },
    {
        id: 1,
        title: 'An Outstanding Exprience',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Recruiter', href: '#' },
        author: {
          name: 'Abhishek Sinha',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://th.bing.com/th/id/OIP.iKDi9A4ltWdsIrj6DYr8gAHaIC?rs=1&pid=ImgDetMain',
        },
      },
      {
        id: 1,
        title: 'Nice Exprience',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Freelancer', href: '#' },
        author: {
          name: 'Payal Singh',
          role: 'Web Developer',
          href: '#',
          imageUrl:
          'https://th.bing.com/th/id/OIP.3Xkut6DlFt-Mq2wKAVPXowAAAA?w=321&h=268&rs=1&pid=ImgDetMain',
        },
      },
    // More posts...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-10 sm:py-20 mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the Feedback</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-5 grid max-w-[1220px] grid-cols-1 gap-x-8 gap-y-10 border-gray-200 pt-5 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-[1220px] mx-auto flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  