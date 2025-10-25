// Blog functionality for real-time posting features

// Blog post data structure
class BlogPost {
    constructor(title, content, author, category, tags, imageUrl, videoUrl) {
        this.id = Date.now().toString();
        this.title = title;
        this.content = content;
        this.author = author;
        this.category = category;
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.videoUrl = videoUrl;
        this.date = new Date().toISOString();
        this.likes = Math.floor(Math.random() * 50); // Random likes for default posts
        this.comments = [];
    }
}

// Blog Manager Class
class BlogManager {
    constructor() {
        this.posts = this.loadPosts();
        this.currentUserId = null;
        this.initializeEventListeners();
        this.renderBlogPosts();
        this.initializeFileUploads();
        // Add default posts if there are no posts
        this.addDefaultPostsIfNeeded();
    }

    // Load posts from localStorage
    loadPosts() {
        const posts = localStorage.getItem('blogPosts');
        return posts ? JSON.parse(posts) : [];
    }

    // Save posts to localStorage
    savePosts() {
        localStorage.setItem('blogPosts', JSON.stringify(this.posts));
    }

    // Add default posts if there are no posts
    addDefaultPostsIfNeeded() {
        if (this.posts.length === 0) {
            this.addDefaultPosts();
        }
    }

    // Add default blog posts
    addDefaultPosts() {
        const defaultPosts = [
            {
                title: "The Future of Web Design: Trends to Watch in 2023",
                content: "As we move further into 2023, the web design landscape continues to evolve at a rapid pace. From immersive 3D experiences to sustainable design practices, this year is shaping up to be one of the most innovative in recent memory. In this comprehensive guide, we'll explore the top trends that are defining the future of web design and how you can implement them in your own projects. One of the most significant shifts we're seeing is the move towards more personalized user experiences. With advances in AI and machine learning, websites can now adapt in real-time to individual user preferences, behaviors, and even biometric data. This level of personalization goes far beyond simple geolocation targeting, creating truly unique experiences for each visitor. Additionally, we're seeing a resurgence of bold, experimental typography as designers push the boundaries of what's possible with web fonts. Variable fonts, in particular, are enabling designers to create dynamic typographic systems that can adapt to different contexts and user needs. The integration of augmented reality (AR) elements directly into websites is also becoming more prevalent, allowing users to visualize products in their own environment without needing a separate app. These trends are not just about aesthetics; they're about creating more meaningful, engaging, and accessible experiences for all users.",
                author: "Alex Johnson",
                category: "Design",
                tags: ["Web Design", "Trends", "UI/UX", "2023"],
                imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            },
            {
                title: "Optimizing JavaScript Performance for Modern Web Applications",
                content: "JavaScript performance optimization is crucial for delivering fast, responsive web applications. With users expecting near-instantaneous interactions, even small delays can lead to significant drops in engagement and conversion rates. In this deep dive, we'll explore advanced techniques for optimizing JavaScript performance in modern web applications. Memory management is one of the most critical aspects of JavaScript optimization. Understanding how the JavaScript engine handles memory allocation and garbage collection can help you write more efficient code. Techniques like object pooling, avoiding memory leaks, and minimizing the creation of temporary objects can significantly reduce the burden on the garbage collector. Another key area is optimizing loops and iterations. Simple changes like caching array lengths, using appropriate loop types for different scenarios, and leveraging built-in array methods can lead to substantial performance improvements. We'll also examine the impact of different data structures on performance, showing when to use Maps over Objects, and how to choose the right collection type for your specific use case. Modern JavaScript features like Web Workers and Service Workers also play a crucial role in performance optimization by enabling parallel processing and offline capabilities. We'll explore how to effectively implement these technologies to create smoother, more responsive user experiences. Finally, we'll look at profiling and debugging techniques to identify performance bottlenecks in your applications, ensuring you can measure the impact of your optimizations.",
                author: "Sarah Williams",
                category: "Development",
                tags: ["JavaScript", "Performance", "Optimization", "Web Apps"],
                imageUrl: "https://images.unsplash.com/photo-1555066932-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            },
            {
                title: "Building a Successful Digital Marketing Strategy in the Age of Privacy",
                content: "The digital marketing landscape has undergone a seismic shift with the introduction of privacy regulations and the deprecation of third-party cookies. Marketers must now rethink their strategies to build meaningful connections with audiences while respecting user privacy. This comprehensive guide explores how to build a successful digital marketing strategy in this new era. First-party data collection has become the cornerstone of modern marketing strategies. We'll discuss effective techniques for gathering and utilizing first-party data through owned channels like websites, apps, and email lists. Building trust with your audience is more important than ever, and transparent data practices are key to establishing that trust. Content marketing continues to be one of the most effective ways to attract and engage audiences. We'll explore how to create valuable, relevant content that resonates with your target audience while supporting your business objectives. Social media marketing has evolved significantly, with platform algorithms increasingly favoring authentic, engaging content over traditional advertising. We'll examine strategies for building genuine communities on social platforms and leveraging user-generated content to amplify your brand message. Email marketing remains one of the highest ROI channels, but success requires segmentation, personalization, and automation. We'll cover advanced email marketing techniques that respect user privacy while delivering personalized experiences. Finally, we'll look at emerging channels and technologies that are shaping the future of digital marketing, including podcast advertising, influencer partnerships, and interactive content formats.",
                author: "Michael Chen",
                category: "Marketing",
                tags: ["Digital Marketing", "Privacy", "Strategy", "SEO"],
                imageUrl: "https://images.unsplash.com/photo-1555066933-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            },
            {
                title: "Case Study: How We Increased Conversion Rates by 120% for TechStart",
                content: "In this detailed case study, we'll examine how our agency helped TechStart, a SaaS startup, dramatically improve their website conversion rates through a comprehensive redesign and optimization process. When TechStart first approached us, they were struggling with a 1.2% conversion rate on their website, significantly below the industry average for SaaS companies. Their existing website, while visually appealing, suffered from several critical issues that were preventing visitors from becoming customers. Our process began with extensive user research, including heat mapping, user session recordings, and in-depth user interviews. This research revealed several key pain points: unclear value proposition, complicated navigation, and a confusing checkout process. The redesign focused on simplifying the user journey while highlighting TechStart's unique value propositions. We implemented a new information architecture that guided users naturally through the conversion funnel, reducing cognitive load at each step. Visual hierarchy was improved through better typography, strategic use of color, and more effective whitespace. Performance optimization was another critical factor in improving conversions. By reducing page load times from 4.2 seconds to 1.8 seconds, we eliminated a major source of user frustration. Mobile responsiveness was also enhanced, ensuring a seamless experience across all devices. A/B testing played a crucial role throughout the project. We tested dozens of variations of key pages, from headline copy to button colors, using data-driven insights to guide our decisions. The new checkout process alone went through 15 iterations before we found the optimal combination of form fields, progress indicators, and trust signals. The results were remarkable: conversion rates increased by 120%, from 1.2% to 2.64%. This translated to a 150% increase in revenue within the first quarter after launch. User satisfaction scores improved dramatically, and customer support requests related to the website decreased by 60%. This case study demonstrates the power of user-centered design combined with data-driven optimization in achieving significant business results.",
                author: "Emma Rodriguez",
                category: "Case Study",
                tags: ["Case Study", "Conversion", "SaaS", "UX"],
                imageUrl: "https://images.unsplash.com/photo-1555066934-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            },
            {
                title: "Client Success Story: Transforming Brand Identity for GreenLeaf Organics",
                content: "GreenLeaf Organics came to us with a challenge: their brand identity wasn't resonating with their target audience, and they were losing market share to competitors despite having superior products. In this success story, we'll explore how we helped them transform their brand and achieve remarkable growth. When we first met with GreenLeaf Organics, they had a traditional, somewhat dated brand identity that didn't reflect their innovative approach to organic farming and sustainable practices. Their logo, color palette, and messaging were generic and failed to communicate what made them unique in the crowded organic food market. Our brand discovery process involved extensive research into their target audience, competitive landscape, and market trends. We conducted stakeholder interviews, customer surveys, and brand audits to understand the disconnect between GreenLeaf's values and their public perception. The insights revealed that their customers cared deeply about environmental impact, transparency in sourcing, and community involvement – aspects that were completely missing from their brand messaging. Our solution involved a complete brand overhaul, starting with a new visual identity that incorporated earthy tones, organic shapes, and authentic photography. The new logo featured a stylized leaf that subtly formed the letter 'G', creating a memorable and meaningful mark. We developed a brand voice that was authentic, educational, and community-focused, moving away from the typical marketing speak that dominated their previous communications. Packaging design was a critical component of the transformation. We created sustainable packaging solutions that not only reduced environmental impact but also served as a powerful marketing tool, with clear messaging about sourcing, farming practices, and environmental benefits. Digital presence was also crucial to the rebrand. We redesigned their website to be more educational and engaging, featuring stories about their farmers, detailed information about their growing practices, and resources for sustainable living. Social media strategy focused on building a community around shared values rather than just product promotion. The results were extraordinary. Within six months of the rebrand launch, GreenLeaf Organics saw a 75% increase in brand recognition and a 45% increase in sales. Customer loyalty improved significantly, with repeat purchases increasing by 60%. The brand transformation also attracted new investors and opened doors to premium retail partnerships that had previously been unavailable. This success story demonstrates how strategic brand development can create tangible business value while staying true to a company's core mission and values.",
                author: "David Thompson",
                category: "Client Story",
                tags: ["Client Story", "Branding", "Identity", "Growth"],
                imageUrl: "https://images.unsplash.com/photo-1555066935-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            }
        ];

        // Add default posts to the blog
        defaultPosts.forEach(postData => {
            const post = new BlogPost(
                postData.title,
                postData.content,
                postData.author,
                postData.category,
                postData.tags,
                postData.imageUrl
            );
            // Set a specific date for default posts (30 days apart)
            const date = new Date();
            date.setDate(date.getDate() - (defaultPosts.indexOf(postData) * 30));
            post.date = date.toISOString();
            this.posts.push(post);
        });

        // Save to localStorage
        this.savePosts();
        // Re-render posts
        this.renderBlogPosts();
    }

    // Create a new blog post
    createPost(title, content, author, category, tags, imageUrl, videoUrl) {
        const post = new BlogPost(title, content, author, category, tags, imageUrl, videoUrl);
        this.posts.unshift(post);
        this.savePosts();
        this.renderBlogPosts();
        return post;
    }

    // Get all posts
    getPosts() {
        return this.posts;
    }

    // Get post by ID
    getPostById(id) {
        return this.posts.find(post => post.id === id);
    }

    // Update post
    updatePost(id, updates) {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex !== -1) {
            this.posts[postIndex] = { ...this.posts[postIndex], ...updates };
            this.savePosts();
            this.renderBlogPosts();
            return this.posts[postIndex];
        }
        return null;
    }

    // Delete post
    deletePost(id) {
        this.posts = this.posts.filter(post => post.id !== id);
        this.savePosts();
        this.renderBlogPosts();
    }

    // Add comment to post
    addComment(postId, comment) {
        const post = this.getPostById(postId);
        if (post) {
            post.comments.push({
                id: Date.now().toString(),
                ...comment,
                date: new Date().toISOString()
            });
            this.savePosts();
            this.renderBlogPosts();
            return true;
        }
        return false;
    }

    // Like a post
    likePost(postId) {
        const post = this.getPostById(postId);
        if (post) {
            post.likes += 1;
            this.savePosts();
            this.renderBlogPosts();
            return post.likes;
        }
        return null;
    }

    // Initialize event listeners
    initializeEventListeners() {
        // Post creation form
        const postForm = document.getElementById('createPostForm');
        if (postForm) {
            postForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handlePostCreation();
            });
        }

        // Search functionality
        const searchInput = document.getElementById('blogSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterPosts(e.target.value);
            });
        }

        // Category filtering
        const categoryLinks = document.querySelectorAll('.category-filter');
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.filterByCategory(e.target.textContent.trim());
            });
        });
    }

    // Initialize file upload functionality
    initializeFileUploads() {
        const imageInput = document.getElementById('postImage');
        const videoInput = document.getElementById('postVideo');
        
        if (imageInput) {
            imageInput.addEventListener('change', (e) => {
                this.handleImageUpload(e.target.files[0], 'imagePreview');
            });
        }
        
        if (videoInput) {
            videoInput.addEventListener('change', (e) => {
                this.handleVideoUpload(e.target.files[0], 'videoPreview');
            });
        }
    }

    // Handle image upload
    handleImageUpload(file, previewId) {
        if (!file) return;
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
            this.showNotification('Please select a valid image file', 'error');
            return;
        }
        
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            this.showNotification('Image size should be less than 5MB', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const preview = document.getElementById(previewId);
            if (preview) {
                preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 100%; max-height: 200px; border-radius: 8px;">`;
            }
        };
        reader.readAsDataURL(file);
    }

    // Handle video upload
    handleVideoUpload(file, previewId) {
        if (!file) return;
        
        // Validate file type
        if (!file.type.startsWith('video/')) {
            this.showNotification('Please select a valid video file', 'error');
            return;
        }
        
        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            this.showNotification('Video size should be less than 10MB', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const preview = document.getElementById(previewId);
            if (preview) {
                preview.innerHTML = `
                    <video controls style="max-width: 100%; max-height: 200px; border-radius: 8px;">
                        <source src="${e.target.result}" type="${file.type}">
                        Your browser does not support the video tag.
                    </video>
                `;
            }
        };
        reader.readAsDataURL(file);
    }

    // Handle post creation
    handlePostCreation() {
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        const author = document.getElementById('postAuthor').value || 'Anonymous';
        const category = document.getElementById('postCategory').value;
        const tags = document.getElementById('postTags').value.split(',').map(tag => tag.trim()).filter(tag => tag);
        
        // Get image data
        const imageInput = document.getElementById('postImage');
        const videoInput = document.getElementById('postVideo');
        
        if (imageInput && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageUrl = e.target.result;
                this.createPostWithMedia(title, content, author, category, tags, imageUrl, null);
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else if (videoInput && videoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const videoUrl = e.target.result;
                this.createPostWithMedia(title, content, author, category, tags, null, videoUrl);
            };
            reader.readAsDataURL(videoInput.files[0]);
        } else {
            this.createPostWithMedia(title, content, author, category, tags, null, null);
        }
    }

    // Create post with media files
    createPostWithMedia(title, content, author, category, tags, imageUrl, videoUrl) {
        if (title && content) {
            this.createPost(title, content, author, category, tags, imageUrl, videoUrl);
            document.getElementById('createPostForm').reset();
            
            // Clear previews
            const imagePreview = document.getElementById('imagePreview');
            const videoPreview = document.getElementById('videoPreview');
            if (imagePreview) imagePreview.innerHTML = '';
            if (videoPreview) videoPreview.innerHTML = '';
            
            // Show success message
            this.showNotification('Post created successfully!', 'success');
        } else {
            this.showNotification('Please fill in required fields', 'error');
        }
    }

    // Render blog posts
    renderBlogPosts() {
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) return;

        // Clear existing posts
        blogGrid.innerHTML = '';

        // Render posts
        this.posts.forEach(post => {
            const postElement = this.createPostElement(post);
            blogGrid.appendChild(postElement);
        });
    }

    // Create post element
    createPostElement(post) {
        const article = document.createElement('article');
        article.className = 'blog-post';
        article.innerHTML = `
            <div class="post-image">
                ${post.videoUrl ? 
                    `<video controls style="width: 100%; height: 200px; object-fit: cover;">
                        <source src="${post.videoUrl}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>` : 
                    `<img src="${post.imageUrl || 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'}" alt="${post.title}">`
                }
                <div class="post-category">${post.category}</div>
            </div>
            <div class="post-content">
                <div class="post-meta">
                    <span class="post-date"><i class="fas fa-calendar"></i> ${new Date(post.date).toLocaleDateString()}</span>
                    <span class="post-author"><i class="fas fa-user"></i> ${post.author}</span>
                </div>
                <h3 class="post-title"><a href="blog-post.html?id=${post.id}">${post.title}</a></h3>
                <p class="post-excerpt">${post.content.substring(0, 150)}...</p>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="post-actions">
                    <button class="like-button" data-post-id="${post.id}">
                        <i class="fas fa-heart"></i> <span class="like-count">${post.likes}</span>
                    </button>
                    <button class="comment-button" data-post-id="${post.id}">
                        <i class="fas fa-comment"></i> <span class="comment-count">${post.comments.length}</span>
                    </button>
                </div>
            </div>
        `;

        // Add event listeners for like button
        const likeButton = article.querySelector('.like-button');
        likeButton.addEventListener('click', () => {
            this.likePost(post.id);
        });

        return article;
    }

    // Filter posts by search term
    filterPosts(term) {
        const filteredPosts = term 
            ? this.posts.filter(post => 
                post.title.toLowerCase().includes(term.toLowerCase()) ||
                post.content.toLowerCase().includes(term.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
            )
            : this.posts;

        this.renderFilteredPosts(filteredPosts);
    }

    // Filter posts by category
    filterByCategory(category) {
        const filteredPosts = category === 'All' 
            ? this.posts 
            : this.posts.filter(post => post.category === category);

        this.renderFilteredPosts(filteredPosts);
    }

    // Render filtered posts
    renderFilteredPosts(posts) {
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) return;

        blogGrid.innerHTML = '';

        if (posts.length === 0) {
            blogGrid.innerHTML = '<p class="no-posts">No posts found matching your criteria.</p>';
            return;
        }

        posts.forEach(post => {
            const postElement = this.createPostElement(post);
            blogGrid.appendChild(postElement);
        });
    }

    // Show notification
    showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        // Add to body
        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize blog when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize blog manager
    window.blogManager = new BlogManager();
    
    // Add real-time clock to blog posts
    setInterval(() => {
        const timeElements = document.querySelectorAll('.post-date');
        timeElements.forEach(element => {
            const dateStr = element.getAttribute('data-date');
            if (dateStr) {
                const date = new Date(dateStr);
                element.textContent = `Posted ${timeSince(date)}`;
            }
        });
    }, 60000);
});

// Helper function to calculate time since post
function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    
    return Math.floor(seconds) + " seconds ago";
}