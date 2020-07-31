import BurgerProfile from "../img/burger-project.jpg";
import BudgetProject from "../img/budget-project.jpg";
import ObajuProject from "../img/obaju-project.jpg";

const portfolioData = {
  name: "Duncan Moyo",
  role: "Frontend Developer",
  email: "duncanfmoyo@gmail.com",
  address: "Goodwood, Cape Town",
  getInTouch: "You like what you see and wish you could have your own website? Hit me up, let's build something awesome together.",
  phoneNumber: "+27 67 073 7874",
  roleDescription:
    "I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",
  socialLinks: [
    {
      name: 'github',
      url: "https://github.com/DuncanMoyo",
      logo: "fa fa-github",
    },
    {
      name: 'facebook',
      url: "https://www.facebook.com/duncanfm",
      logo: "fa fa-facebook-official",
    },
    {
      name: 'twitter',
      url: "https://twitter.com/duncanfm",
      logo: "fa fa-twitter",
    },
    {
      name: 'instagram',
      url: "https://www.instagram.com/duncan_moyo92/",
      logo: "ion-social-instagram",
    },
  ],
  aboutMe:
    "Started off by dabbling with Python on the Django framework for web development as well as Bootstrap to make things look pretty. Eventually found myself messing around with Javascript and especially React.js and CSS to make pages pretty (everyone loves a pretty face). Creating Web applications is so much better than counting numbers at a desk to which i'm experienced in. I am a self-taught Web Developer, currently diving deeper into Javascript through React with the intention of learning and applying more. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",
  skills: [
    {
      skillName: "HTML5",
      skillLevel: 85,
    },
    {
      skillName: "CSS",
      skillLevel: 70,
    },
    {
      skillName: "React.js",
      skillLevel: 75,
    },
    {
      skillName: "Python",
      skillLevel: 66,
    },
  ],
  portfolioItems: [
    {
      name: "Burger Builder",
      description: "React",
      image: BurgerProfile,
      gitHubUrl: "https://github.com/DuncanMoyo/burger-builder",
    },
    {
      name: "E-commerce Website",
      description: "Python",
      image: ObajuProject,
      gitHubUrl: "https://github.com/DuncanMoyo/ecommerce-boilerplate",
    },
    {
      name: "Budget Calculator",
      description: "React",
      image: BudgetProject,
      gitHubUrl: "https://github.com/DuncanMoyo/react-budget-calculator",
    },
  ],

  portfolioIntro:
    "Here's a list of projects that i have done for myself, excluding this website of course.",
};

export default portfolioData;
