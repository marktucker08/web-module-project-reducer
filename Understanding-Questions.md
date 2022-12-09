# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* event handler anonymous function passes the addOne action creator to the CalcButton component
* addOne returns the ADD_ONE case to send to the reducer function.
* the reducer sets the new total as total + 1
...

* TotalDisplay shows the total plus 1.
