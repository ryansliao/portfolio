const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ryansliao.github.io/portfolio/',
  title: 'RL.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ryan Liao',
  role: 'Data Scientist',
  description:
    "Hi there! I am currently a Master's Data Science student at the University of California San Diego. I have also worked at the U.S. Bureau of Fiscal Service and collaborated with the San Diego Association of Governments.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/ryan-liao-95a871222/',
    github: 'https://github.com/ryansliao',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Activity Based Model w/ SANDAG',
    description:
      'Created machine learning alternatives to SANDAG’s proprietary Activity-Based Model. Using their synthetic and census data, we predicted county-wide vehicle choices and trip destinations. Ultimately, we were able to decrease their model runtime by 90% while maintaining performance.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Clothing Size Recommender System',
    description:
      'Fitted an unsupervised learning algorithm to predict a user’s most comfortable size based on clothing reviews from RentTheRunway. We identified the most predictive features and produced an XGBoost regression with a mean-squared error of 17.91.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'SQL',
  'R',
  'HTML',
  'JavaScript',
  'VBA',
  'Git',
  'TensorFlow',
  'Scikit-Learn',
  'SciPy',
  'PyTorch',
  'Dask',
  'PySpark'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ryansliao.1107@gmail.com',
}

export { header, about, projects, skills, contact }
