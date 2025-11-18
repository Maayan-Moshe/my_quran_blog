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

// Load blog posts from individual files in data/posts directory
function loadPosts() {
  const postsDir = path.join(__dirname, 'data', 'posts');
  
  // Check if posts directory exists
  if (!fs.existsSync(postsDir)) {
    console.warn('Posts directory not found:', postsDir);
    return [];
  }
  
  try {
    // Read all JSON files from the posts directory
    const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.json'));
    
    const posts = files.map(file => {
      const filePath = path.join(postsDir, file);
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    });
    
    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

// Load a single post by ID
function loadPost(id) {
  const postPath = path.join(__dirname, 'data', 'posts', `${id}.json`);
  
  if (!fs.existsSync(postPath)) {
    return null;
  }
  
  try {
    const data = fs.readFileSync(postPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading post:', error);
    return null;
  }
}

// Routes
app.get('/', (req, res) => {
  const posts = loadPosts();
  res.render('index', { posts, title: 'My Quran Blog' });
});

app.get('/post/:id', (req, res) => {
  const post = loadPost(req.params.id);
  
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
