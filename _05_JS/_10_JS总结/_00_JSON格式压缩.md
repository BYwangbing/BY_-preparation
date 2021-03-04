- 将 JSON 的 key 进行缩短: key 进行缩短优化
- 将 JSON 压缩成一行，去掉换行和空格字符

## 三、使用压缩算法进行压缩

### 3.1 使用 Deflater 压缩 json，Inflater 解压 json

### 3.2 使用 Gzip 压缩解压 json

### CJSON 的压缩算法, 主要是将资料抽离成 Template 与 Value,节省掉重复的 "Key 值".

### HPack 的压缩算法, 也是将 Key, Value 抽离, 阵列中第一个值, 就是 HPack 的 Template, 后面依序就是 Value.
