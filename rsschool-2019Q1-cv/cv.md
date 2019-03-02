# Gutsanovich Aliaksandr

#### Contacts

##### My email

guts-817@rambler.ru

##### My telephone

+375 29 753-00-57

#### Summary

My purpose is to be front-end developer and improve my skills.
I am very interested in coding javascript and usage javascript frameworks, such as ReactJs, AngularJs, Angular 2-7.
I would like working with talented front-end developers in one team in order to improve my experience.
Now I am working in the company Epol Soft as a junior software developer.
I working in full-stack developing, but I think I need to choose only one direction. It is front-end or back-end.
Having worked and compared two directions, I chose front-end. Because I think that javascript is the best programming language.
I would like to show my skills to some mentor from Brest to get short listed om some position.

#### Skills

##### Programming languages

*Javascript
*Java

##### Frameworks

* ReactJS
* AngularJS
* Angular 2-7
* Bootstrap (CSS framework)
* Spring (java framework)
* Hibernate

##### Methodologies

* Scrum

##### Other technologies and tools

* Git
* HTML
* CSS
* SASS

#### Example of my code

```javascript
class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    appendChild(node) {
        if (!this.left && !this.right) {
            this.left = node;
            node.parent = this;
        }
        else if (this.left && !this.right) {
            if (node.priority != this.left.priority || node.data != this.left.data) {
                this.right = node;
                node.parent = this;
            }
        }
    }

    removeChild(node) {
        if (node.priority === this.left.priority && node.data === this.left.data) {
            this.left = null;
            node.parent = null;
        }
        else if (node.priority === this.right.priority && node.data === this.right.data) {
            this.right = null;
            node.parent = null;
        }
        else {
            throw new Error();
        }
    }

    remove() {
    	if (this.parent) {
    		this.parent.removeChild(this);
		}
    }

    swapWithParent() {
    	if (this.parent) {
            let childLeft = this.left,
                childRight = this.right,
                childParent = this.parent,
                parentLeft = this.parent.left,
                parentRight = this.parent.right,
                parentParent = this.parent.parent;

            if (this.priority === this.parent.left.priority) {
            	this.parent = parentParent;

            	if (this.parent) {
                    this.switchParentChild(childParent);
				}

            	this.left = childParent;
            	this.right = parentRight;
            	this.left.parent = this;
            	if (this.right) {
                    this.right.parent = this;
				}
            	this.left.left = childLeft;
            	this.left.right = childRight;
			}
            else if (this.priority === this.parent.right.priority) {
            	this.parent = parentParent;
            	if (this.parent) {
                    this.switchParentChild(childParent);
				}
            	this.left = parentLeft;
            	this.right = childParent;
            	this.right.parent = this;
            	if (this.left) {
                    this.left.parent = this;
                }
            	this.right.left = childLeft;
            	this.right.right = childRight;
			}
        }
    }

    switchParentChild(childParent) {
        if (this.parent.left.priority === childParent.priority) {
            this.parent.left = this;
        }
        else {
            this.parent.right = this;
        }
	}
}
```

#### Experience

##### Experience in projects

**From June 2018 before current time**

Company: Epol Soft

Position: junior software developer

Participation in projects: support and developing tools for assessment and recruitment in company (full-stack developing).

##### Training experience

Rolling scopes courses in 2017

[source code from Github](https://github.com/Sanderas/react-redux)

Studing in BSUIR 2015 - 2019


#### Education

* BSUIR (2015 - 2019)
* Rolling-scopes courses 2017

#### English level

**B2** - upper intermediate

##### English experience

**taking english courses with native speaker in Tarek Amer School**
August 2016 - June 2018

**taking english courses in Epol Soft**
September 2018 - current time