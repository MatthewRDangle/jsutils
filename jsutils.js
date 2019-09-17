/**
 * Library: jsutils.
 * Description: Convenience functions to make scripting easier.
 */
let jsUtils = {

	/**
	 * Name: Clone.
	 * Description: Clones any variable and creates a new variable without reference.
	 * Compatibility: ???
	 * 
	 * @para original [anything] - [Required] - The thing which to copy.
	 * @returns A copy of the original without reference.
	 */
	clone: function(original) {

		// If the clone is an object, clone this way...
		if (typeof original === 'object') {
			
			// Set base clone object.
			var clone_obj = {};

			// Loop through object and clone all object properties.
			for (var i in original) {
				
				// Retrieve property and value.
				var property = i;
				var value = original[i];
				
				// Ensure property is unique to original.
				if (original.hasOwnProperty(property))
					clone_obj[property] = clone(original[property]);
			}

			// Copy prototype function
			clone_obj.__proto__ = original.__proto__;

			// Returned cloned object.
			return clone_obj;
		}
		
		// If the clone is an array, clone this way...
		else if (typeof original === '[object Array]') {
			
			// Set base clone object.
			var clone_array = {};
			
			// Loop through object and clone all array properties.
			for (var i = 0; i < original.length; i++) {
				clone_obj[i] = clone(original[i]);
			}
			
			// Returned cloned array.
			return clone_array;
		}
		
		// Anything else, return the original.
		else
			return original;
	},

	/*
	 * Name: getParentByClassName.
	 * Description: Retrieves the first parent found with the specified classname.
	 * Compatibility: Chrome 8, IE 10, Firefox 3.6, Safari 5.1, Operah 11.5
	 * 
	 * @para element [element] - JS version of HTML element.
	 * @para classname [string] - The classname to be checked.
	 * @return [element] - returns parent element if found. Returns false if not.
	 */
	getParentByClassName: function(element, classname) {

		//Retrieve parent element and validate scope.
		while (element.parentElement) {
			
			element = element.parentElement;
			
			if (element.classList.contains(classname))
				return element;
		}
		
		//Return if no class name was found.
		return false;
	},
	
	/*
	 * Name: getParentsByClassName.
	 * Description: Retrieve all parents associated with the specified classname.
	 * Compatibility: Chrome 8, IE 10, Firefox 3.6, Safari 5.1, Operah 11.5
	 * 
	 * @para element [element] - JS version of HTML element.
	 * @para classname [string] - The classname to be checked.
	 * @return [Array[element]] - Returns an array of nodes that all match the classname.
	 */
	getParentsByClassName: function(element, classname) {
		
		//Array of parent elements containing classname.
		let parents = [];
		
		//Retrieve parent element and validate scope.
		while (element.parentElement) {
			
			element = element.parentElement;
			
			if (element.classList.contains(classname))
				parents.push(element);
		}
		
		//Return parents; otherwise false.
		return (parents.length > 0) ? parents : false;
		
	},
	
	/*
	 * Name: getParentByTagName.
	 * Description: Retrieve all parents associated with the specified tagname.
	 * Compatibility: Chrome 8, IE 10, Firefox 3.6, Safari 5.1, Operah 11.5
	 * 
	 * @para element [element] - JS version of HTML element.
	 * @para tagname [string] - The tagname to be checked.
	 * @return [element] - returns parent element if found. Returns false if not.
	 */
	getParentByTagName: function(element, tagName) {

		//Retrieve parent element and validate scope.
		while (element.parentElement) {
			
			element = element.parentElement;

			if (element.tagName == tagName.toUpperCase())
				return element;
		}
		
		//Return parents; otherwise false.
		return false;
	},
	
	/*
	 * Name: getParentsByTagName.
	 * Description: Retrieve all parents associated with the specified tagname.
	 * Compatibility: Chrome 8, IE 10, Firefox 3.6, Safari 5.1, Operah 11.5
	 * 
	 * @para element [element] - JS version of HTML element.
	 * @para tagname [string] - The tagname to be checked.
	 * @return [Array[element]] - Returns an array of nodes that all match the classname.
	 */
	getParentsByTagName: function(element, tagName) {
		
		//Array of parent elements containing classname.
		let parents = [];
		
		//Retrieve parent element and validate scope.
		while (element.parentElement) {
			
			element = element.parentElement;
			
			if (element.tagName == tagName.toUpperCase())
				parents.push(element);
		}
		
		//Return parents; otherwise false.
		return (parents.length > 0) ? parents : false;
	},
	
	/*
	 * Name: printHTML.
	 * Description: Takes a string and escapes all HTML related characters so the full string legible and not confused for HTML syntax.
	 * Compatibility: ???
	 * 
	 * @para string [string] - A string to be parsed.
	 * @return string [string] - Returns a string with all HTML related characters escaped.
	 */
	printHTML: function(string) {
		
		/* Return legible HTML. */
		return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}
	
	
}