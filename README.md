# Facebook Clone

This is a Facebook clone built with React and Next.js, leveraging modern libraries to provide features and a user experience similar to the real Facebook platform.

## Project Overview

The project is a social media application that aims to recreate core functionalities of Facebook, including user authentication, themed UI, responsive design, and interactive notifications. The clone is built using **Next.js** for server-side rendering, **React** for the frontend, and several additional libraries for UI and form management.

## Features

- **User Authentication**: Manage user sign-in with `next-auth`.
- **Dynamic Themes**: Users can toggle between light and dark themes with `next-themes`.
- **Interactive UI**: Animations and icons powered by `@heroicons/react` and `react-icons`.
- **Form Validation**: Forms are handled with `formik` and validated using `yup`.
- **Notifications**: Real-time toast notifications implemented with `react-hot-toast`.
- **Optimized Images**: Sharp is used for image processing, improving image load speed and quality.

## Tech Stack

- **Frontend**: React, Next.js
- **Styling**: Tailwind CSS, Ant Design
- **Icons**: Heroicons, React Icons
- **Validation**: Formik, Yup
- **Notifications**: React Hot Toast
- **Date Handling**: Day.js
- **TypeScript**: Integrated for type checking and safer code

## Getting Started

### Prerequisites

- **Node.js**: Install [Node.js](https://nodejs.org/)
- **Yarn** (optional but recommended): `npm install --global yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adarshrangare/Facebook_Clone_NS.git
   cd Facebook_Clone_NS

2. **Install dependencies**:
   ```bash
   npm install
   
3. **Environment Variables**  
   Create a `.env.local` file in the root directory and add your environment variables such as:
   ```bash
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret

### Running Application

1. **Development Mode:** Start the app in development mode
   ```bash
   npm run dev


2. **Production Mode**: Build and start the app for production
   ```bash
   npm run build
   npm run start
