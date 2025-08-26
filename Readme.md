# Innovation Studio

## Overview
Welcome to **Innovation Studio**, a multi-page business website developed as part of a web development internship task. This project showcases a professional website for a fictional design services company, featuring a responsive layout, animations, and reusable components. Built to inspire creativity and demonstrate technical skills, it includes essential pages and optional enhancements as outlined in the task requirements.

## Features
- **Multi-Page Layout**: Home, About Us, Services, Projects, and Contact pages.
- **Animations**: Implemented using AOS library and custom CSS animations.
- **Dark/Light Mode**: Toggleable theme with localStorage persistence.
- **Responsive Design**: Optimized for mobile and desktop using Flexbox and Tailwind CSS.
- **Reusable Components**: Navbar, footer, hero section, and contact form.

## Technologies Used
- **HTML5**: Core structure of the website.
- **Tailwind CSS**: Styling and responsive design.
- **JavaScript**: Interactivity, animations, and data handling.
- **AOS Library**: For scroll animations.
- **Anime.js**: For custom animations.

## Getting Started

### Prerequisites
- Web browser (e.g., Chrome, Firefox)
- Text editor (e.g., VS Code)
- Node.js (for Tailwind CSS compilation, if needed)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MuhammadHuzaifa-Dev/Innovation-studio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Innovation-studio
   ```
3. Install dependencies (if modifying Tailwind CSS):
   ```bash
   npm install
   ```
4. Compile Tailwind CSS (if needed):
   ```bash
   npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```
5. Open `index.html` in a web browser to view the site.

### Usage
- Visit the live demo at [Innovation Studio](https://innovation-studio.vercel.app/index.html).
- Navigate through the pages using the navbar.
- Toggle dark/light mode using the theme button.
- Explore the contact form.

## Folder Structure
```
Innovation-studio/
├── src/
│   ├── assets/
│   │   └── images
│   ├── components/
│   │   ├── contactform.html
│   │   ├── footer.html
│   │   ├── hero.html
│   │   └── navbar.html
│   ├── js/
│   │   ├── components.js
│   │   ├── data.js
│   │   └── main.js
│   ├── about.html
│   ├── contact.html
│   ├── index.html
│   ├── input.css
│   ├── output.css
│   ├── projects.html
│   └── services.html
├── .gitignore
├── package-lock.json
└── package.json
```

## Screenshots
- ![Home Page Screenshot](./src/assets/screenshots/home.png)
- ![About Us Screenshot](./src/assets/screenshots/about.png)
- ![Services Screenshot](./src/assets/screenshots/services.png)
- ![Projects Screenshot](./src/assets/screenshots/projects.png)
- ![Contact Page Screenshot](./src/assets/screenshots/contact.png)

## Contributing
This project was developed as an internship task. For contributions or feedback, please contact the developer.

## License
This project is licensed under the MIT License.

## Contact
- **Muhammad Huzaifa**: [muhammadhuzaifa200005@gmail.com](mailto:muhammadhuzaifa200005@gmail.com)
- LinkedIn: [Muhammad Huzaifa](https://www.linkedin.com/in/muhammad-huzaifa-a31907333/)
- GitHub: [https://github.com/MuhammadHuzaifa-Dev](https://github.com/MuhammadHuzaifa-Dev)

## Acknowledgments
- Inspired by the internship task from [Innovation Studioo](https://www.linkedin.com/company/innovation-studioo/).
- Thanks to the open-source community for tools like Tailwind CSS and AOS.