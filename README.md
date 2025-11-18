# My Quran Blog

A blog website for sharing personal impressions and reflections from reading the Quran. Built with Node.js, Express, EJS, and Bootstrap.

## Features

- 📖 Clean and responsive blog layout
- 🎨 Custom color theme (#3f3c32 and #d7ced5) with Quran imagery
- 📝 Individual pages for each Surah reflection
- 📁 Separate JSON files for each blog post
- 🔍 Easy navigation between posts
- 📱 Mobile-friendly responsive design
- 🖼️ Background images on navbar, footer, and jumbotron

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
│   └── posts/         # Individual blog post JSON files
│       ├── al-fatiha.json
│       ├── al-baqarah-intro.json
│       └── al-ikhlas.json
├── views/
│   ├── index.ejs      # Home page
│   ├── post.ejs       # Individual post page
│   ├── about.ejs      # About page
│   ├── 404.ejs        # Error page
│   └── partials/
│       ├── header.ejs # Header partial
│       └── footer.ejs # Footer partial
└── public/
    ├── css/
    │   └── style.css  # Custom styles with themed colors
    └── images/        # Background images (quran.jpg)
```

## Adding New Posts

Each blog post is stored as a separate JSON file in the `data/posts/` directory. To add a new post:

1. Create a new JSON file in `data/posts/` with a descriptive filename (e.g., `surah-name.json`)
2. Use the following structure:

```json
{
  "id": "unique-post-id",
  "suraNumber": 1,
  "suraName": "Surah Name (Translation)",
  "title": "Post Title",
  "date": "YYYY-MM-DD",
  "excerpt": "Brief excerpt for the homepage preview...",
  "content": "Full post content with multiple paragraphs..."
}
```

3. The server will automatically load and display the new post
4. Posts are sorted by date (newest first) on the homepage

## License

ISC

## Author

Personal blog for documenting my journey through the Quran.

