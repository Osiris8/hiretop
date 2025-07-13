# 💼 HireTop – A Talent-Company Connection Platform

**HireTop** is an innovative platform that connects talents with companies, enabling talents to find job opportunities and companies to recruit top talent. Built with modern JavaScript tools, HireTop offers a seamless, secure, and user-friendly experience for managing job applications and recruitment processes.

🌐 **Live Demo**: [hiretop.vercel.app](https://hiretop.vercel.app/)

---

## ✨ Features

### For Talents

- **Registration & Login**: Sign up with email verification and secure login via Kinde Authentication.
- **Profile Enhancement**: Add experience, skills, social links (LinkedIn, GitHub, etc.), expertise level (Junior, Intermediate, Senior), and availability.
- **Job Search**: Browse and filter job listings by skills, location, or contract type (on-site, freelance, hybrid).
- **CV Submission**: Upload CVs in PDF or Word format when applying for jobs.
- **Job Details**: View detailed job descriptions, requirements, and company information.

### For Companies

- **Job Listing Management**: Post, view, and manage job listings with detailed forms.
- **Application Management**: Review and update application statuses (e.g., In Progress, Rejected, Offer Sent).
- **Profile Enhancement**: Add company details, logos, social links, and contact information.
- **Job Search**: Browse and filter job listings across the platform.

---

## 🚀 Getting Started

Follow these steps to set up and run HireTop locally.

### 1. Prerequisites

Ensure you have the following installed:

- **Node.js** (18.x or higher, recommended for Next.js)
- **npm** or **yarn** (package manager)
- **Git**
- **Postman** (optional, for API testing)
- A **MongoDB** account ([mongodb.com](https://www.mongodb.com), MongoDB Atlas recommended)
- A **Kinde Authentication** account ([kinde.com](https://kinde.com))
- An **EdgeStore** account ([edgestore.dev](https://edgestore.dev))
- A **Vercel** account for deployment ([vercel.com](https://vercel.com))

### 2. Clone the Repository

```bash
git clone https://github.com/Osiris8/hiretop.git
cd hiretop
```

### 3. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

If no `package.json` exists, install the core dependencies:

```bash
npm install next @kinde-oss/kinde-auth-nextjs mongodb @edgestore/react @edgestore/next tailwindcss daisyui
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root to store sensitive configuration:

```bash
touch .env.local  # On Windows: echo. > .env.local
```

Open the `.env.local` file and add the following environment variables, replacing placeholders with your actual values:

```bash
KINDE_CLIENT_ID="YOUR_KINDE_CLIENT_ID"
KINDE_CLIENT_SECRET="YOUR_KINDE_CLIENT_SECRET"
KINDE_ISSUER_URL="YOUR_KINDE_ISSUER_URL"
KINDE_SITE_URL="http://localhost:3000"
KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:3000"
KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:3000/check"
MONGODB_URI="YOUR_MONGODB_URI"
EDGE_STORE_ACCESS_KEY="YOUR_EDGE_STORE_ACCESS_KEY"
EDGE_STORE_SECRET_KEY="YOUR_EDGE_STORE_SECRET_KEY"
```

#### How to Obtain Environment Variables:

- **KINDE_CLIENT_ID**, **KINDE_CLIENT_SECRET**, **KINDE_ISSUER_URL**: Create a Backend Next.js project on [kinde.com](https://kinde.com) and obtain these from your Kinde dashboard.
- **KINDE_SITE_URL**, **KINDE_POST_LOGOUT_REDIRECT_URL**, **KINDE_POST_LOGIN_REDIRECT_URL**: Use `http://localhost:3000` for local development. Update to your deployed URL (e.g., `https://hiretop.vercel.app`) for production.
- **MONGODB_URI**: Create a MongoDB Atlas project at [mongodb.com](https://www.mongodb.com) and copy the connection string (e.g., `mongodb+srv://user:password@cluster0.mongodb.net/dbname`).
- **EDGE_STORE_ACCESS_KEY**, **EDGE_STORE_SECRET_KEY**: Sign up for a free project at [edgestore.dev](https://edgestore.dev) and copy these from your project settings.

### 5. Set Up EdgeStore

EdgeStore is used for file management (e.g., CV uploads and profile avatars):

1. Go to [edgestore.dev](https://edgestore.dev) and create a free project.
2. Copy the `EDGE_STORE_ACCESS_KEY` and `EDGE_STORE_SECRET_KEY` to your `.env.local` file.

### 6. Configure MongoDB

1. Create a MongoDB Atlas project at [mongodb.com](https://www.mongodb.com).
2. Set up a cluster and copy the connection string to `MONGODB_URI` in your `.env.local` file.
3. Ensure your database is accessible and configured for the app’s collections (see database structure below).

### 7. Run the Application Locally

Start the Next.js development server:

```bash
npm run dev
```

The app will run on `http://localhost:3000`. Open your browser to view the UI or test API endpoints with Postman.

### 8. Deploy to Vercel

To deploy the app to Vercel:

1. Push your repository to GitHub.
2. Connect your repository to Vercel via the Vercel dashboard.
3. Set the environment variables (listed above) in Vercel’s project settings.
4. Deploy the project. The app will be available at a URL like `https://hiretop.vercel.app`.

---

## 🧪 Testing with Postman

To test the API endpoints, use **Postman** to send requests to the deployed API (`https://hiretop.vercel.app`) or locally (`http://localhost:3000`). Below are the key endpoints for authentication, talent profiles, company profiles, jobs, and applications. Most endpoints require a Kinde JWT token in the `Authorization` header (`Bearer <token>`).

### Authentication

- **Kinde Authentication**: Managed via Kinde’s Next.js SDK.
- **Endpoint**: `/api/auth/[kindeAuth]`
- **Details**: Refer to [Kinde’s Next.js SDK documentation](https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/) for login, registration, and logout flows.

### Talent Profile Endpoints

- **GET** `/api/talent-social-link/[id]`: Retrieve a talent’s social links.
- **PATCH** `/api/talent-social-link/[id]`: Update a talent’s social links.
- **POST** `/api/talent-skill`: Add a talent’s skills.
- **GET** `/api/talent-skill/[id]`: Retrieve a talent’s skills.
- **DELETE** `/api/talent-skill/[id]`: Delete a specific skill.
- **POST** `/api/talent-profil`: Create a talent’s profile after email registration.
- **GET** `/api/talent-profil/[id]`: Retrieve a talent’s profile.
- **PATCH** `/api/talent-profil/[id]`: Update a talent’s profile.
- **PATCH** `/api/talent-next-profil/[id]`: Update or add additional profile details (e.g., biography, availability).
- **GET** `/api/talent-next-profil/[id]`: Retrieve additional profile details.
- **POST** `/api/talent-experience`: Add a talent’s experience.
- **GET** `/api/talent-experience/[id]`: Retrieve a talent’s experiences.
- **DELETE** `/api/talent-experience/[id]`: Delete a specific experience.
- **GET** `/api/talent-avatar/[id]`: Retrieve a talent’s profile picture.
- **PATCH** `/api/talent-avatar/[id]`: Update a talent’s profile picture.

### Company Profile Endpoints

- **PATCH** `/api/company-social-link/[id]`: Update a company’s social links.
- **POST** `/api/company-profil`: Create a company’s profile.
- **GET** `/api/company-profil/[id]`: Retrieve a company’s profile.
- **PATCH** `/api/company-profil/[id]`: Update a company’s profile.
- **GET** `/api/company-avatar/[id]`: Retrieve a company’s profile picture.
- **PATCH** `/api/company-avatar/[id]`: Update a company’s profile picture.
- **PATCH** `/api/company-about/[id]`: Update or add a company’s description.
- **GET** `/api/company/[id]`: Retrieve all company information.

### Job Endpoints

- **POST** `/api/company-job`: Create a new job listing.
- **GET** `/api/company-job`: Retrieve all job listings.
- **GET** `/api/jobs`: Retrieve all jobs posted by companies.
- **GET** `/api/jobs/[jobId]`: Retrieve details of a specific job, including the posting company.

### Application Endpoints

- **POST** `/api/candidature`: Submit a job application (e.g., with CV).
- **GET** `/api/candidatures`: Retrieve all applications.
- **GET** `/api/candidatures/[jobId]`: Retrieve details of applications for a specific job.
- **GET** `/api/candidature/check`: Check if a talent has already applied to a specific job.
- **GET** `/api/candidature/[id]/status`: Retrieve the status of an application.
- **PATCH** `/api/candidature/[id]/offer`: Send an offer for an application.

### Notes

- Replace `[id]` and `[jobId]` with actual talent, company, or job IDs.
- For local testing, use `http://localhost:3000` instead of the Vercel URL.
- Most endpoints require a Kinde JWT token in the `Authorization` header (`Bearer <token>`). Obtain the token via Kinde’s login flow.
- If a Postman collection is available in the repository, import it for pre-configured requests.

---

## 📚 Tech Stack

- **Framework**: Next.js (App Router)
- **Authentication**: Kinde Authentication
- **Database**: MongoDB
- **File Storage**: EdgeStore
- **Styling**: Tailwind CSS, Daisy UI
- **API Testing**: Postman
- **Deployment**: Vercel
- **Language**: JavaScript/TypeScript

---

## 🗄️ Database Structure

The MongoDB database is organized into the following collections:

- **talents**: Stores talent user information (e.g., email, name).
- **companies**: Stores company user information.
- **talentnextprofils**: Stores additional talent profile details (e.g., biography, availability, remote work preference).
- **companyabouts**: Stores company descriptions.
- **companysocials**: Stores company social links (e.g., Facebook, Twitter, GitHub, website).
- **talentsocials**: Stores talent social links (e.g., LinkedIn, GitHub).
- **talentskills**: Stores talent skills.
- **talentexperiences**: Stores talent work experiences.
- **talentavatars**: Stores talent profile pictures.
- **companyavatars**: Stores company profile pictures.
- **status**: Differentiates users as talents or companies.
- **companyjobs**: Stores job listings (e.g., title, description, contract type).
- **candidatures**: Stores job applications submitted by talents.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## 📬 Support and Contact

For questions or issues, connect on [X](https://x.com/migan_osiris).

---

## 📝 Conclusion

HireTop streamlines the job search and recruitment process for talents and companies. This README provides a comprehensive guide to its features, setup, and API usage. Explore the platform, contribute, and star the repo to support its growth!

⭐ **Star this repo if you find it useful!**
