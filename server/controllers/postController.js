const upload = require('../utils/upload');

// Modify createPost
exports.createPost = asyncHandler(async (req, res) => {
  req.body.author = req.user.id;
  
  if (req.file) {
    req.body.image = `/uploads/${req.file.filename}`;
  }

  const post = await Post.create(req.body);
  res.status(201).json({ success: true, data: post });
});

// Add to your routes (in routes/posts.js)
router.post('/', protect, upload.single('image'), createPost);