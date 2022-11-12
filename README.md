# About Project App

**Add User App -**
Add User App is a basic add user details app which takes users _Name_ & _Age_ and show them in list format.

## Live App link

<a href="https://PSoni2000.github.io/react-practice-project"
target="_blank" style='font-size:1.2rem; font-weight:bold;'>Add User App</a>

## Language / Library Used

1. React JS

# NOTES:

1. to include props className with component own className you can use Template literals.

   ```
   <div className={`${classes.card} ${props.className}`}>
   ```

2. to convert data type from Number to Sting or String to Number you can use implicit type conversion.

   ```
   let n = +'1';
   console.log(typeof n + ' ' + n ); // number 1
   ```

   ```
   let s = 1+'';
   console.log(typeof s + ' ' + s ); // string 1
   ```

3. **Portals** -
   Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component(root).

   ```
   ReactDOM.createPortal(child, containerRef);
   ```

   - child: any renderable React child
   - containerRef: DOM element

   Usage -

   1. Add Portal Destination in index.html file inside public folder

   ```
   <body>
       <!-- Portal Destination -->
       <div id="backdrop-root"></div>
       <div id="overlay-root"></div>

       <!-- Root -->
       <div id="root"></div>
   </body>
   ```

   2. Create Portal in desired file

   ```
   return (
       <React.Fragment>
           {ReactDOM.createPortal(
               <Backdrop />,
               document.getElementById("backdrop-root")
           )}

           {ReactDOM.createPortal(
               <ModalOverlay />,
               document.getElementById("overlay-root")
           )}
       </React.Fragment>
   );
   ```

4. **Refs** - Refs provide a way to access DOM nodes or React elements created in the render method.
   Refs are good when you only wanted to read element data/values. we should always let react to do the heavy changes work by useState hooks as useState will reload the screen as it updated.

   Usage -

   1. create refs

   ```
   const nameInputRef = useRef();
   ```

   2. link with element

   ```
   <input id="username" type="text" ref={nameInputRef} />
   ```

   3. Read data

   ```
   console.log(nameInputRef.current.value)
   ```
