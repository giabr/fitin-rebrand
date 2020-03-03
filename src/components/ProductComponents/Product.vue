<template>
    <div class="fi-card">
        <instagram-embed
          :url="product.url"
          :max-width=300
          :hide-caption=true
        />
    </div>
</template>

<script>
import InstagramEmbed from 'vue-instagram-embed';

export default {
  components: {
    InstagramEmbed,
  },
  props: {
    product: Object,
  },
};
</script>
