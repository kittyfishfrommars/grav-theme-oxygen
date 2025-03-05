---
title: 'Home'
menu: Home

# grav-plugin-sitemap overrides
sitemap:
  changefreq: weekly
  priority: !!float 1
content:
    items: '@self.modular'
    order:
        by: default
        dir: asc
        # custom:
        #     - _hook
        #     - _highlights
        #     - _callout
        #     - _features

banner:
    # leave url empty to disable banner
    url: 'banner_home-1500x960_q82.webp'
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

---

This paragraph intentionally serves no function. Content is configured via modules.