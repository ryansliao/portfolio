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
  resume: 'https://drive.google.com/file/d/1QTSmUlqShwWhJDki9mQ83ApVJyDtnKFz/view?usp=drive_link',
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
    stack: ['Python', 'Scikit-Learn', 'ETL', 'Geospatial'],
    sourceCode: 'https://github.com/ryansliao/SD-County-Trip-Destination-Prediction',
    livePreview: 'https://minjinde.github.io/dsc-capstone-website/',
  },
  {
    name: 'Clothing Size Recommender System',
    description:
      'Fitted an unsupervised learning algorithm to predict a user’s most comfortable size based on clothing reviews from RentTheRunway. We identified the most predictive features and produced an XGBoost regression with a mean-squared error of 17.91.',
    stack: ['Python', 'Scikit-Learn', 'NLP'],
    livePreview: 'https://drive.google.com/file/d/1UQ1S43EvXgThXNvGCiuV7LD5n_jPi6qa/view?usp=sharing',
  },
  {
    name: 'China Soft Power Expansion Analysis',
    description:
      'Predicted where China will exert their soft power influence using FDI, import/export, UN voting, HDI, GDP, and polity score data to identify relevant variables. Our multiple models concluded a specific focus on Sub-Saharan African countries.',
    stack: ['R', 'Random Forest', 'LDA', 'Data Visualization'],
    sourceCode: 'https://github.com/ryansliao/China-Soft-Power-Expansion',
  }
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
  email: '',
}

export { header, about, projects, skills, contact }
