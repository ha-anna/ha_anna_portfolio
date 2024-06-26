const projectData = [
  {
    title: 'Artemis',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', , 'Node.js', 'MongoDB'],
    img: '/res/projects/project_artemis.webp',
    description:
      'WIP. A crowd-sourced web application aimed at assisting stray animals and reducing their number on the streets. Started as a collaboration project, nowdays I am working on finishing it on my own.',
    link: 'https://artemis--app.vercel.app/',
    repo: 'https://github.com/ha-anna/artemis',
  },
  {
    title: "Ha Youjun's Portfolio",
    techStack: ['React', 'CSS', 'React Router'],
    img: '/res/projects/project_hyj_portfolio.webp',
    description:
      'Commission. The goal was to create a webpage that allows to view the images comfortably and get to know the artist. Build with React + JS and mobile-first approach, routing created with React Router. All images were encoded with either mozjpeg or turned into webp for a faster load, npms were used for image carousel and masonry layout.',
    link: 'https://portfolio-hyj.vercel.app/',
    repo: 'https://github.com/ha-anna/portfolio_HYJ',
  },
  {
    title: 'Quizzical',
    techStack: ['React', 'CSS'],
    img: '/res/projects/project_quizzical.webp',
    description:
      'Quizzical is a single-page application that uses the Open Trivia Database API to fetch and render ten questions, with four possible answers each. The user can choose the question set from various categories (General Knowledge, Entertainment, Science, Animals, etc.) and difficulty levels (mix, easy, medium, difficult). At the end of the quiz, answers are checked, correct and wrong answers are displayed, and the points are counted.',
    link: 'https://react-quizzical.vercel.app/',
    repo: 'https://github.com/ha-anna/ha-anna.github.io/tree/main/Scrimba_Projects/react_quizzical',
  },
  {
    title: 'Movie Watchlist',
    techStack: ['HTML', 'CSS', 'JavaScript', 'API'],
    img: '/res/projects/project_moviewatchlist.webp',
    description:
      "Movie Watchlist is a searchable database of popular movies and tv shows. Users can look for a title that interests them, read about it and add it to a watchlist. Added movies will be stored in the user's local storage until they decide to remove them.",
    link: 'https://ha-anna.github.io/Scrimba_Projects/Movie_watchlist/',
    repo: 'https://github.com/ha-anna/ha-anna.github.io/tree/main/Scrimba_Projects/Movie_watchlist',
  },
  {
    title: 'Color Scheme Generator',
    techStack: ['HTML', 'CSS', 'JavaScript', 'API'],
    img: '/res/projects/project_colorgenerator.webp',
    description:
      'Color Scheme Generator is a project made with The Color API. When the user chooses a color and a color scheme, color palette will be generated. The hex colors are displayed below generated colors and can be copied to the clipboard when clicked.',
    link: 'https://ha-anna.github.io/Scrimba_Projects/Color_scheme_generator/',
    repo: 'https://github.com/ha-anna/ha-anna.github.io/tree/main/Scrimba_Projects/Color_scheme_generator',
  },
  {
    title: 'Password Generator',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    img: '/res/projects/project_passwordgenerator.webp',
    description:
      'Made with CSS, HTML and Javascript. The length of the password can be set manually, and all you have to do to copy the password is to click on it.If user tries to copy the password before generating it, the button will turn red.Upon copying the password, message will be displayed, confirming the action.',
    link: 'https://ha-anna.github.io/Scrimba_Projects/Password_generator/',
    repo: 'https://github.com/ha-anna/ha-anna.github.io/tree/main/Scrimba_Projects/Password_generator',
  },
];

export default projectData;
