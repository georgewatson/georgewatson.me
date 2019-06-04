---
layout: post
title: Object-oriented processing of PDB files in Python
category: science
tags:
- science
- technology
- python
- pdb
- biophysics
- object-oriented-programming
- code
image: "/assets/post_images/object-oriented-processing-of-pdb-files-in-python.png"
date: 2019-06-04 20:14 +0100
---
I recently encountered the surprisingly difficult task of processing a PDB file
in Python.
While reading fixed-width files is relatively trivial in certain old-fashioned
languages with support for complex `format` statements,
like my beloved Fortran,
Python makes it
[less simple](https://stackoverflow.com/questions/4914008/how-to-efficiently-parse-fixed-width-files).
Given the [myriad record types](http://www.wwpdb.org/documentation/file-format)
that frequently appear in such files,
doing this processing on an ad-hoc basis seems like a terrible idea.
Thankfully,
the fields in these records lend themselves nicely to implementation as objects,
[so I went ahead and did just that](https://github.com/georgewatson/pdb_objects).

<!--more-->

***

I'm by no means the first person to write a package for this
purpose---[searching PyPI for "pdb"](https://pypi.org/search/?q=pdb)
turns up a lot of results, even after references to the similarly named debugger
are discarded.
These packages are uniformly impressive and provide powerful sets of functions
for fetching, modifying, and converting PDB files.
I would recommend many of them to friends and family.
But that's not what I was looking for.

I wanted a simple, lightweight package that converts PDB records into Python
objects and back again,
something I can drop into a script when I want to perform some arbitrary
calculation of my own.

For example,
I wanted to find the heavy atom closest to a known point.
I'm sure many of the packages on PyPI can do that,
and [cpptraj](https://github.com/Amber-MD/cpptraj)
almost certainly can.
But the first thing that came to mind was

```python
min((atom for atom in atoms),
    key=lambda a: a.distance(point))
```

Doesn't that look beautiful?
I don't want to install a whole package
or dig through the entire AMBER manual
to do something I already know how to do.
Reading the data in the first place was the only hard part.

Here's what the function to read in an `ATOM` record looks like:

```python
def read_atom(line):
    """
    Reads an ATOM or HETATM from a PDB file into an Atom object
    """
    return Atom(record_type=line[:6].strip(),
                num=int(line[6:11]),
                name=line[12:16].strip(),
                alt_location=line[16:17].strip(),
                residue=Residue(name=line[17:21].strip(),
                                chain=line[21:22].strip(),
                                resid=int(line[22:26]),
                                insertion=line[26:27].strip()),
                coords={'x': float(line[30:38]),
                        'y': float(line[38:46]),
                        'z': float(line[46:54])},
                occupancy=float(line[54:60]),
                temp_factor=float(line[60:66]),
                segment=line[72:76].strip(),
                symbol=line[76:78].strip(),
                charge=line[78:80].strip())
```

While I'm sure there are neater ways,
that's roughly as good as it gets.
And if I want to manipulate the structure and write out the result,
I can't really discard very many of those fields.

The result is an `Atom` object, which looks a bit like this:

```python
{'record_type': 'ATOM',
 'num': 1,
 'name': "O5'",
 'alt_location': '',
 'residue': {'name': 'DG',
             'chain': 'A',
             'resid': -117,
             'insertion': ''},
 'coords': {'x': 186.697,
            'y': 135.541,
            'z': 228.518},
 'occupancy': 1.0,
 'temp_factor': 757.65,
 'segment': '',
 'symbol': 'O',
 'charge': ''}
```

That's much easier to work with.
You may have also noticed that residues are objects too.

The package currently (v0.1.1) supports the following record types:
* `ATOM`
* `HETATM`
* `TER`
* `HELIX`
* `SHEET`

A number of useful operators are intuitively defined.
Since PDBs are inherently ordered,
`>` and `<` do what you'd expect.
Equality is defined using the unique (in a well-formed PDB) identifiers,
so two objects representing the same atom/terminator/structural element are
equal even if their other properties are not (or undefined).
The `__contains__` method is defined for residues,
so that `if atom in residue` is a valid construct.

Printing any of the objects (or otherwise casting it to a string) results in a
correctly formatted PDB record:

```
ATOM      1 O5'   DG A-117     186.697 135.541 228.518  1.00757.65           O
```

So `map(print, records)` gives you a PDB,
assuming `records` is a list of objects
(like the one the handy `read_pdb()` function gives you).

This isn't a fully-fledged PDB-manipulating package.
It's not trying to be.
But it has made my life a bit easier,
and maybe it will help you too.

The source code is available
[on GitHub](https://github.com/georgewatson/pdb_objects),
and the package is [in PyPI](https://pypi.org/project/pdb-objects/),
so you can just

```shell
pip3 install pdb-objects
```

then stick

```python
import pdb_objects
```

at the top of your script and go get a coffee.
You deserve it.

*[AMBER]: Assisted Model Building with Energy Refinement
*[PDB]: Protein Data Bank
