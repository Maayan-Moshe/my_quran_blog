# My Quran Blog

A blog website for sharing personal impressions and reflections from reading the Quran. Built with Node.js, Express, EJS, and Bootstrap.

## Features

- 📖 Clean and responsive blog layout
- 🎨 Bootstrap 5 integration for modern design
- 📝 Individual pages for each Surah reflection
- 🔍 Easy navigation between posts
- 📱 Mobile-friendly responsive design

## Technologies Used

- **Backend:** Node.js with Express
- **Templating:** EJS (Embedded JavaScript)
- **Styling:** Bootstrap 5 + Custom CSS
- **Icons:** Bootstrap Icons

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Maayan-Moshe/my_quran_blog.git
cd my_quran_blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Project Structure

```
my_quran_blog/
├── server.js           # Main Express server
├── package.json        # Project dependencies
├── data/
│   └── posts.json     # Blog posts data
├── views/
│   ├── index.ejs      # Home page
│   ├── post.ejs       # Individual post page
│   ├── about.ejs      # About page
│   ├── 404.ejs        # Error page
│   └── partials/
│       ├── header.ejs # Header partial
│       └── footer.ejs # Footer partial
└── public/
    └── css/
        └── style.css  # Custom styles
```

## Adding New Posts

To add a new blog post, edit the `data/posts.json` file and add a new entry with the following structure:

```json
{
  "id": "unique-post-id",
  "suraNumber": 1,
  "suraName": "Surah Name",
  "title": "Post Title",
  "date": "YYYY-MM-DD",
  "excerpt": "Brief excerpt...",
  "content": "Full post content..."
}
```

## License

ISC

## Author

Personal blog for documenting my journey through the Quran.

