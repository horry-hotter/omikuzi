console.log('test');

type Unsei = "大吉" | "中吉" | "吉" | "小吉" | "凶" | "大凶"

interface Omikuji {
    unsei: Unsei;
    message: string;
}

class OmikujiBox{
    private box: Omikuji[];
    
    // クラス生成時に実行
    constructor() {
        this.box = [];
    }

    // おみくじの内容を登録
    addOmikuzi(omikuji: Omikuji){
        this.box.push(omikuji);
    }

    // おみくじを引く際に使う
    pickupOmikuzi(){
        const omikuji = this.box[Math.floor(Math.random() * this.box.length)]
        this.printUnseiInformation(omikuji)
    }

    // 運勢の中身を確認
    printUnseiInformation(omikuji: Omikuji){
        console.log(`運勢は${omikuji.unsei}です！ ${omikuji.message}`);
    }
}

// 運勢のセット
const customer = new OmikujiBox();

for (const message of ['神...','今年は勝ち確！','極運']) {
    customer.addOmikuzi({
        unsei: '大吉',
        message,
    });
}
for (const message of ['中々の運の持ち主','今日は勝ち確','よし！','強運','いえい！']) {
    customer.addOmikuzi({
        unsei: '中吉',
        message,
    });
}
for (const message of ['カレーライス','オムライス','ビーフシチュー','クリームシチュー','ピラフ','ピザ','フライドチキン','コーンポタージュ']) {
    customer.addOmikuzi({
        unsei: '吉',
        message,
    });
}
for (const message of ['おお...','ああ...','ふう...','ほほう...','へえ...',]) {
    customer.addOmikuzi({
        unsei: '小吉',
        message,
    });
}
for (const message of ['ドンマイ！','逆に考えるんだ。むしろ運が良いと','厄を払ったと考えよう']) {
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

// 中身を確認
//customer.printUnseiInformation();

// おみくじ実行
customer.pickupOmikuzi();






