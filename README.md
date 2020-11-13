# egg-ts后端

椰子皮博客后端api

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7012/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 数据库
具体请看egg的文档 https://eggjs.org/zh-cn/tutorials/sequelize.html

#### 同步数据库
```
npx sequelize db:migrate // 同步/升级数据库

```

#### 创建迁移文件
```
npx sequelize migration:generate --name=init-users //
```


### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
