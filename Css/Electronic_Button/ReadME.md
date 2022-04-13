Adjacent sibling combinator（同層相鄰選取器）
    
    E + F，利用+區隔兩個元素，表示在與 E 同一層關係的相鄰 F 元素才會套用。

    CSS
        h1 { color:red;}
        h1 + p { color:green;}
    
    HTML
        <h1>標題1會套用紅色</h1>
        <p>跟h1相鄰的p會套用綠色</p>
        <p>沒有跟h1相鄰的p會套用預設值</p>

General sibling combinator（同層全體選取器）
    
    E ~ F，利用~區隔兩個元素，表示在與 E 同一層關係的 F 元素全部都會套用。
    
    p.s. 不過這是CSS 3的選取器。目前並沒有所有瀏覽器都支援，Dreamweaver CS4也沒支援。
    
    CSS
        h1 { color:red;}
        h1 ~ p { color:green;}
    
    HTML
        <h1>標題1會套用紅色</h1>
        < p>h1接下來p都會套用綠色</p>
        < p>h1接下來p都會套用綠色</p>

Pseudo-classes（偽類選取器）
    
    這個名詞可能許多人都覺得陌生，但提到a:link、a:visited、a:hover、a:active應該就很熟悉了吧！

    :link //連結平常的樣式
    :visited //連結查閱後的樣式
    :hover //滑鼠滑入的樣式
    :active //滑鼠按下的樣式
    :focus //目標為焦點的樣式
    :lang(E) //當語言為E的樣式
    :first-child //第一個元素的樣式

參考來源 ： https://injerry.pixnet.net/blog/post/38847966

CSS筆記2 樣式選擇器(selector)重點整理
參考來源 ：  https://ithelp.ithome.com.tw/articles/10159163

CSS沒有極限 - Checkbox的妙用
參考來源 ：  https://wcc723.github.io/css/2013/10/07/css-chechbox/

CSS 的 Selector Combinators
參考來源 ：  https://dwatow.github.io/2017/12-24-iron-man-2018/iron-man-2018-day14/


ReadME