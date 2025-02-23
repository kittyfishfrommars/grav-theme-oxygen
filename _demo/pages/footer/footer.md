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
    # (values) bold | italic | uppercase | normal-case | small | normal-case
    text: In posuere eleifend <span class="nowrap">odio quisque</span> semper.
  button:
    # (values) fa-envelope-o | bold | italic | uppercase | normal-case | small | normal-case
    text: 'Newsletter'
    class: 'fa-envelope-o'
    url: 'https://kittyfishfrommars.github.io'

social:
  items:
    -
      title: YouTube
      icon: fa-youtube-play
      url: 'https://youtube.com'
    -
      title: Facebook
      icon: fa-facebook
      url: 'https://facebook.com'
    -
      title: Tickets
      # icon: fa fa-ticket
      icon: fa-tags
      url: 'https://github.com/kittyfishfrommars'

legal:
  items:
    -
      title: 'Credits'
      url: 'https://www.google.com'
      parameter: '#credits'
    -
      title: 'Privacy Policy'
      url: 'https://www.youtube.com'
      parameter: '#privacy'
    -
      title: 'Legal Notice'
      # url: 'https://www.youtube.com'
      # parameter: '#privacy'
---