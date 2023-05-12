---
title: "Gitの基礎知識"
date: "2023-05-10"
---

## Git の基本概念

-   Git は、分散バージョン管理システム
-   バージョン管理システムは、大別して分散型と集中型がある
    -   バージョン管理システムの基本機能は、ソースコード・ドキュメント・画像など、様々な電子ファイルの編集履歴を記録・管理すること
    -   バージョン管理システムは、ファイルの状態をバージョンとしてリポジトリに記録する。
    -   ファイルの状態（バージョン）をリポジトリに格納する操作をチェックインとよぶ。
    -   リポジトリから特定のバージョンのファイルを取り出すことをチェックアウトと呼ぶ。
-   Git は、ディレクトリツリーの状態を一つのバージョンとしてリポジトリに格納する。この操作は、コミット(チェックイン)と呼ばれる
-   Git では、コミットしたディレクトリツリーの状態のこともコミットと呼ぶ。

## Git の構成要素

-   作業ツリーとは、開発者がソースコードを編集する場所
-   ステージングエリアとは、コミットする前に実際にコミットするディレクトリツリーを決める場所
-   Git は分散バージョン管理システムであるので、プロジェクトのリポジトリを複数箇所で管理する事ができる
-   Git は、リモートサーバに置いた裸のリポジトリをローカルに複製し、このローカルリポジトリを編集し、リモートリポジトリに変更点を反映していく

以下は、Git の概念図

![Git Image](https://storage.googleapis.com/mylog13/Git-image1.png)

## Git のコマンド

### Git コマンドの構文

```
git [サブコマンド]
```

-   例 1 git help [サブコマンド]
-   例 2 git config --global -l
    -   git help はサブコマンドの詳細を調べるために使用する
    -   [--global]オプションは、~/.gitconfig の各項目の変数を設定
        -   `git config --global init.defaultBranch main`は初期ブランチの名前を main にする
    -   [--local]オプションは、 .git/config の各項目の変数を設定
        -   git config --local [...]
-   例 3 git --version

    -   バージョンの確認

### リポジトリをつくる

```
git init
```

-   カレントディレクトリに.git ディレクトリを作成する
-   .git ディレクトリに、ステージングエリア・リポジトリ等の情報が格納されている

### ステージングエリアにステージする

```
git add [ファイル・ディレクトリ]
```

`git add .`で作業ツリー内のすべてディレクトリ・ファイルをステージする

### コミットする

```
git commit
```

-   ステージングエリアをリポジトリの現在ブランチの先端にコミットする
-   コミットすると設定ファイルの core.editor 変数に設定したエディタが開く
    -   git config --global core.editor code --wait で vscode が開くように設定できる
-   開いたエディタで、コミットメッセージを入力する。エディタを閉じるとコミットがつくられ、リポジトリに格納される
-   コミットを特定するために、各コミットにハッシュが割り振られている
    -   ハッシュの例:b2e397103e921c4b36a5856646e2d6c8e967ecc6
    -   ハッシュは、git log で確認できる
-   Git は、現在の最新のコミットを指すポインタをもつ。このポインタを HEAD と呼ぶ
-   HEAD は、コミットするたびにその新しいコミットを指すように移動する
-   HEAD が指していたコミットを親コミット、新しいコミットを子コミットと呼ぶ
-   コミットを続けると以下のような構造ができる。これをコミットグラフと呼ぶ

![commit graph](https://storage.googleapis.com/mylog13/Git-image2.png)

-   子コミットは親コミットのハッシュをもつ

### 履歴を見る

```
git log
```

### 差分を見る

```
git status
```

-   git status は、HEAD が指すコミット・ステージングエリア・作業ツリーの差分を表示する
-   差分を見るコマンドは、git diff,git show などがある

### git の管理からファイルを除外する

-   .gitignore は、git の管理から除外するファイルを設定する

## ブランチ

![git branch image](https://storage.googleapis.com/mylog13/Git-image3-2.png)

-   ブランチは、履歴の枝分かれ
-   ブランチは、一連のコミットの先端を指すポインタ
-   ブランチは、その一連のコミットの履歴全体を指す場合もある
-   上の画像において、HEAD が main ブランチ（ポインタ）を指しているので、今コミットしようとしている最新のコミットは main ブランチに接続される。
-   別ブランチの変更履歴を HEAD が指すブランチ（カレントブランチ）に取り込む操作をマージと呼ぶ

Git は、CLI よりも vscode の GUI を用いたほうが操作しやすい

### ブランチの操作コマンド

#### ブランチの一覧を表示する

```
git branch
```

-   ＊がついたブランチが、現在のブランチ(HEAD が指すブランチ)
-   `git branch -v`で、各ブランチが指すコミットの情報が表示される

#### ブランチをつくる

```
git branch [新しいブランチの名前]
```

`git branch [新しいブランチの名前]`は、HEAD が指すコミットに新しいブランチを作成する

#### ブランチを切り替える

```
git checkout [ブランチ]
```

-   ブランチをチェックアウトするとは、そのブランチが指すコミットに作業ディレクトリを移すこと
-   ブランチをチェックアウトすると、HEAD が対象のブランチを指す
-   ブランチをチェックアウトすると,対象ブランチが指すコミットの内容が作業ツリーとステージングエリアにコピーされる
-   したがって、チェックアウトする前に作業ツリーとステージングエリアがクリーン（未コミットの変更がない）にしておく

#### 他ブランチの変更を取り込む

```
git merge [他ブランチ]
```

-   `git merge [他ブランチ]`によって、他ブランチの分岐以降の変更差分を現在ブランチの先端コミットに適用する
-   git merge は、他ブランチの変更差分を自動的に適用する。
-   この自動適用が失敗すると、コンフリクトを起こす
-   コミットが起きた場合、手動で変更を適用し改めてコミットする。

#### ブランチの削除

```
git branch -d [ブランチ]
```

#### コミットをチェックアウト

```
git checkout [コミット]
```

-   リポジトリ内の任意のコミットに HEAD を移動させる
-   つまり、任意のコミットをチェックアウトする
-   この時、HEAD は切り離された状態(detached)になる
-   git checkout は、ブランチ以外のものを指定したら HEAD は切り離された状態になる
-   HEAD が切り離された状態のとき、HEAD が指すコミットにコミットを加えてもどこのブランチにも関連付けられない
-   したがって、別のブランチに移動した時、detached HEAD による関連付けがないコミットにはアクセスできなくなる

#### ブランチの作成とチェックアウトを同時に行う

```
git checkout -b [新しいローカルブランチ名] [場所(コミット、ブランチ、タグ)]
```

#### 3 方向マージ・早送りマージ

3 方向マージ(3 way merge image)

![3 way merge](https://storage.googleapis.com/mylog13/Git-image4-3way-merge.png)

早送りマージ(fast forward merge image)

![fast forward merge](https://storage.googleapis.com/mylog13/Git-image5-ff-merge.png)

## タグ

-   タグはコミットに名前をつけるためのもの
-   タグには以下の三種類ある
    -   軽量タグ ··· タグに名前だけをつける
    -   注釈付きタグ ··· 名前の他に情報をつける
    -   署名付きタグ
-   タグは、ブランチや HEAD と同様に、コミットを指すポインタ
-   タグをチェックアウトすることはできるが、detached HEAD になる

### タグ操作のコマンド

#### タグの一覧を表示

```
git tag
```

#### 軽量タグをコミットにつける

```
git tag [タグ名] [コミット]
```

#### 注釈付きタグをコミットにつける

```
git tag -a [タグ名] [コミット]
```

#### タグをコミットから取り外す

```
git tag -d [タグ名]
```

## リモートリポジトリ

### リポジトリの基本知識

-   リポジトリは、＊＊＊.git という名前のディレクトリとして作られる
-   ローカルリポジトリは、./.git という名前のディレクトリ
-   リモートリポジトリは、https://github.com/miga-t/mylog.gitのようにURLで表される。
-   リモートリポジトリは、./\*\*\*.git という名前のディレクトリ
-   Git では、リモートリポジトリは単に**リモート**と呼ばれる

### リモートリポジトリ

#### git remote

```
git remote add origin https://github.com/miga-t/gitx01.git
```

-   `git remote add [リモート名] [リモートリポジトリのURL]`は、ローカルリポジトリと指定したリモートリポジトリを対応付ける。
-   リモート名には好き名前をつけられるが、慣習的に上流リポジトリを表す origin がつけられる
-   上流リポジトリは、ローカルリポジトリの元となったリモートリポジトリを指す
-   `git remote -v`でリモートとローカルリポジトリの対応付けを確認できる

#### git push

```
git push [リモート名] [ローカルブランチ名]
```

-   リモートリポジトリは裸のリポジトリなので、変更履歴の格納はローカルリポジトリとの通信によって行われる
-   ローカルリポジトリからリモートリポジトリにデータを送信するためには、ブランチをプッシュする
-   データの送信は、リポジトリ全体ではなくブランチ単位で行う
-   上記の git push コマンドは、リモートリポジトリ origin にローカルブランチ main を送信するという機能をもつ。
    -   この時、空のリモートリポジトリ origin にリモートブランチ main が作られる
    -   同時に、ローカルリポジトリに origin/main という名前のリモート追跡ブランチが作られる
-   リモート追跡ブランチ origin/main とリモートブランチ main は、同じコミットを常に指す
-   push 時に、リモートブランチ main の先端に、origin/main 以降のコミット列を接続する。
-   リモート追跡ブランチにコミットしても伸ばすことはできない。その場合、HEAD は detached になる。

#### git clone

```
git clone [リモートリポジトリのURL]
```

-   `git clone`はリモートリポジトリをローカルリポジトリに複製する
-   `git remote add origin <リモートURL>`が自動的に実行され、リモート origin が設定される

#### git fetch

```
git fetch origin main
```

-   リモート origin のリモートブランチ main を、ローカルリポジトリに追加する
-   リモート追跡ブランチ origin/main が更新され、リモートブランチ main と同じコミットを指す
-   ローカルブランチ main は変化しない
-   fetch したあとに、ローカルブランチ main をリモートブランチ main と同じコミットを指すようにするために、リモート追跡ブランチ origin/main をローカルブランチ main にマージする
-   早送りマージを指定する場合は、オプション`--ff-only``をつける

```
git merge --ff-only origin/main
```

#### git pull

-   `git pull [リモート名] [リモートブランチ名]`
-   pull は、fetch と merge をまとめて実行する。
-   ローカルブランチ main をリモートブランチ main で更新したい場合は、以下のコマンドを実行

```
git checkout main
git pull origin main
```

-   ローカルブランチ main にチェックアウトしてから、リモートブランチ main をプルする。

#### 上流ブランチ

-   ローカルブランチと上流リポジトリのブランチを対応付けて、ローカルブランチに上流ブランチを設定できる

    -   上流リポジトリが他の開発者によって頻繁に更新される場合、上流リポジトリのブランチをプルする回数が多くなる。
    -   git pull コマンドで、リモート名とリモートブランチ名の指定を省略することができる
        -   `git pull`で現在ブランチに上流ブランチの更新を取り込める

-   以下のコマンドで、main(ローカル)と origin/main(リモート)を対応付けることができる

```
git checkout main
git branch -u origin/main
```

-   以下のコマンドで、ローカルブランチに上流ブランチが設定されているか確認できる。

```
git branch -vv
```

-   以下のコマンドで、push 時にローカルブランチに上流ブランチを設定することができる

```
git push -u リモート ローカルブランチ
```

#### クローン時の挙動

-   リモートリポジトリをクローンしたとき、リモートのデフォルトブランチ(main,master)をローカルで生成しチェックアウトする。
-   クローン時、デフォルトブランチ以外のリモートブランチについては、リモート追跡ブランチは生成されるがローカルブランチは生成されない
-   したがって、リモート追跡ブランチに対応付いたローカルブランチを生成し、チェックアウトすることを考える

```
git checkout -b proc origin/proc
```

-   `git checkout -b [ローカルブランチ名] [リモート追跡ブランチ名]`を実行した時、ローカルブランチをリモート追跡ブランチが指すコミットに生成し、ローカルブランチの上流ブランチにリモート追跡ブランチを設定する。
-   また、上記のコマンドと同じ機能を以下のコマンドでも可能

```
git checkout proc
```

#### 上流ブランチが設定されている場合(再)

-   現在ブランチに上流ブランチが設定されている場合、git pull の引数の指定を省略できる

```
git pull
```

-   上流ブランチの設定は、ローカル環境の.git/config に追加される
-   上流ブランチの設定は、git pull コマンドの引数を省略するため（？）

![git local/remote repository image](https://storage.googleapis.com/mylog13/Git-image6.png)

## コミット・パッチ

### コミットを捨てる

-   以下のコマンドで、HEAD が指すコミットを変更し、それ以降のコミットを捨てる

```
git reset --hard [コミット]
git reset  [コミット]
git reset --soft [コミット]
```

-   --hard は、作業ツリー・ステージングエリアが指定したコミットと同じ状態になる
-   未指定は、ステージングエリアが指定したコミットと同じ状態になる。作業ツリーに変更なし
-   --soft は、HEAD の位置が変更されるだけで、作業ツリー・ステージングエリアに変更なし
-   git reset で捨てたコミットは、二度と参照することができないので注意が必要

### コミットが行った変更(パッチ)を打ち消す

```
git revert [コミット]
```

-   指定したコミットで適用した変更差分が打ち消されたコミットを追加する
-   `git revert HEAD`を実行した場合、以下の画像のようになる。

![git patch image](https://storage.googleapis.com/mylog13/Git-image7-patch.png)

-   コミット B とコミット A の変更差分を、パッチ(B-A)と呼ぶ。
-   コミット B を生成するとは、コミット A にパッチ B-A を当てることと考えられる
-   パッチ B-A は、`git diff A B`で確認できる
-   パッチを当てる = パッチを適用する
-   コミット B が行った変更は,パッチ B-A(B^) と表現できる
-   git revert は、指定したコミットが行った変更（パッチ）を打ち消すことができる
-   git revert は、コミットを取り消したという事実を新しいコミットの形で残すので、コミットを完全に消去する git reset より優先して使用すべき

### 任意のコミットの変更（パッチ）を適用

```
git cherry-pick [コミット]
```

-   パッチを適用したいブランチをチェックアウトして、git cherry-pick を実行する

### ブランチの根本を変更する

```
git rebase [ブランチ]
```

・`git rebase main`は、dev ブランチの根本を main ブランチの先端に変更する

![rebase image](https://storage.googleapis.com/mylog13/Git-image8.png)

-   `git rebase`は、ブランチの分岐が複雑になってしまったリポジトリを整理する用途で使用される

## .git ディレクトリ内部の詳細

## 参考

[動かして学ぶ！Git 入門](https://www.shoeisha.co.jp/book/detail/9784798170855)

-   図解を用いて説明されているので、非常にわかりやすい。