<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import { action } from "@storybook/addon-actions";

    import Component from "../src/index";
</script>

<Meta
    title="Component"
    component={Component}
    parameters={{
        actions: { handles: ["click button"] },
    }}
/>

<Template let:args>
    <Component {...args} />
</Template>

<Story name="ComponentStyleFormat-CSF">
    <Component
        name="Svelte Story"
        buttonText="OK"
        onClick={action("clicked")}
    />
</Story>

<Story
    name="CSF-with-Template"
    args={{ name: "CSF Template Story", buttonText: "OK" }}
/>
