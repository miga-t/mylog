---
title: "Goの基本文法"
date: "2023-05-3"
---

### 変数宣言

#### 型と初期値を指定

```go
var x int = 10
```

#### 初期値を指定(型を省略)

```go
var x = 10
```

#### 型を指定(初期値を省略)

```go
var x int
```

#### 同じ型の複数の変数を宣言(初期値を省略)

```go
var x,y int = 10,20
```

#### 演算子:=を使用して宣言

```go
x := 10
y,z := 20,30
```

-   型を省略した場合、変数の型は右辺の初期値の型になる。

-   右辺の初期値がリテラル（untyped constant)の場合、そのリテラルの default type が変数の型になる。
    `var x = 10`の場合、右辺`10`の default type が int なので、 変数`x`の型が int なる。

-   Go のコンパイラーは**関数内部で**変数を宣言した場合、その変数を使用しないことを禁止している。
    つまり、一度は使用する必要がある。

-   演算子`:=`を使用した変数宣言は、**関数内部でのみ**使用可能。

-   関数外のパッケージブロックでの変数宣言は、`var x ...`を使用して宣言する。
    また、パッケージブロックで宣言された変数を使用しなくてもエラーにはならない。

#### 基本型のゼロ値(zero values)

-   boolean : false
-   Numeric : 0
-   String : ""
-   function : nil
-   pointer : nil
-   map : nil
-   slice : nil
-   chan : nil
-   interface : nil

### 定数(Constants)

-   定数は、リテラルに名前をつけるためのもの
-   定数は、リテラル定数と名前付き定数に分類される。
-   リテラル定数には、整数リテラル、浮動小数点数リテラル、rune リテラル、文字列リテラル,複素数リテラルがある
    -   整数リテラル : 1_000_000, 1e3, 1e0, 1e-1, 0b10000, 0o20, 0x10
    -   浮動小数点数リテラル : 0.1, .25, 6.67428e-11,
    -   rune リテラル : 'A' , '\n',
    -   文字列リテラル : "Hello" , `Hello`
    -   複素数リテラル : (1+1i)
-   リテラル定数(リテラル)は、型がないのでリテラルと互換性を持つ変数に代入できる
-   名前付き定数は、`const`を使用して宣言する

```go
const G float64 = 6.67430e-11
```

-   定数は一度宣言された後に変更することはできない。
-   定数は、コンパイル時に計算される。
-   定数は、未使用であった場合コンパイル時にバイナリファイル（実行可能ファイル)に含まれないので、未使用定数はエラーにならない。
-   定数には、型付き定数(typed constants)と型なし定数(untyped constants)がある
    -   型付き定数は、同じ型の変数にのみ代入が可能
    -   型なし定数は、リテラル定数と同じ挙動をする

### 型

-   型は、その型に対応する値の集合を表す。
-   変数の型は変数宣言時に明示的に指定することによってか、または初期値の型によって決定される。
-   変数には、指定した型に対応する値のみ代入可能
-   基本型の種類
    -   論理型
    -   数値型
    -   文字列型
-   複合型(複合データ型)の種類
    -   配列型
    -   スライス型
    -   マップ型
    -   構造体型
-   その他の型
    -   ポインタ型
    -   関数型
    -   インターフェース型
    -   チャネル型

#### 数値型

-   整数型、浮動小数点型、複素数型がある
-   整数型には、8 種類の型がある
    -   int8
    -   int16
    -   int32
    -   int64
    -   uint8
    -   uint16
    -   uint32
    -   uint64
-   整数型には、特殊な型がある

    -   int
    -   byte
    -   uint
    -   rune
    -   uintptr

-   int 型のサイズは、CPU のアーキテクチャに依存し 64bit の CPU の場合は,int64 と同じサイズである
-   byte は uint8(0 ~ 255)の別名
-   整数の演算子は、+ ,- ,\* ,/ の四則演算と % の剰余計算
-   整数の比較は、== , != , > , >= , < , <= を使用

### 配列

```go
var x [3]int
```

この配列の宣言では、初期値が指定されていないので各要素は int のゼロ値(0)

```go
var x [3]int = [3]int{1,2,3}
```

上記の変数宣言では、初期値に配列リテラル`[3]int{1,2,3}`を設定

`[10]int{1, 5: 2, 3, 8: 5}`の値は,[1 0 0 0 0 2 3 0 5 0]

```go
var a = [...]int{100, 200}
```

配列リテラルの型の大きさを省略できる

配列型は、大きさと各要素の型を組み合わせた型なので、[3]int と[4]int は型が異なる

配列の型(要素の型と配列サイズ)は、コンパイル時に決定されるのでサイズの指定に変数は使用できない

### スライス

スライスは、可変長のスライス

スライスは、配列型のようにスライスのサイズが型に含まれない

スライスの宣言時は、大きさを指定しない

```go
var x []int = []int{1,2,3}
```

[]を[...]や[3]にしてしまうと、配列になる

```go
var slice []int
var array [3]int

fmt.Println(slice == nil, array == [3]int{})

output : true true
```

スライスのゼロ値は nil

スライスは、スライス同士で比較ができないが nil と比較は可能

```go
slice = append(slice, 1)
```

スライスの後尾に要素を追加する場合, 組み込み関数 append の第 2 引数以降に値を指定

```go
slice3 = append(slice1,slice2...)
```

スライスは、append 関数の第 2 引数で展開して要素を指定できる

スライスは、スライスから部分を切り出して生成することができる。

```go
seg := slice[1:4]
```

このサブスライスは、親スライスとメモリを共有する。

サブスライスの変更は、同じメモリを参照するスライスに影響を与える。

フルスライス式を使用して、append による上書きを防ぐことができる。

文字列は、バイト列（バイトのスライス）で構成される。

文字列は、UTF-8 でエンコードされたバイトの列で構成される。

文字列 (string)⇔ バイトのスライス ([]byte) 間の型変換はよく行われる。

```go
var b []byte = []byte("Hello")

s := string(b)

fmt.Println("b : ", b)
// > b :  [72 101 108 108 111]

fmt.Println("s : ", s)
// > s :  Hello

```

文字列の各文字は、スライスと同様にインデックスで指定して取り出せる。

```go
var b byte = str[6]
```

### マップ

```go
var mp map[string]int
```

上記のマップの変数宣言は、変数 mp に nil マップを割り当てる

nil マップに key-value を割り当てることはできない

マップに key-value を割り当てる場合、以下のようにマップリテラルで宣言する

```go
var mp = map[string]int{}
var order = map[string]int{"orange":4,"lemon":2}
```

上記の変数 mp,order は、宣言後に key-value を割り当てることができる

```go
order["apple"] = 5
```

`delete(order,"orange")` で要素を削除できる

要素の間で順番に意味をもたない場合はマップを使用し、順番をもたせたい場合はスライスを使用する。

存在しない key をマップに指定してアクセスした場合、value の型のゼロ値が返る

### 構造体

構造体は、関連するデータをまとめたもの。各データはフィールドと呼ばれる。

```go
var person struct {
	name string
	age  int
}
```

person には、`struct {...}`のゼロ値が割り当てられる。

```go
var animal = struct {
	name string
	age  int
}{
    name : "Tom",
    age : 43
}
```

type 宣言で構造体型に名前をつける

```go
type Animal struct {
	name string
	age  int
}
```

---

### 識別子

識別子は、変数や型などの実体に名前をつけるためのもの

識別子は、英字と数字で構成される

識別子の頭文字は、必ず文字にする。

識別子に使えないキーワードがある。以下のキーワードが**予約されている。**

```go
break default func interface select

case defer go map struct

chan else goto package switch

const fallthrough if range type

continue for import return var
```

いくつかの識別子は、事前に**宣言されている**。以下が事前に宣言された識別子。

```go

bool int float64 string rune

true false iota

nil

append make len cap panic print println

```

これらの事前に予約された識別子は、ユニバーサルブロックで宣言されている。

### ブロック

ブロックは、変数や関数が宣言される場所。

宣言とは、識別子と定数、型、変数、関数、パッケージを結びつけること

すべての識別子は、宣言されてなければならない。

ブロック内で同じ識別子の宣言を２度してはらなない

事前に予約された識別子のスコープは、ユニバーサルブロック。

関数外で宣言された識別子や関数自身のスコープは、パッケージブロック。

パッケージ内で宣言された関数は、同じパッケージに属する違うファイル内でも使用可能。

インポートされたパッケージのスコープは、ファイルブロック。

ブロックは外側のブロックに属する識別子を参照することができる。その逆はできない。

外側のブロックで宣言された識別子と同じ識別子を内側のブロック内で宣言した場合、外側の識別子を参照できなくなる。(シャドーイング)

```go
fmt.Println(true) // true
true := "Hello"
fmt.Println(true) // Hello
```

`true`は、ユニバーサルブロック内で宣言されている識別子なので、内側ブロックで同一名の`true`を識別子として再宣言された場合、元のブール型の`true`を参照することはできなくなる。

開発者は主にパッケージブロック内、関数内で識別子を宣言することになるので、外側のブロックに何が事前に宣言されているかを注意する必要がある。

![block image](https://storage.googleapis.com/mylog13/blocks1.png)

### 制御構文

#### if 文

```go
if 条件 {
    文1
} else {
    文2
}
```

条件は(...)で囲まず、直接書く

```go
if 変数宣言 ; 条件 {
    文1
} else {
    文2
}
```

キーワード if の次で宣言された変数は、条件、if のブロック、else のブロック内で使用可能

#### for 文

反復処理を表現する方法は,for 文のみ。

for 文は、いくつかの種類がある。

```go
for i := 0; i < 10; i++ {
	fmt.Println(i)
}
```

標準的な for 文。初期化は、演算子 := で宣言しなければならない。

条件は、初期化の後と更新の後に評価される

初期化 ; 条件 ; 更新 を一つも設定しなかった場合、無限ループを生成できる。

キーワードの break を使用して,for 文のブロックから抜け出せる。

キーワードの continue を使用して,更新部分にスキップする事ができる。

### switch

switch 文 の構文 ↓

```go
switch 変数宣言 ; 変数 {
    case 値:
        文
    case 値:
        文
    default:
        文
}
```

\*変数宣言は省略可能

具体例 ↓

```go
switch size := utf8.RuneCountInString(v); size {
case 1, 2, 3, 4:
	fmt.Println(v, "is", "a few letters")
case 5, 6, 7:
	fmt.Println(v, "is", "many letters")
case 9:
default:
	fmt.Println(v, "is", "too many letters")
}
```

比較対象の変数を省略(blank switch) ↓

```go
switch size := utf8.RuneCountInString(v); {
case size < 3:
	fmt.Println(v, "is", "a few letters")
case size >= 3 && size < 9:
	fmt.Println(v, "is", "many letters")
case size >= 9:
default:
	fmt.Println(v, "is", "too many letters")
}
```

変数部分を省略した場合、case 節には boolean 型の値に評価される式を指定する必要がある。

### 関数

main 関数は、go プログラムの実行開始場所(エントリーポイント)

関数の型を構成するのは,キーワード func と引数の型と返り値の型 ↓

```go
func xRepeat(x string, n int) string {
	var store string
	for i := 0; i < n; i++ {
		store += x
	}
	return store
}
```

xRepeat 関数の型は、func(string, int) string

関数の引数の最後に、可変長引数を設定することができる ↓

```go
func plus(a int, b int, x ...int) int {
	tmp := 0
	for _, v := range x {
		tmp += v
	}

	return a + b + tmp
}
```

関数は値として扱われる

Go 言語の関数は値渡し

## ポインタ

```go
var x *int
y := 99

fmt.Println(x == nil) // true
x = &y
fmt.Println(x == nil) // false

fmt.Println(*x)
```

`var x *int`は int 型のポインタ型の変数宣言

変数 x は、int 型の値のアドレスを保持する

int 型のポインタ型のゼロ値は、nil

nil を格納するポインタ変数をデリファレンスするとパニックになる ↓

```go
var x *int
fmt.Println(*x) // panic
```

基本型のリテラルや定数は、演算子`&`でアドレスを取得できない ↓

```go
pstring := &"Hello" // error
prune := &'A' // error
pint := &1 // error
```

複合型(配列、スライス、マップ、構造体)リテラルは、演算子`&`でアドレスを取得できる ↓

```go
fmt.Printf("%p\n", &map[string]int{"apple": 20}) // 0x400000e028
fmt.Printf("%p\n", &[3]int{2, 3, 67}) // 0x40000160a8
fmt.Printf("%p\n", &[]int{2, 3, 67}) // 0x400000c030
fmt.Printf("%p\n", &struct {
	name string
}{
	name: "Tom",
}) // 0x4000010260
```

## 参考

[https://go.dev/doc/](https://go.dev/doc/)
