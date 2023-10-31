import {defineConfig} from "cypress"
import {config} from "dotenv"

// read in the environment variables from .env.local file
config({path: ".env.local"})

export default defineConfig({
    video: false,
    screenshotOnRunFailure: false,
    e2e: {
        baseUrl: "http://localhost:3000",
        defaultCommandTimeout: 8000,
        requestTimeout: 8000,
        taskTimeout: 8000,
        execTimeout: 8000,
        pageLoadTimeout: 8000,
        responseTimeout: 8000,
    },
    env: {
        baseApiURL: "http://localhost/api",
        OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        localBaseUrl: "http://localhost:3000",
        NEXT_PUBLIC_FF: false,
    },
})
