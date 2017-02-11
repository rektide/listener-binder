"use strict"
var getAllPropertyDescriptors= require( "get-property-descriptor/get-all-descriptors")

var on= /^on(.+)/

module.exports= Klass => class extends Klass {
	constructor( i, j, k, s, t, r, a){
		super( i, j, k, s, t, r, a)
		var descriptors= getAllPropertyDescriptors( this)
		for( var i in descriptors){
			var match= on.exec( i)
			if( !match|| i== "once"){
				continue
			}
			this.on( match[ 1], this[ i])
		}
	}
}
