<template>
  <div class="home">
    <ul>
      <li v-for="recipe in $root.recipes" :key="recipe.uuid">
        <router-link :to="'/'+recipe.slug">
          {{recipe.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>
