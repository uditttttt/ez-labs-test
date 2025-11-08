# EZ  - Front-End Intern Test Submission

## 🚀 Live Demo Link

You can view the live, deployed version of the project here:

**[https://ez-test-seven.vercel.app/](https://ez-test-seven.vercel.app/)**

---

## 📝 Project Overview

This is a single-page web application built in React.js as a submission for the Front-End Intern test. The project replicates a multi-section Figma design and includes a fully functional contact form with client-side validation and API integration.

The application is fully responsive and tested against all specified device breakpoints (desktop, tablet, and mobile).

---

## ✨ Features

* **Multi-Section Page:** Includes Hero, About Team, Services, and Contact sections.
* **Fully Responsive Design:** The layout adapts to all required device viewports, from 480p mobile to 1080p+ desktops.
* **Persistent Navigation:** A fixed navbar with a "sticky" header and a functional mobile menu.
* **Scroll Navigation:** The "Services" and "Let's Talk" links in the navigation bar smoothly scroll the user to the corresponding sections on the page.
* **Functional Contact Form:**
    * **Client-Side Validation:** Checks for empty required fields (`name`, `email`, `message`).
    * **Email Format Validation:** Ensures the email address is in a valid format (e.g., `user@example.com`).
    * **API Integration:** Submits the form data via a `POST` request to the provided API endpoint.
    * **User Feedback:** Displays a "Form Submitted" success message or an error message on API failure.

---

## 💻 Tech Stack

* **React.js** (via Vite)
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3** (with Flexbox, Grid, and Media Queries)
* **Postman** (for API testing)

---

## 🔧 How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/) and `npm` installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/uditttttt/ez-test
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd ez-test
    ```
3.  **Install NPM packages:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  Open your browser to `http://localhost:5173` (or the port specified in your terminal).

---

## 🧪 API Testing (Postman)

As requested in the test instructions, a Postman dump is included in this repository to test the contact form API.

* **File:** `EZ Test.postman_collection.json`
* **Endpoint:** `POST https://vernanbackend.ezlab.in/api/contact-us/`
* **Body:** The file is pre-configured with the example JSON request body.

You can import this file directly into Postman to run the test and verify the successful `201 Created` response.