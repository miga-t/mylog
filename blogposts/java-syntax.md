---
title: "Javaの基本文法"
date: "2023-05-8"
---

## 変数

### 変数宣言

```java
String str;
```

文の末尾に必ず`;`をつける。

### 変数に代入

```java
str = "The World Is Yours.";
```

### 参照

```java
System.out.println(str);
```

### 変数宣言&初期化

```java
String str = "The World Is Yours.";
```

### 型

#### 基本型

-   byte: 8 ビット符号付き整数
-   short: 16 ビット符号付き整数
-   int: 32 ビット符号付き整数
-   long: 64 ビット符号付き整数
-   float: 32 ビット単精度浮動小数点数
-   double: 64 ビット倍精度浮動小数点数
-   char: 16 ビット Unicode 文字
-   boolean: true または false の値

#### 参照型

-   String
-   インターフェース
-   配列

#### 型変換

```java
int x = 5;
int y = 2;
System.out.println(x/y); // 2
System.out.println(x/(float)y); // 2.5
```

型変換の構文は、`(Type)x`

#### 数値型(byte, short, int, long, float, double)

算術演算子は、`+ , - , * , / , %`

型のサイズは、byte, short, int, long, float, double の順で右に行くほど大きくなる。

#### 文字列型(String)

文字列型の連結は、演算子`+`で行う。

```java
String front = "The World ";
String back = "Is Yours.";

System.out.println(front + back); // The World Is Yours.
```

### 配列

## 制御構文

### if

### switch,

### for

### while

## オブジェクト指向プログラミング

Java は、オブジェクト指向プログラミング言語

オブジェクト指向は、データとそれに関連する操作をまとめた「オブジェクト」を中心にプログラムを構築していくアプローチ

オブジェクトは、クラス（テンプレート、設計図)を元に生成される。

クラスには、フィールドとメソッドが含まれる

フィールドとメソッドをまとめて、メンバーと呼ぶこともある
