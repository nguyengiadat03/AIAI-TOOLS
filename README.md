# AIAI TOOLS - AI for Business

[cloudflarebutton]

AIAI TOOLS is a cutting-edge, visually stunning corporate website designed to showcase advanced AI solutions for businesses. The platform serves as the primary marketing and lead-generation tool, featuring a highly dynamic and animated user interface to reflect the company's technological prowess. The project involves building a multi-page website with a modern, dark-themed aesthetic, characterized by particle animations, on-scroll effects, and interactive UI elements. The entire experience is mobile-first, ensuring flawless performance and visual fidelity across all devices.

## Key Features

- **Dynamic & Animated UI**: Built with Framer Motion for a fluid and engaging user experience.
- **Modern Dark Theme**: A visually striking "Tech-Noir" aesthetic that makes content pop.
- **Comprehensive AI Solutions Showcase**: Dedicated pages for products, solutions, and industry-specific use cases.
- **Fully Responsive**: Flawless design and functionality on desktops, tablets, and mobile devices.
- **Lead Generation Focused**: Strategically placed CTAs and a streamlined contact process to drive conversions.
- **Built on Cloudflare**: Leverages the power of Cloudflare Pages and Workers for performance and scalability.
- **Integrated AI Chat**: Includes a stateful AI chat agent for instant user support, powered by Cloudflare Agents.

## Technology Stack

- **Frontend**: React, Vite, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Animation**: Framer Motion
- **Routing**: React Router
- **Backend**: Hono on Cloudflare Workers
- **State Management**: Zustand
- **Platform**: Cloudflare Pages & Durable Objects (via Cloudflare Agents)

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- A [Cloudflare account](https://dash.cloudflare.com/sign-up).

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/aiai_tools.git
    cd aiai_tools
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

3.  **Configure Environment Variables:**
    Create a `.dev.vars` file in the root of the project for local development. You will need to get your Account ID, Gateway ID, and an API Key from your Cloudflare dashboard.

    ```ini
    # .dev.vars

    # Required: Cloudflare AI Gateway URL
    # Replace YOUR_ACCOUNT_ID and YOUR_GATEWAY_ID with your actual Cloudflare details
    CF_AI_BASE_URL="https://gateway.ai.cloudflare.com/v1/YOUR_ACCOUNT_ID/YOUR_GATEWAY_ID/openai"

    # Required: Cloudflare API Key for the AI Gateway
    CF_AI_API_KEY="your-cloudflare-api-key"
    ```

4.  **Run the development server:**
    This command starts the Vite frontend and the Cloudflare Worker backend simultaneously.
    ```sh
    bun dev
    ```
    The application will be available at `http://localhost:3000`.

## Project Structure

-   `src/`: Contains all the frontend code, including React components, pages, hooks, and styles.
    -   `components/`: Reusable UI components, including shadcn/ui elements.
    -   `pages/`: Top-level page components for each route.
    -   `lib/`: Utility functions and client-side services.
-   `worker/`: Contains all the backend code for the Cloudflare Worker.
    -   `agent.ts`: The core stateful Chat Agent logic.
    -   `userRoutes.ts`: Defines the API routes for the application.
    -   `tools.ts`: Defines and executes tools that the AI model can use.
-   `public/`: Static assets that are served directly.
-   `wrangler.jsonc`: Configuration file for the Cloudflare Worker.

## Development

-   **Frontend**: Modify components and pages inside the `src` directory. The Vite dev server provides Hot Module Replacement (HMR) for a fast development experience.
-   **Backend**: Add or modify API endpoints in `worker/userRoutes.ts`. The worker will automatically reload on changes.
-   **Styling**: The project uses Tailwind CSS. You can customize the theme and add new styles in `tailwind.config.js` and `src/index.css`.

## Deployment

Deployment is handled by Cloudflare Pages. The `deploy` script in `package.json` builds the frontend application and deploys it along with the worker to the Cloudflare network.

1.  **Login to Wrangler:**
    ```sh
    bunx wrangler login
    ```

2.  **Deploy the application:**
    ```sh
    bun deploy
    ```

This command will build the project and deploy it to your Cloudflare account. You will be provided with a unique URL for your deployment.

Alternatively, you can deploy directly from your GitHub repository.

[cloudflarebutton]

## License

This project is licensed under the MIT License.