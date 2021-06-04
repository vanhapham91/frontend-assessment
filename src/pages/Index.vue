<template>
	<div id="indexPage">
		<div class="index__banner">
			<img src="http://via.placeholder.com/1920x650"/>
		</div>
		<div>
			<Tabs/>
		</div>
	</div>
</template>

<script>
import Tabs from '../components/Tabs';


export default {
  name: 'HelloWorld',
	props: [
    Tabs
	]
}
</script>
