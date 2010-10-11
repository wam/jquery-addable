# jquery-addable.js

A simple jquery library for dynamically adding and removing DOM elements such as form fields.

## Features

* Add or remove any element by selector when the 'add' control element is clicked.
* Easily remove parent of the 'remove' control element.
* Add elements using a simple html template.
* Label added elements with a counter (e.g. element 1, element 2...) anywhere within the element.

## Basic Usage
	
	<form id="form">
		
		<div class="parent_container">
			
			<div class="template_element">
				<label for="some_input"></label>
				<input type="text" name="some_input" />
				<a href="#" class="remove">Remove This</a>
			</div>
			
		</div>
		
		<a href="#" class="add_field">Add Field</a>
	
	</form>
	
	
	<script type="text/javascript">
		
		$('#form .add_field').adds('#form .parent_container .template_element');
		
	</script>

## Without removing the cloned element

	<form id="form">
	
		<div class="parent_container">
		
			<div class="template_element">
				<label for="some_input"></label>
				<input type="text" name="some_input" />
				<a href="#" class="remove">Remove This</a>
			</div>
		
		</div>
	
		<a href="#" class="add_field">Add Field</a>

	</form>


	<script type="text/javascript">
	
		$('#form .add_field').adds('#form .parent_container .template_element', { removeOriginal : false });
		$('.remove').removesParent(); // Apply remove to template element
	
	</script>

## Cloning a "template" with a counter

	<form id="form">
	
		<div class="parent_container">
			
			<div class="template_element">
				<label for="some_input_counter">Input counter</label>
				<input type="text" name="some_input_counter" />
				<a href="#" class="remove">Remove This</a>
			</div>
			
		</div>
	
		<a href="#" class="add_field">Add Field</a>
	
	</form>
	
	<script type="text/javascript">
		
		$('#form .add_field').adds('#form .parent_container .template_element', { counter : 'counter', count : 1 });
		
	</script>
	
	