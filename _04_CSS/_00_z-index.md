- 对于同级元素，默认(或 position:static)情况下文档流后面的元素会覆盖前面的。
- 对于同级元素，position 不为 static 且 z-index 存在的情况下 z-index 大的元素会覆盖 z-index 小的元素，即 z-index 越大优先级越高
- IE6/7 下 position 不为 static，且 z-index 不存在时 z-index 为 0，除此之外的浏览器 z-index 为 auto。
- z-index 为 auto 的元素不参与层级关系的比较，由向上遍历至此且 z-index 不为 auto 的元素来参与比较。

1. 顺序规则：如果不对节点设定 position 属性，位于文档流后面的节点会遮盖前面的节点。
2. 定位规则：如果将 position 设为 static 不会影响节点的遮盖关系
3. 定位规则：如果将 position 设为 relative (相对定位)，absolute (绝对定位) 或者 fixed (固定定位)，这样的节点会覆盖没有设置 position 属性或者属性值为 static 的节点，说明前者比后者的默认层级高。
4. 参与规则：不用 position 属性, 但为节点加上 z-index 属性. 发现 z-index 对节点没起作用 z-index 属性仅在节点的 position 属性为 relative, absolute 或者 fixed 时生效.
5. 默认值规则：

- 如果所有节点都定义了 position:relative. z-index 为 0 的节点与没有定义 z-index 在同一层级内没有高低之分;
- 但 z-index 大于等于 1 的节点会遮盖没有定义 z-index 的节点; z-index 的值为负数的节点将被没有定义 z-index 的节点覆盖.

6. 从父规则：

- 如果 A, B 节点都定义了 position:relative, A 节点的 z-index 比 B 节点大, 那么 A 的子节点必定覆盖在 B 的子节点前面.
- 如果所有节点都定义了 position:relative, A 节点的 z-index 和 B 节点一样大, 但因为顺序规则, B 节点覆盖在 A 节点前面. 就算 A 的子节点 z-index 值比 B 的子节点大, B 的子节点还是会覆盖在 A 的子节点前面.
