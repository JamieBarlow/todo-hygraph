<div align="center">
  <h1>Todo App challenge with Hygraph CMS :closed_book:</h1>
  <strong>By Jamie Barlow</strong>
</div>

🚀 [Live Demo](https://todo-hygraph.vercel.app)

## Purpose / Background :bulb:

This was developed for a technical challenge over the course of 3 days. The task specification was:
- Create User Authentication and TODOs for each user
- Make the view responsive
- View all TODOs in a Calendar
- User can View, Add, Update and Delete their TODOs (full CRUD functionality)
- Use any Headless CMS (HyGraph recommended)
- Technologies - > Next.js, And Nodejs version 16.x

## Project scope and features :heavy_check_mark:

- Full CRUD functionality for todos (create, read, update, delete)
- User authentication with NextAuth.js (email/password credentials)
- Password hashing with bcrypt
- User-scoped todos (each user only sees their own)
- Calendar view with FullCalendar, displaying todos with due dates
- Date picker for setting and updating due dates
- Responsive UI built with ShadCN and Tailwind CSS

## Technologies :floppy_disk:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Headless CMS (Hygraph)
- GraphQL
- NextAuth.js
- ShadCN (UI library)
- FullCalendar (calendar view)
- bcryptjs (password hashing)
- date-fns (date formatting)

## Development Challenges and Lessons :wrench:

- This was my first experience with Hygraph and GraphQL for a headless CMS. Permissions and content publishing (requiring an explicit publish step after mutations) were the biggest obstacles.
- Implementing real-time UI updates after mutations within the Next.js App Router server component model proved challenging within the time constraints.

## Future enhancements :hourglass:

Due to the project deadline and avoiding scope creep, the focus has been on MVP functionality but I have noted a number of areas where improvements could be made or extra features could be added in future. These include:

- [ ] Revalidation with optimistic updates (possibly using [SWR](https://swr.vercel.app)). A known current limitation is the UI requires a manual refresh after mutations due to Next.js server component caching.
- [ ] Form validation (using e.g. [React Hook Form](https://www.react-hook-form.com) and [Zod](https://zod.dev))
- [ ] Auth with different providers (currently using email and password credentials only)
- [ ] Update form/modal for items when clicked on calendar (currently display only)
- [ ] Registration form validation and duplicate email handling
