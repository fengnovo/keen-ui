<template>
  <div class="test">
    <k-header>头部</k-header>
    <k-container>
      <k-aside width="200px">菜单</k-aside>
      <k-main>
        <k-button type="warning" size="large">自动keen-ui按钮</k-button>
        <br />
        <br />
        hello
        <p class="red">keen-ui</p>
        <k-button type="primary" size="large">自动keen-ui按钮</k-button>
        <br />
        <br />
        <k-button type="info" size="large">自动keen-ui按钮</k-button>
      </k-main>
    </k-container>
  </div>
</template>
<style lang="scss">
html,
body,
#app,
.test {
  height: 100%;
}

body {
  margin: 0;
}

.test {
  display: flex;
  flex-direction: column;
}

.k-header {
  background-color: #3a8ee6;
}

.k-aside {
  background-color: #5daf34;
}

.k-main {
  background-color: #82848a;
}
</style>