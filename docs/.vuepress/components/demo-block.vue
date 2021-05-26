<template>
  <div class="demo-block">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div ref="meta" class="meta" :style="isExpanded && { height: metaHeight + 'px' }">
      <div class="description">
        <slot></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div class="demo-block-control" @click="isExpanded = !isExpanded">
      <span>{{ isExpanded ? '隐藏代码' : '显示代码' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-block',
  data() {
    return {
      isExpanded: false,
      metaHeight: 0,
    };
  },
  watch: {
    isExpanded() {
      this.metaHeight = this.codeAreaHeight();
    },
  },
  methods: {
    codeAreaHeight() {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return this.$el.getElementsByClassName('description')[0].clientHeight +
          this.$el.getElementsByClassName('highlight')[0].clientHeight + 30;
      }
      return this.$el.getElementsByClassName('highlight')[0].clientHeight + 20;
    }
  },
};
</script>

<style lang="less">
.demo-block {
  position: relative;
  z-index: 1;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  .source {
    padding: 16px;
  }
  .meta {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height .2s;
  }
  .description {
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;
    p {
      margin: 0;
      line-height: 26px;
    }
  }
  .highlight {
    margin: 10px;
    div[class*="language-"] pre,
    div[class*="language-"] pre[class*="language-"] {
      border-radius: 0;
      margin: 0;
    }
  }
  .demo-block-control {
    border-top: 1px solid #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #333;
    cursor: pointer;
    position: relative;
    > span {
      position: absolute;
      font-size: 14px;
      line-height: 44px;
      display: inline-block;
    }
  }
}
</style>
