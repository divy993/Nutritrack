NutriTrack: AI-Powered Health & Fitness Tracker

## Project Information

### Domain

Health and Fitness Application for personal wellness tracking and management

### Tools and Frameworks

- Frontend Framework: Next.js (App Router)
- UI Components: shadcn/ui
- Styling: Tailwind CSS
- Icons: Lucide React
- Charts: Recharts
- State Management: React useState hooks


## Project Description

NutriTrack is a comprehensive health and fitness application that helps users track their nutrition, monitor physical activities, and receive AI-driven recommendations. The app features calorie tracking, nutrition analysis, activity monitoring, and personalized recommendations for diet and fitness.

### Key Features

- Calorie and macronutrient tracking
- Food logging with database integration
- Activity and workout monitoring
- Step counter and heart rate tracking
- AI-powered diet and fitness recommendations
- Interactive dashboards with data visualization
- Responsive design for mobile and desktop


## Instructions to Run Locally

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn


### Step 1: Clone the Repository

```shellscript
git clone https://github.com/YOUR-USERNAME/nutritrack.git
cd nutritrack
```

### Step 2: Install Dependencies

```shellscript
npm install
# or
yarn install
```

### Step 3: Run the Development Server

```shellscript
npm run dev
# or
yarn dev
```

### Step 4: Access the Application

Open your browser and navigate to:

```plaintext
http://localhost:3000
```

## Project Structure

```plaintext
nutritrack/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── activity-tracker.tsx
│   ├── dashboard-page.tsx
│   ├── food-logger.tsx
│   ├── main-nav.tsx
│   ├── nutrition-analysis.tsx
│   ├── overview.tsx
│   ├── recent-activities.tsx
│   ├── recommendations.tsx
│   ├── user-nav.tsx
│   └── user-stats.tsx
├── public/
│   └── ...
├── package.json
└── README.md
```

## Additional Setup Notes

1. Environment Variables:

1. No environment variables are required for basic functionality
2. For API integration (e.g., food database), you would need to set up appropriate API keys



2. Mock Data:

1. The application currently uses mock data for demonstration
2. To connect to real APIs, modify the data fetching logic in the respective components



3. Customization:

1. Tailwind CSS can be customized in the `tailwind.config.js` file
2. Component styling can be modified directly in the component files



4. Performance Considerations:

1. For large datasets, consider implementing pagination or virtualization
2. For production, enable build optimizations with `npm run build`



5. Browser Compatibility:

1. The application is compatible with modern browsers
2. For older browser support, consider adding appropriate polyfills





Let me know if you need any clarification or have questions about any aspect of the project!
