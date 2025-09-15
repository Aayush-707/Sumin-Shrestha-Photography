Sumin Shrestha Photography
A modern, responsive photography website built with React and Vite, showcasing the artistic work of photographer Sumin Shrestha.
🌟 Features

Modern Design: Clean, minimalist interface that puts photography first
Responsive Layout: Optimized for desktop, tablet, and mobile devices
Fast Performance: Built with Vite for lightning-fast development and build times
Image Gallery: Interactive photo galleries with smooth transitions
Contact Form: Easy way for clients to get in touch
About Section: Professional biography and photography philosophy
Services: Overview of photography services offered
Social Media Integration: Links to photographer's social media profiles

🛠️ Tech Stack

Frontend: React 18
Build Tool: Vite
Styling: CSS3 / Styled Components (Tailwind CSS)
Development: ESLint for code quality

🚀 Quick Start
Prerequisites

Node.js (version 16 or higher)
npm or yarn package manager

Installation

Clone the repository:

bashgit clone https://github.com/Aayush-707/Sumin-Shrestha-Photography.git
cd Sumin-Shrestha-Photography

Install dependencies:

bashnpm install
# or
yarn install

Start the development server:

bashnpm run dev
# or
yarn dev

Open your browser and visit http://localhost:5173

📁 Project Structure
Sumin-Shrestha-Photography/
├── public/
│   ├── images/
│   │   ├── gallery/
│   │   ├── about/
│   │   └── hero/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Gallery/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
🎨 Customization
Adding New Photos

Update the gallery data in src/data/cloudinary-data.js (or your data file)
Optimize images for web (recommended: WebP format, appropriate sizing)

Updating Content

About Section: Edit src/components/About/About.jsx
Services: Modify src/components/Services/Services.jsx
Contact Information: Update src/components/Contact/Contact.jsx

Styling
The project uses modern CSS with custom properties for easy theming. Main color variables can be found in src/styles/variables.css.
📱 Responsive Design
The Website is fully responsive with breakpoints for:

Mobile: 320px - 768px
Tablet: 768px - 1024px
Desktop: 1024px and above

🔧 Available Scripts

npm run dev - Start development server
npm run build - Build for production
npm run preview - Preview production build locally
npm run lint - Run ESLint for code quality checks


📧 Contact Form Setup
The contact form requires a backend service or form handler. Recommended options:

Formspree: Simple form handling service
EmailJS: Client-side email sending

🔍 SEO Optimization

Meta tags configured for social media sharing
Semantic HTML structure
Alt text for all images
Sitemap generation ready


Fork the repository
Create a feature branch: git checkout -b feature/amazing-feature
Commit your changes: git commit -m 'Add amazing feature'
Push to the branch: git push origin feature/amazing-feature
Open a Pull Request


⭐ If you like this project, please give it a star on GitHub!