let scroller = new VirtualScroller({
  element: '#virtual-scroller',
  height: '100vh',
  rowHeight: 60, // px
  pageSize: 100,
  buffer: 10,
  renderItem: function (dataItem) {
    const div = document.createElement('div');
    div.classList.add('row-content');
    div.textContent = dataItem;
    return div;
  },
  loadMore: function (pageSize) {
    const data = [];
    for (let i = 0; i < pageSize; i++) {
      const dataItem = `当前元素下标${this.data.length + i}`;
      data.push(dataItem);
    }
    return data;
  }
})
console.log(scroller)