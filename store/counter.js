// ストアの定義
export const state = () => ({
  counter: 0
})

// ストアの値をインクリメントする
export const mutations = {
  countUp: function(state){
    state.counter++
  },
  counterReset: function(state){
    state.counter = 0
  }
}