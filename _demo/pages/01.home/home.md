---
title: 'Home'
menu: Home
body_classes: homepage
# grav-plugin-sitemap overrides
sitemap:
  changefreq: weekly
  priority: !!float 1

banner:
    # leave url empty to disable banner
    url: 'header_home-1500x960_q82.webp'
    # headline: 'Home'
    position: '30% 42.5%'
    # comment-out line below to disable headline
    # headline: 'Headline'
    # follower:
      # comment-out line below to disable blurb
      # text: 'Oxygen for GRAV CMS'
      # (values) opacity-dark | opacity-light | skew | small | bold | italic | uppercase | normal-case
      # class: 'opacity-light,italic'
    # blurb:
      # comment-out line below to disable blurb
      # text: 'a theme by Kittyfish from Mars'
      # (values) opacity-dark | opacity-light | skew | small | bold | italic | uppercase | normal-case
      # class: 'opacity-light,small'

hook:
  left:
    headline: "Look, It's Kittyfish from Mars."
    text: >
        This theme is crazy fast, accessible and GDPR-compliant out of the box. Source code and build tools are available at <a href="https://github.com/kittyfishfrommars" target="_blank">github.com/kittyfishfrommars</a>. Provided as-is and free for personal and commercial use. No strings attached. Have fun!
  right:
    headline: Getting Started
    # comment-out line below to display hook full width
    text: >
        Once you're happy with your site's content, head on over to <a href="https://github.com/kittyfishfrommars/grav-theme-oxygen/blob/main/README.md#theme-options">Theme Options</a> and enable indexing for your favorite search engine.
  button:
    # comment-out line below to disable button
    text: 'Read More'
    url: '#'
    # values: text-left | text-center | text-right
    class: 'text-left'

cta:
    headline: Curio vitae metus semper
    class: color-link-secondary
    text: >
       Pellentesque pede. Donec pulvinar ullamcorper metus. In eu odio at lectus pulvinar mollis.  Vestibulum sem magna, elementum vestibulum arcu.
    button:
        text: Button
        url: '#'

# rendered in a 3-column grid, confiurable by SCSS
notices:
    headline: Curio vitae metus semper
    byline: 'pulvinar mollis. Vestibulum sem magna, elementum vestibulum arcu.'
    items:
        - title: Nulla luctus eleifend
          text: >
            In posuere eleifend odio. Quisque semper augue. Maecenas ligula... <a href="#">read more</a>
          url: '#'
          icon: fa-info color-primary
        - title: Etiam posuere augue
          text: >
            Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat... <a href="#">read more</a>
          icon: fa-phone color-primary
          url: '#'
        - title: Fusce ultrices fringilla
          text: >
            Maecenas pede nisl, elementum eu, ornare ac, malesuada at, erat. Proin orci... <a href="#">read more</a>
          icon: fa-comments-o color-primary
          url: '#'
        - title: Fusce ultrices fringilla
          text: >
            Maecenas pede nisl, elementum eu, ornare ac, malesuada at, erat. Gravida orci.
          url: '#'
          icon: fa-volume-up color-primary
        - title: Nulla luctus eleifend
          text: >
            In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula pellentesque.
          # icon: fa-shield color-primary
          icon: fa-star-half-o color-primary
          url: '#'
        - title: Etiam posuere augue
          text: >
            Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat liguala.
          # icon: lightbulb-o color-warning
          icon: fa-map-marker color-danger        
          # url: '#'
        - title: Nulla luctus eleifend
          text: >
            In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula pellentesque.
          # icon: fa-exclamation-triangle color-warning
          icon: fa-bolt color-warning
          # url: '#'
        - title: Fusce ultrices fringilla
          text: >
            Maecenas pede nisl, elementum eu, ornare ac, malesuada at, erat. Proin gravida orci porttitor.
          icon: fa-check-circle-o color-success
          # url: '#'
        - title: Etiam posuere augue
          text: >
            Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat liguala.
          icon: fa-times-circle-o color-danger
          # url: '#'

portals:
    headline:
      # (values) align-left-md | uppercase | normal-case | small
      # class: 'normal-case'
      text: Curio vitae metus semper
    byline:
        # (values) color-link-secondary | align-left-md | uppercase | normal-case | small
        class: 'color-link-secondary'
        text: >
          Pulvinar mollis. Vestibulum <a href="#">sem magna</a>, elementum vestibulum arcus.
    items:
        - thumbnail: person.png
          title: 'Joan Q. Public'
          alt: 'Joan Q. Public'
          url: '#'
          text: >
            In posuere eleifend odio quisque semper augue wisi ligula.
        - thumbnail: person.png
          title: 'Julie Citizen'
          alt: 'Julie Citizen'
          url: '#'
          text: >
            In posuere eleifend odio quisque semper augue wisi ligula.
        - thumbnail: person.png
          title: 'Dr. Zarah Quinn'
          alt: 'Dr. Zarah Quinn'
          url: '#'
          text: >
            In posuere eleifend odio quisque semper augue wisi ligula.
        - thumbnail: person.png
          title: 'Ming the Merciless'
          alt: 'Emperor Ming, Ruler of the Universe'
          url: '#'
          text: >
            In posuere eleifend odio quisque semper augue wisi ligula.

---

This paragraph intentionally serves no function. Content is configured via home.md.