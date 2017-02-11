#!/usr/bin/env node
var
  events= require( "events"),
  listenerBinder= require( "..")

var basic1= class extends events.EventEmitter {
	onhello(){
		console.log("hello, world!")
	}
}

var o1= new basic1()
o1.emit( "hello")
o1.on( "hello", ()=> console.log("heyya"))
o1.emit( "hello") //=> heyya

var listenerBasic1= listenerBinder( basic1)
var o2= new listenerBasic1()
o2.emit("hello") //=> hello, world
