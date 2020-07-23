const valueOfSelect = Array.from({ length: 20 }, (_, i) => ({
  name: i,
  value: `${i}`,
  enabled: !!(i % 2),
}))

function initializeSimpleDragDrop(
  $wrapper = $('#sort-list'),
  $menuWrapper = $('#enabled-fields'),
  list = valueOfSelect
) {
  const dictOfValue = new Map(valueOfSelect.map((ele) => [ele.value, ele]))
  const createBaseTag = ({ name, value }) => {
    const $node = $(`<div data-value="${value}" class="col">${name}</div>`)
    const $cancel = $(
      `<i class="fa fa-times cancel" data-value="${value}" aria-hidden="true"></i>`
    )
    $cancel.click((e) => {
      onSelectClick({ target: $menuWrapper.find(`[data-value="${value}"]`)[0] })
    })
    $node.append($cancel)
    return $node
  }
  function onSelectClick(e) {
    const $target = $(e.target)
    const value = $target.attr('data-value')
    const _nodeValue = dictOfValue.get(value)
    if (_nodeValue.enabled) {
      $target.removeClass('checked')
      $wrapper.find(`[data-value="${value}"]`).remove()
    } else {
      $target.addClass('checked')
      $wrapper.append(createBaseTag(_nodeValue))
    }
    _nodeValue.enabled = !_nodeValue.enabled
  }

  const createBaseSelect = ({ name, value, enabled }) => {
    const $select = $(
      `<div data-value="${value}" class="select ${
        enabled ? 'checked' : ''
      }">${name}</div>`
    )
    $select.click(onSelectClick)
    return $select
  }
  const _list = list
    .filter(({ enabled }) => enabled)
    .map(({ value, name }) => createBaseTag({ value, name }))
  const _selectList = list.map((ele) => createBaseSelect(ele))
  _list.forEach((e) => $wrapper.append(e))
  _selectList.forEach((e) => $menuWrapper.append(e))
  $wrapper.sortable({
    ghostClass: 'col-ghost',
  })
  return {
    getValue() {
      return [...dictOfValue]
        .filter((ele) => ele[1].enabled)
        .map((ele) => ele[1].value)
    },
    addOption({ name, value }) {
      if (dictOfValue.has(value)) return false
      dictOfValue.set(value, { name, enabled: true, value })
      $wrapper.append(createBaseTag({ name, value }))
      $menuWrapper.append(createBaseSelect({ name, value, enabled: true }))
      return true
    },
    removeOption(value) {
      const _value = dictOfValue.get(value)
      if (!_value) return false
      if (_value.enabled) {
        $menuWrapper.find(`[data-value="${_value.value}"]`).remove()
      }
      $wrapper.find(`[data-value="${_value.value}"]`).remove()
      dictOfValue.delete(value)
      return true
    },
  }
}
