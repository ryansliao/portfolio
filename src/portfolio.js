const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ryansliao.github.io/portfolio/',
  title: 'RL.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ryan Liao',
  role: 'Data Scientist, Machine Learning Engineer',
  description:
    "Hi there! I am a Master's Data Science student at the University of California San Diego and an AWS certified machine learning engineer. I have also worked at the U.S. Bureau of Fiscal Service and collaborated with the San Diego Association of Governments.",
  resume: 'https://github.com/ryansliao/portfolio/blob/main/files/Ryan_Liao_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/ryan-liao-95a871222/',
    github: 'https://github.com/ryansliao',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Fantasy Disc Golf Web Application',
    description:
      'Uses PDGA API requests to fetch professional tournament player statistics. Users can login via third-party authentication, create their own league/team, invite other users, add players onto their team, customize league settings, and compete against each other.',
    stack: ['C#', 'ASP.NET Core', 'JavaScript', 'Entity Framework Core'],
    sourceCode: 'https://github.com/ryansliao/flickfantasydg',
  },
  {
    name: 'Activity Based Model w/ SANDAG',
    description:
      'Created machine learning alternatives to SANDAG’s proprietary Activity-Based Model. Using their synthetic and census data, we predicted county-wide vehicle choices and trip destinations. Ultimately, we were able to decrease their model runtime by 90% while maintaining performance.',
    stack: ['Python', 'Scikit-Learn', 'ETL', 'Geospatial'],
    sourceCode: 'https://github.com/ryansliao/SD-County-Trip-Destination-Prediction',
    livePreview: 'https://minjinde.github.io/dsc-capstone-website/',
  },
  {
    name: 'Clothing Size Recommender System',
    description:
      'Fitted an unsupervised learning algorithm to predict a user’s most comfortable size based on clothing reviews from RentTheRunway. We identified the most predictive features and produced an XGBoost regression with a mean-squared error of 17.91.',
    stack: ['Python', 'Scikit-Learn', 'NLP'],
    livePreview: 'https://github.com/ryansliao/portfolio/blob/main/files/Clothing%20Fit%20Recommendation%20System.pdf',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'R',
  'C#',
  'HTML',
  'JavaScript',
  'CSS',
  'VBA',
  'PostgreSQL',
  'ASP.NET Core',
  'Entity Framwork Core',
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
