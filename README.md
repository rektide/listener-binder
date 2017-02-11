# Listener Binder

Higher-order tool for automatically binding an .oneventname methods to the instance.


```
var Helloer= class extends events.EventEmitter {
	onhello(){
		console.log("hello, world!")
	}
}

var BoundHelloer= listenerBinder( Helloer)
var h1= new BoundHelloer()
h1.emit("hello") //=> hello, world

```
