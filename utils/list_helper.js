var _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.map(blog => blog.likes).reduce((a, b) => a + b, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  return blogs.reduce(function(b1, b2) {
    return b1.likes > b2.likes ? b1 : b2
  })
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  return _(blogs).groupBy('author').map((objs, key) => ({
    'author': key,
    'blogs': objs.length,
  })).maxBy('blogs')
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  return _(blogs).groupBy('author').map((objs, key) => ({
    'author': key,
    'likes': _.sumBy(objs, 'likes'),
  })).maxBy('likes')
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes,
}