function iterableMap( mapFn){
	return function( iterable){
		var
		  iterator= iterable[Symbol.iterator](),
		  retVal= {
			[Symbol.iterator](){ return this },
			next(){
				var val= iterator.next()
				val.value= mapFn( val.value)
				return val
			}
		  }
		if( iterator.return){
			retVal.return= iterator.return.bind( iterator)
		}
		if( iterator.throw){
			retVal.throw= iterator.throw.bind( iterator)
		}
	}	
}
module.exports= iterableMap
