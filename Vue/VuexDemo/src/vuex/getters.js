export default {
  prices: (state) => {
    return state.books.filter(item => {
      if (item.price >= 20) {
        return true;
      }
    })
  },
  ages: (state) => {
    return state.datas.filter(item => {
      if (item.age > 30) {
        return true;
      }
    })
  }
}
