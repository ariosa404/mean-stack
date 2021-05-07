# Angular & NodeJS - The MEAN Stack Guide

- Section 1: Getting Started
- Section 2: The Angular Frontend - Understanding the Basics
- Section 3: Adding NodeJS to our Project
- Section 4: Working with MongoDB
- Section 5: Enhancing the App
- Section 6: Adding Image Uploads to our App
- Section 7: Adding Pagination
- Section 8: Adding User Authentication
- Section 9: Authorization
- Section 10: Handling Errors
- Section 11: Optimizations
- Section 12: Deploying our App
- Section 13: Course Roundup

## Section 1: Getting Started

### 1. Introduction
In this course we will use the MEAN Stack (Solution stack) for creating a full stack Angular application.

These notes refer to this guide
- [Udemy: Angular & NodeJS - The MEAN Stack Guide [2020 Edition]](https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn)

Some useful links
- [Wikipedia: MEAN (solution stack)](https://en.wikipedia.org/wiki/MEAN_(software_bundle))
- [IBM: MEAN Stack](https://www.ibm.com/cloud/learn/mean-stack-explained)

- [Wikipedia: MongoDB](https://en.wikipedia.org/wiki/MongoDB)
- [MongoDB: Docs](https://docs.mongodb.com)
- [Mongoose: Docs](https://mongoosejs.com/docs/guide.html)

- [Wikipedia: Express.js](https://en.wikipedia.org/wiki/Express.js)
- [Express.js: Docs](https://expressjs.com)
- [Mozilla: Express.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- [TutorialsPoint: Express.js](https://www.tutorialspoint.com/expressjs)
- [FreeCodeCamp: Express.js](https://guide.freecodecamp.org/nodejs/express)

- [Wikipedia: Angular (web framework)](https://en.wikipedia.org/wiki/Angular_(web_framework))
- [Angular: Docs](https://angular.io/docs)

- [Wikipedia: Node.js](https://en.wikipedia.org/wiki/Node.js)
- [Node.js: Docs](https://nodejs.org/en/docs)

### 2. What is MEAN?
**MongoDB:** A NoSQL Database which stores "Documents" in "Collections" (instead of "Records" in "Tables" as in SQL).
- Store Application Data (Users, Products, ...)
- Enforces no Data Schema or Relations
- Easily connected to Node/Express (NOT to Angular!)
- A powerful Database which can easily be integrated into a Node/Express Environment

You can use other DBs (e.g. SQL), too!

**Express.js:** A node Framework which simplifies writing Server-side Code and Logic.
- Based on Node, offers same Functionalities
- Middleware-based: Funnel Requests through Functions
- Includes Routing, View-rendering & More
- Simplifies the Usage of Node. Express is for Node what Laravel would be for PHP

**Angular v2 and above:** A Client-side (Browser) Framework which allows you to build Single-Page-Applications (SPA).
- Render UI with Dynamic Data
- Handle User Input
- Communicate with Backend Services
- Provide a "Mobile App"-like User Experience

**Node.js:** A Server-side Library (JavaScript on the Server-side).
- Listen to Requests and Send Responses
- Execute Server-side Logic
- Interact with Database and Files
- An Alternative to PHP, Ruby on Rails, Java etc. Is rarely used Standalone!

### 3. What is a Single Page Application (SPA)?
An index.html served by one server that could be different from the Node one. This page includes some scripts imports that houses our Angular app: the Angular framework and our own code; at the end, we do not need to reload the page. This allows for instant re-rendering, instant user feedback and makes building highly engaging UIs possible.

### 4. How Does the MEAN Stack Work? (The Big Picture)
**Client (Browser) Angular:**
- Presentation/UI
- SPA (Single Page is not necessarily served by Node Backend!)

**Server MEN:**
- Business Logic
- Persistent Data Storage
- Authentication Logic (for example)

Connected by AJAX (Background) Requests/Responses using JSON Data Format.

### 5. MUST READ: Angular CLI - Latest Version
In the next lecture, we will use a tool called the "Angular CLI" to create our Angular project.

With the latest version, this tool will ask you two questions:
- Do you want to use the Angular Router?
- Which CSS pre-processor do you want to use?

Simply hit ENTER twice and confirm the default (without entering any value).
The defaults (which we will use therefore) are:
- No (No router for now, we'll add it later)
- CSS

### 6. Installing Node & the Angular CLI
- Download and install **Visual Studio Code** from https://code.visualstudio.com/
- Download and install **Git** from https://git-scm.com/
During the installation set Visual Studio Code as default git editor and diff tool. If we don't install Git, at the end of the `ng new name` command we will have this message: *'git' is not recognized as an internal or external command, operable program or batch file*.
- Download and install **Node.js** (Latest Features) from https://nodejs.org/ (it will automatically install npm, the Node Package Manager).
**How to upgrade Node.js for Linux:**
`node -v` (to know what version is installed)
`sudo npm cache clean -f` (clean all npm cache from your system forcefully)
`sudo npm install -g n` (install n modules using npm command)
`sudo n stable` (install or update latest Node.js version on your system using n module)
`sudo ln -sf /usr/local/n/versions/node/11.8.0/bin/node /usr/bin/node` (link your Node.js binary with latest Node.js installed binary file)
- Reboot your system
- Run `npm install -g @angular/cli` (-g parameter stand for globally)
- Navigate to the folder for the new project
- Run `ng new name-of-the-project` (some restrictions: the name should not starting with a number, it cannot be “test”)
- Run `ng serve` (for run a development only server)
- Open a browser and go to http://localhost:4200/

### 7. Installing our IDE
Open Visual Studio Code and configure it in this way:
- File &rarr; Open Folder...
- View &rarr; Extension
“Angular Essentials” &rarr; Install &rarr; Active
“Material Icon Theme” &rarr; Install &rarr; Active
- View &rarr; Toggle Render Whitespace

### 8. Exploring the Project Structure
- **package.json**
Configures npm package dependencies that are available to all projects in the workspace.
- **tsconfig.json**
Default TypeScript configuration for projects in the workspace.
- **angular.json**
CLI configuration defaults for all projects in the workspace, including configuration options for build, serve, and test tools that the CLI uses, such as TSLint, Karma, and Protractor.
- **e2e/**
An e2e/ (End-to-end test files) folder at the top level contains source files for a set of end-to-end tests that correspond to the root-level application, along with test-specific configuration files.
- **node_modules/**
Provides npm packages to the entire workspace. Workspace-wide node_modules dependencies are visible to all projects.
- **src/**
Source files for the root-level application project.

Inside the **src/** folder, the **app/** folder contains your project's logic and data. Angular components, templates, and styles go here.
- **app/app.component.html**
Defines the HTML template associated with the root AppComponent.
- **app/app.component.css**
Defines the base CSS stylesheet for the root AppComponent.
- **app/app.module.ts**
Defines the root module, named AppModule, that tells Angular how to assemble the application. Initially declares only the AppComponent. As you add more components to the app, they must be declared here. In this file the selector component `<app-root>` contained in **src/index.html** is created.
- **src/index.html**
The main HTML page that is served when someone visits your site. The CLI automatically adds all JavaScript and CSS files when building your app, so you typically don't need to add any `<script>` or `<link>` tags here manually.

More at https://angular.io/guide/file-structure

### 9. Course Outline
Chronological order of the topics to be covered: Getting Started (done), Angular Frontend, Node.js + Express Backend, Handling Data with MongoDB, Enhancing the App, Image Upload, Data Pagination, Authentication, Authorization, Error Handling, Optimizations, Deployment.

### 10. How To Get The Most Out Of This Course
- Watch the Videos in the right order (increasing or reducing the playback speed and with pause and rewind if necessary)
- Code Along
- Use the Course Resources (Attached Code and Links)
- Ask in Q&A (and Help others in Q&A)

### 11. Section Resources
You can find the source code of each section attached to the last lecture of that section (e.g. this one for the first section). Each section contains multiple snapshots for different states of the code (as it was written throughout the section).
Resources for this lecture: **getting-started-01-finished.zip**

## Section 2: The Angular Frontend - Understanding the Basics

### 12. Module Introduction
We are going to apply the MEAN Stack on a real project: a simple posting/messaging like app starting with the Angular frontend (the Client side from of "The Big Picture").

### 13. Understanding the Folder Structure
Understand how an Angular application starts:
- `ng serve` from Visual Studio Code terminal.
- If we inspect the page served, we can see a basic html5 skeleton, some script imports and a NON default html element `<app-root>`.
- `<app-root>` contain what is inside of the app component (all the logic of app component).
- Angular thinks in components and in here we build our own components (or html elements).
- The page we loaded actually was **src/index.html** containing the `<app-root>` (the script imports are missing because they're injected).
- Our own component `<app-root>` is located in **src/app/app.component.ts** where the selector is assign.
- The CLI (running) take the code, bundle it up, adds all the Angular logic (from the framework) to it and creates a bunch of script files loaded in memory for development and injects these script imports into the **src/index.html** file.
- The logic for the swap between the `<app-root>` tag and the components is defined in the app module **src/app/app.module.ts** (it defines the features our Angular application has). Note that Angular thinks in applications and applications are split up in modules, and that modules defines the building blocks of our application. Components are the most important building block of an Angular application.
- In the app module we are declaring the app component, this is registering it with Angular (so now Angular is aware of the app component).
- We can use this declared component only in other Angular components, not in the **src/index.html** file.
- The last point is allowed by adding the component to the bootstrap array.
- The Angular application is started by the **src/main.ts** file (executed first) `platformBrowserDynamic().bootstrapModule(AppModule)`.

### 14. Understanding Angular Components
With the Angular components logic you essentially compose an entire page of components, the advantage is that you have small, easily to maintain and manage building blocks for your UI which you can reuse. A granular example of the use of components could be: `<app-header>` that contain `<app-nav-items>` and `<app-nav-search>`.

### 15. Adding our First Component
We don't want to handle all the logic of our app in one component only because that would quickly explode in size.
- Go to **src/app/** and add a new subfolder (ex. "posts")
- Components are made of different files (template for the html code, css fot the styling, typescript for the logic)
- Create a new subfolder **src/app/posts/post-create**
- Add **post-create.component.ts** inside the new folder just created
- Add **post-create.component.html** inside the new folder just created
- Inside **post-create.component.ts** create a new class and turn it into a component by adding a decorator to it "@"
```
import { Component } from '@angular/core';

@Component({})
export class PostCreateComponent {}
```
- The component decorator takes some configuration in the form of a js object which we pass to it, like a template
`template: '<h1>Text</h1>'`
- We use **templateUrl** and **selector** obtaining this code
```
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
```
- We now add some html in the **post-create.component.html** for test
- We can now go to **src/app/app.component.html** and add `<app-post-create></app-post-create>`
- For let Angular know that new element we need to register it going to **src/app/app.module.ts**. Import **PostCreateComponent** using `import { PostCreateComponent } from './posts/post-create/post-create.component'` and store that in the declarations array
```
  declarations: [
    AppComponent,
    PostCreateComponent
  ],
```

When adding a new file to the project be sure to set the right **encoding** and **line ending**! From there please follow this best practices https://angular.io/guide/styleguide for Angular.

### 16. Listening to Events
Let's edit **src/app/posts/post-create.component.html** adding a text area `<textarea rows="6"></textarea>` and a button `<button>Save Post</button>`. Now we need a click listener, so we can use a feature called event binding which allows us to listen to events in a declarative way, which means instead of using js we would add some not default html to the template like that `<button (click)="onAddPost()">Save Post</button>` and passing the name of a method defined in the component class. We can go to **post-create.component.html** and add the new function:
```
export class PostCreateComponent {
  onAddPost() {
    alert('Post added!');
  }
}
```

### 17. Outputting Content
Before fetching the user input, let's output some dummy content. We need to set some content and a place to store it. Storing content is a property, basically a variable in a class. Therefore, we are going to edit **src/app/posts/post-create.component.html**
```
export class PostCreateComponent {
  newPost = '';

  onAddPost() {
    this.newPost = 'The user\'s post';
  }
}
```
To output the post, we need to add the output hooks directly in the html template file using the string interpolation obtaining `<p>{{ newPost }}</p>`. If we now want to pre-populate the text area with some dummy starting text we can use the "value" property. Because the text area is an input element with a special property, we can bind content to it in this way `<textarea rows="6" [value]="newPost"></textarea>` by directly target properties of the underlying objects of the html elements. Note that the value is not normal text but actually typescript code.

### 18. Getting User Input
We can use a feature called local reference for get the user input by adding a marker to any html element we want `<textarea rows="6" [value]="newPost" #postInput></textarea>`, this new added mark create a reference to the element which you can use in the template `<button (click)="onAddPost(postInput)">Save Post</button>`. Now we can edit **src/app/posts/post-create.component.ts** so that we can use the user input:
```
export class PostCreateComponent {
  newPost = '';

  onAddPost(postInput: HTMLTextAreaElement) {
    console.dir(postInput);
    this.newPost = postInput.value;
  }
}
```
Another feature Angular offer for get input is called two-way binding that combines the setting and reading of a value using a directive. A directive is an instruction you place on an html element in this way `<textarea rows="6" [(ngModel)]="enteredValue"></textarea>`. Now we can change "onAddPost":
```
export class PostCreateComponent {
  newPost = '';
  enteredValue = '';

  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
```
In addition, modify the function call with an empty parameter.

For use "ngModel" we need to include another module in **src/app/app.module.ts** by `import { FormsModule } from '@angular/forms'` and adding it on the "imports" array:
```
imports: [
  BrowserModule,
  FormsModule
],
```

### 19. Installing Angular Material
For the styling we are going to use [Angular Material](https://material.angular.io/), a package that give us a set of pre-built Angular components. Run `ng add @angular/material` for install and configure the project to include the material package. If we now go to the **package.json** file, we can see two new dependencies: ""@angular/material" and "@angular/cdk"; on **angular.json** a new "styles" theme appear. At the end, if we go to **src/app/app.module.ts** we can also see an import for the "animations". Check the console log for all the UPDATE made.

Now we can go to https://material.angular.io/components/categories and search for some components to add in our project by unlocking their use going to **src/app/app.module.ts** and adding `import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material'` (also on the imports array). Let's make a new file **src/app/posts/post-create.component.css**, import it on **src/app/posts/post-create.component.ts** using `styleUrls: ['./post-create.component.css']` on the @Component({...}) and edit the styling file like this:
```
mat-card {
  width: 80%;
  margin: auto;
}

mat-form-field,
textarea {
  width: 100%;
}
```
We can now edit **src/app/posts/post-create.component.html** in this way:
```
<mat-card>
  <mat-form-field>
    <textarea matInput rows="6" [(ngModel)]="enteredValue"></textarea>
  </mat-form-field>
  <button
    mat-raised-button
    color="primary"
    (click)="onAddPost()">Save Post</button>
</mat-card>
<p>{{ newPost }}</p>
```

### 20. Adding a Toolbar
Let's create a new component for add a toolbar. In **src/app/app.module.ts** we need to unlock another component provided by Angular Material by importing it:
```
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';
```
And adding it on the "imports" array:
```
imports: [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
],
```
Now that we have the [MatToolbarModule](https://material.angular.io/components/toolbar/overview), add a new folder **src/app/header** and all the components in it:
- **src/app/header/header.component.html**
```
<mat-toolbar color="primary">MyMessages</mat-toolbar>
```
- **src/app/header/header.component.ts**
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {}
```
Remember to add **HeaderComponent** in **src/app/app.module.ts** by modifying the "declarations" array, the IDE will automatically add `import { HeaderComponent } from './header/header.component'`.

Now we can add `<app-header></app-header>` on the top of the **src/app/app.component.html** file. For a better styling, we can wrap our main content with the main element:
```
<main>
  <app-post-create></app-post-create>
</main>
```
And change **src/app/app.component.css** in this way:
```
main {
  margin-top: 1rem;
}
```

### 21. Outputting Posts
For manage the output of the post we are going to make another component because we want to be granular. We want to use the [Expansion Panel](https://material.angular.io/components/expansion/overview) feature, so we need to add **MatExpansionModule** in the **src/app/app.module.ts** file with an import and adding it to the "imports" array. Let's now add a new folder **src/app/posts/post-list** and create all the components in it:
- **src/app/posts/post-list/post-list.component.ts**
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {title: 'First Post', content: 'This is the first post\'s content'},
    {title: 'Second Post', content: 'This is the second post\'s content'},
    {title: 'Third Post', content: 'This is the third post\'s content'}
  ];
}
```
Now add **PostListComponent** in **src/app/app.module.ts** and insert `<app-post-list></app-post-list>` at the bottom of the `<main>` tag of the **src/app/app.component.html** file.
- **src/app/posts/post-list/post-list.component.html**
```
<mat-accordion>
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      The expansion title!
    </mat-expansion-panel-header>
    <p>I'm in an expansion panel!</p>
  </mat-expansion-panel>
</mat-accordion>
```
- **src/app/posts/post-list/post-list.component.css**
```
:host {
  display: block;
  margin-top: 1rem;
}
```
Delete the styling about `<mat-card>` in **src/app/posts/post-create/post-create.component.css** and change **src/app/app.component.css** in this way:
```
main {
  margin-top: 1rem;
  width: 80%;
  margin: auto;
}
```

### 22. Diving Into Structural Directives
For avoiding hardcoding, we are now going to edit **src/app/posts/post-list/post-list.component.html** using structural directive, so that we can loop our content and create as many panels as required. Angular ships with directives which are instructions you place on element and they can change the rendered html code. The **ngFor** helper allows you to repeat an element as often as required:
```
<mat-accordion multi="true">
  <mat-expansion-panel *ngFor="let post of posts">
    <mat-expansion-panel-header>
      {{ post.title }}
    </mat-expansion-panel-header>
    <p>{{ post.content }}</p>
  </mat-expansion-panel>
</mat-accordion>
```

Now we are going to move from our static dummy data inside **src/app/posts/post-list/post-list.component.ts** by commenting the existing array (Ctrl+K Ctrl+C) and adding a placeholder:
```
export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post\'s content'},
  //   {title: 'Second Post', content: 'This is the second post\'s content'},
  //   {title: 'Third Post', content: 'This is the third post\'s content'}
  // ];
  posts = [];
}
```
And back to the template (with some [css](https://material.angular.io/guide/typography)):
```
<mat-accordion multi="true" *ngIf="posts.length > 0">
  <mat-expansion-panel *ngFor="let post of posts">
    <mat-expansion-panel-header>
      {{ post.title }}
    </mat-expansion-panel-header>
    <p>{{ post.content }}</p>
  </mat-expansion-panel>
</mat-accordion>
<p class="info-text mat-body-1" *ngIf="posts.length <= 0">No posts added yet!</p>

```
Adding the style here **src/app/posts/post-list/post-list.component.css**:
```
.info-text {
  text-align: center;
}
```

### 23. Creating Posts with Property & Event Binding
Let's add one more input field in our **src/app/posts/post-create.component.html** file:
```
<mat-card>
  <mat-form-field>
    <input matInput type="text" [(ngModel)]="enteredTitle">
  </mat-form-field>
  <mat-form-field>
    <textarea matInput rows="6" [(ngModel)]="enteredContent"></textarea>
  </mat-form-field>
  <button
    mat-raised-button
    color="primary"
    (click)="onAddPost()">Save Post</button>
</mat-card>
```
And change **src/app/posts/post-create.component.ts**:
```
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
  }
}
```
So now, for get this values in others components (like **post-list**), we need to emit our own event adding `import { Component, EventEmitter, Output } from '@angular/core'` (the event emitter) in **src/app/posts/post-create.component.ts** and change **PostCreateComponent**:
```
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
}
```
We now have to make Angular aware that **postCreated** is an event to which you can listen from the outside, by adding a decorator `@Output() postCreated = new EventEmitter()`. We can now change **src/app/app.component.ts** like this:
```
export class AppComponent {
  storedPosts = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
```
And **src/app/app.component.html** like this:
```
<app-header></app-header>
<main>
  <app-post-create (postCreated)="onPostAdded($event)"></app-post-create>
  <app-post-list [posts]="storedPosts"></app-post-list>
</main>
```
So that we can edit the **src/app/posts/post-list/post-list.component.ts** file:
```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts = [];
}
```
Note the import of **Input**.

### 24. Creating a Post Model
We are going to make a little optimization. Posts are used in different places (list in **app.component**, outputting in **post-list.component**, and creation in **post-create.component**), because of they have the same structure we can use "models" that are blueprints that define how a post look like in our Angular application. Let's go in the **posts** folder and add a new file **src/app/posts/post.model.ts**, in there we can use a typescript feature called interface: it's like a class that defines how an object looks like but it can't be instantiated. We can now define some fields and methods in this way:
```
export interface Post {
  title: string;
  content: string;
}
```
Now we can import this model in all the files where posts are used.
- **src/app/app.component.ts**
```
import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post[] = [];

  onPostAdded(post: Post) {
    this.storedPosts.push(post);
  }
}
```
- **src/app/posts/post-list/post-list.component.ts**
```
import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts: Post[] = [];
}
```
- **src/app/posts/post-create.component.ts**
```
import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
}
```

### 25. Adding Forms
It's time for one other improvement, we want to switch between using two-way binding to form for creating a post. Let's edit **src/app/posts/post-create/post-create.component.html** by adding a form element and using **ngModel** as a directive without any bindings; this will register an input as a control to the "behind the scene" form. Angular need to know how to name the inputs and it use the **name** attribute. Now when we click the button, we don't want to call `onAddPost()` manually anymore, instead we will set this button to be type submit (note that we are in a form now). Submitting trigger a special event we can listen to, and there we can execute `onAddPost()`.
```
<mat-card>
  <form (submit)="onAddPost()">
    <mat-form-field>
      <input
        matInput
        type="text"
        name="title"
        ngModel>
    </mat-form-field>
    <mat-form-field>
      <textarea
        matInput
        rows="4"
        name="content"
        ngModel></textarea>
    </mat-form-field>
    <button
      mat-raised-button
      color="primary"
      type="submit">Save Post</button>
  </form>
</mat-card>
```
Now we need to get access to the values inside of that form and this can be done with the help of a local reference:
```
<form (submit)="onAddPost()" #postForm="ngForm">
```
This syntax gives us access to this object, so now *postForm* gives us access to that Angular form object and we can pass it as an argument to `onAddPost()` so that we now know that we received the form which actually is of type ngForm.
```
<form (submit)="onAddPost(postForm)" #postForm="ngForm">
```
We can now also edit **onAddPost** in **src/app/posts/post-create/post-create.component.ts** by specify the type of the passed argument.
```
onAddPost(form: NgForm) { ... }
```
And adding `import { NgForm } from '@angular/forms'`. **NgForm** now holds a lot of information about the form: if it's valid, it gives access to the values using the **value** property:
```
const post: Post = {
  title: form.value.title,
  content: form.value.content
};
```
Obviously now it's possible to enter invalid content. We can easily add validation by adding some default [HTML5 validators](https://www.w3schools.com/html/html_form_attributes.asp) to our inputs in the **post-create.component.html**.
```
<mat-card>
  <form (submit)="onAddPost(postForm)" #postForm="ngForm">
    <mat-form-field>
      <input
        matInput
        type="text"
        name="title"
        ngModel
        required
        minlength="3">
    </mat-form-field>
    <mat-form-field>
      <textarea
        matInput
        rows="4"
        name="content"
        ngModel
        required></textarea>
    </mat-form-field>
    <button
      mat-raised-button
      color="primary"
      type="submit">Save Post</button>
  </form>
</mat-card>
```
Now edit the logic on **post-create.component.ts**, like this:
```
onAddPost(form: NgForm) {
  if (form.invalid) {
    return;
  }
  const post: Post = {
    title: form.value.title,
    content: form.value.content
  };
  this.postCreated.emit(post);
}
```
At the end we can also add some error messages. If we go to the Angular Material website we can find the [Form field section](https://material.angular.io/components/form-field/overview#error-messages) and we can take some code regarding the **Error messages**. There are a special `<mat-error>` component that we can add below the input, and we can configure that using some local references:
```
<mat-form-field>
  <input
    matInput
    type="text"
    name="title"
    ngModel
    required
    minlength="3"
    #title="ngModel">
  <mat-error *ngIf="title.invalid">Please enter a valid post title.</mat-error>
</mat-form-field>
```

### 26. Getting Posts from Post-Create to Post-List
It would be nice if we had an easier way of passing data around. We will now use a service for this purpose. A service is a class which you add to your angular application, which you let inject by angular into components and which is able to centralize some tasks and provide easy access to data from within different components without property and event binding.

We will create a posts service in the posts folder by creating a new file **src/app/posts/posts.service.ts**. A service is just a typescript class, in which we will store a list of posts in an array. We want to turn this into a **private** property so that this posts service if we add it to another file can't access posts, and we will create a new method **getPosts()** which allows someone who's interested to retrieve posts.
```
import { Post } from './post.model';

export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts];
  }
}
```
We have used a TypeScript and next gen JavaScript feature called [spread operator](https://en.wikipedia.org/wiki/JavaScript_syntax#Spread/rest_operator) for returning a reference type, so a new array is created with the old objects and this array has been copied and returned.

We also want to add post using an **addPost()** method:
```
addPost(newTitle: string, newContent: string) {
  const post: Post = {title: newTitle, content: newContent};
  this.posts.push(post);
}
```
Now we could use this service from both the post list component and the post create component without having to pass data around with property and event binding. For this we just need to get this service into these components and this is done with a feature called dependency injection. We will edit **src/app/posts/post-list/post-list.component.ts** adding a **constructor** that is simply a function which is called whenever Angular creates a new instance of this component, and here you can expect arguments but since Angular is the one creating new instances of the component, Angular has to give you these arguments and Angular has a complex dependency injection system which is able to actually find out what you wanted and indeed give you that.
```
import { Component, Input } from '@angular/core';

import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts: Post[] = [];

  constructor(public postsService: PostsService) {}
}
```
The last thing to do is make Angular aware of the posts service and there two ways of doing that:
1) Go to **src/app/app.module.ts** and add `providers: [PostsService]` and the `import { PostsService } from './posts/post.service'`.
2) Go to **src/app/posts/posts.service.ts** and add `@Injectable({providedIn: 'root'})` and the `import { Injectable } from '@angular/core';`.

### 27. Calling GET Post
For reach out our service and call **getPosts()** we will not use the constructor, it's a better practice to use a special lifecycle hook Angular provides called **OnInit**. Let's edit **src/app/posts/post-list/post-list.component.ts** in this way:
```
import { Component, OnInit } from '@angular/core';

import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }
}
```
So **ngOnInit** is a function Angular will automatically execute for us when it creates **PostListComponent** and it's recommended to do basic initialization tasks.

Of course our posts are empty at the beginning though so we'll need to add posts. Let's go to **src/app/posts/post-create/post-create.component.ts** and there, we also want to connect to our service, so we'll add our constructor here too so that now posts service is injected here too. Now here we want to reach out to the posts service not on **ngOnInit** but when we created a new post. Instead of emitting, we will now simply call **addPost** like this:
```
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
  }
}
```
If we try now to add a post nothing happens because **addPost** affect a copy of an empty array (not the original data).

Let's cleanup some code!
1) Go to **src/app/app.component.html** and remove the bindings, so that we have:
```
<app-header></app-header>
<main>
  <app-post-create></app-post-create>
  <app-post-list></app-post-list>
</main>
```
2) Go to **src/app/app.component.ts** and remove the bindings, so that we have:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
```

In **post.service.ts** we want to maintain a copy of **posts** for avoid unwanted manipulation of the posts in any component which is fetching our data. So a better way is to use an event-driven approach where we actively push the information about new posts being available to the components which are interested and for that we could use the event emitter. But the event emitter is really meant to be used in conjunction with that @output decorator, instead we will use a feature provided by another package which is not part of Angular but a core dependency, the **rxjs**. Rxjs is all about **observables** and this is a concept which can be a bit more complex to grasp, it's essentially about objects that help us pass data around. So let's edit **post.service.ts** like this:
```
// import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

// @Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostsUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(newTitle: string, newContent: string) {
    const post: Post = {title: newTitle, content: newContent};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
```
We can now go to **src/app/posts/post-list/post-list.component.ts** and set up a listener to that subject using **subscribe** with a function which is called whenever a new value is received. One important thing is that this subscription actually doesn't cancel whenever this component is teared down, so we need to use **OnDestroy** and **unsubscribe** for avoid memory leak.
```
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostsUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
```
So now we are using services.

### 28. More About Observables
Observable it's all about us emitting data and listening to that data in different places of our application which makes it pretty helpful because we can well subscribe to certain updates, changes and push these changes from a totally different place.

So we typically think in **observables** and **observers**, the observer is essentially the thing subscribing to an observable or the thing which establishes the subscription and manages it. There are three methods which are called on the observers side and that's **next()**, **error()** and **complete()**.

A typical example is an observable that wraps a callback of an Http request, so we could wrap a normal XML Http request and Ajax request with an observable that basically takes that callback and whenever that request gives us back a response, we instead use that observable to emit the response data or a possible error as a next or error message. as I said it could also fail and that is how we could manage such a Http request. Now in our app, we didn't manage an Http request though, we managed a **subject** or our own event emitter therefore. Now a subject is really just a special kind of observable, a normal observable is kind of passive, you wrap a callback or an event source like a click listener with it. So you don't actively trigger when a new data package is emitted, that happens when your Http requests gets a response or when the user clicks something, instead you just set up this listener and then you can subscribe to it. A subject is more active, we also subscribe to a subject but there we can manually call next and that makes it a perfect event emitter because we cannot just subscribe and wait for something which we can't directly influence instead we can directly influence when a new data package is emitted and that's exactly what we need in our application.

So in general, you can think of observables and therefore also subjects as streams of data or of values, so we've got one value and we can have more values which are emitted over time depending on the observable and the data source it covers. Then we have the observer, so that's essentially this set of functions we can call, next, error and complete and for a normal value, we typically would call next and if we have an observable that wraps something like a Http request, then it would do that for us; we can have more than one value over the course of our application, that depends on how we were using that observable.

### 29. Working on our Form
Let's do some polishing to our app.
1) Add some labels. Go to **src/app/posts/post-create/post-create.component.html** then add `placeholder="Post Title"` and `placeholder="Post Content"`.
2) Clean the values stick in the form by going to **src/app/posts/post-create/post-create.component.ts** and adding `form.resetForm();` at the end of **onAddPost(form: NgForm)**.
3) Add the functionality of **Edit** and **Delete** posts using [Action bar](https://material.angular.io/components/expansion/overview#action-bar). Let's edit **post-list.component.html** like this:
```
<mat-accordion multi="true" *ngIf="posts.length > 0">
  <mat-expansion-panel *ngFor="let post of posts">
    <mat-expansion-panel-header>
      {{ post.title }}
    </mat-expansion-panel-header>
    <p>{{ post.content }}</p>
    <mat-action-row>
      <button mat-button color="primary">EDIT</button>
      <button mat-button color="warn">DELETE</button>
    </mat-action-row>
  </mat-expansion-panel>
</mat-accordion>
<p class="info-text mat-body-1" *ngIf="posts.length <= 0">No posts added yet!</p>
```

### 30. Section Resources
- Learn everything about Angular: https://academind.com/learn/angular
- Angular Material Tutorial: https://academind.com/learn/angular/angular-material-a-thorough-guide/
- Angular Material Docs: https://material.angular.io/
- Reference vs Primitive Types in JS: https://academind.com/learn/javascript/reference-vs-primitive-values/
- RxJS Tutorial: https://academind.com/learn/javascript/understanding-rxjs/

Resources for this lecture:
- **angular-01-basic-list-added.zip**
- **angular-02-added-post-form.zip**
- **angular-03-finished.zip**

## Section 3: Adding NodeJS to our Project

### 31. Module Introduction
In this module we will cover **Express.js:** and **Node.js:**. Node is a JavaScript runtime that runs on the server, so that means we can execute JavaScript code with some extra features and some missing features compared to the browser JavaScript version but in general still JavaScript, we can execute that on the server. Express is a framework building up on Node, so we use it to make Node development easier, to get a couple of tools out of the box and we don't have to reinvent the wheel for everything we want to add to our backend.

### 32. Connecting Node & Angular - Theory
Now thus far, we always already started a server with **ngServe** that, behind the scenes, actually uses a Node development server. It means it's a server aimed at Angular development, it's not a production ready server and it certainly doesn't contain any of the logic we want to add to our server side, it also doesn't give us an entry point to add such logic, it's really just a server that returns the Angular app and that also has useful features like auto-restart whenever we have a new Angular app version.

We've got two ways of connecting a Node and Angular backend:

1) The first approach we can take is that we have a Node Express application that serves the Angular single page application as part of it. It contains our other server side logic but it also has a certain path, so a url endpoint to which we can send a request where it will return that Angular single page application.
**Node App Serves Angular SPA** (Single Page Application)
- Node (Express) handles incoming requests
- Requests targeting "/" path return Angular SPA

2) The alternative is that we have two separate servers, our Node Express server for our business logic, for the authentication, for the data storage and then we have a separate static host which only returns our Angular single page application.
**Two Separate Servers**
- Node (Express) handles incoming requests
- Angular SPA served from separate static host

In both cases, we got **logically separated apps** though, so even if we use one and the same Node server for serving both the Angular app and hosting our core business logic, we actually have separated apps in a sense of Angular handles the UI and sends background requests and Node Express handles these background requests and does something with them.

### 33. What is a RESTful API?
Rest stands for **RE**presentational **S**tate **T**ransfer, that in the end is a server side app, so we have the server and we have the client (the browser). Now in our case, the Angular app is going to run on the client and the Angular app is going to send these background **requests**. The server has to send back **responses** which you can then use in the Angular app. We need to consider a real scenario where we could have different **Clients**, like:
- Mobile App that **Stores** and **Fetches** Data but doesn't use/render HTML
- Code that want to **access** third-party features
- Browser w/SPA that **Stores** and **Fetches** Data but never renders a second HTML page

A restful API is a stateless backend, it doesn't care about which client connected to it, all a restful API does is it exposes a couple of different Urls, so-called paths to which you can send requests and depending to which **path** you send to a request, something different will happen. Now we also need to care about the data we send and there it's important to understand that we communicate with **Json data** that is a data format which looks very much like JavaScript objects which is very small but yet understandable and machine readable and which allows us to exchange data.

### 34. Adding the Node Backend
We could create a totally new project because we will start with the "separated solution". So let's start by creating a different folder: **backend/** in the same root of **src/**. Now we will create a single JavaScript file which will be our server. Let's make **server.js** and edit it like this:
```
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('This is my first response')
});

server.listen(process.env.PORT || 3000);
```
Note that **req** and **res** are two arguments which will be passed in by Node.js (the request and the response object), these offer data and utility methods that allow us to work with requests and responses. The response has a couple of methods and one of them is the **end** method, this can be used to end writing to the response stream because we can actually write more. Now if we open a new terminal window, we can execute **server.js** with Node by using `node server.js` and see on the browser at **localhost:3000** "This is my first response" using the port **3000**.

If we change something on our server side code, we need to quit running server with "Control + C" and restart it, only then our code changes will take effect.

### 35. Adding the Express Framework
For install Express.js we need to run `npm install --save express` with **--save** to store an entry in the package.json file Express. Now we will add the Express app and all the files that belong to it in the **backend** folder by adding an **backend/app.js** file. This app.js file will hold the Express app which is still a Node.js server side app, just well taking advantage of these Express features. Let's edit the file:
```
const express = require('express');
const app = express();
```
This app can now be used and the important thing about an Express app is it actually is just a big chain of **middlewares** we apply to the incoming requests, so like a funnel through which we send that Express and every part of that funnel or in that funnel we have different parts and every part can do something with the request, manipulate it, read values from it or do something with the response like send a response.
```
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('First middleware passed');
  next();
});

app.use((req, res, next) => {
  res.send('Inside the second middleware');
});

module.exports = app;
```
The **use** function here in its simplest form takes a function which is executed for an incoming request and that function takes three arguments, **request** and **response** just like Node.js did but also a **next** function. This next function has one important purpose, if we execute it, the request will actually continue its journey. Note that **send** will also implicitly end the response writing stream and will simply just well return that response and set the right headers, so everything for us. To wire up this Express app with our **server.js** where we of course are listening to incoming requests. To export this app we use `module.exports` as **app** for value object. Now we just need to import it in **server.js** like this:
```
const http = require('http');
const app = require('./backend/app');

const port = process.env.PORT || 3000;

app.set('port', port);
const server = http.createServer(app);

server.listen(port);
```
We used **set** to set a configuration for our Express environment and we want to set the configuration for the "port" key, a reserved key Express knows and there we will set this port constant.

### 36. Improving the server.js Code
We are going to improve the **server.js** file, simply to add some error handling and better output. Now we have this **normalizePort** function, that simply makes sure that when we try to set up a port and especially when we receive it through an environment variable, we actually make sure it's a valid number. Then we got an **onError** function which will check which type of error occurred, log something different and exit gracefully from our Node.js server. We've got **onListening**,
another function which is stored in a constant, where we essentially just output or where we log that we are now listening to incoming requests.
```
const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
```
What we needed to do if we hadn't quit the server already, we would need to quit and restart to see that in action. Now constantly being required to quit the server and restart it will become annoying, so we will install an extra package which we can use during development which makes it a bit easier. Run `npm install --save-dev nodemon` for install a powerful tool which watch our Node.js file or our JavaScript files in general and if we change one of them, it will automatically restart the Node server for us. Now go to **package.json** and register a new script with **nodemon** that is a local dependency of our project:
```
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "start:server": "nodemon server.js"
  },
```
Now in the console we can run `npm run start:server`.

### 37. Fetching Initial Posts
We want to be able to get **dummy posts** (because we have no database now) in Json data format from our Node backend and fetch that posts. So let's add all the other code to our Express app because this is the tool we want to use for creating routes that makes it so much easier. Add a new **path** called "/api/posts" to **backend/app.js**:
```
const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "fsd23f23f2",
      title: "First serer-side post",
      content: "This is coming from the server"
    },
    {
      id: "jgefrg3242",
      title: "Second serer-side post",
      content: "This is coming from the server too"
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
```
We have sent a more complex objects on `res.json` rather than only send `res.json(posts)` we have also added a message and a **200** success code. If we noe go to **http://localhost:3000/api/posts** we should see our Json data as text.

### 38. Using the Angular HTTP Client
Angular has a built-in HTTP client. To use that client, we need to unlock it in the app module **src/app/app.module.ts** by adding `import { HttpClientModule } from "@angular/common/http"` and `HttpClientModule` in the "imports" array.

Let's go to **src/app/posts/post.service.ts** and edit **getPosts()** so that we reach out to our backend, fetch the posts, store them in the "posts" variable and then fire the update listener to inform everyone interested in our app, that we got new posts.
```
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Post } from './post.model';

export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostsUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(newTitle: string, newContent: string) {
    const post: Post = {id: null, title: newTitle, content: newContent};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
```
We have injected the HTTP client into the service; then on **getPosts()** to listen we had subscribed and we don't need to store that subscription and unsubscribe from it in ngOnDestroy because for observables connected to features built into Angular this un-subscription will be handled for us by Angular.

Now we have to change the call of **getPosts()** in **src/app/posts/post-list/post.list.component.ts** from `this.posts = this.postsService.getPosts()` to `this.postsService.getPosts()`.

### 39. Understanding CORS
CORS stands for **C**ross-**O**rigin **R**esource **S**haring. We have a separated server and client on different domains,localhost:3000 for the server, localhost:4200 for our Angular app so if the client request is coming from a different address, this will give us a so-called CORS error. In our behavior we want to expose our server API to all possible clients and naturally, they will not run on our server. For disable this default mechanism we need to set the right **headers** on the server side response inside the **app.js** file adding one additional middleware at the beginning:
```
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
```

### 40. Adding the POST Backend Point
Post **requests** have a request body, for get access to the posts sent with the request we can install an extra package which adds a convenience middleware that we can plug into our Express app; it will automatically extract incoming request data and add it as a new field to that request. Let's install a Node Express package using the console: `npm install --save body-parser`. **Body parser** parses incoming request bodies, extracts the request data and then re-adds it on a special property to a request object.

Now we can edit **app.js** by using **app.post** so that all incoming post requests on our server (or reaching our server) will be handled by that middleware. We don't have a database yet but we can check if getting the data to that route works.
At the start of the file:
```
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
```
Then:
```
app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully!'
  });
});
```
We have also call **res** and then set a status code with the status function of 201, that is a typical [status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) for everything is ok, a new resource was created.

### 41. Adding Angular
In **src/app/posts/post-create/post-create.component.ts** we triggered that **addPost** method so it's in that method that we should send our request. Let's edit **addPost** in **post.service.ts** in this way:
```
  addPost(newTitle: string, newContent: string) {
    const post: Post = {id: null, title: newTitle, content: newContent};
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
```
Note that we have moved the optimistic updating inside the subscribe method because it will execute asynchronously only once we got a success response (the first argument is only called for success responses).

### 42. Section Resources
- Learn Node + Express from Scratch (for free!): https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs
- Creating a REST API with Node + Express (+ MongoDB): https://academind.com/learn/node-js/building-a-restful-api-with/

Resources for this lecture:
- **node-01-added-basic-server.zip**
- **node-02-added-basic-route.zip**
- **node-03-added-express routes.zip**
- **node-04-finished.zip**

## Section 4: Working with MongoDB

### 43. Module Introduction
Because we're not storing any data on our server we now need to persist data on the server so that our users can load that data whenever they come back to our webpage even if they come back to it from different machines.

### 44. What is MongoDB?
MongoDB is a NoSQL Database which stores "Documents" in "Collections" (instead of "Records" in "Tables" as in SQL). We can **Store Application Data** (User, Products, ...), it **Enforces no Data Schema or Relations** so the individual records can actually be structured how we want and whilst we can add some type of relations (relations play less of a role than they do in SQL), and it's **Easily connected to Node/Express**. Overall MongoDB is a powerful Database which can easily be integrated into a Node/Express Environment.

### 45. Comparing SQL & NoSQL
**NoSQL**
- Some example are: MongoDB, CouchDB.
- Enforces no Data Schema, so in one collection we can have records with different structures. One advantage of that is for example if our application changes and we want to store the old information but additional fields, we can do that in the same collection as before and some older records will simply not have the new fields.
- Less Focused on Relations, we can still create relations by storing the ID of one document in another document but they play less of a role than they do in SQL.
- "Independent Documents"
- Great for: Logs, Orders, (Chat) Messages. NoSQL is therefore great for data where the structure might vary, where we have a lot of throughput because it's very fast to query because we have less relations where we need to do complex queries, instead you typically query for one collection, just a bunch of documents without creating all these queries and these joins, there are no such joins in NoSQL.

**SQL**
- Some example are: MySQL, MS SQL.
- Enforces a Strict Data Schema, we typically have a more strict data schema and all records in a table have to have the same look and the same schema.
- Relations are a Core Feature, it's all about having normalized data tables where one table stores the users, the next table stores the orders, etc.
- Records are Related
- Great for: Shopping Carts, Contacts, Networks.

We will use MongoDB simply because the MEAN Stack turns out to work together really well, it's fun to query NoSQL data with JavaScript and with Angular therefore because it happens to be stored in a structure that looks and feels like Json. Additionally a lot of MEAN Stack apps are apps where we might end up with a lot of read actions, so often a NoSQL database is a great solution there.

### 46. Connecting Angular to a Database
Why don't we connect Angular to the database directly without sending a http request to Node? We technically could directly send queries to the database from our Angular app and surpass our Node Express application but **it's highly insecure because secure authentication is not really possible**. We have to authenticate to the database and that is done through credentials which we would have to store in Angular code; that code is compiled to JavaScript and it's loaded into the browser so every user of our webpage can access that information hence we shouldn't store credentials in there and we would have no way of storing these securely. **Our full databases would be exposed**, so users can probably then do more than we want them to do and therefore directly connecting Angular to MongoDB is not a good idea.

### 47. Setting Up MongoDB
Let's go to [mongodb.com](https://www.mongodb.com/), we have two options:
- We can download MongoDB onto our local machine and set it up there by going in the [Community Server](https://www.mongodb.com/download-center/community) section.
- Or we can use a cloud hosted solution. There is a free [Sandbox](https://www.mongodb.com/download-center/cloud) available, after the registration we can **sign in** so that we can create a new project or at least have the option to click "Build a New Cluster". We can basically always select the option with a free tier available, for example "AWS" etc. One we are done, we can "ADD NEW USER" by filling the **username** field and autogenerate the **password**. At the end we also want to add an **IP whitelist** by "ADD IP ADDRESS" using our IP address so that only requests from that IP will be able to access the database.

### 48. Using MongoDB Atlas & IP Whitelist
By selecting the "Free Sandbox" in the previous chapter, we're using **MongoDB Atlas** (https://www.mongodb.com/cloud/atlas), a hosted MongoDB cluster. There, we added our local IP to the "IP Whitelist". **One important note on that**: if we're away from the project for a couple of days (or maybe even after one day), we might've received a new local IP by our internet provider. Hence we **should update that "IP Whitelist" if we're facing any connection issues!**

### 49. Adding Mongoose
We now need a way to connect to the database from within our Node Express application. There are two third party packages we could use: the normal **MongoDB client package** (we can find all the documentation inside the "DRIVERS" section of the [official website](https://docs.mongodb.com/ecosystem/drivers/node/)) or **Mongoose**, a package which builds up on the official MongoDB driver but it makes accessing MongoDB much easier and more convenient.
[Mongoose](https://mongoosejs.com/) uses schemas, so we can define how our data should look like and that allows us to conveniently store and fetch data. The command for install Mongoose is `npm install --save mongoose`, this this tool will allow us to connect to our MongoDB server and also to interact with it, store data and fetch data.

### 50. Understanding Mongoose Schemas & Models
If we go on **src/app/posts/post.model.ts** we can find how a post looks like, so we can focus on creating these schemas on the backend and for that, we'll create a new folder **backend/models**. "Model", "Schema", we'll basically use that interchangeably here though actually, Mongoose will differentiate between these two terms. So in the "models" folder, we'll add a new file **backend/models/post.js** because here we want to create our post model. Now we can create a new blueprint using the "**Schema**" method passing a JavaScript object that hold our custom configuration:
```
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true }
});

module.exports = mongoose.model('Post', postSchema);
```
We have defined the fields and the types of data to store with some specific metadata details thanks to Mongoose. There is a [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) section dedicated on the official Mongoose website. At the end, in order to actually create data or create models objects based on the created schema, we need to turn that definition into a model and we do that by using the Mongoose "**model**" function.

### 51. Creating a POST Instance
With our post schema and model created, we can create a JavaScript objects based on that model. First of all we need to import `const Post = require('./models/post')` inside **backend/app.js** so that now we can use the **Post** constant in our posts route to create a new post based on our body data:
```
app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully!'
  });
});
```

### 52. Connecting our Node Express App to MongoDB
If we go to https://cloud.mongodb.com we can find the option to "CONNECT" to our MongoDB cluster. Select "Connect Your Application" and "COPY" the **SRV address**. Now in the **backend/app.js** file import `const mongoose = require('mongoose')` and then, just after we created the app (`const app = express()`), we can run `mongoose.connect("")` with the **SRV address** as the first argument (replacing the "password") and returning a promise:
```
mongoose.connect("mongodb+srv://test:kv96duDAeaOWH3ck@cluster0-msahh.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });
```

### 53. Storing Data in a Database
Let's now use the post model to not just log it but to actually save that data to the database. For that we can just `post.save()`. The **save** method is provided by the Mongoose package for every model created with it. Behind the scenes Mongoose automatically creates the right query for our database to insert a new entry with that data, and that automatically generated ID, into the database. Which database is involved? In the database connection we can find a `cluster0-msahh.mongodb.net/test` so-called **test** database because what we have here is a connection to our cluster. We can override this and name it in a different way, so now it will automatically on the fly create that new database the first time we try to write to it and it will create a new post entry or document as it's called. We said that documents are stored in collections though, so what will be the name of the collection? That will always be the plural form of our model name, so if our name is post then our collection name will be all lowercase **posts**.
In order to look into our database and check if everything's working, we can connect from another source,let's go to our MongoDB cluster and connect with the **Mongo Shell**. We can now follow the instruction for download and run the client for our OS, for example with Windows at the end we can `mongo.exe "mongodb+srv://cluster0-msahh.mongodb.net/test" --username test -p kv96duDAeaOWH3ck` and interact with the database using some commands:
- For an overview of the commands that we can execute `help`
- For switch to a specific DB `use <database name>`
- For see all collections that were created in a database `show collections`
- For have a look into a collection `db.posts.find()` and this will output somethings like this `{ "_id" : ObjectId("5dc6cbaea32baa2758b69bb8"), "title" : "Another post", "content" : "It's only a test", "__v" : 0 }`

### 54. Fetching Data From a Database
Let's remove our dummy data in **backend/app.js** for returning real data. We can use the static method **find** that just (as in the shell) simply return all entries. Now, to be very precise, **find** also can be configured to narrow down the results we get but for now, let's use that approach where we get all results. Some more information are available on the [queries section](https://mongoosejs.com/docs/queries.html) of the Mongoose website.
```
app.get('/api/posts', (req, res, next) => {
  Post.find().then(documents => {
    // console.log(documents);
    res.status(200).json({
      message: 'Posts fetched successfully!',
      posts: documents
    });
  });
});
```
We have chained a **then block** which is working like a promise and can hold our results. So we put our response code into that block, that's important, we must execute it inside this **then block** because fetching that data is an **asynchronous** task so we need to wait for these documents to have arrived.

### 55. Transforming Response Data
So fetching the data from the database is working but even though we're not using the ID on the frontend yet, we'll eventually have a problem because on the frontend, we expect to have an **ID without an underscore** but what we actually store and what TypeScript doesn't know when the code gets compiled hence we don't get an error is that our backend data actually does **have an underscore**: `"_id" : ObjectId("5dc6cbaea32baa2758b69bb8")`. In **getPosts()** inside **src/app/posts/post.service.ts**, we can simply convert the data we get back from the server before we use it in **subscribe**, since the HTTP client of Angular uses observables, we also got access to the many great operators observables offer. Operators are basically functions/actions we can apply to the observable streams or to be precise, to the data we get through these streams, before the data is ultimately handled in the subscription. So we place something before subscribe but still chained to that observable chain and that something is the **pipe** method that simply allows us to add in one or multiple operators. In our case we can use the **map** operator by importing it `import { map } from 'rxjs/operators'` so that we can use it in this way:
```
getPosts() {
  this.http
  .get<{ message: string, posts: any }>(
    'http://localhost:3000/api/posts'
  )
  .pipe(map((postData) => {
    return postData.posts.map(post => {
      return {
        title: post.title,
        content: post.content,
        id: post._id
      };
    });
  }))
  .subscribe(transformedPosts => {
    this.posts = transformedPosts;
    this.postsUpdated.next([...this.posts]);
  });
}
```
Note that now in **.get** the **posts** object is of type any because it will not hold a valid post (the ID is wrong).

### 56. Deleting Documents
We are going to add a new route to **backend/app.js** called **delete** adding a dynamic path segment by using a new colon with a name "id" and this will be extracted by Express.
```
app.delete('/api/posts/:id', (req, res, next) => {
  console.log(req.params.id);
  res.status(200).json({
    message: 'Post deleted!'
  });
});
```
Now let's connect Angular to the new route by changing our "DELETE" button in **src/app/posts/post-list/post-list.component.html** adding a **click** listener like this:
```
<button mat-button color="warn" (click)="onDelete(post.id)">DELETE</button>
```
And creating the method in the TypeScript file:
```
onDelete(postId: string) {
  this.postsService.deletePost(postId);
}
```
So we need to call something in our service which sends that delete request by adding **deletePost** in **src/app/posts/post.service.ts**.
```
deletePost(postId: string) {
  this.http.delete('http://localhost:3000/api/posts/' + postId)
  .subscribe(() => {
    console.log('Deleted!');
  });
}
```
We can now finally use the post ID in the new **delete** route in **app.js** for delete an entry in the database. Mongoose offer a specific query for doing it called [deleteOne](https://mongoosejs.com/docs/api/query.html#query_Query-deleteOne):
```
app.delete('/api/posts/:id', (req, res, next) => {
  // console.log(req.params.id);
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({
      message: 'Post deleted!'
    });
  });
});
```

### 57. Updating the Frontend after Deleting Posts
What we probably want now is to remove a post from our posts in **src/app/posts/post.service.ts** and then send a new posts updated notice to the rest of our app so that our UI will be automatically updated.
```
deletePost(postId: string) {
  this.http.delete('http://localhost:3000/api/posts/' + postId)
    .subscribe(() => {
      // console.log('Deleted!');
      const updatedPosts = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
    });
}
```
**Filter** allows us to only return a subset of that posts array, we pass a function to the that method that will be executed for every post in the array and if it returns true, then this element will be kept, if it returns false then this element will not be part of the new filtered post array.

### 58. Adding Posts with an ID
When a new post is added, the ID of this new created post is "null" as we can see in **addPost** on **src/app/posts/post.service.ts**, so if we now try to delete this post we will have this call `http://localhost:3000/api/posts/null` and the Mongoose query will not work properly. For solve this problem, instead of call **getPosts** (it's redundant) we can get back the ID of the created post and use that in the **addPost** method. Let's edit **app.post** in **backend/app.js** like this:
```
app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  // console.log(post);
  post.save().then(createdPost => {
    // console.log(createdPost);
    res.status(201).json({
      message: 'Post added successfully!',
      postId: createdPost._id
    });
  });
});
```
And now we can use that in our posts service in inside the **addPost** function:
```
addPost(newTitle: string, newContent: string) {
  const post: Post = {id: null, title: newTitle, content: newContent};
  this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts', post)
    .subscribe((responseData) => {
      // console.log(responseData.message);
      const id = responseData.postId;
      post.id = id;
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });
}
```

### 59. Section Resources
- Mongoose Docs: http://mongoosejs.com/docs/guide.html
- MongoDB Docs: https://www.mongodb.com/
- MongoDB Atlas Docs: https://www.mongodb.com/cloud/atlas

Resources for this lecture:
- **mongodb-01-added-mongoose.zip**
- **mongodb-02-add-get-delete-added.zip**
- **mongodb-03-finished.zip**

## Section 5: Enhancing the App

### 60. Module Introduction
By now we actually already have all the core pieces of our MEAN app up and running and we got them connected. There are many more features that are important like: authentication, better error handling, edit our posts, have different pages, etc.

### 61. Adding Routing
We want to have multiple pages in the app, for example: the main page which simply lists the posts, one page for add a new post and a different page for editing of the posts. For that, we need the **Angular router**. At the moment we have different components, now we could load these components on separate pages. To do that, we are going to create a new file named **src/app/app-routing.module.ts** (that name it's a convention), containing:
```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

const routes: Routes = [
  /* http://localhost:4200/ */
  { path: '', component: PostListComponent },
  /* http://localhost:4200/create */
  { path: 'create', component: PostCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```
This will become an Angular module that are basically building blocks Angular analyzes to find out which features our app uses and we could absolutely define our routes in the **normal app module**; it's just a good practice to not put everything into this file but to split our logic across multiple files. For example put all the routes setup and configuration into a separate file which we then import into our main app module.
**Routes** are simply JavaScript objects where we define for which URL (which part of our app) should be presented. We had created the **routes** constant that actually simply holds an array of JavaScript objects and each object has to have a certain structure like a **path** property and what should get loaded (in our case we want to load a **component**).
Now we can go in the **src/app/app.module.ts** and simply add our `AppRoutingModule`, maybe below the `BrowserModule`, using `import { AppRoutingModule } from './app-routing.module'`. With that added, we can now use the Angular router by marking a place where Angular should load the active routes. For that, we'll edit our app component template (**src/app/app.component.html**):
```
<app-header></app-header>
<main>
  <!-- <app-post-create></app-post-create> -->
  <!-- <app-post-list></app-post-list> -->
  <router-outlet></router-outlet>
</main>
```
Now we are missing **links** to access our routes, it would be nicer if we had links in our header component, let's edit **src/app/header/header.component.html** like this:
```
<mat-toolbar color="primary">
  <span><a routerLink="/">MyMessages</a></span>
  <ul>
    <li>
      <a routerLink="/create">New Post</a>
    </li>
  </ul>
</mat-toolbar>
```

### 62. Styling Links
Let's work on the styling of our links and for that we'll add a new file to our header component, the  **src/app/header/header.component.css** file, we will now go to the typescript definition of the header component and connect it to that css file with the **styleUrls** property `styleUrls: ['./header.component.css']`.
The new **header.component.css** will contain:
```
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1 1 auto;
}
```
And the old **header.component.html**:
```
<mat-toolbar color="primary">
  <span>
    <a routerLink="/">MyMessages</a>
  </span>
  <span class="spacer"></span>
  <ul>
    <li>
      <a mat-button routerLink="/create" routerLinkActive="mat-accent">New Post</a>
    </li>
  </ul>
</mat-toolbar>
```

### 63. Client Side vs Server Side Routing
We now have routes in our Angular app defined in the app routing module, but we also have routes on the backend in the **backend/app.js** file and these routes are actually not really connected, they're running on different servers and they do different things. The Angular router is actually just a tool that is able to parse the URL of our app and then render different things onto the screen through JavaScript. These Angular routes are only known by Angular which is a client side application, so which is a JavaScript driven application running in the browser; this means that the server doesn't know these routes, neither our backend know any server that might serve our Angular app. It's also **important** to note that if we were hosting our Angular app on the same server as our Node app, we must not use routes we defined in Angular in our backend too because the server would not parse the page onto Angular to also have a look at that, instead it would do what it does on the backend side.

### 64. Possible Error
We might be getting an error ("can't find property title") when we reload the **Edit page** after/during the next chapter. This is totally normal and will be fixed in **67. Updating Posts on the Server**.

### 65. Creating the "edit" Form
Let's go back to the client side and make our posts editable. First of all we need to create a new "edit" route in **src/app/app-routing.module.ts** adding a dynamic segment to that path because we need to encode the information about which post to edit in the URL.
```
const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:postId', component: PostCreateComponent }
];
```
We are now able to extract that dynamic information by that **postId** parameter; the **PostCreateComponent** in **src/app/posts/post-create.component.ts** will be loaded for two different paths and we will need to make sure that we actually handle these different cases. Thankfully the Angular router gives us a little help with that, we can inject something into the component which is loaded through the router which helps us identify some route information, like for example the exact path through which this route was loaded and this will become important because we will know that when we can extract the **postId**, we are in the *edit mode* whilst in the other case that we can't extract this, we are in the *create mode*. So let's inject the **ActivatedRoute** (imported from **@angular/router**) binding it to a public route, this router package gives us the activated **route** object and this hold some important information about the route we're currently on. It's a good practice to use **ngOnInit** method 
```
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe();
  }
  ...
}
```
Note that the **paramMap** it's an observable (because the parameter in the URL could change whilst we're on the page) to which we can subscribe and as for all built-in observables, we never need to unsubscribe. On the first callback of that new subscription we get a **paramMap** object which we can use to check if the **postId** param exist so we can define the active **mode** (create / edit).
```
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  private mode = 'create';
  private postId: string;

  constructor(public postsService: PostsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }
  ...
}
```
Now want to fetch the information about the post we're editing and we can get it from our post service or from the server. So let's add a new method in **src/app/posts/post.service.ts** called **getPost** (using the spread operator):
```
getPost(id: string) {
  return {...this.posts.find(p => p.id === id)};
}
```
So now we can store all the post's information like this:
```
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  private mode = 'create';
  private postId: string;
  private post: Post;

  constructor(public postsService: PostsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.post = this.postsService.getPost(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }
  ...
}
```
The only thing that's left to do is that we actually fill our form with that post data and then handle the submission. Let's edit the "EDIT" button in **src/app/posts/post-list/post-list.component.html** like this: `<a mat-button color="primary" [routerLink]="['/edit', post.id]">EDIT</a>`.

### 66. Finishing the Edit Feature
We're getting our posts and now we just need to pre-populate our form with the values of that post. Since we're using the template driven approach, we have to do one-way binding on **ngModel** in **src/app/posts/post-list/post-create.component.html**, just using it to register this as a control isn't enough anymore, we need to give Angular the extra information of our default values we want to use, referring to our **post** (NO more private):
```
[ngModel]="post.title"
...
[ngModel]="post.content"
```
Now we just want to make sure that when we submit our post, we actually do update it and not add it. For doing that it's time to add a new **UpdatePost** method in our **src/app/posts/post.service.ts**:
```
updatePost(editId: string, editTitle: string, editContent: string) {
  const post: Post = {id: editId, title: editTitle, content: editContent};
  this.http.put('http://localhost:3000/api/posts/' + editId, post)
  .subscribe(response => console.log(response));
}
```
We need a backend route to send this request, let's go back to the **backend/app.js** file and add another route where we accept a different kind of HTTP request (**put** or **patch**):
```
app.put('/api/posts/:id', (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({_id: req.params.id}, post).then(result => {
    console.log(result);
    res.status(200).json({message: 'Update successful!'});
  });
});
```
We have used Mongoose to update a resource using **updateOne()** method. The last two things to do is to edit **onAddPost()** (renamed in **onSavePost()**) in **src/app/posts/post-list/post-create.component.ts** in this way:
```
onSavePost(form: NgForm) {
  if (form.invalid) {
    return;
  }
  if (this.mode === 'create') {
    this.postsService.addPost(form.value.title, form.value.content);
  } else if (this.mode === 'edit') {
    this.postsService.updatePost(
      this.postId,
      form.value.title,
      form.value.content
    );
  }
  form.resetForm();
}
```
And allow "PUT" in **backend/app.js**:
```
res.setHeader(
  "Access-Control-Allow-Methods",
  "GET, POST, PATCH, PUT, DELETE, OPTIONS"
);
```

### 67. Updating Posts on the Server
In the root page we always fetch a new copy of the posts, but we can locally update the posts once we've got a success response. Let's edit **updatePost()** in **src/app/posts/post.service.ts**:
```
updatePost(editId: string, editTitle: string, editContent: string) {
  const post: Post = {id: editId, title: editTitle, content: editContent};
  this.http.put('http://localhost:3000/api/posts/' + editId, post)
  .subscribe(response => {
    // console.log(response)
    const updatedPosts = [...this.posts];
    const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
    updatedPosts[oldPostIndex] = post;
    this.posts = updatedPosts;
    this.postsUpdated.next([...this.posts]);
  });
}
```
Now as a next step, we also want to make sure that if we are on the edit page and we reload, we don't have empty values on the fields. We can do this by adding a new method to not get the posts from our local array of posts but instead, to get it from the server. Let's go back to our **backend/app.js**:
```
app.get('/api/posts/:id', (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({message: 'Post not found!'});
    }
  });
});
```
Now let's edit **getPost()** in **src/app/posts/post.service.ts**:
```
getPost(id: string) {
  // return {...this.posts.find(p => p.id === id)};
  return this.http.get<{_id: string; title: string; content: string}>(
    'http://localhost:3000/api/posts/' + id
  );
}
```
And subscribe in **ngOnInit()** inside **src/app/posts/post-list/post-create.component.ts**:
```
ngOnInit() {
  this.route.paramMap.subscribe((paramMap: ParamMap) => {
    if (paramMap.has('postId')) {
      this.mode = 'edit';
      this.postId = paramMap.get('postId');
      this.postsService.getPost(this.postId).subscribe(postData => {
        this.post = {id: postData._id, title: postData.title, content: postData.content};
      });
    } else {
      this.mode = 'create';
      this.postId = null;
    }
  });
}
```
We now need to use the Elvis operator in the **src/app/posts/post-list/post-create.component.html**:
```
[ngModel]="post?.title"
...
[ngModel]="post?.content"
```

### 68. Re-Organizing Backend Routes
Right now we're organizing everything in **backend/app.js** but we actually want to organize our routes differently, because we'll later add more routes for authentication and so on, and we really want to group them. So besides our **models** folder which we're using for the post model right now, we'll add another folder and named **routes** and inside we can create **backend/routes/posts.js**. Now in there, we want to add all our posts routes and using another feature provided by Express, its own router.
```
const express = require('express');

const Post = require('../models/post');

const router = express.Router();

router.post(...
router.put(...
router.get(...
router.get(...
router.delete(...

module.exports = router;
```
We have just copied all **app** from **backend/app.js** and replaced the name with **router**. Now we can import `const postsRoutes = require("./routes/posts")` in **backend/app.js** and call `app.use(postsRoutes)` just before `module.exports = app`. We can fine-tune this by filtering "/api/posts" in `app.use("/api/posts", postsRoutes)` and removing the path in **backend/routes/posts.js** because now all the requests where the URL or the path of the URL starts with that will be forwarded into the posts routes file and routing setup.

### 69. Adding Loading Spinners
Let's inject **router** in our **src/app/posts/post.service.ts** constructor `constructor(private http: HttpClient, private router: Router) {}` by importing "@angular/router". Now we can change **addPost()** like that:
```
addPost(newTitle: string, newContent: string) {
  const post: Post = {id: null, title: newTitle, content: newContent};
  this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts', post)
    .subscribe((responseData) => {
      // console.log(responseData.message);
      const id = responseData.postId;
      post.id = id;
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
      this.router.navigate(['/']);
    });
}
```
And the same for **updatePost()**.

We also want to have a spinner, let's check the Angular Material docs at https://material.angular.io/components/progress-spinner/overview and use the **mat-spinner**. For unlock that spinner we need to go to **src/app/app.module.ts** and import **MatProgressSpinnerModule**. We can now use this loader in **src/app/posts/post-list/post-create.component.ts** by adding a new property `isLoading = false` and changing **ngOnInit()**.
```
ngOnInit() {
  this.route.paramMap.subscribe((paramMap: ParamMap) => {
    if (paramMap.has('postId')) {
      this.mode = 'edit';
      this.postId = paramMap.get('postId');
      this.isLoading = true;
      this.postsService.getPost(this.postId).subscribe(postData => {
        this.isLoading = false;
        this.post = {id: postData._id, title: postData.title, content: postData.content};
      });
    } else {
      this.mode = 'create';
      this.postId = null;
    }
  });
}
```
And **onSavePost()**.
```
onSavePost(form: NgForm) {
  if (form.invalid) {
    return;
  }
  this.isLoading = true;
  ...
```
Now let's edit **post-create.component.html** in this way:
```
<mat-card>
  <mat-spinner *ngIf="isLoading"></mat-spinner>
  <form (submit)="onSavePost(postForm)" #postForm="ngForm" *ngIf="!isLoading">
  ...
```
We can also style our spinner in **post-create.component.css**:
```
mat-spinner {
  margin: auto;
}
```
We can do the same things for the message list page. Let's edit **post-list.component.ts** in this way:
```
  posts: Post[] = [];
  isLoading = false;
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostsUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
  }
```
And **post-list.component.html** like that:
```
<mat-spinner *ngIf="isLoading"></mat-spinner>
<mat-accordion multi="true" *ngIf="posts.length > 0 && !isLoading">
...
</mat-accordion>
<p class="info-text mat-body-1" *ngIf="posts.length <= 0 && !isLoading">No posts added yet!</p>
```

### 70. Section Resources
- Angular Material Docs: https://material.angular.io/components/categories

Resources for this lecture:
- **enhancing-01-added-routing.zip**
- **enhancing-02-added-update-functionality.zip**
- **enhancing-03-finished.zip**

## Section 6: Adding Image Uploads to our App

### 71. Module Introduction
Every post we create will from now on also have an image which the user should be able to upload.

### 72. Adding the File Input Button
Let's start simple and let's add a file picker button in **src/app/posts/post-create/post-create.component.html** below the "title":
```
<div>
  <button mat-stroked-button type="button">Pick Image</button>
</div>
```
Now we need to add the functionality to open the file picker dialog For doing that we can add `<input type="file">` below the button and we can hide this picker, because it doesn't have the default material styling, and simulate a click event. Let's edit **post-create.component.css**:
```
input[type="file"] {
  visibility: hidden;
}
```
And now we can proxy our click on the button onto this new input using a click listener:
```
<div>
  <button mat-stroked-button type="button" (click)="filePicker.click()">Pick Image</button>
  <input type="file" #filePicker>
</div>
```
The next step is to register this input as an input of our form.

### 73. Converting the Form from a Template Driven to a Reactive Approach
We are using the template driven approach which means we let Angular detect the form and we register controls with ngModel but now we want to add a little bit more advanced features to the form, like our own validator, by switching to the **reactive forms approach**. The main difference is that with the **template driven approach** which we're currently using, we let Angular infer everything, with the **reactive approach**, we clearly define everything in our Typescript code and then just tell Angular which of our defined controls maps to which inputs.
To use that reactive approach we first of all need to import something into **src/app/app.module.ts**

> Summarized by [Andrea Riosa](https://andrea.netrooper.com/) 2020-05-18
