doctype 5
html lang: 'en', ->
  head ->
    meta charset: 'utf-8'
    meta 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1'
    meta name: 'viewport', content: 'width=device-width'
    
    title @document.title
    meta name: 'description', content: @document.description
    meta name: 'keywords', content: @document.keywords
    
    link rel: 'stylesheet', href: '/css/all.css'
  body ->
    
    text @content
    
    script src: 'http://code.jquery.com/jquery-1.9.1.min.js'
    script src: 'js/jquery.jplayer.min.js'
    script src: 'js/jquery.fittext.js'
    script src: 'js/main.js'