<template>
  <div>
    <h2>我是子组件的标题</h2>
    <slot name="hello"></slot>
    <slot name="child" text="hello from child"></slot>
  </div>
</template>