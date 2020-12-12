<template>
  <div class="container" :style="{height:cardHeight + 'px',width:cardWidth + 'px'}">
    <div class="front">
      <div class="images">
        <img :src="imageUrl"/>
      </div>
      <div class="product">
        <p>{{info}}</p>
        <h1>{{title}}</h1>
        <h2>${{price}}</h2>
        <p class="desc">
          {{description}}
        </p>
        <div class="buttons">
          <button class="add">{{addDescription}}</button>
        </div>
      </div>
    </div>
    <div class="back">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <i class="fa fa-heart back-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default:
        "https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-color-glare-computer-free-map-image_1276302.jpg",
    },
    description: {
      type:String,
      default:`Designed for serious gaming and real-world durability, 
          TUF Gaming A15 is a gaming laptop that can lead you to victory. 
          Powered by the latest AMD Ryzen ™ 4000 Series CPU and GeForce GTX 1650Ti GPU, 
          this gaming cavan is fast and smooth in action-packed games.`
    },
    title: {
      type:String,
      default:"Asus X556U Series"
    },
    price: {
      type:Number,
      default:1200
    },
    info: {
      type:String,
      default:"Asus Grey Laptop"
    },
    addDescription: {
      type:String,
      default:"Add To Card"
    },
    cardHeight: {
      type:String,
      default:"350"
    },
    cardWidth: {
      type:String,
      default:"520"
    }
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato:400,700");
$font: "Lato", sans-serif;

$white: #f5f5f5;
$light: #e0c9cb;
$tan: #c3a1a0;
$pink: #d9aab7;
$rose: #ba7e7e;
$dark: #4e4e4e;

.back-icon {
  font-size: 75px;
  color: white;
  margin-top: 120px;
}

.back {
  background: linear-gradient(-45deg, #fc575e, #f7b42c);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: absolute;
  text-align: center;
  left: 0;
  width: 100%;
  height: 100%;
}

.front {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.container:hover .back,
.container.hover .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
  transition: all 2s ease-in-out;
}
.container:hover .front,
.container.hover .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
  transition: all 2s ease-in-out;
}
.front {
  z-index: 2;
}

html {
  display: grid;
  min-height: 100%;
}

body {
  display: grid;
  background: $light;
  font-family: $font, sans-serif;
  text-transform: uppercase;
}

.container {
  perspective: 1000;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  position: relative;
  margin: auto;
  overflow: hidden;
  background: $white;
  box-shadow: 5px 5px 15px rgba($dark, 0.5);
  border-radius: 10px;
}

p {
  font-size: 0.6em;
  color: rgb(230, 68, 68);
  letter-spacing: 1px;
}

h1 {
  font-size: 1.2em;
  color: rgb(1, 1, 12);
  margin-top: -5px;
}

h2 {
  color: rgb(230, 68, 68);
  margin-top: -5px;
}

img {
  width: 40%;
  margin-top: 47px;
  margin-left: 47px;
  background-color: transparent;
}

.product {
  position: absolute;
  width: 40%;
  height: 100%;
  top: 10%;
  left: 60%;
}

.desc {
  text-transform: none;
  letter-spacing: 0;
  margin-bottom: 17px;
  color: $dark;
  font-size: 0.7em;
  line-height: 1.6em;
  margin-right: 25px;
  text-align: justify;
}

button {
  background: linear-gradient(-45deg, #fc575e, #f7b42c);
  padding: 10px;
  display: inline-block;
  outline: 0;
  border: 0;
  margin: -1px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: $white;
  cursor: pointer;
  &:hover {
    background: linear-gradient(-45deg, #fc575e, #f7b42c);
    transition: all 0.4s ease-in-out;
  }
}

.add {
  width: 67%;
}

.like {
  width: 22%;
}

.focus {
  background: $rose;
  color: $white;
}

footer {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.8em;
  text-transform: uppercase;
  padding: 10px;
  p {
    letter-spacing: 3px;
  }
  a {
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: #7d7d7d;
    }
  }
}
</style>