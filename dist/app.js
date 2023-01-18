"use strict";
const button = document.querySelector('button');
const unseiOutput = document.getElementById("unseiOutput");
class OmikujiBox {
    constructor() {
        this.box = [];
    }
    addOmikuzi(omikuji) {
        this.box.push(omikuji);
    }
    pickupOmikuzi() {
        const omikuji = this.box[Math.floor(Math.random() * this.box.length)];
        this.printUnseiInformation(omikuji);
    }
    printUnseiInformation(omikuji) {
        unseiOutput.textContent = `運勢は${omikuji.unsei}です！ ${omikuji.message}`;
    }
}
const customer = new OmikujiBox();
for (const message of ['神...', '今年は勝ち確！', '極運']) {
    customer.addOmikuzi({
        unsei: '大吉',
        message,
    });
}
for (const message of ['中々の運の持ち主', '今日は勝ち確', 'よし！', '強運', 'いえい！']) {
    customer.addOmikuzi({
        unsei: '中吉',
        message,
    });
}
for (const message of ['カレーライス', 'オムライス', 'ビーフシチュー', 'クリームシチュー', 'ピラフ', 'ピザ', 'フライドチキン', 'コーンポタージュ']) {
    customer.addOmikuzi({
        unsei: '吉',
        message,
    });
}
for (const message of ['おお...', 'ああ...', 'ふう...', 'ほほう...', 'へえ...',]) {
    customer.addOmikuzi({
        unsei: '小吉',
        message,
    });
}
for (const message of ['ドンマイ！', '逆に考えるんだ。むしろ運が良いと', '厄を払ったと考えよう']) {
    customer.addOmikuzi({
        unsei: '凶',
        message,
    });
}
for (const message of ['違う、これは大当たりの布石！']) {
    customer.addOmikuzi({
        unsei: '大凶',
        message,
    });
}
button.addEventListener('click', () => {
    customer.pickupOmikuzi();
});
//# sourceMappingURL=app.js.map