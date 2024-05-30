# FIREARMS-DATABASE-API-


first i will identify the attributes of each data entity and diagram the relationships between them. Here’s a basic idea of my ERD:

Firearm

Attributes: name, weight, size, caliber, rate_of_fire, history, type, ffl_required, state legality
Relationships: 1
with Review, 1
with Manufacturer
Review

Attributes: firearm_id, user_id, rating, comment
Relationships: M:1 with Firearm, M:1 with User
Manufacturer

Attributes: name, country, established
Relationships: 1
with Firearm
User

Attributes: username, email, password
Relationships: M:1 with Review
Step 3: Wireframe Designs
You can use tools like Figma, Sketch, or even pen and paper to create wireframes for your front end. Here are some suggestions for your wireframes:

Home Page: List of firearms with filters for weight, size, caliber, etc.
Firearm Detail Page: Detailed information about a specific firearm, including reviews and manufacturer info.
Add Firearm Page: Form to add a new firearm.
Edit Firearm Page: Form to edit firearm details.
User Profile Page: User information and their reviews.
Step 4: User Stories
As a user, I want to see a list of all firearms, so that I can browse available options.
As a user, I want to filter firearms by attributes, so that I can find firearms that match my criteria.
As a user, I want to view detailed information about a specific firearm, so that I can learn more about it.
As a user, I want to add a new firearm to the database, so that I can contribute information.
As a user, I want to edit existing firearm information, so that I can update incorrect details.
As a user, I want to delete a firearm from the database, so that I can remove obsolete entries.
As a user, I want to leave a review for a firearm, so that I can share my experience.
Step 5: MVP and Stretch Goals
MVP:

Implement full CRUD functionality for firearms.
Implement user authentication (sign up, login).
Create pages for listing, adding, editing, and deleting firearms.
Basic styling for the UI.
Stretch Goals:

Add manufacturer management (CRUD for manufacturers).
Implement user reviews for firearms.
Implement advanced search and filter functionalities.
Step 6: Trello Board (Optional)
Create a Trello board to manage your tasks and daily goals. Columns could include: Backlog, In Progress, Testing, Done.

Step 7: Project Presentation
Introduction: Summarize your README, describing the purpose and functionality of your app.
Demonstration: Show your app's main features, focusing on data operations and user interactions.
Code Discussion: Highlight your Mongoose models and front-end Axios functionality.
Experience Sharing: Discuss challenges faced and key learnings.
Technical Stack:
Back End: Node.js, Express, MongoDB, Mongoose
Front End: HTML, CSS, JavaScript (DOM manipulation)
Version Control: Git (with daily commits)
Getting Started:
Discuss your app idea with an instructor.
Prioritize user stories and start with the MVP.
Keep your focus narrow to avoid feature creep.