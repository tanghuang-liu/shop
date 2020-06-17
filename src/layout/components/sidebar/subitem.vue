<template>
        <div v-if="!item.hidden">
          <el-submenu v-if="item.children&&item.children.length>=1" :index="item.path">
                <template slot="title">
                <span v-if="item.meta&&item.meta.title">
                <i class="el-icon-location"></i>
                <span slot="title">{{item.meta.title}}</span>
                </span>
                <span v-else>
                <i class="el-icon-location"></i>
                <span slot="title">{{item.path.replace('/','')}}</span>
                </span>
                </template>
                <subitem v-for="(route,key) in item.children" :key="key" :item="route"></subitem>
        </el-submenu>
        <el-menu-item v-else :index="item.path">
            <template slot="title">
                <span v-if="item.meta&&item.meta.title">
                <i class="el-icon-location"></i>
                <span slot="title">{{item.meta.title}}</span>
                </span>
                <span v-else>
                <i class="el-icon-location"></i>
                <span slot="title">{{item.path.replace('/','')}}</span>
                </span>
                </template>
        </el-menu-item>
        </div>
</template>
<script>
export default {
  name: 'subitem',
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  computed: {
  }
}
</script>
<style lang="less" scoped>

</style>
