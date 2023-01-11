console.log('test');

class omikuji{
    private omikujiBox: number = 25;
    id:number=0;
    private unseiBox: object[] = [];
    private unsei: object = {};
    //private id: number = 0;
    
    // クラス生成時に実行
    constructor() {
        
    }
    // おみくじの内容を登録
    addOmikuzi(id: number, name: string, message:string[]){
        this.unsei = {
            "id": id,
            "name": name,
            "message": message
        };
        this.unseiBox.push(this.unsei);
    }

    // おみくじを引く際に使う
    drawOmikuzi(){
        // for(let i=0; i < this.unseiBox.length; i++){
        // }
        let randomNumber = Math.floor(Math.random() * this.omikujiBox);
        //randomNumber = 24;

        // 乱数チェック
        console.log(randomNumber);
        
        // 大吉
        if(randomNumber >= 0 && randomNumber <= 2){
            console.log(this.unseiBox[0]);
        }
        // 中吉
        else if( randomNumber >= 3 && randomNumber <= 7 ){
            console.log(this.unseiBox[1]);
        }
        // 吉
        else if( randomNumber >= 8 && randomNumber <= 15 ){
            console.log(this.unseiBox[2]);
        }
        // 小吉
        else if( randomNumber >= 16 && randomNumber <= 20 ){
            console.log(this.unseiBox[3]);
        }
        // 凶
        else if( randomNumber >= 21 && randomNumber <= 23 ){
            console.log(this.unseiBox[4]);
        }
        // 大凶
        else {
            console.log(this.unseiBox[5]);
        }
    }

    // 運勢の中身を確認
    printUnseiInformation(){
        console.log(this.unseiBox);
        console.log(this.unseiBox.length);
    }
}

// 運勢のセット
const customer = new omikuji();

customer.addOmikuzi(1, '大吉', ['神...','今年は勝ち確！','極運']);
customer.addOmikuzi(2, '中吉', ['中々の運の持ち主','今日は勝ち確','よし！','強運','いえい！']);
customer.addOmikuzi(3, '吉', ['カレーライス','オムライス','ビーフシチュー','クリームシチュー','ピラフ','ピザ','フライドチキン','コーンポタージュ']);
customer.addOmikuzi(4, '小吉', ['おお...','ああ...','ふう...','ほほう...','へえ...',]);
customer.addOmikuzi(5, '凶', ['ドンマイ！','逆に考えるんだ。むしろ運が良いと','厄を払ったと考えよう']);
customer.addOmikuzi(6, '大凶', ['違う、これは大当たりの布石！']);

// 中身を確認
//customer.printUnseiInformation();

// おみくじ実行
customer.drawOmikuzi();






