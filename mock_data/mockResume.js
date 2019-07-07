module.exports = {
  meta: {
    name: 'mock resume',
    description:
      'This is a mock resume, structurally somewhat (but not fully) based on the JSON Resume schema (https://jsonresume.org)'
  },
  basics: {
    name: 'Inese Avota',
    label: 'Software Engineer',
    image: '',
    email: 'some.invalidemail@someemail.com',
    phone: '+44 444 4444 444',
    url: '',
    summary:
      'Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... ',
    location: {
      address: '',
      postalCode: '',
      city: '',
      countryCode: '',
      region: ''
    },
    profiles: [
      {
        network: 'Linkedin',
        username: '',
        url: 'https://www.linkedin.com/in/something-totallyinvalid'
      },
      {
        network: 'GitHub',
        username: 'something-totallyinvalid',
        url: 'https://github.com/something-totallyinvalid'
      }
    ]
  },
  work: [
    {
      name: 'Lorem Ipsum',
      location: 'London, UK',
      description: '',
      position: 'JavaScript Developer',
      url: '',
      startDate: 'March 2016',
      endDate: 'December 2018',
      summary: '',
      highlights: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        'Tempor incididunt ut labore et dolore magna aliqua',
        'Ut enim ad minim veniam, quis nostrud exercitation',
        'Ullamco laboris nisi ut aliquip',
        'ex ea commodo consequat',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat'
      ]
    },
    {
      name: 'Dolor Sit Amet',
      location: 'Helsinki, FI',
      description: '',
      position: 'Softare Engineer',
      url: '',
      startDate: 'May 2014',
      endDate: 'September 2016',
      summary: '',
      highlights: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
        'Tempor incididunt ut labore et dolore magna aliqua',
        'Ullamco laboris nisi ut aliquip',
        'ex ea commodo consequat'
      ]
    }
  ],
  education: [
    {
      institution: 'Edinburgh University',
      location: 'Edinburgh, UK',
      area: 'Ullamco Laboris Nisi',
      studyType: 'MSc',
      startDate: 'June 2011',
      endDate: 'January 2014',
      gpa: '4.5',
      courses: []
    },
    {
      institution: 'University of Loremipsum',
      location: 'Riga, Latvia',
      area: 'Software Engineering',
      studyType: 'BSc',
      startDate: 'June 2016',
      endDate: 'January 2014',
      gpa: '4.5',
      courses: []
    }
  ],
  languages: [
    {
      name: 'English',
      fluency: 'fluent'
    },
    {
      name: 'German',
      fluency: 'intermediate'
    }
  ],
  certificates: [
    {
      name: 'Google Cloud Platform basics',
      date: 'June 2018'
    }
  ],
  skills: ['Java', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Pancakes', ''],
  interests: ['cats', 'memes', 'philosophising']
}
