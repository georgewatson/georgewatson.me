---
layout: post
title: "Generative AI won't transform your business"
category: data
tags:
- data
- data-science
- data-strategy
- generative-ai
- technology
image: "/assets/post_images/dinosaur_meme.jpg"
credit: |
  Image:
  Tripathy A
  2024
  <em>LinkedIn</em>
  <a href="https://www.linkedin.com/posts/atripathy_datascience-analytics-fredrickdouglass-activity-7204459540136800256-gKgV/">linkedin.com/posts/atripathy_datascience-analytics-fredrickdouglass-activity-7204459540136800256-gKgV/</a>
  (accessed 2025-11-06);
  fair dealing asserted for the purposes of criticism, review, and quotation
mathjax: false
toc: false
date: 2025-11-06 16:00 +0000
---
Generative AI, like Copilot and ChatGPT, is an amazing new technology.
It is undoubtedly here to stay,
and will have genuinely transformative impacts in some areas,
but it's almost certainly not the future of your business,
and it's not going to transform you into the data-driven organisation you've always wanted to be.
Sorry.

<!--more-->

***

Senior leaders across a range of organisations
are really excited about generative AI (genAI) at the moment.
Every senior leader understandably wants to transform their organisation
into the sleekest, most modern, data-driven organisation it can be,
so they're keen to make sure they don't miss out on a transformative new technology ---
especially when it's being touted as the solution to a plethora of business problems
from customer service to data analysis.

It's easy to see why:
An infinitely scalable workforce of loyal drones
with access to all human knowledge,
who will obey every request
and never lose their temper with a customer,
sounds like every manager's dream.
I understand that,
and generative AI isn't pure snake-oil,
but it *is* a reptile-derived fluid
so it's important to be aware of what it is you're actually buying.

It certainly has potential to disrupt a range of sectors,
from cheap copywriting to stock photography and illustration.
To be clear,
it is not as good as a human at those things ---
its output is soulless and derivative ---
but it is a heck of a lot cheaper
and is probably sufficient for a lot of applications in these domains.
What these sectors have in common is generative AI's first strength:
**fuzziness**.
(I don't think anybody calls it fuzziness, but I'm going to because I think it's evocative.)

A fuzzy product is one that doesn't need a high degree of precision.
Fuzzy domains are lightly regulated,
and the product specification is loose.
Obviously you'll want to run your copy past legal for approval,
regardless of who writes it,
but the exact choice of verbiage is at the copywriter's discretion:
nobody really cares if your product is "amazing", "great", or "incredible".
Similarly, it doesn't really matter if the model in your stock photo has weird fingers,
or whether the character in your mobile game has both eyes looking in the same direction.
It would be *nice* to get these things right,
but not *necessarily* worth paying someone
if it looks good enough at first glance.
You also have a pretty solid idea of what a good output looks like,
so you might be able to get genAI to do it the way you want if you keep trying.

***

The other thing it seems to do well is code generation.
For example,
I asked ChatGPT to
"give me a short code snippet to train a logistic regression model using scikit-learn",
and it gave me this:

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.metrics import accuracy_score

# Load dataset
X, y = load_iris(return_X_y=True)

# Split into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train the model
model = LogisticRegression(max_iter=200)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate accuracy
print("Accuracy:", accuracy_score(y_test, y_pred))
```

Now, that looks correct.
But that's because this is the sort of task that looks the same every time.
Every one of those functions is well documented
and appears in basically that exact form all over the Internet,
in dozens of learning resources
and StackOverflow posts.
This kind of task is what I'm going to call
**boilerplate**,
the second strength of generative AI.
In many ways, this is the opposite of fuzzy:
rigid and unchanging.
Every call of a Python function looks basically same,
with similar arguments in the same order,
so the training data is full of correct answers.
Indeed,
for more niche queries,
ChatGPT often returns results that are startlingly similar to a particular StackOverflow answer.

But if you're paying software engineers for their ability to write boilerplate code,
you're a chump.
The point of these libraries is that they provide a simple,
predictable,
easy-to-use interface
to complex functions.
You pay people not to string library calls together,
but to know *which* library calls they need,
or to architect the wider system and its API
by translating your business problems into
software requirements and corresponding tests.

This is generative AI's first weakness:
**specificity**.
It handles edge cases badly ---
if something hasn't occurred in its training data,
it has no way to figure it out ---
and it struggles to parse complex requirements:
Given a detailed specification,
it might miss a crucial part.
This is untenable in high-risk or heavily regulated environments.

Of course, you could always get someone to review the output,
but that person would have to
understand your business problem,
translate it into software requirements and corresponding tests,
and...
Oh, yeah. That's a software engineer again.

Maybe the problem is with our prompts, though.
With good enough prompt engineering,
maybe we could specify exactly what our requirements are
and ensure that the system does exactly what we want it to do at every step.
Well, we already have a way to do that
(and in fewer keystrokes!),
and it's called a programming language.
Do you really want to iterate on that formula
by adding a layer of unpredictability
(because genAI output is typically nondeterministic)
to your business-critical code?

***

I saw this meme on LinkedIn recently.[^meme]
![A four-panel comic depicting a snake (labelled 'computer science') eating an elephant (labelled 'statistics') to form a new dinosaur-like creature that declares, 'Now I m data scientist!' (sic). In the fourth panel, a meteor (labelled 'AI') approaches the dinosaur, who appears oblivious.](/assets/post_images/dinosaur_meme.jpg){:.align-center}

[^meme]: [This is the earliest use I can find](https://www.linkedin.com/posts/atripathy_datascience-analytics-fredrickdouglass-activity-7204459540136800256-gKgV),
          so consider it my best attempt at attribution.
          I'm using it here for the purposes of criticism, review, and quotation,
          which constitutes fair dealing under the
          Copyright, Designs and Patents Act 1988.
          Memes are in general a bit of a grey area in my understanding of copyright law,
          as they seem to be frequently shared and remixed without attribution
          with no legal consequences.
          I suppose there is something of an implied public-domain dedication in the memeing world.

It depicts a snake
(labelled "Computer Science")
eating an elephant
(labelled "Statistics");
the resulting creature looks like a dinosaur,
and calls itself a "Data Scientist".
But, of course,
the new hybrid creature fails to notice the meteor
(labelled "AI")
hurtling right towards it.

Now, the first three-quarters of the meme, I get.
Data science *is* pretty much what happens when computer science cannibalises statistics,
and I'd be the first in line to suggest that we should have stronger links to the analytical community.
But it's the last panel that has me stumped --- the one with the meteor.

First of all,
call me old fashioned
but I remember when machine learning
(which is a big part of what every data scientist does)
was considered a *subset* of AI,
in which case AI is literally *what we do*.
But let's allow for semantic narrowing
and acknowledge that whoever made the meme probably means generative AI.

**Will generative AI kill data science?**
Well, no -- because, again, data scientists are the people training the AI models in the first place.
But I'm not one of those data scientists, so how about my job?
We've seen that ChatGPT can train a logistic regression model if you want it to,
so couldn't it replace me?

I mean, sure, but I spend a tiny fraction of my time training logistic regression models
(or any models, for that matter).
90% of my time is spent on trying to decide what models I should be training,
or whether we even need them at all.
Just like the software engineer above,
data scientists are valued not for their ability to write boilerplate
(which genAI can do)
but for their ability to
turn your messy business data into a solution to your ill-specified business problem,
which means understanding your business
and your data ---
and understanding them both *deeply*.

This is something you're still going to need humans for (for now),
and demonstrates genAI's second weakness:
**domain knowlege**.

***

But  these weaknesses are secondary to the main reason generative AI won't transform your business,
and this reason goes much deeper than the others
because at its heart is the architecture of these models themselves.
Generative AI models are,
at their core,
*transformers* ---
very technically impressive models
trained to predict the next word in a sequence of text.
If the model is currently thinking about France,
and it's got as far as
"The capital is...",
then it can be pretty confident that the next word is "Paris".

But they're trained to do this by absorbing a corpus of training data:
existing text from books and the Internet.
The model architecture is impressive enough to make it look
*almost*
like the models are capable of synthesising original thoughts ---
going beyond the **boilerplate** --
and maybe they kind of are,
but only if you're okay with those thoughts being **fuzzy**.
They sound good,
but they might not hold up,
because the model has no **domain knowledge**
and lacks the **specificity** to explore all the dark corners of the implications of its logic.

So ultimately, generative AI models ---
at least the ones that exist at the moment ---
can **only give you answers that exist in their training data**.

And do you *really* want to transform your organisation by copying what everyone else is doing?