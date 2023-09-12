# Foodies Social Media App

Foodies is a social media platform for food and beverage enthusiasts to share their culinary experiences. This project was contributed by [Eranga Amarasekara](https://github.com/it21013782 ) and [Sasindu Fernando](https://github.com/it21085444). This was developed using Java (Spring Boot) for the REST API and React for the client web application.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running the REST API](#running-the-rest-api)
  - [Running the Client Web Application](#running-the-client-web-application)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Overview
Foodies is a platform where users can:
- Create posts photos and descriptions.
- Edit or delete their posts.
- Have user profiles displaying their posts.
- Follow and be followed by other users.
- Like and comment on posts.
- Receive notifications for likes and comments.

## Features
- **User-Friendly Interface**: Foodies is designed with a user-friendly and intuitive interface to cater to users from non-technical backgrounds.

- **User Profiles**: Users can view their own profiles and those of others, both as suggestions and through search.

- **Post Management**: Users can create, edit, or delete posts. Posts can contain multiple photos and descriptions.

- **Follow/Followers**: Users can follow other users, and other users can follow them. All profiles are public.

- **Likes and Comments**: Users can like and comment on posts. Comment authors can edit or delete their comments.

- **Notifications**: Users receive notifications when others like or comment on their posts.

## Getting Started

### Prerequisites
To run the Foodies social media app, you will need the following:

- Java Development Kit (JDK)
- Node.js and npm (Node Package Manager)
- Git

### Running the REST API
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/foodies-social-media.git
   ```

2. Navigate to the `api` directory:
   ```bash
   cd foodies-social-media/api
   ```

3. Build and run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

The API will be accessible at `http://localhost:8080`.

### Running the Client Web Application
1. Navigate to the `client` directory:
   ```bash
   cd foodies-social-media/client
   ```

2. Install the required Node.js packages:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The client web application will be accessible at `http://localhost:3000`.

## Usage
- Sign up for an account on Foodies.
- Create posts to share your food experiences.
- Edit or delete your posts as needed.
- Follow other users and view their profiles.
- Like and comment on posts, and receive notifications for interactions with your posts.

## Contributors
- [Eranga Amarasekara](https://github.com/it21013782 )
- [Sasindu Fernando](https://github.com/it21085444)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
