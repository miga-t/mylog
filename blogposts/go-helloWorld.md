---
title: "GoでHello World"
date: "2023-05-3"
---

## Go 言語(version 1.19)で Hello World を出力する方法

### 説明

#### · goHello ディレクトリを作成する

```
mkdir goHello
cd goHello
```

#### · go.mod ファイルを作成

```
go mod init github.com/[username]/goHello
```

-   go mod init コマンドは、オプション引数で指定したモジュール名で新しいモジュールを作成する。
-   このモジュール名には、通常このモジュールが格納される場所のパスを設定する。(ex. github.com/[username]/[repositoryname])

#### · main.go を作成

```
touch main.go
```

#### · Hello World を出力

main.go に以下のコードを書き込む

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello, World!")

}
```

-   main パッケージを最初に宣言する
-   fmt パッケージを import する
-   fmt パッケージの [Println](https://pkg.go.dev/fmt#Println)関数は、実引数に指定した文字列"Hello, World!"を標準出力に書き込む

### 補足

### 引用元

[https://go.dev/doc/](https://go.dev/doc/)
