// callbacks ==================================

// single threaded, asynchronosity achieved using callbacks and
// promises

// example loading a script, we want to execute some functions
// defined in the script after loading it

/*
 * function loadScript(src){
 *  let script = document.createElement("script");
 *  script.src = src;
 *  document.head.appendChild(script);
 * }
 */
// This may be a blocking call and thus gets handled asychronously
// so the following will not work as the script may not be loaded
// yet:

/*
 * loadScript(location);
 * func1();
 */

// we do this:

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.appendChild(script);
}

// and we can cal it as such:

loadScript("../DOM/script.js", () => {
  console.log("script loaded");
});

// avoid callback hell
/*
 * loadScript("1.js", function(){
 *  if(error){
 *    handleError(error);
 *  }
 *  else{
 *    loadScript("2.js", function(){
 *      if(err){
 *        handleError(err);
 *      }
 *      else{
 *        loadScript("3.js", function(){
 *          if(err){
 *            handleError(err);
 *          }});
 *         }});
 *     }});
 */

// break it down like this:


loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...continue after all scripts are loaded (*)
  }
}
