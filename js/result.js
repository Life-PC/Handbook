window.onload = function() {
    let qustionCount = getParam('d');
    let ansCount = getParam('a');
    document.getElementById('resultNum').innerText = qustionCount + "問中 " + ansCount + "問正解";

    let htmlText = '<tr><th>No</th><th>問題文</th><th>回答</th><th>正解</th></tr>';
    for (let i = 0; i < qustionCount; i++) {
        let param = getParam('q' + i);
        let paramArray = param.split('-')
        let chapter = Number(paramArray[0]);
        let qustionNo = Number(paramArray[1]);
        let ansCheck = Number(paramArray[2][0]);
        let qustionText = questionTextGroup[chapter][qustionNo][1];
        let choice = questionTextGroup[chapter][qustionNo][2].split(',')[paramArray[2][1]];
        let ansText = questionTextGroup[chapter][qustionNo][3];

        htmlText = htmlText + '<tr class="' + (ansCheck === 0 ? choice === ansText ? '' : 'ansCheckFalse' : 'ansCheckTrue') + '">';
        htmlText = htmlText + '<td>第' + (chapter + 1) + '章 - 問' + (qustionNo + 1) + '</td>';
        htmlText = htmlText + '<td>' + qustionText + '</td>';
        htmlText = htmlText + '<td>' + choice + '</td>';
        htmlText = htmlText + '<td>' + ansText + '</td>';
        htmlText = htmlText + '</td>';
    }
    document.getElementById('resultListBord').innerHTML = htmlText;
};