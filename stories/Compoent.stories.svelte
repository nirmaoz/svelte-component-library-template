
<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Component from '../src/index';
</script>


<Meta
	title="Component"
	component={Component}
	argTypes={{
		onClick: { action: "onClick" },
	}}
/>

<Template let:args>
	<Component {...args} on:click={args.onClick} />
</Template>

<Story
	name="Text"
	args={{
		name: 'World',
		buttonText: 'Hello Button'
	}}
/>

<Story
	name="Emoji"
	args={{
		name: '😀 😎',
		buttonText: '👍 💯'
	}}
/>