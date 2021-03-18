---
layout: post
title: The game theory of Married at First Sight Australia
category: culture
tags:
- science
- mathematics
- game-theory
- culture
- tv
warnings:
- Minor <i>Married at First Sight Australia</i> (season 6) spoilers
mathjax: true
date: 2021-02-04 15:11 +0000
---
The surprise hit of Lockdown III
is a 2-year-old rerun
of a trashy reality TV series
from the other side of the world,
in which complete strangers
are placed into arranged marriages
by a team of "experts"
and drama ensues.
But despite its trashy nature,
the wonder from down under
features some surprisingly interesting game theory.

<!--more-->

***

Now, I'm not a game theorist---I'm just a guy
who likes terrible reality TV.
I have little expectation
that this is groundbreaking work,
but the problem struck me as a fun one.

For those less cultured than myself,
[*Married at First Sight Australia*](https://en.wikipedia.org/wiki/Married_at_First_Sight_(Australian_TV_series))
is a programme that has been running for several years,
loosely based on the Danish series
*Gift ved første blik*---there's also a UK version,
but it's much more wholesome
and thus of far less interest.
In the show,
which consistently refers to itself as
"The Experiment",
a team of people consistently referred to as
"The Experts",
led by former New Zealand cricketer
[John Aiken](https://en.wikipedia.org/wiki/John_Aiken_(cricketer)),
assign desperate singles
to their ideal partner
based on some loose concept of "science".
Based on their track record,
I think it's fair to say
they may be more interested in making good telly
than in lighting the fires of true love.

As the couples begin their married lives together---which,
of course,
consist of living in a big block of flats
with ten or so other couples
and plenty of scope for interpersonal conflict---they
face a series of tests.
The one I am most interested in
for this post
is the weekly "commitment ceremony",
in which the couples must decide
whether to stay in The Experiment
or cut their losses and leave.
I'll get to the details in a moment,
but first, a small digression.

### The prisoner's dilemma

You may be familiar with the
[prisoner's dilemma](https://en.wikipedia.org/wiki/Prisoner%27s_dilemma),
the game theory classic
in which two players
are faced with a choice:
to coöperate
or to defect,
with no knowledge
of what the other player will choose.
If both players coöperate,
they receive a modest payoff;
if both defect,
they are worse off.
But if Alice coöperates
when Bob defects,
Bob receives a substantial reward
at Alice's expense.

We can visualise this
as a payoff matrix;
for example:

| | B coöperates | B defects |
|-------|--------|---------|
| **A coöperates** | (2, 2) | (0, 3) |
| **A defects** | (3, 0) | (1, 1) |
{:.nicetable}

Here,
the first value
in each couplet
is the payoff for Alice,
and the second for Bob.
If Alice coöperates,
she will receive 2 points if Bob does the same,
or zero otherwise.
If Alice defects,
she will receive 3 points if Bob coöperates,
or one if Bob also defects.
It is thus clearly in Alice's interest to defect.

Except that if both players defect,
they both end up with a suboptimal payout.
The total return
is actually greatest
if both players coöperate---but this comes with substantial personal risk.
Hence the dilemma.

In a more generalised form,

| | B coöperates | B defects |
|-------|--------|---------|
| **A coöperates** | (*w*, *w*) | (*x*, *y*) |
| **A defects** | (*y*, *x*) | (*z*, *z*) |
{:.nicetable}

For the classic prisoner's dilemma,
$$y > w > z > x$$,
and it's at its most interesting when
$$2w > x + y > 2z$$
so that mutual coöperation maximises the overall returns
and mutual defection minimises them.

There are
[lots of alternative versions](http://reasonableapproximation.net/2020/07/04/classifying-games-like-prisoners-dilemma.html)
with different payoff matrices.
But what does this have to do
with Australian people marrying strangers?

### The Commitment Ceremony

Once a week,
the couples are split up,
with the men
(player A)
and women
(player B)
sent into separate rooms.
With them,
they take a piece of paper
and a pen,
with which they are to write
either "Stay" or "Leave".
So far,
this setup sounds pretty prisoner-y.

So, if you're happy with your relationship,
you probably want to stay.
If you're unhappy,
you probably want to leave.
But here's the catch:
Because The Experts
have a loose understanding of consent,
a couple can only leave
if *both* partners write "Leave" on their card.

So the matrix of outcomes
looks a bit like this:

| | B stays | B leaves |
|-------|--------|---------|
| **A stays** | Stay | Stay |
| **A leaves** | Stay | Leave |
{:.nicetable}

Ostensibly,
this gives couples a chance to really work on their relationship
and turn things around.
And that does happen.
But in most cases,
a Stay/Leave couple is just in for a *really* awkward week.
Nobody wants that.

The exact payoff
in each case
depends on
what it is you actually want.

### Stay/Stay

First, let's consider a happy couple,
Arnold and Beatrice.
They're properly loved up
and both want to stay in the experiment.
Obviously,
they should both write "Stay" on their cards
and be done with it.
Go home,
open a bottle of wine,
and have a lovely evening
gossiping about all the other dysfunctional couples.

But what if Arnold and Beatrice
are both just really insecure?
They're happy,
but they're just not sure their partner feels the same,
y'know?

If they both stay,
they're as happy as can be.
If they both leave,
they're very sad.
If Arnold says leave
(even though he'd rather stay)
and Beatrice says stay,
Arnold is perfectly happy---but
Beatrice is a bit less happy than she could be
because she's worried she might have
trapped Arnold in an unhappy marriage
and he doesn't really love her.
That's awkward---to account for it,
let's define a quantity,
$$a$$,
that represents the desire
of each party
to avoid awkwardness
as a value between 0 and 1.

That would give us a payoff matrix
something like this:

| | B stays | B leaves |
|-------|--------|---------|
| **A stays** | (1, 1) | (1−*a*, 1) |
| **A leaves** | (1, 1−*a*) | (*a*, *a*) |
{:.nicetable}

More generally,
we have
$$w = y$$,
$$y > x$$,
and
$$y > z$$;
the sign of the difference between $$x$$ and $$z$$
depends on the value of $$a$$.
Realistically,
this is a
"[Cake Eating](http://reasonableapproximation.net/2020/07/04/classifying-games-like-prisoners-dilemma.html#cake-eating-w------z-two-games)"
situation---everyone wants cake,
and there's enough for everyone,
so the equilibrium solution
maximises both overall
and individual happiness
for both players.

Stay/Stay is the preferred option
for everyone involved
and maximises the overall return.
There's really no reason to pick anything else.

### Leave/Leave

Now,
consider Arthur and Becky.
They're miserable.
Arthur's obsession
with model trains
is driving Becky mad,
and Becky has a really annoying habit
of biting her toenails
that Arthur just can't stand.
They'd really rather just go home
and forget this whole debacle ever happened,
thank you very much.

But once again,
they're wracked with doubt.
"What if Becky still wants to try and make this work?"
muses Arthur.
"What if she makes me stay?"
The only thing that could make their relationship worse
would be the awkwardness of
spending a week together
after outright admitting that he hates her guts
and breaking her annoying little heart.
If Arthur has to stay anyway,
he'd rather not have Becky spend another week
going on and on about how she can't believe he'd do that
in front of The Experts
and all the other couples.
He should just grin and bear it.

Of course,
Becky is having the exact same thoughts
(modulo `s/Becky/Arthur/g`).

That is,

| | B stays | B leaves |
|-------|--------|---------|
| **A stays** | (*a*, *a*) | (0, 0) |
| **A leaves** | (0, 0) | (1, 1) |
{:.nicetable}

or
$$z > w > x = y$$.
This is a rotated version of the
"[Let's 
Party](http://reasonableapproximation.net/2020/07/04/classifying-games-like-prisoners-dilemma.html#lets-party-w--z-----two-games)"
game,
a pure
[coördination game](https://en.wikipedia.org/wiki/Coordination_game)
with no obvious solution for noncommunicating participants.

The optimal solution,
however,
is relatively obvious:
If you both want out,
just get out.
Write "Leave" on your little cards,
go back to your separate homes
on opposite sides of Australia
and never speak to each other again.

### Stay/Leave

This is where it gets interesting.
So far,
the partners' incentives have aligned.
Arnold and Beatrice
both wanted to stay;
Arthur and Becky both wanted to leave.
But what of Archie and Belinda?

You see,
Archie and Belinda see things differently.
Archie thinks everything's going swimmingly:
They haven't had a single argument,
everything is very chill,
and,
as in any healthy marriage,
they've been getting plenty of alone time
to focus on their individual interests.
What he doesn't realise
is that he hasn't actually said a single word to Belinda,
or even really acknowledged her presence,
since a polite nod on their wedding day
and to be honest it's sort of freaking her out now.
Archie wants to stay;
Belinda wants to leave.

Let's work through our familiar little table
one cell at a time.

Say they both write "Stay"
on their little cards.
Archie will be thrilled:
He gets to stay with Belinda,
and she wants to stay with him too!
Belinda will be less chuffed about it,
but at least things won't be any *more* awkward than they were before,
which she values at $$a$$.

| | B stays | B leaves |
|-------|--------|---------|
| **A stays** | (1, *a*) | ? |
| **A leaves** | ? | ? |
{:.nicetable}

What if they both write "Leave"?
Belinda will be thrilled.
Archie will be very sad,
but at least he avoids some awkwardness
and knows it's probably for the best,
so the payoff looks something like this:

| | B stays | B leaves |
|-------|--------|---------|
| **A stays** | (1, *a*) | ? |
| **A leaves** | ? | (*a*, 1) |
{:.nicetable}

We can also fill in the upper right quadrant.
Archie gets to make Belinda stay,
albeit with some amount of awkwardness,
which we already know he values at $$1-a$$.
Belinda is forced to stay
against her will,
making her very unhappy:

| | B stays | B leaves |
|-------|--------|---------|
| **A stays** | (1, *a*) | (1−*a*, 0) |
| **A leaves** | ? | (*a*, 1) |
{:.nicetable}

The final quadrant is a weird one.
This is what would happen
if both players tried reverse psychology:
Archie,
who wants to stay,
votes "Leave"
and Belinda,
who wants to leave,
votes "Stay".
Archie wouldn't actually mind this outcome.
He really wanted to stay anyway,
and Belinda has just told him she wants to stay too---score!
Belinda would hate it.
She could be home
and far away from Archie
if only she hadn't tried to be so bloody tactical.
I'd guess they'd value it something like this:

| | B stays | B leaves |
|-------|--------|---------|
| **A stays** | (1, *a*) | (1−*a*, 0) |
| **A leaves** | (1, 0) | (*a*, 1) |
{:.nicetable}

The symmetry we saw when incentives aligned
is gone now.
To Archie,
this *looks* like a Cake Eating game;
to Belinda,
it looks like "Let's Party".
Since their perceived optimal strategies are opposed,
there's no way to really satisfy everyone here.
Archie would like Stay/Stay,
but Belinda would prefer Leave/Leave.
Either of these options
would maximise the overall return,
but it's likely they'd find themselves
stuck in a suboptimal Stay/Leave situation,
which is the worst of all worlds.

### Love is blind

Of course,
you might not have thought
to draw out these tables with your partner
in advance of the ceremony,
and now you find yourself
sat in a room
with a little card and a pen
and no way of getting in touch.
You don't know what your partner is thinking,
but you could make a guess
at the probability that they'll write "Stay".
What's the optimal strategy?

**If you want to stay**,
your expected returns are
$$P(\mathrm{s}) + (1 - a) (1 - P(\mathrm{s}))$$
if you write "Stay",
and
$$P(\mathrm{s}) + a (1 - P(\mathrm{s}))$$
if you write "Leave",
where $$P(\mathrm{s})$$
is the probability that your partner will also write "Stay".
The difference between these outcomes
depends entirely on the value you assign to $$a$$:
How much do you care about not making things awkward?
If you really couldn't care less
and just want to spend more time with your assigned partner,
$$a = 0$$
and you should write "Stay";
if you can't bear the idea of making them feel trapped
and having a bit of an awkward week,
$$a = 1$$
and you should write "Leave".
The general solution
is to write "Stay" as long as

$$a < \frac{1}{2}.$$

**If you want to leave**,
your expected returns are
$$1 - P(\mathrm{s})$$
if you write "Leave",
and
$$a P(\mathrm{s})$$
if you write "Stay".
You now have two things to consider:
The value of avoiding awkwardness,
and the probability that your partner
has written "Stay".
You should write "Leave" if
$$1 - P(\mathrm{s}) > a P(\mathrm{s})$$;
that is,

$$P(\mathrm{s}) < \frac{1}{a + 1}.$$

That looks something like this:
![A graph of P(s) against a,
with the region above the line labelled 'STAY'
and the region below the line labelled 'LEAVE'.
The line begins at a=0, P(s)=1;
it then decreases
in a reciprocal manner
to a final value of a=1, P(s) = 0.5.](/assets/post_images/mafs_graph.svg){:.align-center .dark-invert}

Hopefully this has cleared things up
for next year's participants.
