console.log(0.2 * 3 == 0.6);
// jsは内部的には数値を2進数で演算している．
// 0.2は2進数だと無限循環小数となるので，今回のように予期せぬ結果となることがあるので注意
console.log(((0.2 * 10) * 3) / 10 == 0.6);
// 少数は整数になおして計算すれば意図した結果が得られる
