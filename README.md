![Tripher Logo](./tripher.svg)

# Tripher Banking System
A comprehensive guide to building a fictional bank's technology architecture from the ground up. This repository covers everything from barebones hardware setup to the final deployment of a secure, client-facing mobile app. Includes infrastructure planning, backend API development, database design, and security protocols. by Tinaishe Kadango

<p>
  <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
  <img alt="Docker" src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="Insomnia" src="https://img.shields.io/badge/-Insomnia-5849BE?style=flat-square&logo=insomnia&logoColor=white" />
  <img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" />
  <img alt="redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white" />
  <img alt="Styled Components" src="https://img.shields.io/badge/-Styled_Components-db7092?style=flat-square&logo=styled-components&logoColor=white" />
  <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
  <img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />
  <img alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" />
  <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
</p>

<br/>

## Client Web Application

**Technologies Used:** Ionic React, modular architecture, RESTful API, JWT (JSON Web Token), TLS encryption, component-based structure.

This web application, developed with **Ionic React**, leverages a modular architecture to deliver a responsive and cross-platform banking solution. It integrates with backend services through **RESTful API endpoints**, enabling functionalities such as account management, transaction retrieval, secure fund transfers, and bill payments. The app employs **JWT-based authentication** for session management and **TLS encryption** to ensure secure data transmission. With its component-based structure and adherence to best practices, the app is designed for scalability, maintainability, and optimal performance across web and mobile platforms.

<br/>

## C# REST API

**Technologies Used:** ASP.NET Core, Entity Framework Core, Npgsql, C#, JWT Authentication, pgAdmin/DBeaver, Docker, Visual Studio, NuGet, Azure/AWS/Heroku, GitHub.

**File Structure:** 

	Tripher Inc/
	|
	|
	|-- Controllers/ (API Controllers)  
	|-- Data/ (Database context and migrations)  
	|-- Models/ (Entity models)  
	|-- DTOs/ (Data Transfer Objects)  
	|-- Repositories/ (Repository interfaces and implementations)  
	|-- Services/ (Business logic)  
	|-- Middleware/ (Custom middleware)  
	|-- Helpers/ (Utility classes or helpers)  
	|-- Program.cs (Application entry point)  
	|-- Startup.cs (Application configuration)  
	|-- appsettings.json (Configuration file)  


The **C# REST API** is designed for a fictional banking system, built using the **ASP.NET Core framework** and following a **microservices architecture**. The system is modular, with each microservice dedicated to a specific domain such as **Account Management**, **Transaction Processing**, **User Authentication**, and **Reporting**. These services communicate through lightweight **HTTP RESTful APIs** and **message queues** for asynchronous communication, ensuring scalability, fault tolerance, and ease of maintenance. Each microservice is containerized using **Docker**, allowing for seamless deployment and orchestration with tools like **Kubernetes**. The API includes robust security features such as **JWT-based authentication**, **role-based access control (RBAC)**, and **data encryption** to ensure the safety of sensitive banking information. 