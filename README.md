[url](https://tianyili.github.io/sortable-test/)

used

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.10.2/Sortable.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-sortablejs@latest/jquery-sortable.js"></script>
```

copy index.html `initializeSimpleDragDrop` function

basic structure

```ts
interface ListOfSortable {
  name: string
  value: string
  enabled: boolean
}

function initializeSimpleDragDrop(
  $wrapper: JQuery,
  $menuWrapper: JQuery,
  list: ListOfSortable[]
): {
  getValue: () => string[]
  addOption: ({ name, value }: { name: string; value: string }) => boolean
  removeOption: (value) => boolean
}
```

get the sorted list

```js
const list = menu.getValue()
```
