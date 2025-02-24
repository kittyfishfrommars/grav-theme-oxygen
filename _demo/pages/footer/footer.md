---
title: Footer
routable: false
visible: false
expires: 0
pageOptions:
    noIndex: true
sitemap:
   ignore: true
# do not change taxonomy definition
# unique category is an identifier in templates/partials/footer.html.twig
taxonomy:
   tag: 'unique-footer'

content:
  headline: Stay in touch
  byline:
    text: >
      In posuere eleifend <span class="nowrap">odio quisque</span> semper.
    # (values) bold | italic | uppercase | normal-case | small | normal-case
    # class: 'normal-case'
  button:
    text: 'Newsletter'
    url: 'https://kittyfishfrommars.github.io'
    icon: 'fa-envelope-o'
    # (values) bold | italic | uppercase | normal-case | small | normal-case
    # class: ''

social:
  items:
    -
      title: YouTube
      url: 'https://youtube.com'
      icon: fa-youtube-play
    -
      title: Facebook
      url: 'https://facebook.com'
      icon: fa-facebook
    -
      title: Tickets
      url: 'https://github.com/kittyfishfrommars'
      # icon: fa fa-ticket
      icon: fa-tags

legal:
  items:
    -
      title: 'Credits'
      # url: ''
      param: '#credits'
    -
      title: 'Privacy Policy'
      # url: ''
      param: '#privacy'
    -
      title: 'Legal Notice'
      # url: ''
      param: '#legal'
---