<script>
import Vue from 'vue';
import VueEcommerceCard from '@/vue-ecommerce-card.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueEcommerceCard
  }
});
</script>

<template>
  <div id="app">
    <vue-ecommerce-card 
      imageUrl="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-color-glare-computer-free-map-image_1276302.jpg"
      description="Designed for serious gaming and real-world durability, 
          TUF Gaming A15 is a gaming laptop that can lead you to victory. 
          Powered by the latest AMD Ryzen ™ 4000 Series CPU and GeForce GTX 1650Ti GPU, 
          this gaming cavan is fast and smooth in action-packed games."
      title="Asus X556U Series"
      price=200
      info="Asus Grey Laptop"
      addDescription="Add To Card"
      cardHeight="350"
      cardWidth="520"
    />
  </div>
</template>
