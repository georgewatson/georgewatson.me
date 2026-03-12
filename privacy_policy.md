---
layout: page
title: Privacy Policy
permalink: ../privacy_policy/
toc: true
---

### Summary

* Your [connection](#connection) to this website is as secure as I can reasonably make it.
  Please consider taking steps to further secure yourself
  and your children
  online.
* I will never ask you for any [personal information](#data-collection).
* My server logs
  (managed by
  [Netlify](https://www.netlify.com/))
  will record [information](#data-collection) including your IP address
  to ensure the security and stability of the server
  (as is standard for nearly all Web servers),
  but this doesn't identify you ---
  especially if you're using a [VPN](#connection).
* I don't track you.
* I don't use tracking [cookies](#cookies).
  To enhance accessibility,
  optional preference cookies
  will be set if you interact with
  the stylesheet chooser
  or the MathJax settings;
  these can be easily
  [deleted or disabled](#opting-out)
  in your browser.
* I don't [share](#other-organisations) your data with anyone else.
* I [embed content](#other-organisations) from only one other service,
  [Webmention.io](https://webmention.io),
  to enable you to own your comments and reactions to my blog posts.
* There are no adverts on this website.
* I don't use [analytics](#analytics).
* You can [opt out](#opting-out) of most data collection
  using standard methods.
* You have rights under the [GDPR](#gdpr-statement).
* I'm never going to ask you to [verify your age or identity](#children)
  because I care about your privacy.

### Connection

Your connection to this website is end-to-end encrypted using
[Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security).
This makes it difficult for eavesdroppers to read or interfere with your
communications with this website.

Both `georgewatson.me` and `dendodge.me` have valid SSL certificates issued via
[Netlify](https://www.netlify.com/) and
[Let's Encrypt](https://letsencrypt.org/).
The `georgewatson.me` domain,
including all its subdomains,
supports [HTTP Strict Transport Security
(HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
and has been submitted to the Chrome preload list.
This domain receives an [A+ rating from SSL
Labs](https://www.ssllabs.com/ssltest/analyze.html?d=georgewatson.me).

I can do very little to prevent your internet service provider,
employer,
government,
or parents from tracking your activity.
If you wish to secure your connection further,
consider connecting via an anonymous proxy,
the
[Tor](https://www.torproject.org/)
network,
or a VPN
(I recommend
[Proton VPN](https://protonvpn.com/)
or
[Mullvad](https://mullvad.net/en)).

I recommend also using a private DNS protocol
such as DNS over HTTPS or DNS over TLS
to resolve domain names.
Nameservers supporting these protocols include
[1.1.1.1 by CloudFlare](https://1.1.1.1/dns/).
Note that,
if you are using a well configured VPN
from a privacy-respecting provider,
this should not be necessary.

### Data collection

Like all websites,
some information may be stored in the server logs regarding your visit to this
website.
These logs include information such as your
[IP address](https://en.wikipedia.org/wiki/IP_address) and
[User-Agent string](https://en.wikipedia.org/wiki/User_agent),
the resources on this server you attempt to access,
the address of the page that referred you to the resource,
and the status code returned to you by the server,
along with the date and time.
This information does not identify you personally,
and is necessary for the operation and stability of the server.
These logs are handled by [Netlify](https://www.netlify.com/), and
[their privacy policy](https://www.netlify.com/privacy/) also applies.
I have access only to logs from the last 24 hours.

Instead of asking for your email address,
I offer the facility to
subscribe to new blog posts via an
[Atom feed](/feed.xml)
using your favourite RSS reader.
This does not involve giving me,
nor any third party,
any of your personal details.
You may choose to consume this Atom feed using your RSS/Atom reader of choice.

### Cookies

I may store the following first-party cookies on your device:

{:.compact-list}
* `mjx.*`
  * **Purpose:**
    Stores your
    [MathJax](https://www.mathjax.org/)
    preferences,
    used on pages with embedded equations
  * **Content:**
    Several cookies containing a series of values representing your preferences
  * **Provider:**
    [MathJax](https://www.mathjax.org/)
    (hosted on this server, no cross-site requests)
  * **Tracking:**
    This cookie cannot be used to identify you personally,
    and provides no capability for cross-site tracking.
  * **Effects if disabled:**
    If you disable or delete this cookie,
    equations should still display,
    but some functionality and customisability may be lost.
  * **Source code:**
    The MathJax source code is available
    [on GitHub](https://github.com/mathjax/mathjax).
* `style`
  * **Purpose:**
    Stores your chosen stylesheet,
    if you choose to interact with the stylesheet selector in this website's 
    footer
    (such as to choose dark mode or the high-accessibility option)
  * **Content:**
    The name of your chosen stylesheet
  * **Tracking:**
    This cookie cannot be used to identify you personally,
    and provides no capability for cross-site tracking.
  * **Effects if disabled:**
    Deleting or disabling this cookie will result in the stylesheet being reset
    to default on every new page load;
    you can still temporarily change your stylesheet by using the buttons in the
    footer
    or your browser's built-in stylesheet chooser.
  * **Source code:**
    The source code for this cookie is available in
    [this website's GitHub
    repository](https://github.com/georgewatson/georgewatson.me/blob/master/assets/style_switcher.js).

[^cookies]: The irony of having to set an extra cookie in order to avoid notifying you about cookies is not lost on me, but I promise it's less annoying this way.

These are classified as
**functional/preference cookies**.
They remember your preferences but are not strictly necessary for the website's operation.
Under the GDPR,
I rely on your consent for these cookies,
which you provide by interacting with these features
and choosing not to disable these cookies in your browser
(see § [Opting Out](#opting-out))
after being informed of their use
by the banner in the footer of every page.

You can probably disable cookies on a per-site basis in your browser settings.
See your browser's help pages for information on how to do this.
You can also delete cookies at any time.
See the § [Opting Out](#opting-out) section for more information.

### Other organisations

Instead of hosting comments,
which would require me to gather your information myself
or embed content from a particular third-party provider
(such as Disqus)
who wants your information,
this website supports
[webmentions](https://indieweb.org/Webmention)
on blog posts.
This is a W3C Recommendation
(open standard)
allowing you to react and comment
from your own website,
or across various social platforms.
To enable this to update dynamically
and facilitate open conversations,
I embed content from
[Webmention.io](https://webmention.io/)
on blog posts.
You can push webmentions from your own website,
but I also use
[brid.gy](https://brid.gy/)
to pull webmentions from 
other platforms
(e.g. Reddit),
so sharing or commenting on my blog posts there should show up too.
If you want to comment anonymously,
services like
[commentpara.de](https://commentpara.de/)
facilitate this;
you can choose the service of your choice.

I do not embed any content
from any other organisations.
All scripts, assets, and font files are hosted on the same server as this webpage,
so when you make an HTTPS request to this website,
no requests are made to any servers
except this one
and Webmention.io.
You can verify this using your browser's developer tools,
and block external requests using various browser extensions.

### Analytics

This website does not use Web analytics.

[Netlify](https://www.netlify.com/) may record and analyse your traffic for their own purposes,
but this information is not currently available to me.
[Their privacy policy](https://www.netlify.com/privacy/) applies.

### Opting Out

You can opt out of cookies by disabling them for this website ---
or for all websites ---
in your browser settings.
Existing cookies can be deleted in your browser,
probably near where your history is stored.
You could also choose to browse in Private/Incognito mode.

Your IP address can be masked by using a Web proxy or VPN service,
many of which are available for free
(see § [Connection](#connection)).

Your User-Agent string can probably be changed in your browser.
Any referrer information can be removed from your request
by pasting the URL directly into your address bar
instead of following a hyperlink.
If you're privacy-conscious enough to care about these things,
you probably already know what you're doing.

These opt-out mechanisms are simple and standardised, and provide fine-grained
control across multiple websites.
I consider this superior to the deliberately difficult, confusing, and
non-standard mechanisms provided by most websites in the name of GDPR
compliance.

In particular,
while I take pains to inform you of the cookies this website uses
(see § [Cookies](#cookies)),
I do not offer a homemade facility to disable them
because you already have a better one in your browser ---
and unlike most cookie banners,
that one is designed to empower you,
rather than confuse and mislead.
If you are concerned about cookies,
I strongly encourage you to familiarise yourself with your browser's options
and make use of them wherever you browse.
The fact that regulations mandate
redundant, user-hostile banners
instead of better privacy controls in browsers
reveals whose interests are really being served
by this legislation,
and it is neither users
nor small indie website owners.

### Jurisdiction

I reside in England, in the United Kingdom.
Hosting is provided by [Netlify](https://www.netlify.com/),
a company based in San Francisco, California, in the United States.

Every effort has been made to comply with the laws of
England & Wales
and the wider United Kingdom,
and to ensure that Netlify are not breaking any laws in their jurisdiction
by hosting this website.
It is your responsibility to ensure that you are not breaking any local laws
in your jurisdiction
by visiting or interacting with this website.
I cannot and will not comply with laws to which I am not subject,
including censorship or blasphemy laws that may apply in some areas.

I am not responsible for the content or policies of most external websites,
even if I embed or hyperlink to them.
Linking to,
embedding,
discussing,
or recommending an external website or organisation does not imbue me with
responsibility for that website or organisation's actions,
and should not be viewed as an endorsement of their policies.
Other websites will have privacy policies that differ from this one.
It is your responsibility to ensure that you agree to the terms of any
websites or organisations with which you choose to interact.

### GDPR statement

As a visitor to this website,
you have the right to:

* **access** your personal data and information about how it is processed
* **rectification** of inaccurate personal data
* **erasure** (the right to be forgotten) in certain circumstances
* **restrict processing** of your personal data
* **data portability** (the right to receive your data in a structured, commonly used format)
* **object** to processing based on legitimate interests
* **lodge a complaint** with the Information Commissioner's Office
{:.compact-list}

To exercise any of these rights,
contact the data controller,
George Watson-Hyde,
by email at
[privacy@georgewatson.me](mailto:privacy@georgewatson.me).

The limited personal data processed by this website
(see § [Data collection](#data-collection))
is processed on the basis of legitimate interests,
primarily the operation and security of the Web server.
This processing is necessary to deliver content to you
and protect against malicious activity.

This website does not use automated decision-making or profiling,
because it does not make any decisions.

If you wish to exercise your right to data portability,
I will endeavour to provide
all pieces of your personal data to which I have access
in a structured, commonly-used format.
However, note that
the only [personal data](#data-collection) to which I have access
are your IP address,
User-Agent string,
and browsing history
on this website
over the last 24 hours,
all of which you probably already know
(or can find out more easily elsewhere),
and most of which you would need to provide to me
in order to allow me to action your request in the first place,
so overall you may be wasting your time
and mine.

Data retention and sharing are described elsewhere on this page.

### Children

This website does not knowingly collect personal information from
people under the age of 13,
because I do not know who you are or how old you are.

This website is operated as a noncommercial personal blog.
This is exempt from the Online Safety Act's regulatory framework
under the "limited functionality" exemption
(schedule 1, paragraph 4).

I do not believe that this website contains any material harmful to children;
furthermore,
I do not believe that any person can in fact be harmed
by the free exchange of truthful information.
However, the Online Safety Act reflects the government's view
that children require additional protections online.
In compliance with this principle,
if you are under 18,
please ask a parent or guardian to verify that the content of this website
is appropriate for you
before proceeding.

Parents and guardians are best placed to make judgements about
what is suitable for the children in their care,
and I encourage any parents or guardians reading this policy
to take responsibility for their children's online activities,
rather than relying on government intervention
or the compliance and goodwill of
individual website operators
and data-hungry multinational conglomerates.

In the interests of your privacy,
and to minimise the risk of identity theft and overreaching surveillance,
I do not intend to introduce intrusive age-verification technology
on this website.
Noting that age restrictions apply only to connections
that appear to the server to originate within certain countries
(such as the UK),
you may further wish to consider using privacy-preserving technologies
like those [described above](#connection)
to avoid these risks for yourself when browsing elsewhere.

### Transparency Report

* I have never received any request for personal information regarding any
  visitor to this website from a government or law enforcement agency.
* I have never been enjoined or otherwise legally prevented from publishing any
  material on this website.

The largest number of notices ever displayed above is 2.
<i class="ph-fill ph-bird"></i>
[What's this?](https://en.wikipedia.org/wiki/Warrant_canary)

### Updates and Queries

All changes to this privacy policy will be recorded in the commit history of the
[GitHub repository](https://github.com/georgewatson/georgewatson.me)
associated with this website.
You can subscribe to an
[Atom feed](https://github.com/georgewatson/georgewatson.me/commits/master/privacy_policy.md.atom)
provided by GitHub
if you wish to be notified of commits involving changes to this policy.

If you have any queries, contact
[privacy@georgewatson.me](mailto:privacy@georgewatson.me)
or use one of the other contact media listed on the [Contact](/contact) page.

*[CDN]: Content Delivery Network
*[DNS]: Domain Name System
*[DNT]: Do Not Track
*[EU]: European Union
*[GDPR]: General Data Protection Regulation
*[HSTS]: HTTP Strict Transport Security
*[HTTPS]: HyperText Transfer Protocol Secure
*[IP]: Internet Protocol
*[SSL]: Secure Sockets Layer
*[TLS]: Transport Layer Security
*[UK]: United Kingdom of Great Britain and Northern Ireland
*[VPN]: Virtual Private Network
*[W3C]: World Wide Web Consortium