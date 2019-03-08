/**
 * Library: jsutils.
 * Description: Convenience functions to make scripting easier.
 */
let jsUtils = {
		
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
	 * Description: Retrieve all parents associated with the specified classname.
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
	 * Description: Retrieve all parents associated with the specified classname.
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
	}
}