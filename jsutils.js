/**
 * jsUtils Library.
 */
let jsUtils = {
		
	/**
	 * Name: getParentByClassName.
	 * Description: Retrieves the first parent found with the specified classname.
	 * Compatibility: Chrome 8, IE 10, Firefox 3.6, Safari 5.1, Operah 11.5
	 * 
	 * @para node [node] - JS version of HTML element.
	 * @para classname [string] - The classname to be checked.
	 * @return [node] - returns parent node if found. Returns false if not.
	 */
	getParentByClassName: function(node, classname) {
		//Retrieve parent element.
		let parentNode = node.parentElement;
		if (parentNode) {
			return false;
		}
		
		//Return parent node if it matches classname, otherwise continue. Only return false if parent node does not exist within the body.
		else if (parentNode.contains(classname)) {
			return parentNode;
		}
		else if (parentNode.tagName == 'BODY' || parentNode.tagName == 'HTML') {
			return false;
		}
		else {
			jsUtils(parentNode, classname);
		}
	},
	
	/**
	 * Name: getParentsByClassName.
	 * Description: Retrieve all parents associated with the specified classname.
	 * Compatibility: Chrome 8, IE 10, Firefox 3.6, Safari 5.1, Operah 11.5
	 * 
	 * @para node [node] - JS version of HTML element.
	 * @para classname [string] - The classname to be checked.
	 * @return [Array[node]] - Returns an array of nodes that all match the classname.
	 */
	getParentsByClassName: function(node, classname) {
		//TODO return to this.
	},
	
	/**
	 * Name: getParentByTagName.
	 * Description: Retrieve all parents associated with the specified classname.
	 * Compatibility: Chrome 8, IE 10, Firefox 3.6, Safari 5.1, Operah 11.5
	 * 
	 * @para node [node] - JS version of HTML element.
	 * @para tagname [string] - The tagname to be checked.
	 * @return [node] - returns parent node if found. Returns false if not.
	 */
	getParentByTagName: function(node, tagName) {
		//TODO return to this.
	},
	
	/**
	 * Name: getParentsByTagName.
	 * Description: Retrieve all parents associated with the specified classname.
	 * Compatibility: Chrome 8, IE 10, Firefox 3.6, Safari 5.1, Operah 11.5
	 * 
	 * @para node [node] - JS version of HTML element.
	 * @para tagname [string] - The tagname to be checked.
	 * @return [Array[node]] - Returns an array of nodes that all match the classname.
	 */
	getParentsByClassName: function(node, tagName) {
		//TODO return to this.
	}
}