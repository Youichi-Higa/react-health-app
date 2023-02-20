# React Health App

## 使用技術
- TypeScript
- React.js
- react-circle
- Recharts
- TailwindCSS
## 実行手順
```bash
# インストール
$ npm install
# 実行
$ npm run start
```
## 苦労したところ
- 達成率と体重・体脂肪率の折線グラフを描画するのが一番苦労しました。
- 今まで同様の実装をしたことがなかったので、まずは自力で実装できるか考えてみたところ、かなり困難で時間も相当かかりそうだったため、ライブラリを探すことにし、達成率はreact-circle、折線グラフはRechartsを利用することにしました。
- react-circleはそれほど時間をかけずに実装できましたが、Rechartsは設定項目が多く、ドキュメントもTailwindCSSやMUIほどは充実していなかったので、時間がかかりました。CodeSandboxで設定項目を様々な値に変更させて試行錯誤しながら実装しました。
