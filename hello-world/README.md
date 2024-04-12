# HelloWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Derivatives -->
### ng_if_else -->
not visible in the DOM
Used when the tree is too big
### hidden -->
. Visible in the DOM
. Used when the tree is small
. Recommended to use hidden when the tree is large and the logic is proved out to be costly

### ngSwitchCase -->




## Forms
### 1. Template driven form
. The directives are used where the control object is created by the DOM.
. making them template-centric
. offering for small scaler application
### 2. Reactive form
. The **abstractcontrol** class is the parent class of *formControl* and *fromGroup* classes
. formGroup to be utilized in the html file and also import ReactiveFormsModule in the module file.
. use the **FormGroup** instance to create a FromControl and use the names in the html as formControlName 