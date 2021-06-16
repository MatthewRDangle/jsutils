/**
 * Library: jsutils.
 * Description: Convenience functions to make scripting easier.
 */
let jsUtils = {}

// Protect Global Space.
(function() {
	
	/**
	 * Name: Clone.
	 * Description: Clones any variable and creates a new variable without reference.
	 * Compatibility: ???
	 * 
	 * @para original [anything] - [Required] - The thing which to copy.
	 * @returns A copy of the original without reference.
	 */
	jsUtils.clone = function(original) {

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
	jsUtils.getParentByClassName = function(element, classname) {

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
	jsUtils.getParentsByClassName = function(element, classname) {
		
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
	jsUtils.getParentByTagName = function(element, tagName) {

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
	jsUtils.getParentsByTagName = function(element, tagName) {
		
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
	
	/**
	 * Name: Pager.
	 * Type: Constructor.
	 * Access: Public.
	 * For: Pager.
	 * Description: Create the pager object to allow looping through elements.
	 * 
	 * @param elements [Object array[object node]] [Required] - A list of elements to loop through to set the active element.
	 * @param toggleClass [String] [Required] - The active class to add and remove from elements for viewing.
	 * @param currentIDX [String] [Optional] - The current active page index number.
	 */
	jsUtils.pager = pager(elements, toggleClass, currentIDX);
	
	/*
	 * Name: printHTML.
	 * Description: Takes a string and escapes all HTML related characters so the full string legible and not confused for HTML syntax.
	 * Compatibility: ???
	 * 
	 * @para string [string] - A string to be parsed.
	 * @return string [string] - Returns a string with all HTML related characters escaped.
	 */
	jsUtils.printHTML = function(string) {
		
		/* Return legible HTML. */
		return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}
	
	
	
	
	
	/**
	 * Name: Pager.
	 * Type: Constructor.
	 * Access: Public.
	 * For: Pager.
	 * Description: Create the pager object to allow looping through elements.
	 * 
	 * @param elements [Object array[object node]] [Required] - A list of elements to loop through to set the active element.
	 * @param toggleClass [String] [Required] - The active class to add and remove from elements for viewing.
	 * @param currentIDX [String] [Optional] - The current active page index number.
	 */
	function pager(elements, toggleClass, currentIDX) {
		
		// Check if an array of element elements exist. If it doesn't, error.
		if (!elements || !elements.length)
			throw Error("In order to select next element, an array of elements needs to be passed through.");
		else
			this.pages = elements;
		
		// Check if toggle class exists.
		if (!toggleClass)
			throw Error('A toggle class state must exist in order to set the next element.');
		else
			this.toggleClass = toggleClass;
		
		// Set current active page.
		if (typeof currentIDX === 'number' && currentIDX % 1 == 0)
			this.current = currentIDX;
		else
			this.current = null;
	}
	
	/**
	 * Name: Go To.
	 * Type: Function.
	 * Access: Public.
	 * For: Pager.
	 * Description: Jumps the user to a specific page in the list of elements.
	 * 
	 * @param idx [Number] [Required] - An integer of the specific page number to be set in the pages array.
	 */
	pager.prototype.goTo = function(idx) {
		
		// Error if index is not a valid integer.
		if (typeof idx !== 'number' && idx % 1 != 0)
			throw Error('Your go to index must be a valid integer.');
		
		// If the go to page is the existing page, don't do anything.
		if (this.current == idx)
			return this.current;
		
		// See if this page exists.
		if (this.pages.length > idx) {
			
			// Set new page.
			this.pages[this.current].classList.toggle(this.toggleClass);
			this.pages[idx].classList.toggle(this.toggleClass);
			
			// Return and update the current index.
			this.current = idx;
			return idx;
		}
		else
			return this.current;
	}
	
	/**
	 * Name: Next.
	 * Type: Function.
	 * Access: Public.
	 * For: Pager.
	 * Description: Loops through an array of elements and toggles the 'active' element.
	 * 
	 * @param elements [Object array[object node]] [Required] - A list of elements to loop through to set the active element.
	 * @param toggleClass [String] [Required] - The toggle class to add and remove from elements for viewing.
	 * @return [Integer] - The index of the currently active element within the array.
	 */
	pager.prototype.next = function() {

		// Set next element.
		var next_idx = this.current + 1;
		if (next_idx < this.pages.length) {
			this.pages[this.current].classList.toggle(this.toggleClass);
			this.pages[next_idx].classList.toggle(this.toggleClass);
			
			// Return and update the current index.
			this.current = next_idx;
			return next_idx;
		}
		else {
			// Return unchanged active index.
			return this.current;
		}
	}
	
	/**
	 * Name: Previous.
	 * Type: Function.
	 * Access: Public.
	 * For: Pager.
	 * Description: Loops through an array of elements and toggles the 'active' state of the element element.
	 * 
	 * @param elements [Object array[object node]] [Required] - A list of elements to loop through to set the active element.
	 * @param toggleClass [String] [Required] - The active class to add and remove from elements for viewing.
	 * @return [Integer] - The index of the currently active element within the array.
	 */
	pager.prototype.prev = function() {

		// Set previous element.
		var prev_idx = this.current - 1;
		if (prev_idx >= 0) {
			this.pages[this.current].classList.toggle(this.toggleClass);
			this.pages[prev_idx].classList.toggle(this.toggleClass);
			
			// Return the new active index.
			this.current = prev_idx;
			return prev_idx;
		}
		else {
			// Return unchanged active index.
			return this.current;
		}
	}
	
	/**
	 * Name: Set Current.
	 * Type: Function.
	 * Access: Public.
	 * For: Pager.
	 * Description: Sets the current page.
	 * 
	 * @param idx [Number] [Required] - The index number to update the current page.
	 * @param jsActivate [Boolean] - True or false flag toggle the class.
	 * @return [Integer] - The current active page index.
	 */
	pager.prototype.setCurrent = function(idx, jsActivate) {
		
		// Error if index is not a valid integer.
		if (typeof idx !== 'number' && idx % 1 != 0)
			throw Error('Your go to index must be a valid integer.');
		
		//Retrieve page.
		var page = this.pages[idx];
		
		// If their is a current page, then go to page.
		if (this.current != null)
			this.goTo(idx);
		
		// If their is not a current page, then proceed.
		else {
			
			// If page was found, then set the page.
			if (page.nodeName) {
				
				// Toggle the class if the user chooses to.
				if (jsActivate)
					page.classList.toggle(this.toggleClass);	
				
				// Set the current idx.
				this.current = idx;
			}
		}
		
		// Send back the updated current page.
		return this.current;
	}
	
	/**
	 * Name: Update.
	 * Type: Function.
	 * Access: Public.
	 * For: Pager.
	 * Description: Updates the pages and current page index with a fresh list.
	 * 
	 * @param elements [Object array[object node]] [Required] - A list of elements to loop through to set the active element.
	 * @param toggleClass [String] [Required] - The active class to add and remove from elements for viewing.
	 * @param currentIDX [String] [Optional] - The current active page index number.
	 */
	pager.prototype.update = function(elements, toggleClass, currentIDX) {
		
		// Check if an array of element elements exist. If it doesn't, error.
		if (!elements || !elements.length)
			throw Error("In order to select next element, an array of elements needs to be passed through.");
		else
			this.pages = elements;
		
		// Check if toggle class exists.
		if (!toggleClass)
			throw Error('A toggle class state must exist in order to set the next element.');
		else
			this.toggleClass = toggleClass;
		
		// Set current active page.
		if (typeof currentIDX === 'number' && currentIDX % 1 == 0)
			this.current = currentIDX;
		else
			this.current = null;
	}
})();
