---
title: "Tips·Memo"
date: "2100-01-01"
---

-   半角の`·`の入力方法は、[option][Shift] + [9]です。(Mac の場合)

-   言語は、コンピュータに命令を与えるためのもの。
    -   実装できる機能の範囲に、言語間に大きな差はない。つまり、どの言語を使用しても想定している機能を実装できる。(?)
    -   実装する機能の性能は、言語によって大きく差が出る。したがって、言語毎に得意分野があるので、使い分ける必要がある。(?)
-   コードの評価基準
    -   バグが発生しにくいコード
    -   他人が読みやすいコード
    -   将来にわたってメンテナンスしやすいコード

### 値(value)

-   コンピュータ内部（CPU・メモリ・ディスク)で表現されるビット列
-   値（ビット列）に、型を与えることで整数値として演算したり、文字列として操作が可能となる

### データ

-   プログラミングの文脈では、データ = 値

### 型(データ型)

-   型は、値というビット列に意味を与えるための情報
-   値はビット列のままでは１と０の羅列なので、バイト(8bit)単位で型を与えることで様々な種類の値を扱うことができる
-   型は、無数にある値を系統的な集合に分割する。以下は,TypeScript の例
    -   ブール値`true`は、boolean の要素
    -   文字列`Hello World!`は、string の要素
    -   整数値`61`は、number の要素
-   型には、各型に固有の演算が定義される

### 式

-   式は、値の表現方法のひとつ。同じ値は、様々な形式で表現される
-   値は、抽象的なものではなく具体的で識別可能な表現
-   式`5*13`に等価な表現は、値はではなく、無数にある値のひとつの表現
-   コンピュータ内部はビット列のみで表現されるので,式`65`は`1000001`と表現される
-   式の型は、構成要素の式の型によって決まる
-   つまり、構成要素(式)の型から、全体の式の型が決まる

### 評価

-   式から値を決定すること
-   評価 = 計算
-   計算機に式`65`を渡すと、値`65`が決定する
-   計算機に式`x`を渡すと、値`1001`が決定する

## 仮説

-   A → B（定式）
-   A （行動）すれば、B （現象・効果）だろう (: 作業仮説)
-   仮説は検証することで更新される

## 合成 ←→ 分割

-   基本型を組み合わせる → 合成型（オブジェクト）
-   基本型と合成型を組み合わせる → 合成型（オブジェクト)
-   合成型を要素に分割 → 各要素は、変数に代入される、または合成型リテラルに組み込まれる
-   ↑ 分割された各要素は、使用されなくてならないため
