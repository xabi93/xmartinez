<template>
  <div class="timeline">
    <ul>
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Timeline'
}
</script>

<style lang="scss">
.timeline {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  ul {
    padding: 50px 0;
    margin: 0;
  }
}
/* GENERAL MEDIA QUERIES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
@media screen and (max-width: 900px) {
  .timeline {
    ul {
      .item {
        .content {
          width: 250px;
        }
        &:nth-child(even) {
          .content {
            left: -314px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .timeline {
    ul {
      .item {
        margin-left: 20px;
        .content {
          width: calc(100vw - 140px);
        }
        &:nth-child(even) {
          .content {
            left: 45px;
            &::before {
              left: -15px;
              border-width: 8px 16px 8px 0;
              border-color: transparent #ff5733 transparent transparent;
            }
          }
        }
      }
    }
  }
}
</style>
