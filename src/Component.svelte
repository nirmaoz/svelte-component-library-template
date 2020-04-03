<script>
  export let name;

  let buttonText = "Button";

  function handleClick() {
    buttonText = "Button Clicked";
  }
</script>

<!-- your code here -->
<h1>Hello {name}!</h1>

<button on:click={handleClick}>{buttonText}</button>
