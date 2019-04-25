---
layout: page
title: Privacy Policy
permalink: ../privacy_policy/
---

### Connection
{:#connection}

Your connection to this website is encrypted with
[Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security).
This makes it impossible for eavesdroppers to read or interfere with your
communications with this website.

I recommend also using private DNS to resolve domain names,
such as DNS over HTTPS or DNS over TLS.
Nameservers supporting these protocols include
[1.1.1.1 by CloudFlare](https://1.1.1.1/dns/).

### Data collection
{:#collection}

I don't ask for any of your personal data.
There is no facility to register a user account on this website,
and there are no forms for you to fill in.

Like all websites,
some information may be stored in my server logs regarding your visit to this
website.
These logs include information such as your
[IP address](https://en.wikipedia.org/wiki/IP_address),
[User-Agent string](https://en.wikipedia.org/wiki/User_agent),
the resources on this server you attempt to access,
the address of the page that referred you to the resource,
and the status code returned to you by the server,
along with the date and time.
This information does not identify you personally,
and is necessary for the operation and stability of the server.
The log files are stored securely on a virtual private server hosted by
[DigitalOcean](https://www.digitalocean.com/),
and are overwritten daily.
No copies are ever made of all or part of these logs.

Aggregate information may be collected for analytics purposes,
but cannot be used to identify you personally.
See the [Analytics](#analytics) section for more information.

### Cookies
{:#cookies}

I may store first-party cookies on your device for the purpose of server
security.
This cookie should appear as `__cfduid`, and is provided by CloudFlare.
It consists of a one-way hash of certain values and cannot be used to
personally identify you.
It provides no capability for cross-site tracking.
For more information, see:
* ["What does the Cloudflare cfduid cookie do?" --- CloudFlare
  Support](https://support.cloudflare.com/hc/en-us/articles/200170156-What-does-the-Cloudflare-cfduid-cookie-do-)
* ["Privacy and the cfduid cookie" --- CloudFlare
  Support](https://support.cloudflare.com/hc/en-us/articles/360024915491)

A cookie may also be used to store your stylesheet preference.
This cookie is called `style` and contains your chosen stylesheet,
if you choose to use the links in the page footer to change between the Default
and Accessible stylesheets.
The cookie may be automatically set with a value of "Default"
in the absence of any interaction with the stylesheet chooser.
This cookie does not identify you personally and cannot be used to track you.
This cookie is provided purely for your convenience.
The value of this cookie will not be changed if you use your browser's built-in
stylesheet selector.

A cookie will also be stored to record that you have dismissed the cookie
notification banner,
so you don't get bothered with it every time you visit.
This cookie is called `cookieconsent_status`,
and does nothing else.
This banner uses
[Cookie Consent by Insites](https://cookieconsent.insites.com/),
but no information is shared with its developers.
You can inspect the source code
[on GitHub](https://github.com/insites/cookieconsent)
if you'd like to verify that this cookie isn't evil.

Other cookies may be stored by the following trusted partners.
Links to their cookie policies are provided below.
* [CloudFlare](https://www.cloudflare.com/cookie-policy/)
* [Disqus](https://help.disqus.com/user-profile/use-of-cookies)
  (on pages with embedded comments sections)
* [Google
  Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage)
  (if you don't send a [Do Not Track header](#opting-out))
* [Twitter](https://help.twitter.com/en/rules-and-policies/twitter-cookies)
  (on pages with embedded Twitter widgets)

You can probably disable cookies on a per-site basis in your browser settings.
See your browser's help pages for information on how to do this.
You can also delete cookies at any time.
See the [Opting Out](#opting-out) section for more information.

### Analytics
{:#analytics}

[Google Analytics](https://analytics.google.com/analytics/web/) provide web
analytics on this website.
This consists of aggregate data,
and does not allow me to identify you personally.
This information is stored on Google's servers.
See [Google's privacy policy](https://policies.google.com/privacy?hl=en) for
more information.

The Google Analytics code will not be loaded if your browser sends a
[Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) (`DNT`) header.
You can probably enable this in your browser's settings.
See the [Opting Out](#opting-out) section for more information.

### Opting Out
{:#opting-out}

You can opt out of cookies by disabling them for this website ---
or for all websites ---
in your browser settings.
Existing cookies can be deleted in your browser,
probably near where your history is stored.
You could also choose to browse in Private/Incognito mode.

You can opt out of analytics by sending the
[Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) (`DNT`) header with
your HTTPS request.
You can probably enable this in your browser's settings.
This will prevent the Google Analytics code from being loaded,
and is also respected by Disqus.

You can disable embedded widgets such as Disqus comments and Twitter timelines
by disabling JavaScript in your browser,
or by using one of the many browser extensions that allow you to block specific
frames of external content.
This prevents these companies from tracking you.
Where it is reasonable to do so, an appropriate fallback will be provided.

Your User-Agent string can probably be changed in your browser.
Your IP address can be masked by using a web proxy or VPN service,
many of which are available for free.
Any referrer information can be removed from your request
by pasting the URL directly into your address bar,
rather than by following a hyperlink.
If you're privacy-conscious enough to care about these things,
you probably already know what you're doing.

These opt-out mechanisms are simple, standardised, and provide fine-grained
control across multiple websites.
I consider this superior to the deliberately difficult, confusing, and
non-standard mechanisms provided by most websites in the name of GDPR
compliance.

### Jurisdiction
{:#jurisdiction}

I reside in the United Kingdom.
My server is hosted in the United Kingdom
by [DigitalOcean](https://www.digitalocean.com/),
a company based in New York, United States.

I am proudly based in the European Union ---
[for now](https://en.wikipedia.org/wiki/Brexit).

Every effort has been made to comply with UK and EU law.

### Transparency Report
{:#transparency-report}

* I have never received any request for personal information regarding any
  visitor to this website from a government or law enforcement agency.
* I have never been enjoined or otherwise legally prevented from publishing any
  material on this website.

The above notices are correct as of commit
[{{ site.git.last_commit.short_sha 
}}](https://github.com/georgewatson/georgewatson.me/commit/{{ site.git.last_commit.long_sha }})
on {{ site.time | date: '%-d %B %Y' }}.
The largest number of notices ever displayed above is 2.
<i class="fas fa-crow"></i>
[What's this?](https://en.wikipedia.org/wiki/Warrant_canary)

### Updates and Queries
{:#updates}

This policy was last updated in commit
[{{ page.git.last_commit.short_sha }}](https://github.com/georgewatson/georgewatson.me/commit/{{ page.git.last_commit.long_sha }})
on {{ page.git.last_commit.commit_date | date: '%-d %B %Y' }}.
All changes to this privacy policy will be recorded in the commit history of the
[GitHub repository](https://github.com/georgewatson/georgewatson.me)
associated with this website.

If you have any queries, contact
[george@georgewatson.me](mailto:george@georgewatson.me)
or use one of the other contact media listed on the [Contact](/contact) page.
