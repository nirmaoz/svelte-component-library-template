<script>
    import { Meta, Story } from "@storybook/addon-svelte-csf";
    import { action } from "@storybook/addon-actions";

    import Component from "../src/index";
</script>

<Meta title="Component" component={Component} />

<Story name="ComponentStyleFormat-CSF">
    <Component name="Svelte Story" buttonText="OK" on:click={action('clicked')} />
</Story>
