const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Load blog posts from data
function loadPosts() {
  const dataPath = path.join(__dirname, 'data', 'posts.json');
  if (fs.existsSync(dataPath)) {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
  }
  return [];
}

// Routes
app.get('/', (req, res) => {
  const posts = loadPosts();
  res.render('index', { posts, title: 'My Quran Blog' });
});

app.get('/post/:id', (req, res) => {
  const posts = loadPosts();
  const post = posts.find(p => p.id === req.params.id);
  
  if (!post) {
    return res.status(404).render('404', { title: 'Post Not Found' });
  }
  
  res.render('post', { post, title: post.title });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About This Blog' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
