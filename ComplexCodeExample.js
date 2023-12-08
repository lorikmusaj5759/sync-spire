/**
 * Filename: ComplexCodeExample.js
 * 
 * This code example demonstrates a complex and sophisticated JavaScript program
 * that simulates a social media platform for sharing posts, liking posts, and
 * managing user accounts. It demonstrates the use of classes, prototypes, and
 * various data structures to store and manipulate data.
 */

// User class represents a user account
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.posts = [];
  }

  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
  }
}

// Post class represents a user post
class Post {
  constructor(content) {
    this.content = content;
    this.likes = 0;
  }

  like() {
    this.likes++;
  }
}

// SocialMediaPlatform class represents the main platform for managing users and posts
class SocialMediaPlatform {
  constructor() {
    this.users = [];
  }

  registerUser(name, email) {
    const user = new User(name, email);
    this.users.push(user);
    return user;
  }

  getPostsWithMostLikes() {
    let maxLikes = 0;
    let postsWithMostLikes = [];

    for (const user of this.users) {
      for (const post of user.posts) {
        if (post.likes > maxLikes) {
          maxLikes = post.likes;
          postsWithMostLikes = [post];
        } else if (post.likes === maxLikes) {
          postsWithMostLikes.push(post);
        }
      }
    }

    return postsWithMostLikes;
  }
}

// Example usage of the SocialMediaPlatform

const platform = new SocialMediaPlatform();

const user1 = platform.registerUser("John", "john@example.com");
const user2 = platform.registerUser("Emily", "emily@example.com");

user1.createPost("Hello, world!");
user1.createPost("I'm enjoying this platform!");

user2.createPost("I love programming!");

for (let i = 0; i < 5; i++) {
  user2.posts[0].like();
}

for (const post of platform.getPostsWithMostLikes()) {
  console.log(`Post with most likes: '${post.content}' (Likes: ${post.likes})`);
}

// Output:
// Post with most likes: 'I love programming!' (Likes: 5)