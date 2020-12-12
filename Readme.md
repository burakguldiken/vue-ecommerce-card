# Vue E-Commerce Card

Card design that can be used in e-commerce sites.

## Install

```
npm i vue-ecommerce-card
```

## Import

```javascript
import VueEcommerceCard from 'vue-ecommerce-card';
```

```javascript
components: {
    VueEcommerceCard
  }
```

## Use

```javascript
<template>
  <VueEcommerceCard 
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
</template>
```

## Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| imageUrl | string | https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-color-glare-computer-free-map-image_1276302.jpg | The url of the product must be added |
| description | string | Designed for serious gaming and real-world durability, <br/> TUF Gaming A15 is a gaming laptop that can lead you to victory. <br/> Powered by the latest AMD Ryzen ™ 4000 Series CPU and GeForce GTX 1650Ti GPU, <br/> this gaming cavan is fast and smooth in action-packed games." <br/> title="Asus X556U Series | product description |
| title | string | Asus X556U Series | product title |
| price | number | 1200 | product price |
| info | string | Asus Grey Laptop | basic information about the product |
| addDescription | string | Add To Card | button description |
| cardHeight | string | 350 | card height |
| cardWidth | string | 520 | card width |
